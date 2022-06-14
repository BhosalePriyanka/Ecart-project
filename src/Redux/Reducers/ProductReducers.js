import { ActionTypes } from '../Constant/ActionTypes.js';

const initialState = {
	products : []
};

export const ProductReducers = (state = initialState, action) => {
	switch(action.type){
		case ActionTypes.SET_PRODUCTS: 
		return {...state, products: action.payload};
		default: 
		return state;
	}
};

export const selectedProductReducers = (state = {}, action) =>{
	switch(action.type){
		case ActionTypes.SELECTED_PRODUCT:
		return{...state, ...action.payload};
		case ActionTypes.REMOVE_SELECTED_PRODUCTS:
		return{};
		default:
		return state;
	}
};
export const getCartItem = (state = {}, action) => {
	switch(action.type){
		case ActionTypes.GETCARTITEM:
		return{...state, ...action.payload};
		case ActionTypes.REMOVE_SELECTED_PRODUCTS:
		return{};
		default:
		return state;
	}
};


const cart = []
export const getAddItem = (state= cart, action) => {
	switch(action.type){	
		case ActionTypes.ADDITEM: 
		const  exist = state.filter((item) => item.id  === action.payload.id);
 		if (exist < 1){
 		return [ ...state , action.payload];
 		}
else{
 		 return state;
		}
			default:
		return state;
 		}
 	};
			


