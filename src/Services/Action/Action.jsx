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


export const increaseToQuantity = (cardProduct)=>{
  return{
    type:increaseQuantity,
    payload:cardProduct
  }
}

export const decreseToQuantity = (cardProduct)=>{
  return {
    type:decreaseQuantity,
    payload:cardProduct
  }
}

export const calculate = (cardProduct)=>{
  return{
    type:calculate,
    payload:cardProduct
  }
}



