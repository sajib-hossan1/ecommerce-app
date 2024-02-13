import React from 'react';
import './ConfirmOrder.css'
import { useScrollTop } from '../../hooks/useScrollTop';

const ConfirmOrder = () => {
    useScrollTop();
    return (
        <div className="confirmOrder-main">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <div className="order-txt">
                <div className='container con m-0'>
                    <h3>অর্ডারটি করার জন্য আপনাকে অসংখ্য ধন্যবাদ । আপনার নাম্বারে ফোন করে আমদের একজন প্রতিনিধি আপনার সাথে শিগ্রই যোগাযোগ করবে ।</h3>
                    <h3>ধন্যবাদ 🥰 । </h3>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;