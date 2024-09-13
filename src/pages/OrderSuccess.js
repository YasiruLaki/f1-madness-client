import React, { useState, useEffect } from 'react';
import './OrderSuccess.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import LoadingScreen from '../components/loadingScreen';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {
    const [loading, setLoading] = useState(true);
    const [orderDetails, setOrderDetails] = useState(null);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const encodedOrderID = queryParams.get('orderID');
    const orderID = decodeURIComponent(encodedOrderID);
    const stripeSessionID = queryParams.get('session_id');


    const ClearLocalStorage = () => {
        localStorage.removeItem('cart');
    }

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(`https://f1-store-backend.netlify.app/.netlify/functions/orderDetails?session_id=${encodeURIComponent(stripeSessionID)}&orderID=${encodeURIComponent(encodedOrderID)}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) throw new Error('Failed to fetch order details');

            const data = await response.json();
            setOrderDetails(data);

            console.log(data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateOrderCount = async () => {

        console.log(orderDetails)
        const productIDs = orderDetails.items.map(item => item.productID);
        const productQuantities = orderDetails.items.map(item => item.quantity);


        try {
            const response = await fetch(`https://f1-store-backend.netlify.app//.netlify/functions/updateOrderCount?session_id=${encodeURIComponent(stripeSessionID)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productIDs, productQuantities }),
            });

            if (!response.ok) throw new Error('Failed to update order count');
        } catch (error) {
            console.error('Error updating order count:', error);
        }
    }

    useEffect(() => {
        ClearLocalStorage();
        fetchOrderDetails();
    }, [stripeSessionID]);
    
    useEffect(() => {
        if (orderDetails) {
            updateOrderCount();
        }
    }, [orderDetails]);

    return (
        <div className="order-success">
            {loading ? <LoadingScreen /> : (
                <>
                    <Navbar />
                    <Announcement />
                    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 font-['RfDewi-Extended']">
                        <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                            <h2 className="text-xl font-[700] text-gray-900 dark:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                                Your order <a href="#" className="font-[600] text-gray-900 dark:text-white hover:underline">{orderID}</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
                            </p>
                            {orderDetails && (
                                <div>
                                    <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
                                        <dl className="sm:flex items-center justify-between gap-4">
                                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Date</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{new Date(orderDetails.created * 1000).toLocaleDateString()}</dd>
                                        </dl>
                                        <dl className="sm:flex items-center justify-between gap-4">
                                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Payment Method</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{orderDetails.payment_method_types.join(', ')}</dd>
                                        </dl>
                                        <dl className="sm:flex items-center justify-between gap-4">
                                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Name</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{orderDetails.customer_details.name}</dd>
                                        </dl>
                                        <dl className="sm:flex items-center justify-between gap-4">
                                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Address</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
                                                {orderDetails.customer_details.address.line1}, {orderDetails.customer_details.address.city}, {orderDetails.customer_details.address.state}, {orderDetails.customer_details.address.country}
                                            </dd>
                                        </dl>
                                        <dl className="sm:flex items-center justify-between gap-4">
                                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">Phone</dt>
                                            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">{orderDetails.customer_details.phone}</dd>
                                        </dl>
                                    </div>


                                    <div className="flex items-center space-x-4">
                                        {orderDetails.receipt_url && (
                                            <a href={orderDetails.receipt_url} target='_blank' className="text-white bg-[#111111] hover:bg-[#111111f2] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Download Invoice</a>
                                        )}
                                        <a href="/" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Return to shopping</a>
                                    </div>
                                </div>

                            )}
                        </div>
                    </section>
                    <Footer />
                </>
            )}
        </div>
    );
};

export default OrderSuccess;