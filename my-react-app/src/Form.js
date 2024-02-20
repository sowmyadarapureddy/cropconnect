// import React from 'react';
// import './Form.css';

// const Form = () => {
//   return (
//     <div className="form-container">
//       <form className="form">
//         <label htmlFor="cropName">Crop Name:</label>
//         <input type="text" id="cropName" name="cropName" />

//         <label htmlFor="location">Location:</label>
//         <input type="text" id="location" name="location" />

//         <label htmlFor="quantity">Quantity:</label>
//         <input type="text" id="quantity" name="quantity" />

//         <label htmlFor="price">Price:</label>
//         <input type="text" id="price" name="price" />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;

import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have some logic for handling form submission.
    // For example, you can make an API call or update state.

    // Here, we're just setting a success message.
    setSuccessMessage('Successfully added crop');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        {/* ... (existing form fields) */}
        <label htmlFor="cropName">Crop Name:</label>
      <input type="text" id="cropName" name="cropName" />

       <label htmlFor="location">Location:</label>
       <input type="text" id="location" name="location" />

        <label htmlFor="quantity">Quantity:</label>
        <input type="text" id="quantity" name="quantity" />

       <label htmlFor="price">Price:</label>
       <input type="text" id="price" name="price" />

        <button type="submit">Submit</button>
      </form>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default Form;
