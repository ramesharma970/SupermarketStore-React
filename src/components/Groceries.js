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
import image14 from '../assets/Images/14.png';
import image15 from '../assets/Images/15.png';
import image16 from '../assets/Images/16.png';
import image17 from '../assets/Images/17.png';

const Groceries = () => {
    return (
        <>
        <Topheaderr/>
            <Headerr/>
            <Navbar1/>  
            <Breadcumb subtitle='Groceries' /> 

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
                                    <Cardcomponentt image={image14} title='Toor-dal' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={image15} title='Moong dal' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={image16} title='Channa' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={image17} title='Aarhar daal' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={image14} title='Toor daal' dprice='$30.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={image15} title='Moong dal' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={image16} title='Channa' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={image17} title='Arhar daal' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={image14} title='Toor daal' dprice='$80.99' oprice='$105.00' />

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

export default Groceries
