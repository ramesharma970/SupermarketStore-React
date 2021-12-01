import {Form,Button} from 'react-bootstrap';


const Register = () => {
    return (
        <div className='register'>
            <div className='container'>
                <h2 className='register-title'>
                    Register here
                </h2>
                <div className='login-form-grids'>
                    <h5> Profile Information</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          
                            <Form.Control type="text" placeholder="First Name" />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Subscribe to Newsletter" />
                        </Form.Group>
                        
                        
                       
                    </Form>
                    <h6> Login Information</h6>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control type="email" placeholder=" Email address" />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                           
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                           
                           <Form.Control type="password" placeholder="Confirm Password" />
                       </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I accept the terms and conditions" />
                        </Form.Group>
                        
                        <Button  id='register-button'  type="submit">
                                Submit
                            </Button>
                       
                           
                      
                        
                      
                    </Form>
                </div>

                <div className='register-home'>
                    <a href='/'>Home </a>

                </div>

            </div> 
            
        </div>
    )
}

export default Register
