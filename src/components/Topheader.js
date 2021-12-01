import { Link} from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';
import '../assets/css/Home.css';
import {Button, Form,Modal} from 'react-bootstrap';
import { useState } from 'react';


const Topheaderr = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       
            <div className='agileits_header'>
             <div className='container'>        
                <div class='w3l_offers'>
                    <p>SALE UP TO 70% OFF. USE CODE "SALE70%" . 
                         <span>
                        <Link to='/product' className='linkone'>SHOP NOW</Link>
                        </span>
                 </p>

                </div>
                <div className='agile_login'>
                    <ul>
                        <li> <Link to='/create' className='linkedtwo' >Create Account</Link>  </li>
                        <li><Link  to='/Login'  className='linkedtwo' >Login</Link></li>
                        <li><Link  to='/Help'  className='linkedtwo'>Help</Link></li>
                    </ul>
                </div>
                <div className='product_list_header'>
                   
                    <Button  variant='secondary' onClick={handleShow}>
                         <i><MdAddShoppingCart />  </i>
                    </Button> 
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>add to cart details </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                        </Modal.Footer>
                    </Modal>

                  
                
                </div>
               
   
            </div>



            </div>
        
    )
}

export default Topheaderr
