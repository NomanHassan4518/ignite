import { addCart, removeCart , increaseQuantity, decreaseQuantity} from "../Constant"

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


export const increaseToQuantity = ( index)=>{
  return{
    type:increaseQuantity,
    payload: index
  }
}

export const decreseToQuantity = (index)=>{
  return {
    type:decreaseQuantity,
    payload:index
  }
}




