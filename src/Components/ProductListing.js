import React  from 'react';
import {useEffect} from 'react';
import ProductComponents from './ProductComponents';
import { setProducts } from '../Redux/Action/ProductAction';
import { useDispatch } from 'react-redux';
import './Main.css';


const ProductListing = () => { 
const dispatch = useDispatch();
const fetchProduct = async() => {
const response = await fetch("https://fakestoreapi.com/products");
const jsonData = await response.json();
dispatch(setProducts(jsonData));
console.log(jsonData);
}


useEffect(() =>  {
  fetchProduct(); 
},[]);

return(
  <div className="productListing">
  <ProductComponents />
  </div>

  )
}
export default ProductListing;