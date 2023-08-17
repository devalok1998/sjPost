import './App.css';
import 'rsuite/dist/rsuite.min.css';
import { Button, ButtonGroup, IconButton } from 'rsuite';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import {Gear,Message, Unvisible, Visible} from "@rsuite/icons";
import { CustomProvider } from 'rsuite';
import React,{useState,useEffect} from 'react';

function App() {
  const [toggleMode, setToggleMode] = useState(localStorage.getItem("toggle-mode") === "true");

  useEffect(() => {
    localStorage.setItem("toggle-mode",toggleMode)
  
  }, [toggleMode]);

  const toggleButtonCall = () => {
    setToggleMode(!toggleMode)
  }
  

  return (
    <CustomProvider theme={toggleMode?'dark':'light'}>
    <div className="App">
      <ButtonToolbar>
      <IconButton onClick={toggleButtonCall} size={'lg'} appearance={'ghost'} icon={toggleMode?<Visible/>:<Unvisible/>}> {toggleMode ? "LIGHT":"DARK"} </IconButton>
      </ButtonToolbar>
    </div>
    </CustomProvider>
  );
}

export default App;
