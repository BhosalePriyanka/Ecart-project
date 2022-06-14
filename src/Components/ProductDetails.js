import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import {useEffect} from 'react';
import { memo } from "react";
import {selectedProduct , removepriviousProduct , getAddItem} from '../Redux/Action/ProductAction';
import './Main.css';
import {Link} from 'react-router-dom';


export const ProductDetails = () => {
const {id}  =useParams();
const dispatch = useDispatch();
const fetchSelectedProduct = async() => { 
const response = await fetch(`https://fakestoreapi.com/products/${id}`)
const jsonData = await response.json();
dispatch(selectedProduct(jsonData));
}
useEffect(()=>{
	 fetchSelectedProduct();
	  return () =>{
	 	dispatch(removepriviousProduct());
	 } 
},[]);

const getItem = useSelector(state => state.item);
console.log(getItem);
const product= useSelector(state => state.product);
const {title, image, price,  description} = product;

return(
<>
{Object.keys(product).length === 0 ? ( <h1>Loading....</h1> ) : 
(
	<div className="product">
		<img src ={image} alt = {title}/>
		<div className = "title">{title}</div>
		<div className = "price"> <button> Price:${price} </button> </div>
		<div className = "discription"> ${description}</div>
		<button className="addtocart" onClick={() => dispatch(getAddItem(getItem))}> 
		Add To Cart </button>
<Link to = {`/Cart`}>
		<button className="addtocart"> 
		Go To Cart </button>
</Link>
	
	</div>

)}


</>
)
}

export default React.memo(ProductDetails);