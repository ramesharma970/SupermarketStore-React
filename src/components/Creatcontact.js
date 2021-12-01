import Topheaderr from './Topheader';
import Headerr from './Header'
import Navbar1 from './Navbar';
import Breadcumb from './Breadcumb';
import Register from './Register';
import Footerr from './Footer';
import Bottomfooterr from './Bottomfooter';

const Createaccount = () => {
    return (
        <div>
             <Topheaderr/>
            <Headerr/>
            <Navbar1/>     
            <Breadcumb subtitle='Register Page' /> 
            <Register/>
            <Footerr />
            <Bottomfooterr/>
        </div>
    )
}

export default Createaccount
