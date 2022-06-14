import { ActionTypes } from '../Constant/ActionTypes';

 export const setProducts = (products) => {

return {
		type : ActionTypes.SET_PRODUCTS,
	  	payload : products
	};

};

export const selectedProduct = (product) => {

	return {	
		type : ActionTypes.SELECTED_PRODUCT,
		payload : product
	};
};
export const removepriviousProduct = (product) =>{

	return{
		type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
		payload:product
	};
};


export const cartItem = (product) => {
	return{
		type: ActionTypes.GETCARTITEM,
		payload:product
	};
};

export const getAddItem = (product) => {
	return{
		type: ActionTypes.ADDITEM,
		payload:product
	};
};


	