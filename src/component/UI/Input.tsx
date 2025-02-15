import{InputHTMLAttributes} from 'react'
interface Iprops extends InputHTMLAttributes<HTMLInputElement>{}
const Input = ({...rest }: Iprops) => {
    return (
            <input className='border-[1px] border-gray-300 shadow-md rounded-md
            focus:border-indigo-500 focus:outline-none focus:ring-1
            focus:ring-indigo-500 py-3 text-base'
            {...rest}/>
        
    )
}

export default Input