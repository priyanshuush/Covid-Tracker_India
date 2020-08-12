import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes/Routes';
import { StyleRoot } from 'radium';

function App() {

  return(
    <StyleRoot>
    <BrowserRouter basename="https://pritishnagpal.github.io/Covid-Tracker_India" >
   
      <Routers />
     
    </BrowserRouter>
    </StyleRoot>
  )

}

export default App;

