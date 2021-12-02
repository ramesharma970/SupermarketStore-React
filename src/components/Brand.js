import { Container, Row, Col} from "react-bootstrap"
import React,{useState,useEffect} from 'react'


const Brands = () => {
    const [brands, setBrands] =useState([]);

    const getBrands = async () => {
        const response = await fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

            method:'GET',
            
            headers:{
            'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            'Warehouse-Id':"1"

            }
        })
        .then(res => res.json())
        .then(data => {
         //  console.log(data.data[3].sectionDetails.brands);
        
          
        const detail =data.data[3].sectionDetails.brands;
     
       setBrands(detail);
            
        })
        .catch(err => (
            console.log(err)
        ));
       
    }

    useEffect(() => {
     getBrands();
    },[])

    return (
        <div className='brands'>
            <Container>
                <Row> 
                <h3 className='brand-title'>Brand Store</h3> 
                <Row  id='brand-row1'>
                {
                    brands.map(data => (
                             //  console.log(data)
                      
                           
                             <Col> 
                                     <div class="brands-w3l">
                                      
                                         <img src={data.icon} alt='brands_icon'/>
                                         <p><a href="#">{data.title}</a></p>
                                     </div>
                              </Col>
                              
                             
                            
                        
                     
                    ))
                }  
                 </Row>          

                </Row>
            </Container>
            
        </div>
    )
}

export default Brands
