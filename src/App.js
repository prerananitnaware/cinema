import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Allroutes from './routes/allroutes';

function App() {
  return (
    <div className="App" style={{padding:"1rem 2rem"}}>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
