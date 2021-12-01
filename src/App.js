import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Product';
import Createaccount from './components/Creatcontact';
import Login from './components/Login';
import Help from './components/Help';
import Groceries from './components/Groceries';
import Household from './components/Household';
import Personalcare from './components/Personalcare';
import Packagedfoods from './components/Packagedfoods';
import Beverages from './components/Beverages';
import Gourmet from './components/Gourmet';
import Mycart from './components/Mycart';
import Apitest from './components/Apitest';
import Learnreact from './components/Learnreact';
import Effectapi from './components/Effectapi';
function App() {

  return (
  
      <div className="App">
   
       
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
        <Routes>   
                    <Route path='/' element={  <Home /> }/> 
                    <Route path='/product' element ={<Products/>}/>
                    <Route path='/create' element ={<Createaccount/>}/>
                    <Route path='/Login' element ={<Login/>}/>
                    <Route path='/Help' element ={<Help/>}/>
                    <Route path='/Groceries' element={<Groceries/>}/>
                    <Route path='/Household' element={<Household/>}/>
                    <Route path='/Personalcare' element={<Personalcare/>}/>
                    <Route path='/Packagedfoods' element={<Packagedfoods/>}/>
                    <Route path='/Beverages' element={<Beverages/>}/>
                    <Route path='/Gourmet' element={< Gourmet/>}/>
                    <Route path='/Mycart' element={< Mycart/>}/>
                    <Route path='/Apitest' element={< Apitest/>}/>
                    <Route path='/Learnreact' element={< Learnreact/>}/>
                    <Route path='/Effectapi' element={< Effectapi/>}/>

                    
                   



        </Routes>
    </div>
   
  );
}

export default App;
