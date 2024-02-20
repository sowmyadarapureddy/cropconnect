// import React, { useState } from 'react';

// const FillCropDetails = ({ onAddCrop, onCancel }) => {
//   const [newCrop, setNewCrop] = useState({
//     name: '',
//     price: '',
//     quantity: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCrop({ ...newCrop, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddCrop({
//       id: Date.now(), // Generate a unique ID (you may use a better approach)
//       name: newCrop.name,
//       price: newCrop.price,
//       quantity: newCrop.quantity,
//       datePosted: new Date().toLocaleDateString(),
//     });
//   };

//   return (
//     <div className="fillCropForm">
//       <h2>Fill Crop Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Crop Name:
//           <input type="text" name="name" value={newCrop.name} onChange={handleInputChange} />
//         </label>
//         <label>
//           Price:
//           <input type="text" name="price" value={newCrop.price} onChange={handleInputChange} />
//         </label>
//         <label>
//           Quantity:
//           <input type="text" name="quantity" value={newCrop.quantity} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Add Crop</button>
//         <button type="button" onClick={onCancel}>
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FillCropDetails;

import React, { useState } from 'react';
import './FillCropDetails.css'; // Add or adjust this CSS file

const FillCropDetails = ({ onAddCrop, onCancel }) => {
  const [newCrop, setNewCrop] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCrop({ ...newCrop, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCrop({
      id: Date.now(),
      name: newCrop.name,
      price: newCrop.price,
      quantity: newCrop.quantity,
      datePosted: new Date().toLocaleDateString(),
    });

    // Reset the form after submission
    setNewCrop({
      name: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <div className="fillCropForm">
      <h2>Fill Crop Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Crop Name:
          <input
            type="text"
            name="name"
            value={newCrop.name}
            onChange={handleInputChange}
            className={newCrop.name && 'smallInput'} // Apply a class if crop name is not empty
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={newCrop.price}
            onChange={handleInputChange}
            className={newCrop.name && 'smallInput'} // Apply a class if crop name is not empty
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            name="quantity"
            value={newCrop.quantity}
            onChange={handleInputChange}
            className={newCrop.name && 'smallInput'} // Apply a class if crop name is not empty
          />
        </label>
        <button type="submit">Add Crop</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FillCropDetails;

