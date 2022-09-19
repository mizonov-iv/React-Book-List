import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className="container">
                    <Link to={'/'} className='navbar-brand'>
                        <i className="fa-solid fa-book-open"/> <strong>Book List</strong> </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;