const LayoutAdmin = ({children}) => {
    return(
        <section className="grid grid-cols-[30%,70%]">
            <div className="bg-red-400">nav nef</div>
            <div>{children}</div>
        </section>
    )
}

export default LayoutAdmin
