// import styled from "styled-components";
import { useState } from 'react';
import './App.css';

import StartGame from './components/StartGame';
import Gameplay from './components/Gameplay';
function App() {
  const[isgamestarted,setgamestarted]=useState(false);
  // alert(isgamestarted)
  const togglegameplay=()=>{
    setgamestarted((prev)=>!prev);
  };

  return (
  <div>
    {isgamestarted ? <Gameplay /> : <StartGame toggle={togglegameplay}/>} 
    
    
  </div>
  )
}

export default App
