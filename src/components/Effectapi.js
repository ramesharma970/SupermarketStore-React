import React,{useState,useEffect} from 'react'

const Effectapi = () => {
    const [banners, setBanners] =useState([ ]);

    useEffect(() => {
      fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

                method:'GET',
                
                headers:{
                'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
                'Warehouse-Id':"1"

                }
            })
            .then(res => res.json())
            .then(data => {
               // console.log(data.data);
              // console.log(data.data[0].details[0].images);
               setBanners(data.data)
                
            })
            .catch(err => (
                console.log(err)
            ))
    },[])
    return (
        <div>
            <h1>data testing </h1>
            <ul>
                {
                    banners.map(data =>
                   //console.log(data.details[0].images)
                    (
                    <li key={data.details[0].id}> 
                    {/* {console.log(data.details[0].id)} */}
                    <img src={data.details[0].images} alt='banner'/> </li> )
                    )
                }
            </ul>
        </div>
    )
}

export default Effectapi
