import { v4 as uuid } from "uuid";
import { IFormInput, Iproduct } from "../interfaces";

export const productList: Iproduct[] = [
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nomine",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero",
        imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "500000",
        colors: ["#4338ca", "#b91c1c"],
        category: {
            name: "cars",
            imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nomine",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero",
        imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "500000",
        colors: ["#4338ca", "#b91c1c"],
        category: {
            name: "cars",
            imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nomine",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero",
        imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "500000",
        colors: ["#4338ca", "#b91c1c"],
        category: {
            name: "cars",
            imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    },
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nomine",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore in molestias nostrum perspiciatis delectus corrupti vero",
        imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "500000",
        colors: ["#4338ca", "#b91c1c"],
        category: {
            name: "cars",
            imageUrl: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    }
];
export const formInputList:IFormInput[]= [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text"
    },
    {
        id: "description",
        name: "description",
        label: "Product Description",
        type: "text"
    },
    {
        id: "image",
        name: "imageUrl",
        label: "Product Image URL",
        type: "url"
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text"
    }
];
export const colors :string[]= [ 
    "#a855f7",
    "#2563ef",
    "#84D2C5" ,
    "#13005A",
    "#A31ACB",
    "#FF6E31", 
    "#3C2A21" ,
    "#6C4AB6" ,
    "#CB1C8D", 
    "#00000e", 
    "#645CBB" 
    ,"#1F8A70", 
    "#820008" ,
    "#FF0032"]