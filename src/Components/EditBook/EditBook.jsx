import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BookService } from '../../Services/BookService';

const EditBook = () => {

    let {bookId} = useParams()

    let navigate = useNavigate()

    const [book, setBook] = useState({
        title: '',
        descr: '',
        cover: ''
    })

    useEffect(() => {
        fetchBookById()
    }, [])

    async function fetchBookById() {
        const book = await BookService.getBookById(bookId)
        setBook(book)
        console.log(book)
    }

    let updateBook = (e) => {
        e.preventDefault()
        
        const updatedBook = {
            ...book, id: bookId
        }

        BookService.updateBook(updatedBook, bookId)

        setBook({title: '', descr: '', cover: ''})

        navigate('/books/list', {replace: true})
    }

    return (
        <React.Fragment>
            <section className="add-book mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Edit Book</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                        <div className="col-md-4">
                            <form>
                                <input
                                    value={book.title}
                                    onChange={e => setBook({...book, title: e.target.value})}
                                    type="text" 
                                    className='form-control mb-2' 
                                    placeholder='Enter Book Title'/>
                                <input
                                    value={book.descr}
                                    onChange={e => setBook({...book, descr: e.target.value})} 
                                    type="text" 
                                    className='form-control mb-2' 
                                    placeholder='Enter Description'/>
                                <input 
                                    value={book.cover}
                                    onChange={e => setBook({...book, cover: e.target.value})}
                                    type="text" 
                                    className='form-control mb-2' 
                                    placeholder='Add Book Cover'/>
                                <button className='btn btn-dark me-1' onClick={updateBook}>Update</button>
                                <Link to={'/books/list'} className='btn btn-dark'>Close</Link>
                            </form>
                        </div>
                        <div className="col-md-2">
                            <img src={book.cover} className='card-img-top' alt="book-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default EditBook;
