import React from 'react';
import { useSelector , useDispatch}  from 'react-redux';
import './Main.css';
import {Link} from 'react-router-dom';
import {useState ,useEffect} from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';

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


<ButtonGroup className='d-block w-100'>
<Button onClick={() => setFilter(products)}>All</Button>
<Button  onClick={()=> filterProduct("men's clothing")}> Men Clothing </Button>
<Button onClick={()=> filterProduct("women's clothing")}>Women clothing </Button>
<Button  onClick={()=> filterProduct("jewelery")}>Jewelery</Button>
<Button  onClick={()=> filterProduct("electronics")}>Electronics</Button>
</ButtonGroup>




{filter.map((product) => {
const {id, title, image, price} = product;
return (
	<div className = "block m-5 p-2 shadow border" style = {{width : "20rem" , height :  "auto"}} key = {id} >
		<img className='image' style = {{  width : "15rem" , height : "15rem"}} src ={image} alt = {title}/>
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
