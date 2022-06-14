import React from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


function NavBar(){
	const {id}  =useParams();

	const state = useSelector(state => state.cart);
return(
<>
<div className="header">
	<div className="navbar">
	<ul>
	<li><button>Home </button></li>

	<Link to = './ProductListing'>
	<li><button>Product </button></li>
	</Link>

	<li><button>About </button></li>

	<li><button> Contact </button></li>
	</ul>
	</div>

<div className="cart">
	<Link to = {`/Cart`}>
	<button className= "buttonCart"> {state.length} <AiOutlineShoppingCart/></button>
	</Link>
</div>

</div>
</>
)
}

export default NavBar; 