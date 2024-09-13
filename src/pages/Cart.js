import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import { loadStripe } from '@stripe/stripe-js';
import LoadingScreen from '../components/loadingScreen';

function Cart() {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    // Function to fetch product details
    const fetchProductDetails = async (productID) => {
        console.log(`Fetching details for productID: ${productID}`); // Add this log
        try {
            const response = await fetch(`https://f1-store-backend.netlify.app/.netlify/functions/fetchSingleProduct?productID=${encodeURIComponent(productID)}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log('Fetched product details:', data); // Add this log
            return data;
        } catch (error) {
            console.error('Error fetching product details:', error);
            return null;
        }
    };

    // Fetch cart data and product details
    const fetchCartData = async () => {
        try {
            console.log('Fetching cart data...');
            const productsWithDetails = await Promise.all(
                cart.map(async (item) => {
                    const productDetails = await fetchProductDetails(item.productID);
                    console.log(`Product details for ${item.productID}:`, productDetails);
                    return { ...item, ...productDetails };
                })
            );
            console.log('Products with details:', productsWithDetails);
            setProducts(productsWithDetails);
            calculateTotal(productsWithDetails);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    };


    useEffect(() => {
        setLoading(true);
        fetchCartData().then(() => setTimeout(() => setLoading(false), 1000));
    }, [cart]); // Fetch cart data when cart changes

    // Calculate total price
    const calculateTotal = (productList) => {
        const totalAmount = productList.reduce((sum, item) => sum + ((item.salePrice > 0 ? item.salePrice : item.price) * item.quantity), 0);
        setTotal(totalAmount);
    };

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // Fetch product details for the cart items
            const productsWithDetails = await Promise.all(
                cart.map(async (item) => {
                    const productDetails = await fetchProductDetails(item.productID);
                    return { ...item, ...productDetails };
                })
            );
    
            // Prepare the data to send to your backend
            const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/createCheckoutSession', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cart: productsWithDetails })
            });
    
            const { sessionId } = await response.json();
    
            if (sessionId) {
                // Get Stripe instance
                const stripe = await stripePromise;
    
                // Redirect to checkout
                const { error } = await stripe.redirectToCheckout({ sessionId });
    
                if (error) {
                    console.error('Error redirecting to checkout:', error);
                }
            } else {
                console.error('Failed to create checkout session');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="cart">
            {loading && <LoadingScreen />}
            <Navbar />
            <Announcement />

            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 min-h-[calc(100vh-360px)] font-['RfDewi-Extended']">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-[xl] font-[800] text-gray-900 dark:text-white sm:text-[30px] font-['RfDewi-Expanded']">Shopping Cart</h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 ">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {products.length === 0 ? (
                                    <p>Your cart is empty</p>
                                ) : (
                                    products.map((item) => (
                                        <div key={item.productID} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 ">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img className="h-20 w-20 dark:hidden" src={item.images[0]} alt={item.name} />
                                                    <img className="hidden h-20 w-20 dark:block" src={item.images[0]} alt={item.name} />
                                                </a>

                                                <label htmlFor={`counter-input-${item.productID}`} className="sr-only">Choose quantity:</label>
                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-center">
                                                        <button type="button" onClick={() => decrementQuantity(item.productID, item.size)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                        <input type="text" id={`counter-input-${item.productID}`} className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" value={item.quantity} readOnly />
                                                        <button type="button" onClick={() => incrementQuantity(item.productID, item.size)} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                                            <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="text-end md:order-4 md:w-32">
                                                        <p className="text-base text-[12px] text-gray-900 dark:text-white">
                                                            {item.quantity > 1 ? (
                                                                item.salePrice > 0 ? (
                                                                    `$${item.salePrice.toFixed(2)} x ${item.quantity}`
                                                                ) : (
                                                                    `$${item.price.toFixed(2)} x ${item.quantity}`
                                                                )
                                                            ) : null}
                                                        </p>
                                                        <p className="text-base font-bold text-gray-900 dark:text-white">
                                                            {item.salePrice > 0 ? `$${(item.salePrice * item.quantity).toFixed(2)}` : `$${(item.price * item.quantity).toFixed(2)}`}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}</a>

                                                    <div className="flex items-center gap-10">
                                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Size: {item.size}</p>
                                                        <button type="button" onClick={() => removeFromCart(item.productID, item.size)} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                            </svg>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h2>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Subtotal</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">${total.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">Shipping</p>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">$0.00</p>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                                    <p className="text-base font-medium text-gray-900 dark:text-white">Total</p>
                                    <p className="text-base font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</p>
                                </div>

                                <button data-turbo="false" onClick={handleCheckout} className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Cart;