import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { BookService } from '../../Services/BookService';

const AddBook = () => {

    let navigate = useNavigate()

    const [book, setBook] = useState({
        title: '',
        descr: '',
        cover: ''
    })

    const addNewBook = (e) => {
        e.preventDefault()

        const newBook = {
            ...book, id: Date.now()
        }

        BookService.addNewBook(newBook)

        setBook({title: '', descr: '', cover: ''})

        navigate('/books/list', {replace: true})
    }

    return (
        <React.Fragment>
            <section className="add-book mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Add New Book</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mx-auto">
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
                                    placeholder='Paste Cover URL'/>
                                <button className='btn btn-dark me-1' onClick={addNewBook}>Create</button>
                                <Link to={'/books/list'} className='btn btn-dark'>Close</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default AddBook;
