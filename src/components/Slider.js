import {Carousel} from 'react-bootstrap';
import Slide1 from '../assets/Images/b1.jpg';
import Slide2 from '../assets/Images/b3.jpg';
import Slide3 from '../assets/Images/b1.jpg';

const Sliderr = () => {
    return (
        <div>
             <Carousel>
            <Carousel.Item interval={1200}>
                <a>
                <img
                className="d-block w-100"
                src={Slide1}
                alt="First slide"
                />
                </a>
               
                
             </Carousel.Item>
             <Carousel.Item interval={2000}>
                <a>
                <img
                className="d-block w-100"
                src={Slide2}
                alt="second slide"
                />
                </a>
               
               
             </Carousel.Item>
             <Carousel.Item interval={1200}>
                 <a>
                 <img
                className="d-block w-100"
                src={Slide3}
                alt="third slide"
                />

                 </a>
               
               
             </Carousel.Item>
             

            </Carousel>
            
        </div>
    )
}

export default Sliderr
