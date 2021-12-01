import { Container, Row, Col,ListGroup} from 'react-bootstrap';
import { Route, Routes, Link} from 'react-router-dom';
import {MdLocationOn,MdCall} from 'react-icons/md';
import {BsEnvelope,BsArrowRightShort} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai'
import '../assets/css/Home.css';

const Footerr = () => {
    return (
  <div className='footer'>
            <Container className='container'>
                <Row className='w3_footer_grids m-3'>



                    <Col className='w3_footer_grid m-3'>
                    <h3 className='footer-title' >   CONTACT </h3>
                    <ul className='cate' id='cate-item'>
                        <li> <i> <MdLocationOn/> </i> <a href='#'>  1234k Avenue, 4th block New York City.  </a> </li>
                        <li>   <i>  <BsEnvelope/> </i><a href='#'> info@example.com </a> </li>
                        <li> <i> <MdCall/>  </i><a href='#'>  +1234 567 567 </a> </li>
                    </ul>
                    </Col>




                    <Col className='w3_footer_grid m-3'>
                    <h3  className='footer-title' > INFORMATION </h3>
                    <ul className='cate'>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='#'> </a> About Us </li>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/Help'> </a> Contact Us</li>
                        <li> <i> <AiOutlineArrowRight/> </i> <a href='#'>  </a> Short Codes</li>
                        <li> <i> <AiOutlineArrowRight/> </i> <a href='#'>  </a> FAQ's </li>
                        <li>  <i> <AiOutlineArrowRight/> </i><a href='/product'>  </a> Special Products </li>
                       
                       
                    </ul>

                    </Col>
                    <Col className='w3_footer_grid m-3'>
                    <h3  className='footer-title' >   CATEGORY </h3>
                    <ul className='cate'>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/Groceries'> </a> Groceries </li>
                        <li> <i> <AiOutlineArrowRight/> </i>  <a href='/Household'> </a> Household</li>
                        <li>  <i> <AiOutlineArrowRight/> </i><a href='/Personalcare'>  </a> Personal Care</li>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/Packagedfoods'> </a> Packaged Foods</li>
                        <li> <i> <AiOutlineArrowRight/> </i><a href='/Beverages'>  </a> Beverages</li>
                       
                       
                    </ul>
                   

                    </Col>
                    <Col className='w3_footer_grid m-3'>
                    <h3  className='footer-title' >   PROFILE </h3>
                    <ul className='cate'>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/product'> </a> Store</li>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/Mycart'></a> My Cart</li>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/Login'> </a> Login</li>
                        <li>  <i> <AiOutlineArrowRight/> </i> <a href='/Create'> </a> Create Account</li>
                      
                       
                       
                    </ul>
                    
                    </Col>
                </Row>
                <div id="bottom-title">
				    <p className='text-secondary'>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			    </div>
            </Container>
            </div>
         
            
       
    )
}

export default Footerr
