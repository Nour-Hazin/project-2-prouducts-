interface Iprops{
    src:string,
    alt:string,
    className:string
}
const Image=({src,alt,className}:Iprops)=> {
  return (
    <div>
        <img src={src} alt={alt} className={className} />
    </div>
  )
}

export default Image