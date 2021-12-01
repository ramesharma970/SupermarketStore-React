import {AiOutlineArrowRight} from 'react-icons/ai'

const Categories = () => {
   
    return (
        <div className='categories' style={{width:'350px'}}>
            <h2>Categories</h2>  
          
            <ul className='cate'>
                <li> <a href='/product'> <i><AiOutlineArrowRight/></i> Fruites and Vegetables </a></li>
                <ul className='cate-cate'>
                        <li>
                            <a href='/product'> <i><AiOutlineArrowRight/></i> Cuts & Sprouts</a>
                          
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Flowers</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Fresh Herbs & Seasonings</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Fresh Vegetables </a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> International Vegetables</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Organic Fruits & Vegetables</a>
                        </li>
                </ul>

                <li> <a href='/product'> <i><AiOutlineArrowRight/></i> Grocery & Staples </a></li>
                <ul className='cate-cate'>
                        <li>
                            <a href='/product'> <i><AiOutlineArrowRight/></i> Dals & Pulses </a>
                          
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Dry Fruits</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Edible Oils & Ghee</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Flours & Sooji </a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Masalas & Spices</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Organic Staples </a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Rice & Rice Products </a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Salt, Sugar & Jaggery </a>
                        </li>
                </ul>

                <li> <a href='/product'> <i><AiOutlineArrowRight/></i> PersonalCare </a></li>
                <ul className='cate-cate'>
                        <li>
                            <a href='/product'> <i><AiOutlineArrowRight/></i> Baby Care</a>
                          
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Cosmetics</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Deos and Perfumes</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Skin Care</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Sanitary Needs</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Oral Care</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Personal Hygiene</a>
                        </li>
                        <li>
                        <a href='/product'> <i><AiOutlineArrowRight/></i> Shaving Needs</a>
                        </li>
                </ul>
            </ul>      
           
   
        </div>
    )
}

export default Categories
