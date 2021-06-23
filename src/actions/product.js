import * as acType from '../contants/actionType'
//action creator

export const addProduct = (product) =>{
    return {
        type : acType.ADD_PRODUCT,
        payload : product
    }
}
export const activeID = (product) =>{
    return {
        type : acType.ACTIVE_ID,
        payload : product
    }
}
export const loadProduct = (product) =>{
    return {
        type : acType.LOAD_PRODUCT,
        payload : product
    }
}

//GET DETAIL 
export const detailProduct = (product) =>{
    return {
        type  :acType.DETAIL_PRODUCT,
        payload : product
    }
}

//DELETE PRODUCT

export const deleteProduct = (product) =>{
    console.log(product);
    return {
        type : acType.DELETE_PRODUCT,
        payload : product
    }
}

