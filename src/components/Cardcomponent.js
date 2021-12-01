import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image14 from '../assets/Images/14.png';
import Offer from '../assets/Images/offer.png';
import { BsStar,BsStarFill} from 'react-icons/bs';

const Cardcomponentt = ({image,title,dprice,oprice}) => {
    return (
        <div>
               <Card className='card-offer' style={{ width: '12rem'}}>
                        <Card.Img variant="top" src={image}/>
                        <Card.Body className='cardbody'>
                            <Card.Title className='card-title'>{title}</Card.Title>
                                <div className='stars'>
                                    <i> < BsStarFill/></i>
                                    <i>  <  BsStarFill/></i>
                                    <i> <  BsStarFill/></i>
                                    <i>  <BsStarFill/></i>                              
                                    < BsStar/>
                                </div>
                            <Card.Text className='card-text'>
                                <h6>{dprice} <del>  {oprice}</del> </h6>
                            </Card.Text> 
                            <Form>
                            <Button variant="primary" type='submit'>Add to cart</Button>
                            </Form>
                            <div className='offer'>
                                <img src={Offer} alt='offer' />
                            </div>

                        </Card.Body>
                </Card>
            
        </div>
    )
}

export default Cardcomponentt
