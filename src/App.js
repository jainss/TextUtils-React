import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alerts from './components/Alerts';
// import About from './components/About';s
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const tooglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#191d2d";
      showAlert("The Dark Mode is Enable","success ");   
    }else{
      setmode('light'); 
      document.body.style.backgroundColor="white";
      showAlert("The Light Mode is Enable","success");
    }
  }
  return (
    <>
   
    {/* <Router> */}
    <Navbar title="Test-Utils" Abouttext="Abouts" mode={mode} tooglemode={tooglemode} />
    <Alerts alert={alert}/>
    <div className="container my-3" >
    {/* <Switch> */}
      {/* <Route exact path="/about"> */}
      {/* <div className='container my-3'><About/></div> */}
      {/* </Route> */}
      {/* <Route exact path="/"> */}
    <TextArea showAlert={showAlert} heading="Enter The Text in the Area" mode={mode}/>
      {/* </Route> */}
    {/* </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
