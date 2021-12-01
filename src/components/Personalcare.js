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
import imagepc1 from '../assets/Images/pc1.png';
import imagepc2 from '../assets/Images/pc2.png';
import imagepc3 from '../assets/Images/pc3.png';
import imagepc4 from '../assets/Images/pc4.png';
import imagepc5 from '../assets/Images/pc5.png';
import imagepc6 from '../assets/Images/pc6.png';
import imagepc7 from '../assets/Images/pc7.png';
import imagepc8 from '../assets/Images/pc8.png';
import imagepc9 from '../assets/Images/pc9.jpg';

const Personalcare = () => {
    return (
        <>
        <Topheaderr/>
            <Headerr/>
            <Navbar1/>  
            <Breadcumb subtitle='Personal Care' /> 

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
                                    <Cardcomponentt image={imagepc1} title='Baby lotion' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepc2} title='Rash cream' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepc3} title='Rash cream' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={imagepc4} title='Rash cream' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepc5} title='Baby lotion' dprice='$30.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepc6} title='Rash cream' dprice='$80.99' oprice='$105.00' />

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
                                    <Cardcomponentt image={imagepc7} title='Baby lotion' dprice='$35.99' oprice='$55.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepc8} title='Wipes gentle' dprice='$30.99' oprice='$45.00' />

                                    </div>
                                </div>
                                </Col>
                                <Col>
                                <div className='column'>
                                    <div className='agile_top_brand_left_grid'>
                                    <Cardcomponentt image={imagepc9} title='Rash cream' dprice='$80.99' oprice='$105.00' />

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

export default Personalcare
