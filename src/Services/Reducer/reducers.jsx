import { addCart, removeCart, increaseQuantity, decreaseQuantity, filterwithsize, removesizeFilters } from "../Constant"


const initailState = {
    cardData: [],
    totalPrice: 0,
    totalItems: 0,
    arrayFilterbySize: []
}
const cardItem = (state = initailState, action) => {
    switch (action.type) {
        case addCart:
            {
                const itemAdd = addItemsWithQuantity(state, action)
                return generateFinalState(state, itemAdd)

            }
        case increaseQuantity:
            {
                const itemAdd = incresequantity(state, action)
                return generateFinalState(state, itemAdd)
            }
        case decreaseQuantity:
            {
                const itemAdd = decreasequantity(state, action)
                return generateFinalState(state, itemAdd)
            }

        case removeCart:
            {
                const itemAdd = removeProduct(state, action)
                return generateFinalState(state, itemAdd)
            }

        case filterwithsize:
            {
                const itemAdd = filterWithSize(state, action)
                return {
                    ...state,
                    arrayFilterbySize: itemAdd,
                }
            }

        case removesizeFilters:
            {
                const filterSize = removeSizeFilter(state, action)
                return {
                    ...state,
                    arrayFilterbySize: filterSize
                }
            }

            case "Clear All":
                {
                    const clearAll=claerAllsize(state,action)
                    return {
                        ...state,
                        arrayFilterbySize:clearAll
                    }
                }


        default:
            return state;



    }
}


export default cardItem

const filterWithSize = (state, action) => {
    let itemIndex = state.arrayFilterbySize.findIndex((item) => {
        return item.id === action.payload.id
    })
    let newArray = []

    if (itemIndex > -1) {
        let removeSize = state.arrayFilterbySize.filter((item) => {
            return item.id !== action.payload.id
        })

        newArray = removeSize
    } else {
        let tempArray = [...state.arrayFilterbySize]
        newArray = [...tempArray, action.payload]
    }

    return newArray
}

const removeSizeFilter = (state, action) => {
    let remove = state.arrayFilterbySize.filter((current, index) => index !== action.payload)
    return remove
}

const claerAllsize=(state , action)=>{
    let clear = []
    return clear
}

const addItemsWithQuantity = (state, action) => {
    const cartItemIndex = state.cardData.findIndex(
        (item) => item.Product.id === action.payload.Product.id);
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
    return newItem
}

const incresequantity = (state, action) => {
    const cartIndex = state.cardData.findIndex((item, index) => index === action.payload)
    let increase = [];
    if (cartIndex > -1) {
        let value = state.cardData[cartIndex].quatity;
        let updatedValue = state.cardData[cartIndex].quatity = value + 1
        let updatedData = state.cardData.map((item, index) => {
            return cartIndex === index ? { ...item, updatedValue } : item
        })

        increase = updatedData
    }

    return increase

}


const decreasequantity = (state, action) => {
    let cartItmIndex = state.cardData.findIndex((item, index) => index === action.payload)
    let items = [];
    if (cartItmIndex === action.payload) {
        let qty = state.cardData[cartItmIndex].quatity;
        if (qty > 1) {
            let updatedValue = state.cardData[cartItmIndex].quatity = qty - 1
            let updatedData = state.cardData.map((item, index) => {
                return cartItmIndex === index ? { ...item, ...updatedValue } : item
            })

            items = updatedData
        } else {
            let filterArray = state.cardData.filter((curItem, index) => index !== action.payload)
            items = filterArray
        }
    }
    return items
}

const removeProduct = (state, action) => {
    let updateCart = state.cardData.filter((curItem, index) => index !== action.payload)
    return updateCart

}




const calculateTotal = (itemAdd) => {
    let finalPrice = 0
    itemAdd?.map((item) => (
        finalPrice = finalPrice + (item.Product.price * item.quatity)

    ))

    return finalPrice
}


const totalItems = (itemAdd) => {
    let totalItem = 0
    itemAdd.map((item) => (
        totalItem = totalItem + item.quatity
    ))
    return totalItem
}


const generateFinalState = (state, itemAdd) => {
    return {
        ...state,
        cardData: itemAdd,
        totalPrice: calculateTotal(itemAdd),
        totalItems: totalItems(itemAdd),

    }
}


