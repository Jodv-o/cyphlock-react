import Frame from "./Frame"

function Landing(){
    const token = localStorage.getItem('auth-token')
    if(!token){
        return(
            <Frame flexcol={true}>
                <h1 className="text-2xl min-[630px]:text-4xl text-center mb-2">Acces your passwords everywhere</h1>
                <span className="text-gray-200 text-2xl">For free!</span>
                <a className="my-6 bg-teal-600 border-transparent hover:border-teal-400 hover:scale-105 transition ease-in-out cursor-pointer px-[1.2em] py-[0.6em] rounded-lg" href="/register">Get Started {"->"}</a>
            </Frame>
        )
    }else{
        return(
            <Frame flexcol={true}>
                <h1 className="text-2xl min-[630px]:text-4xl text-center mb-2">Acces your passwords everywhere</h1>
                <span className="text-gray-200 text-2xl">For free!</span>
                <a className="my-6 bg-teal-600 border-transparent hover:border-teal-400 hover:scale-105 transition ease-in-out cursor-pointer px-[1.2em] py-[0.6em] rounded-lg" href="/dashboard">Go to Dashboard {"->"}</a>
            </Frame>
        )
    }
}

export default Landing