
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Basket from './Components/Basket';
import LoginPage from './Components/LoginPage';

function App() {
  return (
   <>
    
    <Router>
          {/* <Link to='/home'></Link>
          <br></br>
          <Link to='/about'></Link>
          <br></br>
          <Link to='/header'></Link> */}
    
          <Routes>
          <Route path='/xyz' element={<div> <LoginPage/></div>} />
          <Route path='/about' element={<About/>} />
          <Route path='/header' element={<Header/>} />
          <Route path='/basket' element={<Basket/>} />
          <Route path='/' element={<div><Header/><Home/></div>} />

          </Routes> 
          </Router>
         
          
          
          </>
  );
}

export default App;
