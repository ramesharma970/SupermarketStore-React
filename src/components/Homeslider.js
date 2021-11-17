import {Carousel} from 'react-bootstrap';
import Slide1 from '../assets/Images/11.jpg';
import Slide2 from '../assets/Images/22.jpg';
import Slide3 from '../assets/Images/44.jpg';
const Homesliderr = () => {
    return (
        <div className=''>
            <Carousel>
            <Carousel.Item interval={1200}>
                <img
                className="d-block w-100"
                src={Slide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Buy Rice Products Are Now On Line With Us</h3>
               
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item interval={1200}>
                <img
                className="d-block w-100"
                src={Slide2}
                alt="second slide"
                />
                <Carousel.Caption>
                <h3>Whole Spices Products Are Now On Line With Us</h3>
               
                </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item interval={1200}>
                <img
                className="d-block w-100"
                src={Slide3}
                alt="third slide"
                />
                <Carousel.Caption>
                <h3>Whole Spices Products Are Now On Line With Us</h3>
               
                </Carousel.Caption>
             </Carousel.Item>
             

            </Carousel>

            
        </div>
    )
}

export default Homesliderr
