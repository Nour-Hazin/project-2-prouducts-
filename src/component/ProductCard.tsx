import Image from "./Image";
import Button from "./UI/Button";

interface Iprops { }

const ProductCard = ({ }: Iprops) => {
    return (
        <div className="border rounded-md flex-col p-2">
            <Image src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=
                    rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="product name"
                    className="w-96 rounded-md"/>
            <h3>2022 Genesis GV70: Nomine</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero. Ducimus obcaecati deserunt placeat?</p>


            <div className="flex items-center my-4 space-x-2">
                <div className="h-5 w-5 bg-red-800 rounded-full cursor-pointer" />
                <div className="h-5 w-5 bg-blue-800 rounded-full cursor-pointer" />
                <div className="h-5 w-5 bg-yellow-600 rounded-full cursor-pointer" />
            </div>
            <div className="flex justify-between items-center">
                <span>500$</span>
                    <Image src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=
                    rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="product name"
                    className="w-10 h-10 rounded-full object-center"/>
            </div>
            <div className="flex justify-between items-center space-x-2 mt-5">
                <Button className="bg-indigo-700" >EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>
            </div>

        </div>
    );
}

export default ProductCard;
