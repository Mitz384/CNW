import { useParams } from 'react-router-dom'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { books } from '../../data.json'

function BookDetail() {
    // react hook
    const { id } = useParams()
    const book = books.find(item => item.id == id)
    return <>
        <Header />
        <h1>Chi tiet sach {id}</h1>
        <h5>{book.name}</h5>
        <img src={book.images[0].base_url} alt="" />
        <Footer />
    </>
}

export default BookDetail;