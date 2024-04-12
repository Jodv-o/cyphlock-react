function Frame({children, flexcol}){
    const class_name = flexcol? "flex w-screen h-screen justify-center items-center flex-col" : "flex w-screen h-screen justify-center items-center"
    return (
        <div className={class_name} >
            {children}
        </div>
    )
}

export default Frame