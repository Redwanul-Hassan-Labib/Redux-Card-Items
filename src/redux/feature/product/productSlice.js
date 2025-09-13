import { createSlice } from '@reduxjs/toolkit'

const initialState =[
    {
        id: 1,
        name: "T-shirt",
        category:  "Fashion",
        price: 200,
        image: "https://www.shutterstock.com/shutterstock/photos/2566045157/display_1500/stock-photo-white-t-shirt-mockup-for-chest-print-2566045157.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit",
        date: "12-09-2025"
    },
    {
        id: 2,
        name: "Shirt",
        category:  "Fashion",
        price: 200,
        image: "https://www.shutterstock.com/shutterstock/photos/2481121777/display_1500/stock-photo-front-view-red-flower-green-leaves-pattern-seamless-hawaiian-shirt-isolated-on-white-background-2481121777.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit",
        date: "12-09-2025"
    },
    {
        id: 3,
        name: "T-shirt",
        category:  "Fashion",
        price: 200,
        image: "https://www.shutterstock.com/shutterstock/photos/2566045157/display_1500/stock-photo-white-t-shirt-mockup-for-chest-print-2566045157.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit",
        date: "12-09-2025"
    },
    {
        id: 4,
        name: "Iphone",
        category:  "Gedget",
        price: 200,
        image: "https://www.shutterstock.com/shutterstock/photos/2105653403/display_1500/stock-photo-smartphone-iphone-and-pro-max-in-pink-silicone-case-falls-down-back-view-phone-case-mockup-2105653403.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit",
        date: "12-09-2025"
    },
    {
        id: 5,
        name: "Freeze",
        category:  "Electonics",
        price: 200,
        image: "https://www.shutterstock.com/shutterstock/photos/2512383813/display_1500/stock-photo-gray-single-door-fridge-home-appliance-captured-from-the-front-angle-on-a-white-background-non-2512383813.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit",
        date: "12-09-2025"
    },
     {
        id: 6,
        name: "T-shirt",
        category:  "Fashion",
        price: 200,
        image: "https://www.shutterstock.com/shutterstock/photos/2566045157/display_1500/stock-photo-white-t-shirt-mockup-for-chest-print-2566045157.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit",
        date: "12-09-2025"
    },
] 

const Productslice = createSlice({
    name : "productUpdate",
    initialState ,
    reducers: {
        addToCard: ( state , action)=>{
            state.push({
                id: state.length > 0 ? state[state.length -1].id : 1,
                ...action.payload

            })
        }

    }
})

export  const {addToCard} = Productslice.actions;

export default Productslice.reducer;