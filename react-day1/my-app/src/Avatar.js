function Avatar({src ,height , width ,children}){ // same as props
    return(
        <>
        <img src={src} height={height} width={width}/>
        {children}
        </>
    )
}
export default Avatar;