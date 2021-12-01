import Cardcomponentt from './Cardcomponent';
import image14 from '../assets/Images/14.png';
import image15 from '../assets/Images/15.png';
import image16 from '../assets/Images/16.png';
import image17 from '../assets/Images/17.png';



const Newofferr = () => {
    return (
        <div className='newproducts-w3agile'>
          <div className='container'>
              <h3 className='offer-title'>NEW OFFERS</h3>
              <div className='agile_top_brands_grids'> 
                <Cardcomponentt image={image14} title='Fried gram' dprice='$35.99' oprice='$55.00' />
                <Cardcomponentt  image={image15} title='Navaratna-dal' dprice='$30.99' oprice='$45.00' />
                <Cardcomponentt  image={image16} title='White-peasmatar' dprice='$80.99' oprice='$105.00' />
                <Cardcomponentt image={image17} title='Channa-dal' dprice='$35.99' oprice='$55.00' />
                   
                   
              </div>
               
          </div>
        </div>
    )
}

export default Newofferr
