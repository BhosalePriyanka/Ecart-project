import React from 'react';
import { useSelector , useDispatch}  from 'react-redux';
import './Main.css';
import {Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';

import {useState ,useEffect} from 'react';


export const ProductComponents = () => {
const products = useSelector(state => state.allProducts.products);
const[filter, setFilter] = useState(products);

const filterProduct = (cat) =>{
const filterCat = products.filter(product => { return product.category === cat });
setFilter(filterCat);
}

useEffect(() => {
	setFilter(products)
},[products]);


return(
<>

<nav className = "my-1 w-100" >
<ul className = "d-lg-flex d-sm-block  list-unstyled justify-content-center">
<li><button className = "btn btn-primary mt-sm-2 mx-lg-2" onClick={() => setFilter(products)}>All</button></li>
<li><button className = "btn btn-primary mt-sm-2 mx-lg-2" onClick={()=> filterProduct("men's clothing")}> Men Clothing </button></li>
<li><button className = "btn btn-primary mt-sm-2  mx-lg-2" onClick={()=> filterProduct("women's clothing")}>Women clothing </button></li>
<li><button className = "btn btn-primary mt-sm-2  mx-lg-2" onClick={()=> filterProduct("jewelery")}>Jewelery</button></li>
<li><button className = "btn btn-primary mt-sm-2 mx-xs-5 mx-lg-2" onClick={()=> filterProduct("electronics")}>Electronics</button></li>
</ul>      
</nav>



{filter.map((product) => {
const {id, title, image, price} = product;
return (
	<div className = "products">
		<img  src ={image} alt = {title}/>
		<div className = "fw-bold">{title}</div>
		<div className = "mt-3"> <button> Price:${price} </button> </div>
		<Link  to = {`/product/${id}`}>
		<button className = "btn btn-primary mt-3">Buy Now </button>
		</Link>
	</div>
	);

})}
</>
);
}

export default ProductComponents;
