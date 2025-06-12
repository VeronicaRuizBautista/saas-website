import { useState } from 'react'
import RootLayout from './layout';
import Home from './page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={
              <RootLayout />
        }
      >
        <Route 
          index 
          element={<Home />} 
        />
        {/* <Route path="/" element={<Home  />} /> */}
      </Route>
      </Routes>
    </Router>
  );
}