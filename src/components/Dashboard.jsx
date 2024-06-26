import Frame from "./Frame"
import ErrorPage from "./ErrorPage";
import axios from 'axios'	
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Dashboard(){
    const token = localStorage.getItem('auth-token')
    const [passwords, setPasswords] = useState([])

    function getPasswords(token){
        return new Promise((resolve, reject) => {
            axios.get('https://passwordmanagerback.onrender.com/user/passwords', {
            headers: {
                Authorization: token
            }
            }).then(resp=>{
                resolve(resp.data)
            }).catch(err=>{reject(err)})
        })
    }
    async function deletePassword(id, token){
        await axios.delete(`https://passwordmanagerback.onrender.com/user/passwords/${id}`, {
            headers: {
                Authorization: token
            }
        }).then(async ()=>{
            window.location.reload()
            toast.success("Password deleted successfully")
        }).catch(err=>toast.error(err.response.data.message))
    }

    /*async function updatePassword(id, name, password, token){
        await axios.put(`https://passwordmanagerback.onrender.com/user/passwords/${id}`, {
            name: name,
            password: password
        }, {
            headers: {
            Authorization: token
            }
        }).then(()=>{
            window.location.reload()
        }).catch(err=>{console.log(err)})
    }*/

    useEffect(()=>{
        const getSetUserPasswords = async ()=>{
            setPasswords(await getPasswords(token))
        }
        getSetUserPasswords()
    }, [token])

    if(token){
        return(
            <Frame flexcol={true}>
                <section className="max-h-[80vh] mt-8 w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        passwords.map((password)=>{
                                return <section className="password bg-[#353535] mx-[10%] my-4 w-[80%] h-24 rounded-md flex flex-col items-center justify-center relative" key={password.passwordid} id={password.passwordid}>
                                        <details className="absolute bottom-[60%] left-[92%]">
                                            <summary className="list-none cursor-pointer"><img src="/list_dots.svg" alt="more" className="w-[6px]"/></summary>
                                            <section className="absolute right-4 -top-1 w-20 h-10 flex flex-col shadow-lg shadow-[#242424] bg-transparent rounded-md">
                                                <button className="relative bg-transparent flex justify-center items-center h-full rounded-none focus:outline-none" onClick={()=>{
                                                    deletePassword(password.passwordid, token)
                                                }}><img src="/delete-red.svg" alt="delete" className="w-3"/></button>
                                            </section>
                                        </details>
                                        <section className="flex flex-col w-full gap-2 p-2 ml-4">
                                            <input type="text" name="name" className="w-3/6 px-2 bg-transparent" disabled value={password.name}/>
                                            <div onClick={async()=>{
                                                await navigator.clipboard.writeText(password.password)
                                                toast.success("Password copied to clipboard!")
                                            }} title="Click to copy to clipboard!" className="w-2/3 h-full bg-transparent">
                                                <input type="password" name="password" className=" w-2/3 px-2 bg-transparent" disabled value={password.password}/>
                                            </div>
                                            <button className="absolute bg-transparent top-[2.85rem] left-2/4 border-none focus:outline-none" type="button" onClick={(e)=>{
                                                e.preventDefault()
                                                let passwordInput = e.target.closest('section').children[1].children[0]
                                                passwordInput.type = passwordInput.type === 'password'? 'text' : 'password'
                                            }}><img src="/eye-solid.svg" alt="view" className="w-5"/></button>
                                        </section>
                                    </section>
                        })
                    }
                </section>
                <button className="bg-transparent" onClick={()=>{
                    window.location.href = "/create";
                }}><img src="/add.svg" alt="add" className="w-5"/></button>
            </Frame>
        )
    }
    return(
        <ErrorPage />
    )
}

export default Dashboard