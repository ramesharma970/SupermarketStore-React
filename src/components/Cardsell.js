import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offer from '../assets/Images/offer.png';
import { BsStar,BsStarFill} from 'react-icons/bs';

const Cardsell = ({image, title,dprice,oprice,width}) => {
    return (
        <div>
            <Card className='card-offer' style={{ width: {width}}}>
                        <Card.Img variant="top" src={image}/>
                        <Card.Body className='cardbody'>
                            <Card.Title>{title}</Card.Title>
                                <div className='stars'>
                                    <i> < BsStarFill/></i>
                                    <i>  <  BsStarFill/></i>
                                    <i> <  BsStarFill/></i>
                                    <i>  <BsStarFill/></i>                              
                                    < BsStar/>
                                </div>
                            <Card.Text>
                                <h5>{dprice} <del>  {oprice}</del> </h5>
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

export default Cardsell
