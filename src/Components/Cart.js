import React from 'react';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import {increaseItem , removeItem, decreaseItem,paymentdoneCart} from '../Redux/Action/ProductAction';
import { MdDelete} from "react-icons/md";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Cart(){
const item= useSelector(state => state.item);
const userDetails = localStorage.getItem("user");
let totalAmount = 0;
const dispatch = useDispatch();

return( 

<div className ="container">

{
item && item.length === 0 ? ( <h1>Your Cart Is Empty </h1> ) : 
item && item.map((item) => {	
const {id ,title, image, price, quantity} = item;
item.quantity = item.quantity ? item.quantity : 1 ;
totalAmount  += item.quantity * price;
console.log(id)

return(
<>
<div className = "col-lg-6 col-sm-12 mx-auto mt-5 p-0 shadow" >
<Table striped bordered hover>
<thead>
<tr>
<th>Image</th>
<th> Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Amount</th>
</tr>
</thead>


<tbody key = {item.id}>
<tr>
<td  className = "col-lg-5"><img className = "pe-none w-50" src ={image} alt = {title} /></td>
<td className = "col-2"> {title} </td>
<td className = "col-2"> ${price} </td>
<td className = "col-2">
<div onClick = {()=> dispatch(increaseItem(item))}><AiFillPlusCircle/> </div>
<div> {item.quantity}</div>
<div onClick={()=> dispatch(decreaseItem(item))}><AiFillMinusCircle/> </div>	
</td>
<td className = "col-2"> <div>${item.quantity*price} </div></td>
<td className = "col-2">
<div onClick = {()=> dispatch(removeItem(item))}> <MdDelete/> </div>
</td>
</tr>
</tbody>
</Table>	
</div>
</>
);
})}

{totalAmount > 0 ? <div className="chekOut"> 
<br/>
<button className = "btn btn-primary pe-none" >Total Amount to Pay : ${totalAmount.toFixed(2)}</button>
<br/><br/>

{userDetails ? 

<Link to = {`/Payment`}>
<button className="btn btn-success" onClick={() => dispatch(paymentdoneCart(item))}> Proceed To Checkout</button>
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


