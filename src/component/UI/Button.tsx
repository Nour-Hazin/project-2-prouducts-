import {ButtonHTMLAttributes, ReactNode } from "react"

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    className?:string,
    width:"w-fit" |"w-full"
}
const Button=({children,className,width,...rest}:Iprops)=> {
  return (
        <button className={`${className} ${width} rounded-md text-white p-2`} {...rest}>
            {children}
        </button>
  )
}

export default Button