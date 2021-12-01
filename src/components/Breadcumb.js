import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {MdHome} from 'react-icons/md'

const Breadcumb = ({subtitle}) => {
    const myStyle = {
        padding:'1.5em 0',
        backgroundColor:'#f5f5f5'
    }
   
    return (
        <div className='breadcrumbs' style={myStyle}>
              <div className='container'>
                    <Breadcrumb className='breadcrumb'>
                        <Breadcrumb.Item href="#" ClassName='' > <i> <MdHome/></i> Home </Breadcrumb.Item>
                        <Breadcrumb.Item href="#" active>
                            {subtitle}
                        </Breadcrumb.Item>
                        
                    </Breadcrumb>
             </div>
        </div>
      
    )
}

export default Breadcumb
