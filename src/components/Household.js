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
import imagehh1 from '../assets/Images/hh1.png';
import imagehh2 from '../assets/Images/hh2.png';
import imagehh3 from '../assets/Images/hh3.png';
import imagehh4 from '../assets/Images/hh4.png';
import imagehh5 from '../assets/Images/hh5.png';
import imagehh6 from '../assets/Images/hh6.png';
import imagehh7 from '../assets/Images/hh7.png';
import imagehh8 from '../assets/Images/hh8.png';
import imagehh9 from '../assets/Images/hh9.png';


const Household = () => {
    return (
        <>
        <Topheaderr/>
            <Headerr/>
            <Navbar1/>  
            <Breadcumb subtitle='Household' /> 

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
                                    <Cardcomponentt image={imagehh1} title='Fry pan' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagehh2} title='Cookware' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagehh3} title='Dosa Tawa' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={imagehh4} title='Flask' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagehh5} title='Kadai idly' dprice='$30.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagehh6} title='Breakfast pan' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={imagehh7} title='Elite set' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagehh8} title='Coated pan' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagehh9} title='Tadka pan' dprice='$80.99' oprice='$105.00' />

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

export default Household
