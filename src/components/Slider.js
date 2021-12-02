import {Carousel} from 'react-bootstrap';
import React,{useState,useEffect} from 'react'


const Sliderr = () => {
    const [adds, setAdds] =useState([]);

    const getAdds = async () => {
        const response = await fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

            method:'GET',
            
            headers:{
            'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
            'Warehouse-Id':"1"

            }
        })
        .then(res => res.json())
        .then(data => {
          
        const detail =data.data[5].details;
       setAdds(detail);
            
        })
        .catch(err => (
            console.log(err)
        ));
        
    }

    useEffect(() => {
     getAdds();
    },[])
    return (
        <div>
             <Carousel>

            {
                adds.map(data => (
                    <Carousel.Item interval={2000}>
                        <a href='#'>
                        <img
                        className="d-block w-100"
                        src={data.images}
                        alt="image"
                        />

                        </a>
                    
                    
                    </Carousel.Item>

                ))
            }
    
             

            </Carousel>
            
        </div>
    )
}

export default Sliderr
