import logo from './plant.png';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function Increment(){
    return(
      <Button variant="contained" color="secondary" onClick={()=>{
        setCount(count => count+1)
      }}>Plus!</Button>
    )
  }

  function Decrement(){
    return(
      <Button variant="contained" color="secondary" onClick={()=>{
        setCount(count => count-1)
      }}>Minus!</Button>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className='body-class'>
        <h1>Hello to the worrllddee</h1>
        <h1>{count}</h1><p/>
        <Increment/>
        <Decrement/>
      </body>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
