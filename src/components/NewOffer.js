import Cardcomponentt from './Cardcomponent';
import React,{useState,useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';






const Newofferr = () => {
  const [products, setProducts] =useState([]);
  const getProducts = async () => {
    const response = await fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

        method:'GET',
        
        headers:{
        'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        'Warehouse-Id':"1"

        }
    })
    .then(res => res.json())
    .then(data => {
      //  console.log(data.data[6].sectionDetails.products[0].title)
  
      
    const detail =(data.data[6].sectionDetails.products);
  
   setProducts(detail);
        
    })
    .catch(err => (
        console.log(err)
    ));
    //console.log(await response.json())
}

useEffect(() => {
 getProducts();
},[])
    return (
        <div className='newproducts-w3agile'>
        
            <Container className='container'>
            <h3 className='offer-title'>Top Selling Offers</h3>
              <div className='agile_top_brands_grids'> 
              <Row>
              {
                products.map(data=> (
                  <Col>
                   <Cardcomponentt image={data.images[0].imageName} title={data.title} dprice='$35.99' oprice='$55.00' />
                  </Col>
                 
                ))
              }
              </Row>
             

              </div>
            </Container>
                 
        </div>
    )
}

export default Newofferr
