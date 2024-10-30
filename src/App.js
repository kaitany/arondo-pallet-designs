import React from 'react';
import Header from './components/Header';   // Importing the Header component
import About from './components/About';     // Importing the About component
import MeetTheArtisan from './components/MeetTheArtisan';     // Importing the Meet_the_Artisan component
import Portfolio from './components/Portfolio'; // Importing Portfolio component
import Contact from './components/Contact'; // Importing Contact component

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Embedding the Header component */}
      <Header />

      <main className="p-8">
        {/* Embedding About, Portfolio, and Contact components */}
        <About />
        <MeetTheArtisan/>
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;

