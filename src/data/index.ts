import { v4 as uuid } from "uuid";
import { IFormInput, Icategory, Iproduct } from "../interfaces";

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
    "#FF0032"
];
export const categories:Icategory[] = [
    {
        id: uuid(),
        name: 'Wade Cooper',
        imageUrl:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Arlene Mccoy',
        imageUrl:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Devon Webb',
        imageUrl:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Tom Cook',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Tanya Fox',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Hellen Schmidt',
        imageUrl:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Caroline Schultz',
        imageUrl:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Mason Heaney',
        imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Claudie Smitham',
        imageUrl:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: uuid(),
        name: 'Emil Schaefer',
        imageUrl:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]