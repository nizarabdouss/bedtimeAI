import {NavBar, Home, Explore} from './components/index';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen">
          <div className="gradient-bg-welcome">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/Home" element={<Home/>}/>
              <Route exact path="/Explore/Browse" element={<Explore/>}/>;
            </Routes>
            
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
