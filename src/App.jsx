// import { useState } from 'react'
// import './App.css'
// import {Routes, Route, Navigate} from "react-router-dom"
// import SearchResults from './SearchResults'
// import Transaction from "./Transaction"
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<SearchResults/>} />
//       <Route path="/transaction" element={<Transaction />} />
//       {/* <Route path="/m" element={< />} /> */}
//     </Routes>
//     </>
//   )
// }

// export default App


import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './SearchResults';
import Transaction from './Transaction';
import SlideUpPage from './SlideUpPage'; // Import the SlideUpPage component
import EligibilitySteps from './EligibilitySteps';
import Rentconversion from './Rentconversion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/paywithcircle" element={<EligibilitySteps />} />
        <Route path="/rentconversion" element={<Rentconversion />} />
      </Routes>
    </div>
  );
}

export default App;