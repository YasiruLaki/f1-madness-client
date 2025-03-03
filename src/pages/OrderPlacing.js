import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom'; // React Router's hooks
import './OrderPlacing.css';

const OrderPlacementPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { search } = useLocation(); // Accessing the query params
    const queryParams = new URLSearchParams(search);
    const stripeSessionID = queryParams.get('session_id');

    // Use useMemo to avoid re-initializing cart every render
    const cart = useMemo(() => {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }, []); // Empty dependency array ensures cart is memoized once

    console.log("Stripe Session ID:", stripeSessionID); // Debugging session_id
    console.log("Cart:", cart); // Debugging cart

    const placeOrder = useCallback(async (sessionId) => {
        try {
            const response = await fetch('https://f1-printful-backend.vercel.app/api/placeOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    session_id: sessionId,
                    cart: cart,
                }),
            });

            const data = await response.json();
            if (data.success) {
                // Redirect to the order success page
                window.location.replace(`/order-success?session_id=${stripeSessionID}&orderID=${data.orderID}`); // Use window.location.replace for clarity
            } else {
                setError('There was an issue placing your order. Please try again.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            setError('Error placing the order. Please try again.');
        } finally {
            setLoading(false);
        }
    }, [cart, stripeSessionID]); // Add 'cart' as dependency to avoid stale closure

    useEffect(() => {
        if (stripeSessionID && stripeSessionID.trim() !== '') {
            placeOrder(stripeSessionID);
        } else {
            setError('No session ID provided.');
            setLoading(false);
        }
    }, [stripeSessionID, placeOrder]); // Add placeOrder as a dependency

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-xl text-gray-700">Placing your order. Do not refresh or close this page.</p>
                </div>
            ) : error ? (
                <div className="text-red-500 text-lg">
                    <p>{error}</p>
                </div>
            ) : (
                <div className="text-green-500 text-lg">
                    <p>Your order has been successfully placed!</p>
                </div>
            )}
        </div>
    );
};

export default OrderPlacementPage;