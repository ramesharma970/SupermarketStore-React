import {FaFacebook,FaTwitter,FaDribbble,FaVimeo} from 'react-icons/fa';
import { BsArrowUpCircle } from 'react-icons/bs'
import Card from '../assets/Images/card.png';

const Bottomfooterr = () => {
    return (
        
            <div class="bottom-container">
				<div class="w3layouts-foot">
					<ul>
						<li><a href="#" className="w3_agile_facebook"> < FaFacebook/> </a></li>
						<li><a href="#" className="agile_twitter"> < FaTwitter/></a></li>
						<li><a href="#" className="w3_agile_dribble"> < FaDribbble/></a></li>
						<li><a href="#" className="w3_agile_vimeo"> < FaVimeo/></a></li>
					</ul>
				</div>
				<div className='payment-scroll'>
					<div class="payment-w3ls">	
						<img src={Card} alt=" " class="img-responsive" />
					</div>
					<div className='arrow-up'><BsArrowUpCircle/></div>
				</div>
				
			</div>
            
       
    )
}

export default Bottomfooterr
