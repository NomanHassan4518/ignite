import { addCart } from "../Constant"

export const addToCart = (modelData) => {
    return {
        type: addCart,
        payload: modelData
    }
}