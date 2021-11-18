import { Container, Row, Col,ListGroup} from 'react-bootstrap';
import { Route, Routes, Link} from 'react-router-dom';
import {MdLocationOn,MdCall} from 'react-icons/md';
import {BsEnvelope,BsArrowRightShort} from 'react-icons/bs';
import '../assets/css/Home.css';

const Footerr = () => {
    return (
  <div className='footer'>
            <Container className='container '>
                <Row className='w3_footer_grids m-3'>
                    <Col className='w3_footer_grid m-3'>
                    <h3 className='footer-title' >   CONTACT </h3>
                    <ListGroup className='address' bg='inherit' id='footer-list1'  >
                        <ListGroup.Item  > <i> <MdLocationOn/></i>1234k Avenue, 4th block <span> New York City.</span> </ListGroup.Item>
                        <ListGroup.Item ><i><BsEnvelope/></i>  info@example.com</ListGroup.Item>
                        <ListGroup.Item><i><MdCall/></i> +1234 567 567</ListGroup.Item>
                       
                    </ListGroup>
                    </Col>
                    <Col className='w3_footer_grid m-3'>
                    <h3  className='footer-title' > INFORMATION </h3>
                    <ListGroup  variant="flush">
                        <ListGroup.Item className='light' > <BsArrowRightShort/><Link to=''>About Us</Link> </ListGroup.Item>
                        <ListGroup.Item className='light'>  <BsArrowRightShort/><Link to=''>Contact Us</Link></ListGroup.Item>
                        <ListGroup.Item className='light'>  <BsArrowRightShort/> <Link to=''> Short Codes </Link></ListGroup.Item>
                        <ListGroup.Item>  <BsArrowRightShort/> <Link to=''> FAQ's </Link></ListGroup.Item>
                        <ListGroup.Item>  <BsArrowRightShort/> <Link to=''> Special Products </Link></ListGroup.Item>
                       
                    </ListGroup>

                    </Col>
                    <Col className='w3_footer_grid m-3'>
                    <h3  className='footer-title' >   CATEGORY </h3>
                    <ListGroup  variant="flush">
                        <ListGroup.Item className='light' > <BsArrowRightShort/><Link to=''> Groceries</Link></ListGroup.Item>
                        <ListGroup.Item className='light'>  <BsArrowRightShort/><Link to=''>Household</Link></ListGroup.Item>
                        <ListGroup.Item className='light'>  <BsArrowRightShort/> <Link to=''> Personal Care </Link></ListGroup.Item>
                        <ListGroup.Item>  <BsArrowRightShort/> <Link to=''> Packaged Foods </Link></ListGroup.Item>
                        <ListGroup.Item>  <BsArrowRightShort/> <Link to=''> Beverages </Link></ListGroup.Item>
                       
                    </ListGroup>

                    </Col>
                    <Col className='w3_footer_grid m-3'>
                    <h3  className='footer-title' >   PROFILE </h3>
                    <ListGroup  variant="flush">
                        <ListGroup.Item className='light' > <BsArrowRightShort/><Link to=''>Store</Link> </ListGroup.Item>
                        <ListGroup.Item className='light'>  <BsArrowRightShort/><Link to=''>My Cart</Link></ListGroup.Item>
                        <ListGroup.Item className='light'>  <BsArrowRightShort/> <Link to=''> Login </Link></ListGroup.Item>
                        <ListGroup.Item>  <BsArrowRightShort/> <Link to=''> Create Account</Link></ListGroup.Item>
                       
                       
                    </ListGroup>
                    </Col>
                </Row>
                <div className="bottom-title">
				    <p className='text-secondary'>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
			    </div>
            </Container>
            </div>
         
            
       
    )
}

export default Footerr
