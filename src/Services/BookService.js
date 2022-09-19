import axios from 'axios'

export class BookService {
    static async getAllBooks() {
        const response = await axios.get('http://localhost:9000/books')
        return response.data
    }

    static async getBookById(bookId) {
        const resopnseBookId = await axios.get(`http://localhost:9000/books/${bookId}`)
        return resopnseBookId.data
    }

    static addNewBook(newBook) {
        return axios.post('http://localhost:9000/books', newBook)
    }

    static updateBook(updatedBook, bookId) {
        return axios.put(`http://localhost:9000/books/${bookId}`, updatedBook)
    }

    static deleteBook (bookId) {
        return axios.delete(`http://localhost:9000/books/${bookId}`)
    }
}