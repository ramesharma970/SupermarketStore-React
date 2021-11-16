import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Route, Routes, Link} from 'react-router-dom';
import '../assets/css/Home.css';


const Navbar1 = () => {
    return (
        <div className='navigation-agileits'>
             <Container>
            <Navbar classname='navbar' expand="lg">
                   
                       
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav me-auto nav">
                           <Nav.Link  className='navlink linkfour' href="#home">Home</Nav.Link> 
                            
                            <NavDropdown  className='dropdown' style={{ color: '#fff !important'}} title="Groceries" id="basic-nav-dropdown">
                                <h6 className='nav-title'> All Groceries </h6>
                                <NavDropdown.Divider />
                               <NavDropdown.Item href="#">Dals & Pulse</NavDropdown.Item> 
                                <Link to=''><NavDropdown.Item href="#">Almonds</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Cashews</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Dry Fruit</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Mukhwas</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Rice and Rice Products</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title="Household" id="basic-nav-dropdown">
                                <h6> All Household </h6>
                                <NavDropdown.Divider />
                                <Link to=''><NavDropdown.Item href="#">Cookware</NavDropdown.Item></Link>   
                                <Link to=''><NavDropdown.Item href="#">Dust Pans</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Scrubbers</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Dust Cloth</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Mops</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Kitchenware</NavDropdown.Item></Link>
                            </NavDropdown> 

                            <NavDropdown title="Personal Care" id="basic-nav-dropdown">
                                <h6> Baby Care </h6>
                                <NavDropdown.Divider />
                                <Link to=''><NavDropdown.Item href="#">Baby Shop</NavDropdown.Item></Link>   
                                <Link to=''><NavDropdown.Item href="#">Baby Care Accessories</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Baby Oil & Shampoos</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Baby Creams and Lotions</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Baby Powder</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Diapers & Wipes </NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title="Packaged Foods" id="basic-nav-dropdown">
                                <h6> All Accessories </h6>
                                <NavDropdown.Divider />
                                <Link to=''><NavDropdown.Item href="#">Baby Food</NavDropdown.Item></Link>   
                                <Link to=''><NavDropdown.Item href="#">Dessert Items</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Biscuits</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Breakfast Cereals</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Canned Food </NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Choclates and Sweets </NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title="Beverages" id="basic-nav-dropdown">
                                <h6> Tea & Coffee </h6>
                                <NavDropdown.Divider />
                                <Link to=''><NavDropdown.Item href="#">Green Tea</NavDropdown.Item></Link>   
                                <Link to=''><NavDropdown.Item href="#">Ground Coffee </NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Herbal Tea </NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Instant Coffee</NavDropdown.Item></Link> 
                                <Link to=''><NavDropdown.Item href="#">Tea</NavDropdown.Item></Link> 
                                <Link to=''> <NavDropdown.Item href="#">Tea Bags </NavDropdown.Item></Link>
                            </NavDropdown>  

                         <Nav.Link  className='navlink linkfour' href="#home">Gourmet</Nav.Link>
                       <Nav.Link  className='navlink linkfour' href="#home">Offers</Nav.Link> 
                        <Nav.Link  className='navlink linkfour' href="#home">Contact</Nav.Link>

                        </Nav>
                        
                        
                         
                        </Navbar.Collapse>
                   
        </Navbar>
        </Container>
            
        </div>
    )
}

export default Navbar1
