import { addCart, removeCart} from "../Constant"

export const addToCart = (drawerData) => {
    return {
        type: addCart,
        payload: drawerData
    }
}

export const removeToCart = (index)=>{
  return{
      type: removeCart,
    payload:index
  }
}




