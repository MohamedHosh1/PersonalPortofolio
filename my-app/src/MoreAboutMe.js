import React from 'react';
import './MoreAboutMe.css'; // Assuming you have a separate CSS file

function MoreAboutMe() {
  const sectionStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    margin: '30px 0',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    borderLeft: '5px solid #d32f2f',
    position: 'relative',
  };

  const headingStyle = {
    color: '#2f7da1',
    margin: '0 0 15px 0',
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 'bold',
    fontSize: '1.8rem'
  };

  const paragraphStyle = {
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
    lineHeight: '1.7',
    marginBottom: '20px'
  };

  return (
    <div className="container">
      <div className="journeySection" style={sectionStyle}>
        <h2 className="largeHeading" style={headingStyle}>My Journey</h2>
        <p style={paragraphStyle}>
        I fell in love with coding as a teenager. Now, at The Ohio State University studying Computer Science, I'm combining my love for detailed engineering with the creativity of coding. It's all about tackling tough problems and finding innovative solutions.
        </p>
        <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="325" height="193" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left">
          <path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path>
        </svg>
        </div>
      </div>
      <div className="column">
      <div className="svgContainer">
      <svg xmlns="http://www.w3.org/2000/svg" width="325" height="193" viewBox="0 0 325 193" data-shape="true" aria-hidden="true" id="cs-pattern-left">
          <path fill="none" stroke="#4831d4" stroke-miterlimit="50" stroke-width="2" d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"></path>
        </svg>
        </div>
        <h2 className="largeHeading" >Skills</h2>
        <p style={paragraphStyle}>
          I've developed a strong skill set in programming languages like Java, JavaScript, Python, R, and am skilled in software tools such as MATLAB, SOLIDWORKS, along with Arduino coding and wiring.
        </p>
        
      </div>
    </div>
  );
}

export default MoreAboutMe;