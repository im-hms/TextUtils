import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState('light')
  const [btnMode, setBtnMode] = useState('primary')
  // ============= states for disable nav button color =================
  const [btnShow, setBtnShow] = useState('')
  const [btnShow2, setBtnShow2] = useState('')
  const [btnShow3, setBtnShow3] = useState('')
  const [btnShow4, setBtnShow4] = useState('')
  // ============= states for disable nav button color =================
  // ============= states for change my nav button color =================
  const [color, setcolor] = useState('#191b1c')
  const [color2, setcolor2] = useState('#125555')
  const [color3, setcolor3] = useState('#091a08')
  const [color4, setcolor4] = useState('#b74559')
  // ============= states for change my nav button color =================

  // ---------- Function for alert -------------
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  // ---------- Function for alert -------------
  // ---------- Function to toggle dark mode -------------
  const toggle = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#191b1c'
      showAlert('Dark Mode is Enabled', 'success')
      setBtnMode('dark')
      setcolor('white')
      setBtnShow2('d-none')
      setBtnShow3('d-none')
      setBtnShow4('d-none')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode is Disabled', 'success')
      setBtnMode('primary')
      setcolor('#191b1c')
      setBtnShow2('')
      setBtnShow3('')
      setBtnShow4('')
    }
  }
  // ---------- Function to toggle dark mode -------------
  // ---------- Function to toggle dark mode 2-------------
  const toggle2 = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#125555'
      showAlert('Dark Mode is Enabled', 'success')
      setBtnMode('info')
      setcolor2('white')
      setBtnShow('d-none')
      setBtnShow3('d-none')
      setBtnShow4('d-none')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode is Disabled', 'success')
      setBtnMode('primary')
      setcolor2('#125555')
      setBtnShow('')
      setBtnShow3('')
      setBtnShow4('')
    }
  }
  // ---------- Function to toggle dark mode 2 -------------
  // ---------- Function to toggle dark mode 3-------------
  const toggle3 = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#091a08'
      showAlert('Dark Mode is Enabled', 'success')
      setBtnMode('success')
      setcolor3('white')
      setBtnShow('d-none')
      setBtnShow2('d-none')
      setBtnShow4('d-none')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode is Disabled', 'success')
      setBtnMode('primary')
      setcolor3('#091a08')
      setBtnShow('')
      setBtnShow2('')
      setBtnShow4('')
    }
  }
  // ---------- Function to toggle dark mode 3 -------------
  // ---------- Function to toggle dark mode 4-------------
  const toggle4 = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#b74559'
      showAlert('Dark Mode is Enabled', 'success')
      setBtnMode('danger')
      setcolor4('white')
      setBtnShow('d-none')
      setBtnShow2('d-none')
      setBtnShow3('d-none')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode is Disabled', 'success')
      setBtnMode('primary')
      setcolor4('#b74559')
      setBtnShow('')
      setBtnShow2('')
      setBtnShow3('')
    }
  }
  // ---------- Function to toggle dark mode 4 -------------
  
  return (
    <>
    <Navbar title= "TextUtils" btnShow = {btnShow} btnShow2 = {btnShow2} btnShow3 = {btnShow3} btnShow4 = {btnShow4} color = {color} color2 = {color2} color3 = {color3} color4 = {color4}  about= "About" mode ={mode} toggle = {toggle} toggle2 = {toggle2} toggle3 = {toggle3} toggle4 = {toggle4} />
    <Alert alert = {alert} />
    <div className='container my-3'>
      <TextForm showAlert = {showAlert} btnMode ={btnMode} heading= "Enter Text below to analyze" mode ={mode}/>
    </div>
      {/* <About /> */}
    </>
  );
}

export default App;
