import React from 'react';
import './Working.css';

const Working = () => {
  return (
    <div className="working-container">
      <div className="working-cards">
        <div className="working-card farmer">
          <h2>For Farmers</h2>
          <ul>
            <li>Produce healthy farm products free from harmful chemicals!</li>
            <li>Publish your products details & their prices!</li>
            <li>Get orders from Customers!</li>
            <li>Supply to consumers yourself or through LocalFarmers Supply Team!</li>
            <li>Get customers' review on your products!</li>
          </ul>
        </div>

        <div className="working-card consumer">
          <h2>For Consumers</h2>
          <ul>
            <li>Order your favorite products from favorite farmers!</li>
            <li>Receive the products delivered to you!</li>
            <li>Review the Product, Farmer & LocalFarmers Team!</li>
            <li>Access a wide variety of fresh and locally sourced produce!</li>
            <li>Enjoy exclusive discounts and promotions!</li>
            <li>Track the journey of your products from farm to your doorstep!</li>
          </ul>
        </div>

        <div className="working-card admin">
          <h2>For Admins</h2>
          <ul>
            <li>Verify Farmer & Products!</li>
            <li>Publish Farmers & Products details!</li>
            <li>Consolidate orders from Customers!</li>
            <li>Arrange for Supply by Farmers!</li>
            <li>Procure, Segregate & Deliver to customers!</li>
            <li>Get customers' review on products & Service!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Working;
