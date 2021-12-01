import Pagination from 'react-bootstrap/Pagination';

const Paginationn = () => {
   
    return (
        <div className='paginations'>
            <Pagination id='paginations-boot' >
                <Pagination.First className='pagination-item' />
                       
                <Pagination.Item id='active-page'  active>{1}</Pagination.Item>
                <Pagination.Item  className='pagination-item'>{2}</Pagination.Item>
                <Pagination.Item  className='pagination-item'>{3}</Pagination.Item>
                <Pagination.Item  className='pagination-item'>{4}</Pagination.Item>
                <Pagination.Item  className='pagination-item'>{5}</Pagination.Item>
               
                <Pagination.Last  className='pagination-item' />
            </Pagination>
        </div>
    )
}

export default Paginationn
