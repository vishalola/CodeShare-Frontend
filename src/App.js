// import logo from './logo.svg';
import './App.css';
import CodeEditor from './CodeEditor';
import CodeInput from './CodeInput';
import PasteOption from './PasteOptions';
import PublicPaste from './PublicPaste';
import PublicLink from './PublicLinks';
import {useState} from 'react'
import {Routes,Route} from 'react-router'
function App() {
  let code="vector<int>a(n,0);"
  return (

    // <div className="">
    //   {/* <CodeEditor/> */}
    //   <CodeInput />
    //   <div className='lg:flex-row flex flex-col'>
    //   <PasteOption/>
    //   <PublicPaste/>
    //   </div>
    // </div>
    <Routes>
      <Route path="/" element={<CodeInput/>}/>
      <Route path="/:link" element={<PublicLink/>}/>
    </Routes>
  );
}

export default App;
