// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PublicLink from './PublicLinks';
import {useState} from 'react'
import {Routes,Route} from 'react-router'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:link" element={<PublicLink/>}/>
    </Routes>
  );
}

export default App;
