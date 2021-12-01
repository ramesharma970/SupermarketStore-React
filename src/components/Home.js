import '../assets/css/Home.css';
import Topheaderr from './Topheader';
import Headerr from './Header'
import Navbar1 from './Navbar';
import Homesliderr from './Homeslider';
import Sliderr from './Slider';
import Bannerbottomm from './Bannerbottom';
import Topsellin from './Topselling';
import Newofferr from './NewOffer';
import Brands from './Brand';
import Footerr from './Footer';
import Bottomfooterr from './Bottomfooter';






const Home = () => {
    return (

        <div className='home'>
            <Topheaderr/>
            <Headerr/>
            <Navbar1/>
            <Homesliderr/>
            <Topsellin/>
            <Sliderr/>
            <Bannerbottomm/>
            <Newofferr/>
            <Brands/>
            <Footerr />
            <Bottomfooterr/>

           
        </div>
      
       
      
       
      
    )
}

export default Home

