import React from 'react';
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import AboutHosh from './AboutHosh';
import MoreAboutMe from './MoreAboutMe'; // Import the GetToKnowMe component
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar /> {/* Include the NavigationBar component */}
      <AboutHosh />
     <MoreAboutMe /> {/* Include the GetToKnowMe component */}
      {/* Other components or content */}
    </div>
  );
}

export default App;