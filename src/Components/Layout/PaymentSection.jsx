import React, { useState } from 'react';
import Header from './Header';
import Footer from '../../Pages/Footer';

const PaymentSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const products = [
    { id: 1, name: 'LCD Monitor', price: 650, image: '🖥️' },
    { id: 2, name: 'H1 Gamepad', price: 1100, image: '🎮' }
  ];

  const subtotal = products.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <div className="p-10 bg-gray-100 min-h-screen">
        <div className="bg-white max-w-6xl mx-auto p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            <form className="grid gap-y-4">

              {[
                { label: 'First Name*', placeholder: 'First Name*' },
                { label: 'Company Name', placeholder: 'Company Name' },
                { label: 'Street Address*', placeholder: 'Street Address*' },
                { label: 'Apartment, floor, etc. (optional)', placeholder: 'Apartment, floor, etc. (optional)' },
                { label: 'Town/City*', placeholder: 'Town/City*' },
                { label: 'Phone Number*', placeholder: 'Phone Number*' },
                { label: 'Email Address*', placeholder: 'Email Address*' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <label className="mb-1 text-sm text-gray-600">{item.label}</label>
                  <input
                    className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                    placeholder={item.placeholder}
                  />
                </div>
              ))}

              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-700">Save this information for faster check-out next time</label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Order</h2>

            <div className="space-y-3 border-b pb-4">
              {products.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-700">
                  <span>{item.image} {item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2 text-gray-900">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 space-y-3">
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="mr-2"
                  />
                  Bank
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="mr-2"
                  />
                  Cash on delivery
                </label>
              </div>
            </div>

            {/* Coupon and Place Order */}
            <div className="flex mt-6 gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border p-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                Apply Coupon
              </button>
            </div>

            <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSection;
