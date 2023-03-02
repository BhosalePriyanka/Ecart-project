import React from 'react';
import Validate from './Validate.js';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';



function Registerpage(){
const[error, setError] = useState({});
const[user, setUser] = useState(false);

const navigate = useNavigate();
const [state, setState] = useState(
{
	id: '',
	email:'',
	username: '',
	password:'',
	name :{firstName:'',lastName:''},
	address:{
				city:'',street:'',number: '',zipcode:''
			},
	phone: '',
}
);

const handleChange = (event) => {
	setState({...state,[event.target.name]:event.target.value
		});
	}
const handleNameChange = (event) => {
	setState({...state,
		name:{
			...state.name,
			[event.target.name]:event.target.value
		}
		});
	}
const handleAddressChange = (event) => {
	setState({...state,
		address:{
			...state.address,
			[event.target.name]:event.target.value
		}
		});
	}

const handleSubmit = async(event) => {
event.preventDefault();

setError(Validate(state ,false));
const error = Validate(state);

const response = await fetch('http://localhost:3000/users')
const jsonData =  await response.json();
const filteremail = jsonData.filter(jsonData=> {return jsonData.email === state.email});

if(filteremail && filteremail.length > 0 ){
	setUser(true);
}



if(error.isValid && filteremail && filteremail.length === 0 ){
	fetch('https://my-json-server.typicode.com/BhosalePriyanka/Ecart-json/users',{
            method:"POST",
            mode: 'cors',
            headers: {
		      "Access-Control-Allow-Origin": "*",
		      "Content-Type": "application/json"
    					},
            body:JSON.stringify(state)
        }) 
          .then((res)=> {
		  res.json()
		  alert("Account Created")
		  navigate("/Login", { replace: true });
		})
          .then((json) => {
          
          })
	}
}
return(
<>
<div className ="container mt-5 p-5">
<h3>SIGN UP FORM</h3>
<Form className = "border shadow col-lg-6 col-sm-12 mx-auto mt-5 p-5">
<Form.Group>
    <Form.Label>Email Id</Form.Label><br/>
	<Form.Control type='email' name="email" value = {state.email} onChange={handleChange} />
	 {error.email && <p className ="text-danger"> {error.email} </p>}
	 {user ? <p className ="text-danger"> Email Id already exist</p> : ""}
</Form.Group>
	<br/>
<Form.Group>
	<Form.Label>Username </Form.Label><br/>
	<Form.Control type='text' name="username" value = {state.username} onChange={handleChange} />
	{error.username && <p className ="text-danger"> {error.username} </p>}
</Form.Group>
	<br/>
<Form.Group>
	<Form.Label>Password </Form.Label><br/>
	<Form.Control type='password' name="password" value = {state.password} onChange={handleChange}/>
	 {error.password && <p className ="text-danger"> {error.password} </p>}
</Form.Group>
	<br/>
	<Form.Group>
	<Form.Label>Name</Form.Label><br/>
	<div className = "row"> 
	<Form.Control type='text'  className = "col"  name="firstName" value = {state.name && state.name.firstName} 
	onChange={handleNameChange}  placeholder="Firstname"/>
	<Form.Control type='text' className = "col"  name="lastName" value = {state.name && state.name.lastName} 
	onChange={handleNameChange}  placeholder="Lastname"/>
	
	{error.firstName && <p className ="text-danger"> {error.firstName} </p>}
	{error.lastName && <p className ="text-danger"> {error.lastName} </p>} 
	</div>
</Form.Group>
	<br/>
<Form.Group>
	<Form.Label>Address</Form.Label><br/>
	<div className="row">
	<Form.Control type='text' className = "col"  name="city" value = { state.address && state.address.city} 
	onChange={handleAddressChange} placeholder="City"/>
	<Form.Control type='text' className = "col"  name="street" value = {state.address && state.address.street} 
	onChange={handleAddressChange} placeholder="Street"/>
	{error.city && <p className ="text-danger"> {error.city} </p>}
	{error.street && <p className ="text-danger"> {error.street} </p>}
	</div>

	<div className="row">
	
	<Form.Control type='number' className = "col"  name="number" value = {state.address && state.address.number}
	onChange={handleAddressChange} placeholder="Home Number"/>

	<Form.Control type='text' className = "col"  name="zipcode" value = {state.address && state.address.zipcode}
	onChange={handleAddressChange} placeholder="Zipcode"/>
	{error.number && <p className ="text-danger"> {error.number} </p>}
	{error.zipcode && <p className ="text-danger"> {error.zipcode} </p>}
	</div>
	
	<br/>
	<Form.Label className = "fw-bold">Phone</Form.Label><br/>
	<Form.Control type='number' name="phone" value = {state.phone} onChange={handleChange} placeholder="Phone"/>
	{error.phone && <p className ="text-danger"> {error.phone} </p>}
</Form.Group>

	<br/> 
	<br/>
	<Button variant="primary" onClick={handleSubmit}> Submit </Button>
</Form>
</div>
</>
	);
}

export default Registerpage;