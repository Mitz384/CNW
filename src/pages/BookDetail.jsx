import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';	
import Footer from "../components/Footer";
import Header from "../components/Header";
import { books } from '../../data.json';
import { addStarRating, current_price, discount_percent } from '../components/Book.jsx';

function BookDetail() {
    // react hook
    const { id } = useParams();
    const book = books.find(item => item.id == id);
		const [selectedImage, setSelectedImage] = useState(book.images[0].base_url);

		// Tạo viền cho ảnh option đầu tiên
    useEffect(() => {
        const firstOptionImage = document.querySelector('.option_image img');
        if(firstOptionImage) {
            firstOptionImage.classList.add('border-primary', 'border-2');
        }
    }, []);	

		const option_image = [];
		for(let i = 0; i < book.images.length; i++){
			const baseURL = book.images[i].base_url;
			option_image.push(<img src={baseURL} className='border rounded' onClick={(e) => optionImage(baseURL, e.target)} style={{width : "54px", height: "54px", objectFit : "scale-down"}}/>)
		}

		// Lấy và in ra thông tin chung
		const specification = [];
		for(let i = 0; i < book.specifications[0].attributes.length; i++){
			specification.push(
				<>
					<tr>
						<td className='m-0 px-0 fs-14px text-black'>{book.specifications[0].attributes[i].name}</td>
						<td className='m-0 px-0 fs-14px text-black'>{book.specifications[0].attributes[i].value}</td>
					</tr>
				</>
			);
		}
		// Kiểm tra tồn tại tác giả
		const author = book.authors;
		const author_name = [];
		if(author){
			author_name.push(<p className='text-secondary-emphasis fs-13px m-0'>Tác giả: <span className='text-primary fs-13px'>{author[0].name}</span></p>);
		}

		// Lấy số sao đánh giá trung bình
		const rating_average = book.rating_average;
		const starHTML =  addStarRating(rating_average);
		// Số lượng bán ra
		let solded = quantitySolded(book.quantity_sold);
		// Giá tiền đang bán
		const cur_price = current_price(book.current_seller.price);
		// Phần trăm giảm giá
		const discount = discount_percent(book.original_price, book.current_seller.price);
		

		// Thay đổi số lượng
    return <>
			<Header />
			<div className="container">
				<div className="row">
					{/* Ảnh */}
					<div className="col-lg-3 col-12 p-0 bg-white d-flex flex-column gap-4">
						{/* Ảnh của sản phẩm */}
						<div className="book_image d-flex flex-column gap-2">
							<img src={book.images[0].base_url} className="card-img-top slide border rounded" alt="..."/>
							<div className="option_image d-flex flex-wrap gap-2">
								{option_image}
							</div>
						</div>
					</div>
					{/* Thông tin */}
					<div className="col-lg-5 col-12 px-3 d-flex flex-column gap-5 pb-5">
						{/* Thông tin sách */}
						<div className="d-flex flex-column gap-2">
							{/* logo chính hãng và tên tác giả */}
							<div className="d-flex gap-2">
								<img src="https://s3-alpha-sig.figma.com/img/3787/ee15/f5fc9524f060e2540605302d3aa5a90f?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EgVaTESGvxwDF2Kbo7edC~qFXrqtlqQlTmzaMV1LZwH7UDgFlghiY0rsf6K9X1~OXwBg1rER0me05PBf3pqv6iV3M~zS0h7xPwK6Iex5kBQPoB~55VugeUH6h7cqzHLy~6VsjIBMH91rjewr1xMnhDSQxJcfFqb9CBln9Y-C3T6qDknIGwnVUNd4-v1b84JP5p69pBFPb8-ZWnZOqmSSmuRhDmYDEaM6sgLqPZBKPK3XHErxbHT3EnyiYZMzMEjmSKjU1FshJz4iOD5hP1ooQazKmWCUhpwF~DE-C4uNroRm2~GWpoUwsKdgNA0QKQzZd2G3QYwS7MQPKfeOsCXUkA__" alt="" style={{maxHeight : "20px"}}/>
								{author_name}
							</div>
							{/* Tên, đánh giá & số lượng bán, giá & discount */}
							<div className="">
								{/* Tên */}
								<p className='fs-5 text-black m-0'>{book.name}</p>
								{/* Đánh giá, số lượng bán */}
								<div className="d-flex align-items-center gap-2">
									{/* đánh giá */}
									<div className='d-flex align-items-center gap-2'>
										<p className='m-0 fs-14px fw-medium'>{book.rating_average}</p>
										<div className='d-flex align-items-center gap-1'>
											{starHTML}
										</div>
									</div>
									{/* số lượng bán */}
									<div className='ps-2 border-start border-secondary d-flex align-items-center'>
										{solded}
									</div>
								</div>
							</div>
							{/* Giá tiền và khuyến mãi */}
							<div className="d-flex align-items-center gap-2">
								<p className="card-price m-0 fs-4 fw-semibold">{cur_price}<span className="fs-18px fw-semibold text-decoration-underline" style={{verticalAlign : "super"}}>đ</span></p>
								{discount}
							</div>
						</div>
						{/* Thông tin chi tiết */}
						<div className="">
							<p className='fw-semibold'>{book.specifications[0].name}</p>
							{/* Danh sách đặc điểm */}
							<table class="table">
								<tbody>
									{specification}
								</tbody>
							</table>
						</div>
						{/* Mô tả sách */}
						<div>
							<p className='fw-semibold m-0'>Mô tả sản phẩm</p>
							<div className='fs-14px book_description' dangerouslySetInnerHTML={description(book.description)}/>
						</div>
					</div>
					{/* Ô thanh toán */}
					<div className="col-lg-3 col-12 p-3 d-flex flex-column gap-3">
						{/* Số lượng */}
						<div className='d-flex flex-lg-column gap-lg-3 justify-content-lg-start justify-content-between'>
							<div className="quantity d-flex flex-column gap-2">
								<p className='text-black fs-14px m-0 fw-semibold'>Số lượng</p>
								<div className='d-flex gap-1'>
									<button className='btn border border-1 fs-14px border-light-emphasis' onClick={() => decrease()}>-</button>
									<input className='text-center rounded border border-1 fs-14px input-quantity form-control' style={{width : "15%"}} value={1}/>
									<button className='btn border border-1 fs-14px' onClick={() => increase()}>+</button>
								</div>
							</div>
							{/* Tạm tính */}
							<div>
								<p className='text-black fs-14px m-0 fw-semibold'>Tạm tính</p>
								<p className="card-price m-0 fs-4 fw-semibold">{cur_price}<span className="fs-18px fw-semibold text-decoration-underline" style={{verticalAlign : "super"}}>đ</span></p>
							</div>
						</div>
						
						{/* Các btn */}
						<div className='d-flex flex-column gap-2'>
							<button className='btn bg-danger text-white fw-light w-100'>Mua ngay</button>
							<button className='btn border border-1 border-primary w-100 text-primary'>Thêm vào giỏ hàng</button>
							<button className='btn border border-1 border-primary w-100 text-primary'>Mua trước trả sau</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
    </>
}

function optionImage(baseURL, event){
	document.querySelector(".slide").src = baseURL;
	document.querySelectorAll('.option_image img').forEach(img => {
		img.classList.remove('border-primary', 'border-2');
	})
	event.classList.add('border-primary', 'border-2')
}

function quantitySolded(quantity_sold){
	let solded = [];
	if(quantity_sold){
		solded.push(<p className='fs-12px text-secondary m-0'>{quantity_sold.text}</p>)
	}
	return solded;
}

function description(description) {
	return {__html: description}
}

function increase(){
	const quantityInput = document.querySelector('.input-quantity');
	let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}
function decrease(){
	const quantityInput = document.querySelector('.input-quantity');
	let currentValue = parseInt(quantityInput.value);
  if(currentValue > 1){
    quantityInput.value = currentValue - 1;
  }
}


export default BookDetail;