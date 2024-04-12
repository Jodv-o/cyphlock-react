function NavBar({links}){
    return (
        <nav className='flex justify-center absolute'>
            <div className="w-screen h-20 border-b border-[#424242] flex justify-between items-center px-4">
                <a className="font-semibold text-4xl max-md:text-4xl max-[550px]:text-3xl text-white" href={"/"}>Cyphlock</a>
                <ul className="flex flex-row p-2">
                    {links.map((link, index) => {
                        if(link.action){
                            return <button onClick={link.action} key={index}>{link.name}</button>
                        }
                        return <li className="text-3xl mx-3 max-md:text-2xl max-[550px]:text-xl" key={index}><a href={link.href} className="text-white font-semibold text-2xl">{link.name}</a></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar