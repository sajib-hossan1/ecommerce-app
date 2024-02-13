import React, { useEffect, useState } from 'react';
import './Checkout.css'
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useScrollTop } from '../../hooks/useScrollTop';

const Checkout = () => {
    useScrollTop();
    const location = useLocation();
    const singleProduct = location.state.singleProduct;
    const quantity = location.state.quantity;
    const {title, price, thumbnail} = singleProduct;

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [productQuantity, setProductQuantity] = useState(quantity);
    const [subTotal, setSubTotal] = useState(quantity*price);
    const [grandTotal, setGrandTotal] = useState(subTotal);
    const [errorMessage, setErrorMessage] = useState("");

    
    const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    const navigate = useNavigate();

    // get and set user info
    const handleName = e => {
        setName(e.target.value);
    };
    const handleNumber = e => {
        setNumber(e.target.value);
    };
    const handleAddress = e => {
        setAddress(e.target.value);
    };

    const handleOrder = (e) => {
        e.preventDefault()
        if(!name){
            setErrorMessage("আপনার সঠিক নাম দিন।");
            return;
        }
        if(!number){
            setErrorMessage("আপনার সঠিক ফোন নাম্বারটি দিন।");
            return;
        }
        if(!address){
            setErrorMessage("আপনার সঠিক ঠিকানা দিন।");
            return;
        }
        setErrorMessage("");

        
        // order save to the server
        const deliveryInfo = {
            name,
            phoneNumber : number,
            address,
            date : dateTime,
            status : "Pending",
            product : singleProduct,
            quantity : quantity,
            totalAmount : grandTotal
        };
        console.log(deliveryInfo);
        navigate("/confirmOrder")
    };
    return (
        <div className='checkoutMain'>
            <h3 className="text-center mb-4">আপনার সঠিক তথ্য দিয়ে অর্ডার সম্পূর্ণ করুন</h3>
            <div className="container">
                <form className='formMain' onSubmit={handleOrder}>
                    <h4 className='mb-4'>অর্ডার ডিটেইলস</h4>
                    <div className="form-group">
                        <input onBlur={handleName} type="text" className="form-control form-control-lg" placeholder="আপনার নাম *" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleNumber} type="number" className="form-control form-control-lg" placeholder="মোবাইল নাম্বার *" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleAddress} type="text" className="form-control form-control-lg" placeholder="আপনার সম্পূর্ণ ঠিকানা *" />
                    </div>
                    <h4>অর্ডারকৃত পন্য</h4>
                    <div className="orderProduct">
                        <div className="twoFlex">
                            <span className='fw-bold'>Product</span>
                            <span className='fw-bold'>Subtotal</span>
                        </div>
                        <div className="orderedProd">
                            <div className='imgNtitParent'>
                                <div className='imgNtitle'>
                                    <img src={thumbnail} className='img-fluid' alt="" />
                                    <p className='px-2 me-2'>{title}</p>
                                </div>
                                <p className='quanPrice1'>৳ {price} x {productQuantity}</p>
                            </div>
                            <p className='quanPrice2'>৳ {subTotal}</p>
                        </div>
                        <div className="singleFlex">
                            <div>
                                <span>Subtotal :</span>
                                <span>৳ {subTotal}</span>
                            </div>
                            <div>
                                <span>Shipping :</span>
                                <span>Free</span>
                            </div>
                        </div>
                        <div className="twoFlex">
                            <span className='fw-bold'>Total</span>
                            <span className='fw-bold'>৳ {grandTotal}</span>
                        </div> 
                        <h6 className='codText'>ক্যাশ অন ডেলিভারি । পন্য হাতে পেয়ে সম্পূর্ণ টাকা পরিশোধ করুন ।</h6>
                    </div>
                    <button type='submit' className='orderConfirmBtn'>অর্ডার কনফার্ম করুন</button>
                    <p className='errorMsg'>{errorMessage}</p>
                </form>
            </div>
        </div>
    );
};

export default Checkout;