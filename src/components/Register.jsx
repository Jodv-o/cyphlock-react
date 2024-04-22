import Frame from "./Frame"
import ErrorPage from "./ErrorPage"
import PasswordInput from "./PasswordInput"
import axios from "axios"
import { toast } from "react-toastify"

function Register(){
    const token = localStorage.getItem('auth-token')

    const registerUser = async(user, email, password)=>{
        await axios.post("https://passwordmanagerback.onrender.com/auth/register", {
            user: user,
            email: email,
            password: password
        }).then(()=>{
            toast.success("Account created successfully!")
            window.location.href = "/login"
        }).catch((e)=>{
            toast.error(e.response.data.message)
            return (
                <ErrorPage />
            )
        })
    }

    if(!token){
        return (
            <Frame flexcol={true}>
                <section className="flex items-center justify-center flex-col w-[85vw] h-[500px] bg-[#2e2e2e] min-[500px]:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] rounded-lg mt-20">
                    <h1 className="mb-2">Register</h1>
                    <section className="flex flex-col m-2 w-full px-16">
                        <label>Username: </label>
                        <input type="text" name="username" className="p-1 outline-none border-teal-600 focus:border-b-2 transition-all ease-in"/>
                    </section>
                    <section className="flex flex-col m-2 w-full px-16">
                        <label>Email: </label>
                        <input type="email" name="email" className="p-1 outline-none border-teal-600 focus:border-b-2 transition-all ease-in"/>
                    </section>
                    <PasswordInput label={"Password: "}/>
                    <PasswordInput label={"Repeat Password: "}/>
                    <button className="mt-6 bg-teal-600 border-transparent hover:border-teal-400 hover:scale-105 transition-all ease-in-out" onClick={()=>{
                        const user = document.getElementsByName("username")[0].value
                        const email = document.getElementsByName("email")[0].value
                        const password = document.getElementsByName("password")[0].value
                        registerUser(user, email, password)
                    }}>Sign In</button>
                    <span className="mt-6 font-semibold">Alredy have an account? <a className=" text-teal-600 cursor-pointer hover:text-teal-500 transition-all ease-in" href="/login">Log in</a></span>
                </section>
            </Frame>
        )
    }else{
        return(<ErrorPage/>)
    }
}

export default Register