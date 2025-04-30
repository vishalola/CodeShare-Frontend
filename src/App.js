import './App.css';
import Home from './Home';
import PublicLink from './PublicLinks';
import {Routes,Route} from 'react-router'
import Navbar from './components/navbar';
import CreateRoom from './CodeRoom/createRoom';
import HandleRoom from './CodeRoom/handleRoom';
import CodeRoom from './CodeRoom';
import CodeCompile from './CodeCompile';
function App() {
  
  return (
    <div className='flex flex-col h-screen'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:link" element={<PublicLink/>}/>
      <Route path="/newRoom" element={<CreateRoom/>}/>
      <Route path="/rooms/:roomID" element={<HandleRoom/>}/>
      <Route path='/dev' element={<CodeRoom/>}/>
      <Route path='/compile' element={<CodeCompile/>}/>
    </Routes>
    {/* <CodeRoom/> */}
    </div>
  );
}

export default App;
