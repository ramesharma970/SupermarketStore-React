import Imagep2 from '../assets/Images/p2.jpg';
import Imagep3 from '../assets/Images/p3.jpg';
import Imagep4 from '../assets/Images/p4.jpg';
import Imagep5 from '../assets/Images/111.jpg';

const Bannerbottomm = () => {
    return (
        <div className='ban-bottom-w3l'>
            
                <div className='banner'>
                    <div className='banner_one'  id='banner-one'>
                        <div className='ban-ban-1'>
                            <img src={Imagep2} alt='image1' />
                        </div>
                        <div className='ban-2'  id='banner-two'>
                            <div>
                            <img src={Imagep3} alt='image1' />
                            </div>
                            <div>
                            <img src={Imagep4} alt='image1' />
                            </div>
                        </div>
                    </div>
                    <div className='ban-3'>
                    <img src={Imagep5} alt='image1' />
                    </div>
                </div>
            
        </div>
    )
}

export default Bannerbottomm
