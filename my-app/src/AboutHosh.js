import React from 'react';
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import backgroundImage from './ProfHeadshot.jpg'; // Your image path

function AboutMe() {
  const heroSectionStyle = {
    backgroundImage: 'linear-gradient(to right, white, grey)',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row', // Maintain horizontal alignment
    justifyContent: 'space-between', // Distribute space
    alignItems: 'center',
    padding: '0 50px', // Padding on the sides
    position: 'relative' // Set relative for absolute positioning of children
  };

  const imageStyle = {
    maxHeight: '80%',
    maxWidth: '40%',
    objectFit: 'cover'
  };

  return (
    <div style={heroSectionStyle}>
      <NavigationBar /> {/* Include the NavigationBar */}
      <div>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Mohamed Hosh</h1>
        <p style={{ fontSize: '1.5rem' }}>Computer Science Student at The Ohio State University</p>
        <p style={{ fontSize: '1.2rem' }}>Exploring the Intersection of Technology and Innovation</p>
      </div>
      <img src={backgroundImage} alt="Abdirahman Moualem" style={imageStyle} />
    </div>
  );
}

export default AboutMe;