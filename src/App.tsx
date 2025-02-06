
import ProductCard from "./component/ProductCard";
import Button from "./component/UI/Button";
import MyModal from "./component/UI/Modal";
import { productList } from "./data"
import { useState } from 'react'


const App = () => {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
  setIsOpen(true)
  }

  function close() {
  setIsOpen(false)
  }
  const renderProductList = productList.map(product => <ProductCard key={product.id} product={product} />)
  return (
    <main className="container mx-auto">
        <Button className="bg-indigo-700" width="w-fit" onClick={open}>ADD</Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 m-5 rounded-md">
        {renderProductList}
      </div>
    <MyModal isOpen={isOpen} close={close} title="Add a new product">
      <div className="flex items-center space-x-3">
        <Button className="bg-indigo-700" width="w-full">Submit</Button>
        <Button  className="bg-red-700" width="w-full"   >Cancel</Button>
      </div>

    </MyModal>
    </main>
  )
}

export default App