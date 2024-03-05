import './App.css';
import React,{useState} from 'react';
const Web3 = require('web3');
window.ethereum.request({ method: 'eth_requestAccounts' });
const web3 = new Web3(window.ethereum);

function App() {
  const[passwordClearText,setPasswordClearText] = useState('');
  const[passwordClearTextBasic,setPasswordClearTextBasic] = useState('');
  const[passwordClearTextTailor,setPasswordClearTextTailor] = useState('');

  const handlePasswordClearTextChanged = (event) =>{
    setPasswordClearText(event.target.value);

  }
  const passwordClearTextBasicChanged = (event) =>{
    setPasswordClearTextBasic(event.target.value);
  }

  const passwordClearTextTailorChanged = (event) =>{
    setPasswordClearTextTailor(event.target.value);
  }
  const [bodyMapBasic,setBodyMapBasic] = useState({
    Height:'',Weight:''
  });
  const [bodyMapTailor,setBodyMapTailor] = useState({
    Waist:'',Legs:'',Arms:'',Posture:''
  });
  const handleBodyMapBasicChange = (e,key) =>{
    setBodyMapBasic({...bodyMapBasic,[key]:e.target.value});
  }
  const handleBodyMapTailorChange = (e,key) =>{
    setBodyMapTailor({...bodyMapTailor,[key]:e.target.value});
  }
  


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
