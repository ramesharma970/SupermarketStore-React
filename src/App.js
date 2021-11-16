
import './App.css';
import { Route, BrowserRouter as Router, Routes, Switch, Link} from 'react-router-dom'
import Home from './components/Home';



function App() {

  return (
   <Router>
      <div className="App">
      <Home />
       
      {/* <nav className='navbar'>
        <ul className='navbar-nav'>
          <li> <Link to='/' className='nav-link'>Home</Link> </li>
          <li> <Link to='/about' className='nav-link'>About</Link> </li>        
        </ul>

      </nav>
      <Routes>
      
        <Route path='/about' element={<About />} />      
      </Routes>
       */}
    </div>
   </Router>
  );
}

export default App;
