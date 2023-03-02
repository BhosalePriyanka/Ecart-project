import React from 'react';
import './Main.css';
import { useSelector, useDispatch } from 'react-redux';
import {increaseItem , removeItem, decreaseItem,paymentdoneCart} from '../Redux/Action/ProductAction';
import { MdDelete} from "react-icons/md";
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

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
console.log(item.quantity * price)


return(
<>
<div className = "col-lg-8 col-sm-12 mx-auto mt-5 p-0 shadow">
<Table striped bordered hover responsive>
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
<td  className = "col-2"><img style={{height:"200px" , width:"200px"}} src ={image} alt = {title} /></td>
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

<Link to={`/ProductListing`}> <Button>Continue Shopping</Button> </Link>
<br/>
<Button className = "m-2" >Total Amount to Pay : ${totalAmount.toFixed(2)}</Button>
<br/>
{userDetails ? 

<Link to = {`/Payment`}>
<Button className="m-2" onClick={() => dispatch(paymentdoneCart(item))}> Proceed To Checkout</Button>
<br/>
</Link>
:
<Link to = {`/Login`}>
<Button className="btn btn-success m-2"> Proceed To Checkout</Button>
</Link>
}
</div>
: ""
}
</div>
)
}
export default Cart;


