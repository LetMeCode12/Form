import { ThemeProvider } from 'styled-components';
import React,{useState, useEffect} from 'react';
import ShipsForm from './components/forms/shipsForm/ShipsForm';
import SubmitModal from './components/modals/submitModal/SubmitModal';


 const LightTheme = {
    pageBackground:"white",
    formBackground:"rgba(0,0,0,.1)",
    textColor:""
  }

  const DarkTheme = {
    pageBackground:"#151515",
    formBackground:"rgba(255,255,255,.5)",
    textColor:""
  }

  const themes ={
    light:LightTheme,
    dark:DarkTheme
  }

function App() {

  const [theme,setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <ShipsForm setTheme={setTheme}/>
      <SubmitModal/>
    </ThemeProvider>
  );
}

export default App;
