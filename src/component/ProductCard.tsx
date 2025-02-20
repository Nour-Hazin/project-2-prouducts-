import { Iproduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./UI/Button";

interface Iprops {
    product:Iproduct
 }

const ProductCard = ({ product}: Iprops) => {
    const{title,description,imageUrl,price,category,colors}=product

    const renderColor=colors.map(color=>(
        <CircleColor key={color} color={color} />
        ))
    return (
        <div className="max-w-sm md:max-w-lg mx-auto  border rounded-md flex-col p-2">
            <Image src={imageUrl}
                alt="product name"
                className="w-auto rounded-md aspect-auto" />
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm text-gray-500 break-words">{txtSlicer(description)}</p>
            <div className="flex items-center flex-wrap space-x-1">
                {renderColor}
            </div>
            <div className="flex justify-between items-center">
                <span>{price}</span>
                <Image src={category.imageUrl}
                    alt={category.name}
                    className="w-10 h-10 rounded-full object-center" />
            </div>
            <div className="flex justify-between items-center space-x-2 mt-5">
                <Button className="bg-indigo-700" width="w-full">EDIT</Button>
                <Button className="bg-red-700" width="w-full">DELETE</Button>
            </div>

        </div>
    );
}

export default ProductCard;
