import { ActionTypes } from "../Constants/action-type"
export const setProducts =(products)=>{
 return{
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
 }
}
export const selectedProducts =(product)=>{
    return{
       type:ActionTypes.SELECTED_PRODUCTS,
       payload:product,
    }
   }
export const removedselectedProducts =(product)=>{
    return{
       type:ActionTypes.REMOVED_SELECTED_PRODUCTS,
       payload:product,
    }
   }