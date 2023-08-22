import { addCart , removeCart } from "../Constant"


const initailState = {
    cardData: []
}
const cardItem = (state = initailState, action) => {
    switch (action.type) {
        case addCart:
            
                const cartItemIndex = state.cardData.findIndex(
                    (item) => item.Product.id === action.payload.Product.id);
    
                    let newItem = []
                    if(cartItemIndex > -1) {
                     const updateedQuantity =state.cardData[cartItemIndex].quatity += action.payload.quatity;
                      const updatedData = state.cardData.map((item , index)=>{
                       return cartItemIndex===index ? {...item , ...updateedQuantity} :item
                      })

                      newItem = updatedData
                      console.log(newItem)
                    }else {
                        const tempProduct = [...state.cardData];
                         newItem = [...tempProduct , action.payload]
                    
                    }
                    // console.log(newItem)
        return{
           

            ...state,
            cardData:newItem
        }

     
                // ...state,
                // cardData: [action.payload ,state.cardData.findIndex((Item)=>{
                //     if(Item?.Product.id === action.payload?.Product.id){
                //         Item.quatity+=action.payload.quatity
                //     }

                //    else{
                //  [ action.payload , ...state.cardData]
                //    }
                // })]
             

        case removeCart:
            let updateCart = state.cardData.filter((curItem, index) => index !== action.payload)
            return {
                ...state,
                cardData: updateCart
            }



        default:
            return state
    }
}


export default cardItem