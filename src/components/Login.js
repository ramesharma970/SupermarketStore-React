import Topheaderr from './Topheader';
import Headerr from './Header'
import Navbar1 from './Navbar';
import Footerr from './Footer';
import Bottomfooterr from './Bottomfooter';
import Breadcumb from './Breadcumb';
import Logininfo from './Logininfo';

const Login = () => {
    return (
        <div>
            <Topheaderr/>
            <Headerr/>
            <Navbar1/> 
            <Breadcumb subtitle='Login Page' />  
            <Logininfo/>  
            <Footerr />
            <Bottomfooterr/>
        </div>
    )
}

export default Login
