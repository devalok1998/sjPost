import './App.css';
import 'rsuite/dist/rsuite.min.css';
import { Button, ButtonGroup, IconButton } from 'rsuite';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import {Gear,Message} from "@rsuite/icons";
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
      <Button appearance='ghost'>Hello World</Button>
      <ButtonToolbar>
        <Button size={'md'}>Medium</Button>
        <Button size={'sm'}>Small</Button>
        <Button size={'xs'}>Xtra S</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <IconButton icon={<Gear/>}/>
        <IconButton icon={<Message/>} color={'orange'} appearance={'primary'} placement={'right'} circle>Message</IconButton>
      </ButtonToolbar>
      <Button block disabled appearance={'primary'} loading>BUTTON</Button>
      <ButtonToolbar>
        <ButtonGroup>
          <Button>#1</Button>
          <Button>#2</Button>
          <Button>#3</Button>
          <Button>#4</Button>
          <Button>#5</Button>
          <Button>#6</Button>


        </ButtonGroup>
        <ButtonGroup>
          <Button appearance={'primary'}>#1</Button>
          <Button appearance={'primary'}>#2</Button>
          <Button appearance={'primary'}>#3</Button>
          <Button appearance={'primary'}>#4</Button>
          <Button appearance={'primary'}>#5</Button>
          <Button appearance={'primary'}>#6</Button>


        </ButtonGroup>
      </ButtonToolbar>
    </div>
    </CustomProvider>
  );
}

export default App;
