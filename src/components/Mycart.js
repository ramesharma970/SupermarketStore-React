import Topheaderr from './Topheader';
import Headerr from './Header'
import Navbar1 from './Navbar';
import Footerr from './Footer';
import Bottomfooterr from './Bottomfooter';
import Breadcumb from './Breadcumb';

const Mycart = () => {
    return (
        <>
             <Topheaderr/>
            <Headerr/>
            <Navbar1/> 
            <Breadcumb subtitle='Checkout page' />  
            
            <div className='checkout'>
                <div className='container'>
                    <h2> Your shopping cart contains:<span>3 products</span></h2>
                    <div className='checkout-right'>
                        <table className='timetable_sub'>
                            <thead>
                               <tr>
                                   <th>SL No.</th>
                                   <th>Product</th>
                                   <th>Quality</th>
                                   <th>Product Name</th>
                                   <th>Price</th>
                                   <th>Remove</th>
                                </tr> 
                            </thead>

                        </table>
                    </div>

                </div>

            </div>

            <Footerr />
            <Bottomfooterr/>
        </>
    )
}

export default Mycart
