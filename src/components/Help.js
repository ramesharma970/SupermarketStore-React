import Topheaderr from './Topheader';
import Headerr from './Header'
import Navbar1 from './Navbar';
import Breadcumb from './Breadcumb';
import Footerr from './Footer';
import Bottomfooterr from './Bottomfooter';
import Contact from './Contact';

const Help = () => {
    return (
        <div>
             <Topheaderr/>
            <Headerr/>
            <Navbar1/> 
            <Breadcumb subtitle='Contact' /> 
            <Contact/>    
            <Footerr />
            <Bottomfooterr/>
        </div>
    )
}

export default Help
