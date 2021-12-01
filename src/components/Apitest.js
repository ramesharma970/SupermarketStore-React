

const Apitest = () => {
   
            fetch(`https://uat.ordering-boafresh.ekbana.net/api/v4/newhome`,{

                method:'GET',
                
                headers:{
                'Api-key':"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
                'Warehouse-Id':"1"

                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data.data);
                console.log(data.data[0].details[0].images);
                
            })
    
              
    return (
        <div>
            <h1> Where is my data ?</h1>
               
            
        </div>
    )
}

export default Apitest
