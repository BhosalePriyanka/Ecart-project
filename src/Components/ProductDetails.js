import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import {useEffect} from 'react';
import { memo } from "react";
import {selectedProduct , getAddItem, removepriviousProduct} from '../Redux/Action/ProductAction';
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



const product= useSelector(state => state.product);
const { title, image, price,  description,} = product;


useEffect(()=>{
	fetchSelectedProduct();
},[]);


return(
<>
<div className = "container">
{Object.keys(product).length === 0 ? ( <h1 className = "mt-5">Loading....  <div className="spinner-border"></div></h1> ) : 
(
	<div className ="container">
	<div className = " w-50 border shadow mx-auto overflow-auto">
		<img className = "pe-none w-25 h-25" src ={image} alt = {title}/>
		<div className = "mt-5 fw-bold">{title}</div>
		<div className = "pe-none mt-2"> <button> Price:${price} </button> </div>
		<div> ${description}</div>
		<button className="btn btn-primary mx-2 my-5"  onClick= {() => dispatch(getAddItem(product))}> Add To Cart </button>
		<Link to = {`/Cart`}>
		<button className = "btn btn-primary mx-2 my-5"> Go To Cart</button>
		</Link>
	</div>
</div>
)}
</div>
</>
)
}

export default React.memo(ProductDetails);