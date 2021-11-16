import { Route, Routes, Link} from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import '../assets/css/Home.css';

const Topheaderr = () => {
    return (
        
            <div className='agileits_header'>
             <div className='container'>        
                <div class='w3l_offers'>
                    <p>SALE UP TO 70% OFF. USE CODE "SALE70%" .  <span>
                 <Link to='' className='linkone'>SHOP NOW</Link></span></p>

                </div>
                <div className='agile_login'>
                    <ul>
                        <li> <Link to='' className='linkedtwo' >Create Account</Link>  </li>
                        <li><Link  to=''  className='linkedtwo' >Login</Link></li>
                        <li><Link  to=''  className='linkedtwo'>Help</Link></li>
                    </ul>
                </div>
                <div className='product_list_header'>
                    <MdAddShoppingCart />


                </div>
                <Routes>    
                    <Route path=''/>

                </Routes>
   
            </div>



            </div>
        
    )
}

export default Topheaderr
