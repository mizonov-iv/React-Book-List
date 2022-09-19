import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import BooksList from './Components/BooksList/BooksList';
import AddBook from './Components/AddBook/AddBook';
import EditBook from './Components/EditBook/EditBook';
import ViewBook from './Components/ViewBook/ViewBook';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/books/list'}/>}/>
        <Route path={'/books/list'} element={<BooksList/>}/>
        <Route path={'/books/add'} element={<AddBook />}/>
        <Route path={'/books/edit/:bookId'} element={<EditBook/>}/>
        <Route path={'/books/view/:bookId'} element={<ViewBook/>}/>
      </Routes>

    </div>
  );
}

export default App;
