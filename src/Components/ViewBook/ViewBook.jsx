import React, {useEffect,useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookService } from '../../Services/BookService';
import Loader from '../Loader/Loader';

const ViewBook = () => {

    let {bookId} = useParams()

    const [book, setBook] = useState([])

    useEffect(() => {
        fetchBookById()
    }, [])

    async function fetchBookById() {
        const book = await BookService.getBookById(bookId)
        setBook(book)
    }

    return (
        <React.Fragment>

            <section className="view-book p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <div className='d-flex'>
                                <p className="h3 fw-bold">View Book</p>
                                <Link to={'/books/list'} className='btn btn-dark ms-3'>Close</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {bookId
                ? <React.Fragment>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={book.cover} alt="book-cover" className='w-75' />
                                </div>
                                <div className="col-md-8">
                                    <h5 className="text-start">{book.title}</h5>
                                    <p className='text-start'>{book.descr}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
                : <Loader/>
            }
            
        </React.Fragment>
    );
}

export default ViewBook;
