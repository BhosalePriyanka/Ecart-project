
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import React from 'react';

import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Registerpage from './Components/Registerpage';
import Payment from './Components/Payment';
import ProductListing from './Components/ProductListing';


function App() {
return (
	<>

<Router>
<NavBar />
<Home />

<Routes>
<Route exact path = '*' element={<ProductListing/>} />
<Route exact path = '/product/:id' element={<ProductDetails/>}/>
<Route exact path = '/ProductListing' element={<ProductListing/>} />
<Route exact path = '/Cart' element={<Cart/>} />
<Route exact path = '/Login' element={<Login/>} /> 
<Route exact path = '/Registerpage' element={<Registerpage/>} /> 
<Route exact path = '/Login' element={<Login/>} /> 
<Route exact path = '/Payment' element={<Payment/>} /> 
</Routes>


</Router>
<Footer />
</>

);
}

export default App;
