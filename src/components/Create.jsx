import Frame from "./Frame"
import ErrorPage from "./ErrorPage"
import PasswordInput from "./PasswordInput"
import axios from 'axios'
import { toast } from'react-toastify'

function Create(){
    const token = localStorage.getItem('auth-token')

    async function addPassword(name, password, token){
        await axios.post('https://passwordmanagerback.onrender.com/user/passwords', {
            name: name,
            password: password
        }, {headers: {
            Authorization: token
        }}).then(()=>{
            window.location.href = "/dashboard"
        }).catch(err=>{toast.error(err.response.data.message)})
    }

    if(token){
        return(
            <Frame>
                <form className="flex items-center justify-center flex-col w-[85vw] h-[400px] bg-[#2e2e2e] min-[500px]:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] rounded-lg mt-20" onSubmit={(e)=>{
                    e.preventDefault()
                    let name = document.getElementsByName('name')[0].value
                    let password = document.getElementsByName('password')[0].value
                    addPassword(name, password, token)
                }}>
                    <h1 className="mb-2">Add Password</h1>
                    <section className="flex flex-col m-2 w-full px-16">
                        <label>Name </label>
                        <input type="text" name="name" className="p-1 outline-none border-teal-600 focus:border-b-2 transition-all ease-in" required/>
                    </section>
                    <PasswordInput label={"Password: "}/>
                    <section className="flex gap-2">
                        <button className="mt-6 bg-teal-600 border-transparent hover:border-teal-400 hover:scale-105 transition-all ease-in-out" type="submit">Add</button>
                        <button className="mt-6 bg-red-600 border-transparent hover:border-red-400 hover:scale-105 transition-all ease-in-out" onClick={()=>{
                            window.location.href = "/dashboard"
                        }} type="button">Cancel</button>
                    </section>
                </form>
            </Frame>
        )
    }
    return(
        <ErrorPage />
    )
}

export default Create