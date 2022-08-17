import React from 'react';
function Payment(){

const userDetails = JSON.parse(localStorage.getItem("user"));
return(
<>
<div className ="container mt-5 p-5">
<div className ="border border-dark col-lg-6 mx-auto">
<h1>Payment</h1> 
<p> <span className="fw-bold"> Shipping Address : </span>
{userDetails && userDetails.address.city},{userDetails && userDetails.address.number},
{userDetails && userDetails.address.street}, {userDetails && userDetails.address.zipcode}.
</p>
</div>
</div>
</>
)
}
export default Payment;