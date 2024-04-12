function PasswordInput({label}){
    return (
        <section className="flex flex-col m-2 w-full px-16 relative">
            <label>{label}</label>
            <input type="password" name="password" className="p-1 outline-none border-teal-600 focus:border-b-2 transition-all ease-in" required/>
            <button className="absolute bg-transparent top-[1.35rem] left-[82%] border-none focus:outline-none" type="button" onClick={(e)=>{
                e.preventDefault()
                let passwordInput = e.target.closest('section').children[1]
                passwordInput.type = passwordInput.type === 'password'? 'text' : 'password'
            }}><img src="../../public/eye-solid.svg" alt="view" className="w-5"/></button>
        </section>
    )
}

export default PasswordInput