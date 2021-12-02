import React,{useState,useEffect} from 'react'

const Effectapi = () => {
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
            console.log(data.data[6].sectionDetails.products[0].title)
      
          
        const detail =(data.data[6].sectionDetails.products);
      
       setBanners(detail);
            
        })
        .catch(err => (
            console.log(err)
        ));
        //console.log(await response.json())
    }

    useEffect(() => {
     getBanners();
    },[])
    return (
        <div>
            <h1>data testing </h1>
            <ul>
                {
                    banners.map(data =>
                  // console.log(data.id))
                    (
                    <li key ={data.id}> 
                        <p>{data.title}</p>
                    <img src={data.images[0].imageName} alt='image'/> </li> )
                    )
                }
            </ul>
        </div>
    )
}

export default Effectapi
