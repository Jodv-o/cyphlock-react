import Frame from "./Frame"

function ErrorPage(){
    return (
        <Frame flexcol={true}>
            <h1 className="text-6xl">Ooops!</h1>
            <span className="text-gray-200 text-3xl">Something went wrong!</span>
            <a className="my-4" href="/">{"<- Go back to Main Page"}</a>
        </Frame>
    )
}

export default ErrorPage