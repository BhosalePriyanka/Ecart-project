import React from 'react';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import {increaseItem , removeItem, decreaseItem} from '../Redux/Action/ProductAction';
import { MdDelete} from "react-icons/md";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';

function Cart(){
const item= useSelector(state => state.item);
const userDetails = JSON.parse(localStorage.getItem("user"));
let totalAmount = 0;
const dispatch = useDispatch();

return( 

<div className ="container">

{
item && item.length === 0 ? ( <h1>Your Cart Is Empty </h1> ) : 
item && item.map((item) => {	
const {title, image, price, quantity} = item;
item.quantity = item.quantity ? item.quantity : 1;
totalAmount  += quantity * price;

return(
<>
<div className = "col-lg-6 col-sm-12 mx-auto mt-5 p-0">
<table className = "table border border-dark">
<tr>
<th>Image</th>
<th> Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Amount</th>
</tr>
<tr>
<td className = "col-lg-5"><img className = "pe-none w-50" src ={image} alt = {title}/></td>
<td className = "col-2"> {title} </td>
<td className = "col-2"> ${price} </td>
<td className = "col-2">
<div onClick = {()=> dispatch(increaseItem(item))}><AiFillPlusCircle/> </div>
<div> {item.quantity}</div>
<div onClick={()=> dispatch(decreaseItem(item))}><AiFillMinusCircle/> </div>	
</td>
<td className = "col-2"> <div>${quantity*price} </div></td>
<td className = "col-2">
<div onClick = {()=> dispatch(removeItem(item))}> <MdDelete/> </div>
</td>
</tr>
</table>	
</div>
</>
);
})}

{totalAmount > 0 ? <div className="chekOut"> 
<br/>
<button className = "btn btn-primary pe-none" >Total Amount to Pay : ${totalAmount}</button>
<br/><br/>

{userDetails ? 

<Link to = {`/Payment`}>
<button className="btn btn-success"> Proceed To Checkout</button>
</Link>
:
<Link to = {`/Login`}>
<button className="btn btn-success"> Proceed To Checkout</button>
</Link>
}
</div>
: ""
}
</div>
)
}
export default Cart;


