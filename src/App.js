import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {

  const [mode, setMode] = useState('light');
  const [btnState, setBtnState] = useState('Dark');
  const [alert, setAlert] = useState(null);
  const body = document.querySelector('body');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  // const alert =;
  const modeChange = () => {
    if (mode === 'light') {
      setMode('dark');
      body.style.backgroundColor = "rgb(58, 54, 54)";
      body.style.color = "white";
      setBtnState('Light');
      showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setMode('light');
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setBtnState('Dark');
      showAlert('Light mode has been enabled', 'success');

    }

  }
  return (
    <>

      <Navbar title="Text Analyser" mode={mode} modeChange={modeChange} btnState={btnState} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
