import React, { useState } from 'react';
import './Newsletter.css';
import { BellAlertIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Alert from './Alert';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Function to show alert
  const showAlert = (type, message) => {
    setAlert({ type, message });
  };

  // Function to hide alert
  const hideAlert = () => {
    setAlert({ type: '', message: '' });
  };

  const handleNewsletterSubscribe = async () => {
    try {

      setLoading(true);

      if (!email) {
        showAlert('error', 'Please enter your email address.');
        return;
      }

      const response = await fetch('https://f1-store-backend.netlify.app/.netlify/functions/subscribeNewsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      // Check the response status
      if (response.status === 201) {
        showAlert('success', 'Subscribed to newsletter!');
      } else if (response.status === 400 && data.error === 'Email already subscribed') {
        showAlert('warning', 'Email already subscribed.');
      } else {
        showAlert('warning', 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      showAlert('warning', 'An error occurred. Please try again.');
      console.error('Error during subscription:', error);
    }
    finally {
      setEmail('');
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Render the Alert component */}
      {alert.message && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={hideAlert}
          className="z-1000"
        />
      )}

      <div className="relative isolate overflow-hidden bg-gray py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 font-bai-jamjuree">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-[800] font-bai-jamjuree tracking-tight text-white sm:text-4xl">
                Subscribe to our Newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#b3b3b3] !font-[RfDewi-Extended]">
                Stay updated on motorsports! Subscribe to our newsletter for exclusive deals, product launches, and racing news—no spam, just pure F1 passion!              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`!font-[RfDewi-Extended] min-w-0 flex-auto rounded-md border-0 ${loading ? 'bg-[#323232] animate-pulse' : 'bg-white'} px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white-600 sm:text-sm sm:leading-6`}
                />
                <button
                  type="button"
                  className={`flex-none rounded-md ${loading ? 'animate-pulse' : 'bg-red'} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]`}
                  onClick={handleNewsletterSubscribe}
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white p-2 ring-1 ring-white/10">
                  <BellAlertIcon aria-hidden="true" className="h-6 w-6 text-black" />
                </div>
                <dt className="mt-4 font-semibold text-white">New Products Alerts</dt>
                <dd className="mt-2 leading-7 text-[#b3b3b3] !font-[RfDewi-Extended]">
                  Be the first to know about our latest arrivals and special releases.                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white p-2 ring-1 ring-black/10">
                  <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-black" />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-[#b3b3b3] !font-[RfDewi-Extended]">
                  We only send relevant updates and offers – no unnecessary emails.                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/150] w-[80.1875rem] bg-gradient-to-tr from-[#222222] to-[#222222] opacity-90"
          />
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-[1155/600] w-[80.1875rem] bg-gradient-to-tr from-[#222222] to-[#222222] opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;