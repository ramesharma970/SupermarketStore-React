import {Form,Button} from 'react-bootstrap';
import {BiRightArrow} from 'react-icons/bi';

const Logininfo = () => {
    return (
        <div className='login'>
            <div className='container'>
                <h2 className='login-title'>Login-info</h2>
                <div className='login-form-grids'>
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control type="email" placeholder="Email address" />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                           
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>   

                        <div className='forgot'>
                                <a href='#'>Forgot password ?</a> 
                        </div>                   
                        
                        <Button  id='register-button'  type="submit">
                                Submit
                            </Button>
                       
                           
                      
                        
                      
                    </Form>
                </div>
                <h4>For New People</h4>
                <p> 
                    <a href='/create'>Register here</a>
                    "(Or)  x   go back to "
                    <a href='/'> Home <span><BiRightArrow/></span> </a>
                </p>

            </div>
            
        </div>
    )
}

export default Logininfo
