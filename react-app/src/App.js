import React, {useState} from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [userName, setUserName] = useState('Dias');

  let handleChange = (e) => {
    console.log("logging");
    setUserName(e.target.value);
  }
  return (
    <div className="App">
      <UserInput change={e => handleChange(e)}></UserInput>
      <UserOutput userName={userName}></UserOutput>
      <UserOutput userName={userName}></UserOutput>
      <UserOutput userName={userName}></UserOutput>
    </div>
  );
}

export default App;
