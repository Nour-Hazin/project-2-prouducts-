import {ButtonHTMLAttributes, ReactNode } from "react"

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    className?:string
}
const Button=({children,className,...rest}:Iprops)=> {
  return (
        <button className={`${className} w-full rounded-md text-white p-2`} {...rest}>
            {children}
        </button>
  )
}

export default Button