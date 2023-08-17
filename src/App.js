import './App.css';
import 'rsuite/dist/rsuite.min.css';
import { Button, ButtonGroup, IconButton,Nav,Navbar } from 'rsuite';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import {Gear,Message, Others, Unvisible, Visible} from "@rsuite/icons";
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
    <Navbar appearance={'inverse'}>
      <Navbar.Brand>
        THE BEST WAY TO COME HERE
      </Navbar.Brand>
      <Nav>
      <Nav.Item icon={<Others/>}>Home </Nav.Item>
        <Nav.Item icon={<Others/>}>Modal </Nav.Item>
        <Nav.Menu title={"About"}>
        <Nav.Item icon={<Others/>}>Home </Nav.Item>
        <Nav.Item icon={<Others/>}>Modal </Nav.Item>
        <Nav.Item icon={<Others/>}>Home </Nav.Item>
        <Nav.Item icon={<Others/>}>Modal </Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item>
      <ButtonToolbar>
      <IconButton onClick={toggleButtonCall} size={'lg'} appearance={'ghost'} icon={toggleMode?<Visible/>:<Unvisible/>}> {toggleMode ? "LIGHT":"DARK"} </IconButton>
      </ButtonToolbar>
      </Nav.Item>
      </Nav>
    </Navbar>
    
   
    </CustomProvider>
  );
}

export default App;
