import { HTMLAttributes } from "react"

interface Iprops extends HTMLAttributes<HTMLDivElement>{
    color:string

}
const CircleColor=({color,...rest}:Iprops)=> {
    return    <div className="h-4 w-4 rounded-full cursor-pointer" style={{backgroundColor:color}}  {...rest}/>
}

export default CircleColor