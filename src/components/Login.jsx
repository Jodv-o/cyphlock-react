import Frame from "./Frame"
import ErrorPage from "./ErrorPage"
import axios from 'axios'
import PasswordInput from "./PasswordInput"

function Login(){
    const token = localStorage.getItem('auth-token')
    function login(credential, password){
        axios.post('https://passwordmanagerback.onrender.com/auth/login', {
            credential: credential,
            password: password
        }).then(resp => {
            localStorage.setItem('auth-token', `JWT ${resp.data.token}`)
            window.location.href = "/dashboard"
        }).catch(err => { window.location.href = "/404"; console.log(err) })
    }
    if(!token){
        return (
            <Frame flexcol={true}>
                <section className="flex items-center justify-center flex-col w-[85vw] h-[450px] bg-[#2e2e2e] min-[500px]:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] rounded-lg mt-20">
                    <h1 className="mb-2">Log In</h1>
                    <section className="flex flex-col m-2 w-full px-16">
                        <label>Username or Email: </label>
                        <input type="text" name="credential" className="p-1 outline-none border-teal-600 focus:border-b-2 transition-all ease-in" required/>
                    </section>
                    <PasswordInput label={"Password: "}/>
                    <button className="mt-6 bg-teal-600 border-transparent hover:border-teal-400 hover:scale-105 transition-all ease-in-out" onClick={()=>{
                        let credential = document.getElementsByName('credential')[0].value
                        let password = document.getElementsByName('password')[0].value
                        login(credential, password)
                    }}>Sign In</button>
                    <span className="mt-8 font-semibold">Dont have an account? <a className=" text-teal-600 cursor-pointer hover:text-teal-500 transition-all ease-in" href="/register">Sign Up</a></span>
                </section>
            </Frame> 
        )
    }else{
        return(<ErrorPage/>)
    }
}

export default Login