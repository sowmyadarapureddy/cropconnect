// import React from 'react';
// import './CropConnect.css'; // Create a separate CSS file for styling
// import { Link } from 'react-router-dom';

// const CropConnect = () => {
//   return (
//     <div>
//       <div className="navbar">
//         <div>CROPCONNECT</div>
//         <div>
//           <Link to="#">Mobile App</Link>
//           <Link to="/working">Working</Link>
//           <Link to="/farmer-details">Farmer</Link>
//           <Link to="#">Consumer</Link>
//           <Link to="#">Contact Us</Link>
//         </div>
//       </div>

//       <div className="gradient-container">
//         <div className="farming-images">
//           <img
//             src="https://th.bing.com/th/id/OIP.CCuvoPfNQuHgnsEU70bN6gHaFi?w=245&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//             alt="Farming Image 1"
//           />
//           <img
//             src="https://images.indianexpress.com/2020/05/farmers-759.jpg?w=600"
//             alt="Farming Image 2"
//           />
//           <img
//             src="https://imgs.mongabay.com/wp-content/uploads/sites/30/2020/05/12105507/Banner-2.jpg"
//             alt="Farming Image 3"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww"
//             alt="Farming Image 4"
//           />
//         </div>

//         <div className="welcome-section">
//           <div className="welcome-text">
//             Welcome to <br />
//             "CropConnect"
//           </div>

//           <div className="description">
//             Explore a vibrant online platform that bridges the gap between farmers and consumers. CropConnect brings you fresh, locally sourced produce directly from the farmers. Support local agriculture and enjoy the quality of farm-fresh products delivered to your doorstep. Connect with farmers and consumers in a seamless way, making the agriculture ecosystem more sustainable. Join CropConnect today and experience the future of fresh produce!
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CropConnect;
import React from 'react';
import ReactDOM from 'react-dom';
import './CropConnect.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const CropConnect = () => {
  return (
    <div>
      {/* <div className="navbar">
        <div>CROPCONNECT</div>
        <div>
        <Link to="#">Mobile App</Link>
      <Link to="/working">Working</Link>
          <Link to="/farmer-details">Farmer</Link>
          <Link to="#">Consumer</Link>
         <Link to="#">Contact Us</Link>
        </div>
      </div> */}

<Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">CROPCONNECT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/mobile">Mobile App</Nav.Link>
          <Nav.Link as={Link} to="/working">Working</Nav.Link>
          <Nav.Link as={Link} to="/login2">Farmer</Nav.Link>
          <Nav.Link as={Link} to="/login">Consumer</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
\
      
      

      <div className="gradient-container">
        <div className="farming-images">
          <img
            src="https://th.bing.com/th/id/OIP.CCuvoPfNQuHgnsEU70bN6gHaFi?w=245&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Farming Image 1"
          />
          <img
            src="https://images.indianexpress.com/2020/05/farmers-759.jpg?w=600"
            alt="Farming Image 2"
          />
          <img
            src="https://imgs.mongabay.com/wp-content/uploads/sites/30/2020/05/12105507/Banner-2.jpg"
            alt="Farming Image 3"
          />
          <img
            src="https://images.unsplash.com/photo-1623211269755-569fec0536d2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww"
            alt="Farming Image 4"
          />
        </div>

        <div className="welcome-section">
          <div className="welcome-text">
            Welcome to <br />
            "CropConnect"
          </div>

          <div className="description">
            Explore a vibrant online platform that bridges the gap between farmers and consumers. CropConnect brings you fresh, locally sourced produce directly from the farmers. Support local agriculture and enjoy the quality of farm-fresh products delivered to your doorstep. Connect with farmers and consumers in a seamless way, making the agriculture ecosystem more sustainable. Join CropConnect today and experience the future of fresh produce!
          </div>
        </div>
      </div>
    </div>
  );
};


export default CropConnect;

