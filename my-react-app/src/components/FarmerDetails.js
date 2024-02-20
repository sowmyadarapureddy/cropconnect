import React, { useState } from 'react';
import './FarmerDetails.css';
import FillCropDetails from './FillCropDetails';

const cropsData = [
  {
    id: 1,
    name: 'Tomatoes',
    price: '$2.50',
    quantity: 100,
    datePosted: '2023-11-04',
  },
  {
    id: 2,
    name: 'Carrots',
    price: '$1.20',
    quantity: 50,
    datePosted: '2023-08-04',
  },
  {
    id: 1,
    name: 'Potatoes',
    price: '$2.50',
    quantity: 100,
    datePosted: '2024-01-04',
  },
  {
    id: 2,
    name: 'Onions',
    price: '$1.20',
    quantity: 50,
    datePosted: '2024-01-15',
  },
  
  
];

const FarmerDetails = () => {
  const [crops, setCrops] = useState(cropsData);
  const [addingCrop, setAddingCrop] = useState(false);

  const handleDelete = (id) => {
    const updatedCrops = crops.filter((crop) => crop.id !== id);
    setCrops(updatedCrops);
  };

  const handleAddCropToggle = () => {
    setAddingCrop(!addingCrop);
  };

  const handleAddCrop = (newCrop) => {
    setCrops([...crops, newCrop]);
    setAddingCrop(false);
  };

  return (
    <div className="FarmerDetails">
      <div className="backgroundGradient">
        <h1>Added Crops</h1>
        {addingCrop ? (
          <FillCropDetails onAddCrop={handleAddCrop} onCancel={handleAddCropToggle} />
        ) : (
          <button className="addCropButton" onClick={handleAddCropToggle}>
            Add Crop
          </button>
        )}
        <div className="cropCardContainer">
          {crops.map((crop) => (
            <div className="cropCard" key={crop.id}>
              <span className="deleteSymbol" onClick={() => handleDelete(crop.id)}>
                &#x2715;
              </span>
              <h2>{crop.name}</h2>
              <p>Price: {crop.price}</p>
              <p>Quantity Available: {crop.quantity}</p>
              <p>Date Posted: {crop.datePosted}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerDetails;

