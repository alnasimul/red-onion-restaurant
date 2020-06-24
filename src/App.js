import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Shop from './components/Shop/Shop';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Shop></Shop>
      <About></About>
    </div>
  );
}

export default App;
