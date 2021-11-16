import { Route, Routes, Link} from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import '../assets/css/Home.css';

const Headerr = () => {
    return (
        <div>
               <div className='logo_products'>
                <div className='container'>
                    <div className='w3ls_logo_products_left1'>
                        <ul className='phone_email'>
                            <li>
                                <i><BsFillTelephoneFill /></i> Order online or call us : (+0123) 234 567
                            </li>

                        </ul>
                    </div>
                    <div className='"w3ls_logo_products_lef'>
                        <h1> <Link to='' className='linked3' >SUPER MARKET </Link></h1>
                    </div>
                    <div className='w3l_search'>
                        <form action='#' method='POST'>
                            <input type='text' name='Search' placeholder='Search for a product' />
                            <button type='submit' > < BiSearch/> </button>

                        </form>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Headerr
