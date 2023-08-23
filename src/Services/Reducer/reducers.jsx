import { calculate } from "../Action/Action";
import { addCart, decreaseQuantity, increaseQuantity, removeCart, totalPrice } from "../Constant"


const initailState = {
    cardData: [],
    totalPrice:0
}
const cardItem = (state = initailState, action) => {
    switch (action.type) {
        case addCart:

            const cartItemIndex = state.cardData.findIndex(
                (item) => item.Product.id === action.payload.Product.id);

           let a = state.cardData
                console.log(a)

            let newItem = []
            if (cartItemIndex > -1) {
                const updatedQuantity = state.cardData[cartItemIndex].quatity += action.payload.quatity;
                const updatedData = state.cardData.map((item, index) => {
                    return cartItemIndex === index ? { ...item, ...updatedQuantity } : item
                })

                newItem = updatedData
            } else {
                const tempProduct = [...state.cardData];
                newItem = [...tempProduct, action.payload]

            }
            return {
                ...state,
                cardData: newItem
            }



        case increaseQuantity:
            const cartIndex = state.cardData.findIndex((item, index) => item.Product.id === action.payload[index].Product.id)

            let increasequantity = []
            if (cartIndex === 0) {
                let value = state.cardData[cartIndex].quatity
                let updatedValue = state.cardData[cartIndex].quatity = value + 1
                const updatedData = state.cardData.map((item, index) => {
                    return cartIndex === index ? { ...item, ...updatedValue } : item
                })

                increasequantity = updatedData
            }
            return {
                ...state,
                cardData: increasequantity
            }

        case decreaseQuantity:
            const cartItemindex = state.cardData.findIndex((item, index) =>
                item.Product.id === action.payload[index].Product.id
            )

            let decreasequantity = []
            if (state.cardData[cartItemindex].quatity > 1) {
                let value = state.cardData[cartItemindex].quatity
                let updatedValue = state.cardData[cartItemindex].quatity = value - 1
                let updatedData = state.cardData.map((item, index) => {
                    return cartItemindex === index ? { ...item, ...updatedValue } : item
                })
                decreasequantity = updatedData
            }

            else if (state.cardData[cartItemindex].quatity === 1) {
                let removeItem = state.cardData.filter((curItem) => curItem.Product.id !== action.payload[cartItemindex].Product.id)

                decreasequantity = removeItem
            }

            return {
                ...state,
                cardData: decreasequantity
            }



        case removeCart:
            let updateCart = state.cardData.filter((curItem, index) => index !== action.payload)
            return {
                ...state,
                cardData: updateCart
            }

            case calculate:

             break;
        default:
            return state
    }
}


export default cardItem