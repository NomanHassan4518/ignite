import { addCart } from "../Constant"

const initailState = {
    cardData: []
}
const cardItem= (state = initailState, action)=> {
    switch (action.type) {
        case addCart:
            return {
                ...state,
                cardData: [action.payload , ...state.cardData]
            };

            default:
                return state
    }
} 

export default cardItem