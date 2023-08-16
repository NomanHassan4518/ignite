import { addCart } from "../Constant"

export const addToCart = (drawerData) => {
    return {
        type: addCart,
        payload: drawerData
    }
}