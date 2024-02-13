import React from 'react';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Checkout from './Pages/Checkout/Checkout';
import ConfirmOrder from './Pages/ConfirmOrder/ConfirmOrder';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/home" element={<Home/>} />
                    <Route exact path="/products" element={<Products/>} />
                    <Route exact path="/cart" element={<Cart/>} />
                    <Route exact path="/ProductDetails/:id" element={<ProductDetails/>} />
                    <Route exact path="/checkout" element={<Checkout/>} />
                    <Route exact path="/confirmOrder" element={<ConfirmOrder/>} />
                </Routes>

                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
