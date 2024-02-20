import React from 'react';
import './ConsumerDisplay.css';

const ConsumerDisplay = () => {
  return (
    <div className="box-container">
      {/* Card 1 */}
      <div className="box">
        <div className="card">
          <div className="small-card">
            <i className="fas fa-heart"></i>
            <i className="fas fa-share"></i>
          </div>
          <div className="image">
            <img src="barley.jpg" alt="Barley Crop" />
          </div>
          <div className="products-text">
            <p>May 8, 2019 • Field Crops</p>
            <h3>Barley Crop Cultivation In India.</h3>
            <div className="products-star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="https://iiwbr.icar.gov.in/wp-content/uploads/2018/02/EB-53-Barley-Cultivation-in-India-Pocket-Guide.pdf" className="btn">Read More</a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="box">
        <div className="card">
          <div className="small-card">
            <i className="fas fa-heart"></i>
            <i className="fas fa-share"></i>
          </div>
          <div className="image">
            <img src="paddy.jpg" alt="Paddy Crop" />
          </div>
          <div className="products-text">
            <p>January 9, 2018 • Field Crops</p>
            <h3>Paddy Cultivation Guide: Different Ways Of Rice Cultivation In India</h3>
            <div className="products-star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://www.toppr.com/ask/content/concept/rice-cultivation-in-india-205882/#:~:text=In%20India%2C%20rice%20is%20cultivated,not%20have%20supplementary%20irrigation%20facilities." className="btn">Read More</a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="box">
        <div className="card">
          <div className="small-card">
            <i className="fas fa-heart"></i>
            <i className="fas fa-share"></i>
          </div>
          <div className="image">
            <img src="majorcrops.jpg" alt="Major Crops" />
          </div>
          <div className="products-text">
            <p>May 23, 2019 • Field Crops</p>
            <h3>Major Field Crops: Different Types Of Field Crops In India</h3>
            <div className="products-star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <a href="https://www.sciencedirect.com/topics/agricultural-and-biological-sciences/field-crops#:~:text=Field%20crops%20include%20maize%2C%20sorghum,%2C%20pasture%2C%20and%20many%20others." className="btn">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsumerDisplay;
