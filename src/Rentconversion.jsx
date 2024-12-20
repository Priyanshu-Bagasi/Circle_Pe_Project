import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import topicons from "./icons/iconstop.jpg"

function Rentconversion() {
  const [paymentAmount, setPaymentAmount] = useState('INR XXXX.00');
  const [monthlyRent, setMonthlyRent] = useState('10,000 INR/mo.');
  const [rentCycle, setRentCycle] = useState('5 Months');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Payment Amount:', paymentAmount);
    console.log('Monthly Rent:', monthlyRent);
    console.log('Rent Cycle:', rentCycle);
  };

  return (
    <div className="bg-white p-6 rounded-lg max-w-md mx-auto mt-10">
      <div className="flex items-center justify-between mb-4">
        <Link to='/paywithcircle'>
        <ArrowLeftIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
        </Link>
      </div>
        <img src={topicons} />
      <h2 className="text-2xl font-semibold text-center mb-6">
        One step away <span className="text-yellow-500">✨</span>
        <br />
        <span className="text-blue-500">from your dream home</span>
      </h2>

      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          {/* Replace this with an icon or image as needed */}
          <span className="text-blue-500 text-3xl">🎉</span>
        </div>
      </div>

      <p className="text-center bg-blue-50 text-md rounded-md py-2 text-blue-500 mb-8">Rent converted to Zero-Cost EMI</p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Co-living partner</p>
          <p className="text-gray-400">Rent-OK</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Payment Amount</p>
          <p className="text-gray-400">{paymentAmount}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Monthly rent </p>
          <p className="text-gray-400">{monthlyRent}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-600 font-medium">Rent cycle (EMI Duration)</p>
          <p className="text-gray-400">{rentCycle}</p>
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-200 text-green-800 text-center w-full py-1 rounded-md mt-7 font-bold"
        onClick={handleSubmit}
      >
        Zero COST EMI
      </button>

      <p className="text-xs text-gray-500 text-center mt-12">
        By clicking on next, you acknowledge that you have read the
        <a href="#" className="text-blue-500"> View Loan Agreement & KFS </a>
        agreed to the terms and conditions contained in the loan agreement.
      </p>

      <button
        type="submit"
        className="bg-blue-500 text-white text-center w-full py-4 text-2xl rounded-lg mt-4"
        onClick={handleSubmit}
      >
        Continue &gt;
      </button>
    </div>
  );
}

export default Rentconversion;