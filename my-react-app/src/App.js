import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CropConnect from './CropConnect';
import FarmerProfile from './Farmerprofile'; // Assuming your file name is FarmerProfile.js
import Contact from './Contact';
import Working from './Working';
import Consumer from './Consumer';
import UploadForm from './UploadForm';
import Form from './Form';
import Login from './components/Login';
import Login2  from  './components/Login2';
import Signup from './components/Signup';
import Signup2 from './components/Signup2';
import FarmerDetails from './components/FarmerDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CropConnect />} />
        <Route path="/farmer-details" element={<FarmerProfile />} />
        <Route path="/login" element={< Login/>} /> 
        <Route path="/login2" element={< Login2/>} /> 
        <Route path="/FarmerDetails" element={< FarmerDetails/>} /> 
        <Route path="/signup" element={< Signup/>} /> 
        <Route path="/signup2" element={< Signup2/>} /> 
        <Route path="/working" element={<Working />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/uploadform" element={<UploadForm />} />
        <Route path="/form" element={<Form />} />
        
        
       
      

        {/* Updated path to lowercase 'contact' */}
      </Routes>
    </Router>
  );
}

export default App;
