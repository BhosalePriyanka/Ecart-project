import React from 'react';
import { useSelector }  from 'react-redux';
import './Main.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { memo } from "react";


export const ProductComponents = () => {

const products = useSelector(state => state.allProducts.products);
const renderList = products.map((product) => {
const {id, title, image, price,} = product;
		return(
			<>
			<div key ={id} className="products">
						<img src ={image} alt = {title}/>
						<div className = "title">{title}</div>
						<div className = "price"><button> Price:${price} </button></div>
			<Link to = {`/product/${id}`}>
						<button className="buynow">Buy Now</button> 
			</Link>
			</div>
			</>
			)

		});
		return<>{renderList}</>

	}
export default ProductComponents;