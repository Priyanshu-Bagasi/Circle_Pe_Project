import React from 'react';
import tick from './icons/tick.png'
import { Link } from 'react-router-dom';

const RentOfferCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg max-w-xs mx-auto">
      <div className="text-center">
        <p className="text-md font-semibold bg-blue-100 rounded-lg">
          Rent at <span className="text-blue-500">Zero</span> security deposit ✨
        </p>
        <div className="mt-2 flex justify-center">
          <div className="bg-blue-100 rounded-full p-2">
            <img src={tick} className='h-20'/>
          </div>
        </div>
        <p className="mt-2 bg-blue-100 rounded-lg text-blue-500 font-semibold">Approved</p>
      </div>
      <ul className="mt-4 space-y-2 font-bold">
        <li className="flex items-center text-md">
          <span className="text-blue-500 mr-2">✔️</span> New Rent Offer: <span className="text-blue-500 ml-1">₹ 20,000</span>
        </li>
        <li className="flex items-center text-md">
          <span className="text-blue-500 mr-2">✔️</span> Zero security deposit <span className="text-blue-500 ml-1">move-in</span>
        </li>
        <li className="flex items-center text-md">
          <span className="text-blue-500 mr-2">✔️</span> 3-Months <span className="text-blue-500 ml-1">salary cover</span>
        </li>
      </ul>
      <div className="mt-6">
        <button className="bg-blue-500 text-white w-full py-3 shadow-2xl rounded-xl flex items-center justify-center hover:bg-blue-600">
        <Link to="/paywithcircle">
          Pay with Circle
        </Link>
        </button>
      </div>
    </div>
  );
};

export default RentOfferCard;