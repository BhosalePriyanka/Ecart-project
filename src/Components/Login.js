import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Form , Button} from 'react-bootstrap';
import Validate from './Validate.js';
import {useNavigate} from 'react-router-dom';

function Login(){
const [state, setState] = useState(
{
	username: '',
	password:'',	
}
);
const [error, setError] = useState({});
const navigate = useNavigate();

const handleChange = (event) => {
		setState({...state,[event.target.name]:event.target.value});
	}

const handleSubmit = async(event) => {

event.preventDefault();
setError(Validate(state, true));

const response = await fetch('https://json-ecommerce-bn16.onrender.com/users')
const jsonData = await response.json();

const filterUser = jsonData.filter(jsonData=> { return jsonData.username === state.username && jsonData.password === state.password});
/*const filterpassword = jsonData.filter(jsonData=> { return jsonData.password === state.password});*/
console.log(filterUser);
if(filterUser[0]){			localStorage.setItem('user', JSON.stringify(filterUser[0]));
							navigate("/ProductListing", { replace: true });
						}
							else{
								alert("Login Failed, Check Incorrect Field");
								event.preventDefault();
							}	
    }


	return(
		<>
	<div className ="container">
<h3>Login Form</h3>
<Form className = "border shadow col-lg-4 col-sm-12 mx-auto mt-5 p-5" >
		<Form.Group>
		<Form.Label> Username </Form.Label>
		<Form.Control type='text'name="username" value = {state.username} onChange={handleChange} autoComplete = "off" />
		{error.username && <p className ="text-danger"> {error.username} </p>}
		</Form.Group>

		<Form.Group>
		<Form.Label>Password</Form.Label>
		<Form.Control type='password' name="password" value = {state.password} onChange={handleChange} autoComplete = "off" />
		{error.password && <p className ="text-danger"> {error.password} </p>}
		</Form.Group>
		<br/>

		<Button onClick = {handleSubmit} variant="primary"> Submit </Button> 


		<p>New User Register Now.</p>
		<Link  to = {`/Registerpage`}>
		<Button variant= "primary">Sign Up</Button>
		</Link>
	
</Form>

</div>
		</>
		)
}
export default Login;