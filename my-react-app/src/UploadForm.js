import React from 'react';
import { Link } from 'react-router-dom';
import './UploadForm.css';

const UploadForm = () => {
  return (
    <div className="container">
      <Link to="/form" className="upload-button">Upload Crop</Link>
      <button className="delete-button">Delete Crop</button>
    </div>
  );
}

export default UploadForm;


