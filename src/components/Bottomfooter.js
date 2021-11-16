import {FaFacebook,FaTwitter,FaDribbble,FaVimeo} from 'react-icons/fa';
import Card from '../assets/Images/card.png';

const Bottomfooterr = () => {
    return (
        <div>
            <div class="container">
				<div class="w3layouts-foot">
					<ul>
						<li><a href="#" class="w3_agile_facebook"> < FaFacebook/> </a></li>
						<li><a href="#" class="agile_twitter"> < FaTwitter/></a></li>
						<li><a href="#" class="w3_agile_dribble"> < FaDribbble/></a></li>
						<li><a href="#" class="w3_agile_vimeo"> < FaVimeo/></a></li>
					</ul>
				</div>
				<div class="payment-w3ls">	
					<img src={Card} alt=" " class="img-responsive" />
				</div>
				
			</div>
            
        </div>
    )
}

export default Bottomfooterr
