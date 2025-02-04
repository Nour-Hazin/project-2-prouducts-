import ProductCard from "./component/ProductCard"


interface Iprops{

}
const App=({}:Iprops)=> {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 m-5 rounded-md">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      
    </div>
  )
}

export default App