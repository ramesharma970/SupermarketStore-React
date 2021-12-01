import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import {BsEnvelopeFill} from 'react-icons/bs';
import {MdCall} from 'react-icons/md';
import {FaFacebook} from 'react-icons/fa';
import {GiTorch} from 'react-icons/gi';
import {CgTwitter} from 'react-icons/cg';

const Contact = () => {
    return (
        <div className='about'>
  
            <Container  className='w3_agileits_contact_grids'>
                <Row>
                    <Col md={6} className=' w3_agileits_contact_grid_left'>
                    <div className="agile_map">
                            <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917'} style={{border:'0'}}>

                            </iframe>
                    </div>
                    <div className='agileits_w3layouts_map_pos'>
                        <div className='agileits_w3layouts_map_pos1'>
                            <h3>Contact Info </h3>
                            <p>1234k Avenue, 4th block, New York City.</p>
                            <ul class="wthree_contact_info_address">
							<li><i><BsEnvelopeFill/></i><a href="mailto:info@example.com">info@example.com</a></li>
							<li><i><MdCall/></i>+(0123) 232 232</li>
                            </ul>
                            <div class="w3_agile_social_icons w3_agile_social_icons_contact">
                                <ul>
                                    <li><a href="#" className='icon icon-cube'> <FaFacebook/>  </a></li>
                                    <li><a href="#"  className='icon icon-cube' >  <GiTorch/> </a></li>
                                    <li><a href="#"  className='icon icon-cube'><CgTwitter/></a></li>
                                </ul>
						</div>
                        </div>
                    </div>
                    </Col>
                    <Col md={6}>
                        <div className='w3_agileits_contact_grid_right'>
                            <h4 class="w3_agile_header">Leave a Message</h4>
                            <Form className='contact-form'>
                                <Form.Group className="mb-3 contact-form-group" controlId="formBasicEmail">
                                
                                    <Form.Control type="text" placeholder="Your name" />
                                
                                </Form.Group>

                                <Form.Group className="mb-3  contact-form-group" controlId="formBasicPassword">
                                
                                    <Form.Control type="email" placeholder="Your email" />
                                </Form.Group>

                                <Form.Group  className="mb-3  contact-form-group" controlId="formBasicMessage">
                                <Form.Control id='textareaheight' as="textarea" type='text' name="message" placeholder='Your message here' />
                                </Form.Group>
                                
                                <Button id='help-button' variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
           
            
        </div>
    )
}

export default Contact
