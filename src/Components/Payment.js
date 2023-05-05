import React from 'react';
import {useLocation} from 'react-router-dom'
import {Table,Image} from 'react-bootstrap'


function Payment(){

const userDetails = JSON.parse(localStorage.getItem("user"));
let location = useLocation()
console.log(location.state)

    

return(
<> 
<p className="fw-bold w-50 mx-auto p-3 border border-dark border-3 rounded"> <span> Shipping Address : </span>
{userDetails && userDetails.address.city}, {userDetails && userDetails.address.street}, {userDetails && userDetails.address.number},{userDetails && userDetails.address.zipcode}
</p>
{
    (location.state).map((state)=>{
    const {title,quantity,image} = state

return(
<>

<Table className='w-50 mx-auto'>
    <thead>
     <tr>
            <th>Ordered Item</th>
            <th>Name</th>
            <th>Quantity</th>
    </tr>
    </thead>
     <tbody>
    <tr>
            <td><Image style = {{height:"100px", width:"100px"}}src = {image} /></td>
            <td> {title}</td>
            <td> {quantity}</td>
    </tr>
    </tbody>
</Table>
</>
);
})}
</>
)}



export default Payment;