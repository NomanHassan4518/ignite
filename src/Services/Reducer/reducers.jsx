import Item from "antd/es/list/Item";
import { addCart, increaseCart, removeCart } from "../Constant"

const initailState = {
    cardData: []
}
const cardItem = (state = initailState, action) => {
    switch (action.type) {
        case addCart:

            return {
                ...state,
                cardData: [action.payload, ...state.cardData]
            };


        case removeCart:
            let updateCart = state.cardData.filter((curItem, index) => index !== action.payload)
            return {
                ...state,
                cardData: updateCart
            }

        case increaseCart:
           
            console.log("Quantity in Reducer" , state.cardData[0].quatity)
            return {
                ...state,
                cardData: state.cardData.map(Item =>
                    Item.Product.id === action.id
                    ? {...state, quatity: Item.quatity + 1}
                    : Item,
                    // console.log("Id in Reducer" , Item.Product.id)
                ),
              };


        default:
            return state
    }
}


export default cardItem