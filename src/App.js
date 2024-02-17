// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PublicLink from './PublicLinks';
// import {useState} from 'react'
import {Routes,Route} from 'react-router'
import Navbar from './components/navbar';
// import Editor from './CodeEditor/newEditor';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:link" element={<PublicLink/>}/>
    </Routes>
    </>
  );
}

export default App;
