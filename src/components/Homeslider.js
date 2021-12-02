import {Carousel} from 'react-bootstrap';
import React,{useState,useEffect} from 'react'

const Homesliderr = () => {
    const [banners, setBanners] =useState([]);

    const getBanners = async () => {
        const response = await fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

            method:'GET',
            
            headers:{
            'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            'Warehouse-Id':"1"

            }
        })
        .then(res => res.json())
        .then(data => {
          
        const detail =data.data[0].details;
       setBanners(detail);
            
        })
        .catch(err => (
            console.log(err)
        ));
        
    }

    useEffect(() => {
     getBanners();
    },[])





    return (
        <div className=''>
            <Carousel>
                {
                     banners.map(data => // console.log(data.id))
                          (
                            <Carousel.Item interval={1200}>

                            <img
                            className="d-block w-100"
                            src={data.images}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>{data.title}</h3>
                           
                            </Carousel.Caption>
                            </Carousel.Item>
                        ) 
                     ) 

                }
           
            
             
             

            </Carousel>

            
        </div>
    )
}

export default Homesliderr
