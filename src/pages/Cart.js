import React, { useEffect, useState, useCallback } from 'react';
import './Cart.css';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import { loadStripe } from '@stripe/stripe-js';
import LoadingScreen from '../components/loadingScreen';
import CountryList from 'react-select-country-list';
import Alert from '../components/Alert';

function Cart() {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [products, setProducts] = useState([]); // Changed from {} to []
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryOptions] = useState(CountryList().getData());
    const [alert, setAlert] = useState({ type: '', message: '' });

    // Function to show alert
    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    // Function to hide alert
    const hideAlert = () => {
        setAlert({ type: '', message: '' });
    };

    // Fetch product details from the backend
    const fetchProductDetails = async (productid, category) => {
        try {
            const response = await fetch(`https://f1-printful-backend.vercel.app/api/singleProduct?productid=${productid}&category=${category}`);
            if (!response.ok) throw new Error('Failed to fetch product details');

            const data = await response.json();

            console.log(data)

            // Ensure data.product exists before returning
            if (data && data.product) {
                return data.product;
            } else {
                throw new Error('Product data is missing');
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
            return null;
        }
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    // Fetch all cart data with product details
    const fetchCartData = useCallback(async () => {
        try {
            const productsWithDetails = await Promise.all(
                cart.map(async (item) => {

                    console.log(item.productid)
                    const productDetails = await fetchProductDetails(item.productid, item.category);
                    return { ...item, ...productDetails };
                })
            );
            setProducts(productsWithDetails);
            calculateTotal(productsWithDetails);
        } catch (error) {
            console.error('Error fetching cart data:', error);
        }
    }, [cart]);

    useEffect(() => {
        setLoading(true);
        fetchCartData().then(() => setTimeout(() => setLoading(false), 1000));
    }, [fetchCartData]);

    // Calculate total price
    const calculateTotal = (productList) => {
        const totalAmount = productList.reduce((sum, item) => {
            const price = item.saleprice > 0 ? item.saleprice : item.price;
            return sum + price * item.quantity;
        }, 0);
        setTotal(totalAmount);
    };

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // Assume 'selectedCountry' holds the country selected by the user
            if (!selectedCountry) {
                showAlert('warning','Please select a country before proceeding');
                return;
            }

            // Fetch product details for the cart items
            const productsWithDetails = await Promise.all(
                cart.map(async (item) => {
                    // Pass category to fetchProductDetails
                    const productDetails = await fetchProductDetails(item.productid, item.category);
                    return { ...item, ...productDetails };
                })
            );

            // Send data to your backend to create the checkout session
            const response = await fetch('https://f1-printful-backend.vercel.app/api/createCheckoutSession', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cart: productsWithDetails,
                    country: selectedCountry, // Pass the selected country here
                }),
            });

            const { sessionId } = await response.json();

            // If a sessionId is returned, redirect to Stripe Checkout
            if (sessionId) {
                const stripe = await stripePromise;
                const { error } = await stripe.redirectToCheckout({ sessionId });
                if (error) console.error('Error redirecting to checkout:', error);
            } else {
                console.error('Failed to create checkout session');
            }
        } catch (error) {
            console.error('Error during checkout:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="cart">
            {loading && <LoadingScreen />}
            {/* Render the Alert component */}
            {alert.message && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={hideAlert}
                />
            )}
            <Navbar />
            <Announcement />

            <section className="py-8 antialiased md:py-16 min-h-[calc(100vh-360px)] font-bai-jamjuree">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-[xl] font-[800] text-gray-900 sm:text-[30px] font-bai-jamjuree text-white">Shopping Cart</h2>

                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {products.length === 0 ? (
                                    <p>Your cart is empty</p>
                                ) : (
                                    products.map((item) => (
                                        <div key={item.productid} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href={`/product?productid=${encodeURIComponent(item.productid)}`} className="shrink-0 md:order-1">
                                                    <img
                                                        className="h-20 w-20"
                                                        src={
                                                            item.images && item.images !== "{}" // Check if images exists and is not empty
                                                                ? item.images.replace(/{|}/g, "").split(",")[0] // Clean and get the first image
                                                                : item.thumbnail_url // Fall back to thumbnail_url if images is empty or "{}"
                                                        }
                                                        alt={item.name}
                                                    />
                                                </a>

                                                <label htmlFor={`counter-input-${item.productid}`} className="sr-only">Choose quantity:</label>
                                                <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                    <div className="flex items-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => decrementQuantity(item.productid, item.size?.size)}
                                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                                        >
                                                            <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            type="text"
                                                            id={`counter-input-${item.productid}`}
                                                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                                                            value={item.quantity}
                                                            readOnly
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => incrementQuantity(item.productid, item.size?.size)}
                                                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                                                        >
                                                            <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="text-end md:order-4 md:w-32">
                                                        <p className="text-base font-bold text-gray-900 bg-white p-1">
                                                            {item.salePrice > 0
                                                                ? `$${(item.saleprice * item.quantity).toFixed(2)}`
                                                                : `$${(item.price * item.quantity).toFixed(2)}`}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href={`/product?productid=${encodeURIComponent(item.productid)}`} className="text-base font-medium text-gray-900 hover:underline">{item.name}</a>
                                                    <div className="flex items-center gap-10">
                                                        <p className="text-sm font-medium text-gray-900">
                                                            Size: {item.size?.size || ""}
                                                        </p>
                                                        <button
                                                            type="button"
                                                            onClick={() => removeFromCart(item.productid, item.size.size)}
                                                            className="inline-flex items-center text-sm font-medium text-[red] hover:underline"
                                                        >
                                                            ✖ Remove
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
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                    <p className="text-sm font-medium text-gray-900">${total.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">
                                        <i>(Shipping will be calculated based on your selected country)</i>
                                    </p>
                                </div>

                                {/* Dropdown for country selection */}
                                <div className=" items-center justify-between mt-4">
                                    <label htmlFor="country" className="text-sm font-medium text-gray-900 pt-4">
                                        <b>Select Shipping Country:</b>
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        className="w-full rounded-md border-gray-300 shadow-sm"
                                        required
                                    >
                                        <option value="">-- Select Country --</option>
                                        {countryOptions.map((country) => (
                                            <option key={country.value} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <p className="text-base font-medium text-gray-900">Total</p>
                                    <p className="text-base font-bold text-gray-900">${total.toFixed(2)}</p>
                                </div>

                                <button
                                    data-turbo="false"
                                    onClick={handleCheckout}
                                    className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
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