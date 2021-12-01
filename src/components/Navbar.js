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
                           <Nav.Link  className='navlink linkfour' href="/">Home</Nav.Link> 
                            
                            <NavDropdown  className='dropdown' style={{ color: '#fff !important'}} title="Groceries" id="basic-nav-dropdown">
                                <h6 className='nav-title'> All Groceries </h6>
                                <NavDropdown.Divider />
                               <NavDropdown.Item href="/Groceries">Dals & Pulse</NavDropdown.Item> 
                               <NavDropdown.Item href="/Groceries">Almonds</NavDropdown.Item>
                                 <NavDropdown.Item href="/Groceries">Cashews</NavDropdown.Item>
                              <NavDropdown.Item href="/Groceries">Dry Fruit</NavDropdown.Item> 
                              <NavDropdown.Item href="/Groceries">Mukhwas</NavDropdown.Item>
                                 <NavDropdown.Item href="/Groceries">Rice and Rice Products</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Household" id="basic-nav-dropdown">
                                <h6> All Household </h6>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Household">Cookware</NavDropdown.Item> 
                                <NavDropdown.Item href="/Household">Dust Pans</NavDropdown.Item>
                                <NavDropdown.Item href="/Household">Scrubbers</NavDropdown.Item>
                                <NavDropdown.Item href="/Household">Dust Cloth</NavDropdown.Item>
                               <NavDropdown.Item href="/Household">Mops</NavDropdown.Item> 
                                <NavDropdown.Item href="/Household">Kitchenware</NavDropdown.Item>
                            </NavDropdown> 

                            <NavDropdown title="Personal Care" id="basic-nav-dropdown">
                                <h6> Baby Care </h6>
                                <NavDropdown.Divider />
                              <NavDropdown.Item href="/Personalcare">Baby Shop</NavDropdown.Item>   
                               <NavDropdown.Item href="/Personalcare">Baby Care Accessories</NavDropdown.Item>
                                <NavDropdown.Item href="/Personalcare">Baby Oil & Shampoos</NavDropdown.Item>
                                <NavDropdown.Item href="/Personalcare">Baby Creams and Lotions</NavDropdown.Item>
                              <NavDropdown.Item href="/Personalcare">Baby Powder</NavDropdown.Item>
                                <NavDropdown.Item href="/Personalcare">Diapers & Wipes </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Packaged Foods" id="basic-nav-dropdown">
                                <h6> All Accessories </h6>
                                <NavDropdown.Divider />
                              <NavDropdown.Item href="/Packagedfoods">Baby Food</NavDropdown.Item>  
                               <NavDropdown.Item href="/Packagedfoods">Dessert Items</NavDropdown.Item>
                                <NavDropdown.Item href="/Packagedfoods">Biscuits</NavDropdown.Item>
                                <NavDropdown.Item href="/Packagedfoods">Canned Food </NavDropdown.Item>
                                <NavDropdown.Item href="/Packagedfoods">Choclates and Sweets </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Beverages" id="basic-nav-dropdown">
                                <h6> Tea & Coffee </h6>
                                <NavDropdown.Divider />
                               <NavDropdown.Item href="/Beverages">Green Tea</NavDropdown.Item>  
                                <NavDropdown.Item href="/Beverages">Ground Coffee </NavDropdown.Item>
                                <NavDropdown.Item href="/Beverages">Herbal Tea </NavDropdown.Item>
                               <NavDropdown.Item href="/Beverages">Instant Coffee</NavDropdown.Item>
                               <NavDropdown.Item href="/Beverages">Tea</NavDropdown.Item>
                                <NavDropdown.Item href="/Beverages">Tea Bags </NavDropdown.Item>
                            </NavDropdown>  

                         <Nav.Link  className='navlink linkfour' href="/Gourmet">Gourmet</Nav.Link>
                       <Nav.Link  className='navlink linkfour' href="/Offers">Offers</Nav.Link> 
                        <Nav.Link  className='navlink linkfour' href="/Help">Contact</Nav.Link>

                        </Nav>
                        
                        
                         
                        </Navbar.Collapse>
                   
        </Navbar>
        </Container>
            
        </div>
    )
}

export default Navbar1
