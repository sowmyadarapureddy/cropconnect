import React from 'react';
import './Mobile.css'; // Ensure this path matches your CSS file structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faUsers,
  faCarrot,
  faHandshake,
  faStar,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Mobile = () => {
  return (
    <div className="mobile-container">
      {/* Corner Cards */}
      <div className="card corner top-left">
        <FontAwesomeIcon icon={faSeedling} size="2x" className="icon" />
        <h3>Pure & Organic from Farmers</h3>
        <p>Pure, Fresh, Healthy & Organic Products from Organic Farmers or Processors. Products are supplied by either Farmers themselves or by LocalFarmers.in supply team.</p>
      </div>
      <div className="card corner top-right">
        <FontAwesomeIcon icon={faUsers} size="2x" className="icon" />
        <h3>Farmer to Consumer</h3>
        <p>Better Price share to Producers. Healthy Products delivered directly to Consumers. Making Farming Ecologically Sustainable.</p>
      </div>
      <div className="card corner bottom-left">
        <FontAwesomeIcon icon={faCarrot} size="2x" className="icon" />
        <h3>Variety of Products</h3>
        <p>Variety of Products direct from Producers on a single Platform. Organic Fruits, Vegetables, Grocery, Spices, Desi Cow Based Products, & Many More.</p>
      </div>
      <div className="card corner bottom-right">
        <FontAwesomeIcon icon={faHandshake} size="2x" className="icon" />
        <h3>Transparent Platform</h3>
        <p>Know Farmers, Know Food! Products supplied in the brand of Farmers or Farmer Groups.</p>
      </div>

      {/* Central Mobile UI */}
      <div className="phone">
        <div className="navbar">
          <FontAwesomeIcon icon={faStar} className="navbar-icon" />
          <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
        </div>
        <div className="inner-card">
          <h3>E-Cart</h3>
          <p>Order the available crops</p>
          <button>Shop Now</button>
        </div>
        <div className="inner-card">
          <h3>E-Bazar</h3>
          <p>Check the freshly available crops</p>
          <button>Check Now</button>
        </div>
        <div className="inner-card">
          {/* Adding a cart icon here */}
          <FontAwesomeIcon icon={faShoppingCart} size="2x" className="icon" />
          <p>Add items to your cart</p>
        </div>
      </div>
    </div>
  );
};

export default Mobile;