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
		default:return state;
	}
};

export const getCartItem = (state = {}, action) => {
switch(action.type){
		case ActionTypes.GETCARTITEM:
		return{...state, ...action.payload};
		default:return state;
	}
};


export const getAddItem = (state= [], action) => {
switch(action.type){	
	    case ActionTypes.ADDITEM:
		const  exist = state.filter((item) => item.id  === action.payload.id);
 		if (exist <= 1){
 		return   alert("Added in cart"),
		[... state ,  action.payload ]
 		}
		else{
			return alert("Added alreday in cart");
		}
		case ActionTypes.PAYMENTDONE:
			{
				return state = []
			}
}

switch(action.type){
		case ActionTypes.REMOVEITEM:
		return state.filter((item) => {
		return item.id !== action.payload.id
		});
}



switch(action.type){
		case ActionTypes.DECREASEITEM:
			let exist1 = state.map((item) => {
				if(item.id === action.payload.id)
				{
					return {...item , quantity: item.quantity - 1};
				} 
				return item;
			});
			return exist1;		
}



switch(action.type){
		case ActionTypes.INCREASEITEM:
			let exist1 = state.map((item) => {
				if(item.id === action.payload.id)
				{
					return {...item , quantity: item.quantity + 1};
				} 
				return item;
			});
			return exist1;		
}
return state;

};

