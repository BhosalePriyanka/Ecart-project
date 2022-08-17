import {ProductReducers , selectedProductReducers , getCartItem, getAddItem } 
from './ProductReducers';

import {combineReducers} from 'redux';

export const RootReducers = combineReducers({
	allProducts: ProductReducers,
	product: selectedProductReducers,
	cart:getCartItem,
	item:getAddItem,
});
