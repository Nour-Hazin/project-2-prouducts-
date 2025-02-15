
import ProductCard from "./component/ProductCard";
import Button from "./component/UI/Button";
import Input from "./component/UI/Input";
import MyModal from "./component/UI/Modal";
import { formInputList, productList } from "./data"
import { ChangeEvent,  FormEvent,  useState } from 'react'
import { Iproduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./component/ErrorMsg";


const App = () => {
  const defaultProductObj={
    title:'',
    description:'',
    imageUrl:'',
    price:'',
    colors:[],
    category:{
      name:'',
      imageUrl:''
    }
  }
  const[product,setProduct]=useState<Iproduct>(defaultProductObj)
  const[errors,setErrors]=useState({
    title:'',
    description:'',
    imageUrl:'',
    price:''
  })
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  const onGhangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    const{name,value}=e.target
    setProduct({
      ...product,
      [name]:value
    })
    setErrors({
      ...errors,
      [name]:""
    })
  }
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />)
  const renderFormInputList = formInputList.map(input =>
    <div className=" flex flex-col  " key={input.id}>
      <label htmlFor={input.id} className="mb-2">{input.label}</label>
      <Input type={input.type} id={input.id} name={input.name} value={product[input.name]} onChange={onGhangeHandler}/>
      <ErrorMsg msg={errors[input.name]}/>
    </div>
  )
  const submitHandler=(event: FormEvent<HTMLFormElement>): void =>{
    event.preventDefault()
    const errors=productValidation({
      title:product.title,
      description:product.description,
      imageUrl:product.imageUrl,
      price:product.price})
      const hasErrorMsg=
      Object.values(errors).some(value=>value==="")&&Object.values(errors).every(value=>value==="")
      console.log(hasErrorMsg);
      if(!hasErrorMsg){
        setErrors(errors)
        return
      }
      else{
        console.log('successed');
      }
}

  const onCancel=()=>{
    setProduct(defaultProductObj)
    close()
  }


  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700" width="w-fit" onClick={open}>ADD</Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 m-5 rounded-md">
        {renderProductList}
      </div>
      <MyModal isOpen={isOpen} close={close} title="Add a new product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700" width="w-full">Submit</Button>
            <Button className="bg-gray-400" width="w-full" onClick={onCancel}  >Cancel</Button>
          </div>
        </form>
      </MyModal>
    </main>
  )
}

export default App