import { addCart, increaseCart, removeCart} from "../Constant"

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



export const increaseToCart = ( id  )=>{
  return{
    type:increaseCart,
    payload:id
  }
}


