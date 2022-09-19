import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookService } from '../../Services/BookService';
import Loader from '../Loader/Loader';

const BooksList = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const books = await BookService.getAllBooks()
        setBooks(books)
    }

    let deleteBook = async (bookId) => {
        BookService.deleteBook(bookId)
        const books = await BookService.getAllBooks()
        setBooks(books)
    }

    return (
        <React.Fragment>
            <section>
                <div className='contact-search p-3'>
                    <div className="container">
                        <div className="grid">
                            <div className="row">
                                <div className="col">
                                    <p className='h3 fw-bold'>Book List
                                        <Link to={'/books/add'} className='btn btn-dark ms-2'>
                                        <i className='fa fa-plus-circle me-2'/>
                                        Add Book
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {books.length !== 0 
            ?
            <React.Fragment>
                    <section className='book-cards p-3'>
                        <div className="container">
                            <div className="row">
                                {books.map(book => {
                                    return (
                                        <div className="col-md-4 mt-4" key={book.id}>
                                            <div className="card" style={{width: '18rem'}}>
                                                <img src={book.cover} className="card-img-top" alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{book.title}</h5>
                                                    <p className='card-text'>{book.descr}</p>
                                                    <div className='d-flex justify-content-between w-75 mx-auto'>
                                                        <Link to={`/books/view/${book.id}`} className="btn btn-outline-dark">
                                                            <i className='fa-solid fa-eye'></i>
                                                        </Link>
                                                        <Link to={`/books/edit/${book.id}`} className="btn btn-outline-dark">
                                                            <i className='fa-solid fa-pen'></i>
                                                        </Link>
                                                        <button 
                                                            className='btn btn-outline-dark'
                                                            onClick={() => {deleteBook(book.id)}}>
                                                            <i className='fa-solid fa-trash'></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                } 
                            </div>
                        </div>
                    </section>
             </React.Fragment>
            : 
            <Loader/>
            }
        </React.Fragment>
    );
}

export default BooksList;
