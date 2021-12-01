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
import imagepf1 from '../assets/Images/pf1.png';
import imagepf2 from '../assets/Images/pf2.png';
import imagepf3 from '../assets/Images/pf3.png';
import imagepf4 from '../assets/Images/pf4.png';
import imagepf5 from '../assets/Images/pf5.png';
import imagepf6 from '../assets/Images/pf6.png';
import imagepf7 from '../assets/Images/pf7.png';
import imagepf8 from '../assets/Images/pf8.png';
import imagepf9 from '../assets/Images/pf9.png';


const Packagedfoods = () => {
    return (
        <>
        <Topheaderr/>
            <Headerr/>
            <Navbar1/>  
            <Breadcumb subtitle='Packaged Foods' /> 

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
                                    <Cardcomponentt image={imagepf9} title='Baby lotion' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepf1} title='Rash cream' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepf2} title='Rash cream' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={imagepf3} title='Rash cream' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepf4} title='Baby lotion' dprice='$30.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepf5} title='Rash cream' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={imagepf6} title='Baby lotion' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepf7} title='Wipes gentle' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepf8} title='Rash cream' dprice='$80.99' oprice='$105.00' />

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

export default Packagedfoods
