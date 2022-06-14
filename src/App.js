
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import React from 'react';
import ProductListing from './Components/ProductListing';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';



function App() {
return (
<Router>
<NavBar />
<Routes>
<Route  exact path = '/'  element={<ProductListing/>}/>
<Route exact path = '/product/:id' element={<ProductDetails/>}/>
<Route exact path = '/ProductListing' element={<ProductListing/>} />
<Route exact path = '/Cart' element={<Cart/>} />
</Routes>
</Router>
);
}

export default App;
