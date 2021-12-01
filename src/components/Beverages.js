import Topheaderr from './Topheader';
import Headerr from './Header'
import Navbar1 from './Navbar';
import Footerr from './Footer';
import Bottomfooterr from './Bottomfooter';
import Breadcumb from './Breadcumb';
import Categories from './Categories';
import {Container,Row,Col} from 'react-bootstrap';
import { BsArrowUpCircle } from 'react-icons/bs';
import Cardcomponentt from './Cardcomponent';
import Paginationn from './Pagination';
import imagebv1 from '../assets/Images/bv1.png';
import imagebv2 from '../assets/Images/bv2.png';
import imagebv3 from '../assets/Images/bv3.png';
import imagebv4 from '../assets/Images/bv4.png';
import imagebv5 from '../assets/Images/bv5.png';
import imagebv6 from '../assets/Images/bv6.png';
import imagebv7 from '../assets/Images/bv7.png';
import imagebv8 from '../assets/Images/bv8.png';
import imagebv9 from '../assets/Images/bv9.png';

const Beverages = () => {
    return (
        <>
        <Topheaderr/>
            <Headerr/>
            <Navbar1/>  
            <Breadcumb subtitle='Beverages' /> 

        <div className='products'>
            
        
                <Container>
               
                <Row>
                <Col sm={4}>
                    <Categories/>
                </Col>
                    <Col sm={8}>

                        <div className='products-grid'>
                            <div className='products-grids'>
                                <div className='sorting'>
                                    <select id='country'>
                                        <option value='null' > Default Sorting</option>
                                        <option value='null' > Sort by Popularity</option>
                                        <option value='null' > Sort by average rating</option>
                                        <option value='null' > Sort by Price</option>
                                        

                                    </select>

                                </div>
                                <div className='sorting-left'>
                                    <select id='country1'>
                                        <option value='null' > Item on page 9</option>
                                        <option value='null' > Item on page 18</option>
                                        <option value='null' > Item on page 32</option>
                                        <option value='null' > All</option>
                                        

                                    </select>

                                </div>
                               <div className=''> <BsArrowUpCircle/> </div>

                            </div>

                        </div>
                    
                        <div className='agile_top_brands_grids'>
                            <Row>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv2} title='Baby lotion' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv3} title='Rash cream' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv4} title='Rash cream' dprice='$80.99' oprice='$105.00' />

                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='agile_top_brands_grids'>
                            <Row>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv5} title='Rash cream' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv6} title='Baby lotion' dprice='$30.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv7} title='Rash cream' dprice='$80.99' oprice='$105.00' />

                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </div>
                         <div className='agile_top_brands_grids'>
                            <Row>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv8} title='Baby lotion' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv9} title='Wipes gentle' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagebv1} title='Rash cream' dprice='$80.99' oprice='$105.00' />

                                    </div>
                                </div>
                                </Col>
                            </Row>
                        </div>

                        <div className='pagination'>
                          
                                 <Paginationn/>
                           
                            
                        </div>

                       
                    </Col>
                   
                </Row>
            
                </Container>
               
             
               
           
      </div> 
        <Footerr />
            <Bottomfooterr/>
        </>
    )
}

export default Beverages
