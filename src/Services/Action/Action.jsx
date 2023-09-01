import { addCart, removeCart, increaseQuantity, decreaseQuantity, filterwithsize, removesizeFilters } from "../Constant"

export const addToCart = (drawerData) => {
  return {
    type: addCart,
    payload: drawerData
  }
}

export const removeToCart = (index) => {
  return {
    type: removeCart,
    payload: index
  }
}


export const increaseToQuantity = (index) => {
  return {
    type: increaseQuantity,
    payload: index

  }
}

export const decreseToQuantity = (index) => {
  return {
    type: decreaseQuantity,
    payload: index
  }
}


export const filterBySize = (value) => {
  return {
    type: filterwithsize,
    payload: value
  }
}

export const removeSizeFilter = (index) => {
  return {
    type: removesizeFilters,
    payload: index

  }
}

export const clearAllSize=()=>{
return {
  type:"Clear All"
}
}



