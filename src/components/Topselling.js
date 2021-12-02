import React,{useState,useEffect} from 'react';
import {Card,Container, Row,Col,Button} from 'react-bootstrap';

const Topsellin = () => {
    const [categories, setCategories] =useState([]);

    const getCategories = async () => {
        const response = await fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

            method:'GET',
            
            headers:{
            'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            'Warehouse-Id':"1"

            }
        })
        .then(res => res.json())
        .then(data => {
          //  console.log(data.data[1].categories)
      
          
        const detail =(data.data[1].categories);
      
       setCategories(detail);
            
        })
        .catch(err => (
            console.log(err)
        ));
        //console.log(await response.json())
    }

    useEffect(() => {
     getCategories();
    },[])
    return (
        <div className='home-category'>
            <Container className='container'>
                <h1 className='category-title'> Categories</h1>
                <Row>
                    {
                        categories.map(data =>(
                            <Col>
                            <div className='topsell-category'>
                            <Card className=" category-card bg-warning text-white" key={data.id}>
                                <Card.Img src={data.backgroundImage} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title >{data.title}</Card.Title>
                                    <Card.Text>
                                    Viw your items here
                                    </Card.Text>
                                </Card.ImgOverlay>
                                <Button className='btn-danger'>View Menu</Button>
                            </Card>
                            </div>
                            
                        </Col>
                        ))
                    }
                   
               
                </Row>
            </Container>
           
        </div>
    )
}

export default Topsellin
