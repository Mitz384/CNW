import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Book(props) {
	// Lấy số sao đánh giá trung bình
	const rating_average = props.data.rating_average;
	const starHTML =  addStarRating(rating_average);
	// Số lượng bán ra
	let solded = quantitySolded(props.data.quantity_sold);
	// Giá tiền đang bán
	const cur_price = current_price(props.data.current_seller.price)
	// Phần trăm giảm giá
	const discount = discount_percent(props.data.original_price, props.data.current_seller.price)
	


	return <Link to={'book/' + props.data.id} className="prod-card p-2 p-lg-0 bg-white col-lg-2 col-md-3 col-sm-4 col-6">
		<div className='card'>
			<div className="img-container" style={{ height: `278px` }}>
				<img 
					src={props.data.images[0].base_url} 
					className="card-img-top" 
					alt="..."
				/>
			</div>
			<div className="card-body pt-4 pb-0 px-2">
				{/* Tên sản phẩm và đánh giá */}
				<div className='d-flex flex-column gap-1' style={{height : "5rem"}}>
					<h5 className='text-black fw-normal fs-12px m-0'>{props.data.name}</h5>
					{/* Đánh giá và số lượng bán ra */}
					<div className="d-flex align-items-center gap-2">
						<div className="d-flex align-items-center">
							{starHTML}
						</div>
						<div className='ps-2 border-start border-secondary d-flex align-items-center'>
							{solded}
						</div>
					</div>
				</div>
				{/* Giá tiền và khuyến mãi */}
				<div className="d-flex align-items-center gap-2 pb-3 border-bottom">
					<p className="card-price m-0 fw-medium">{cur_price}<span className="fs-12px fw-medium text-decoration-underline" style={{verticalAlign : "super"}}>đ</span></p>
					{discount}
				</div>
				{/* Thông tin giao hàng */}
				<div className="d-flex align-items-center justify-content-center py-2">
					<p className='m-0 fs-12px text-secondary'>Giao siêu tốc 2h</p>
				</div>
			</div>
		</div>
		
	</Link>
}

export function addStarRating(rating_average){
	// Lấy số sao đánh giá trung bình
	let starRating = Math.floor(parseFloat(rating_average));
	let starFloat = parseFloat(rating_average) % 1;
	if(starFloat >= 0.25 && starFloat <= 0.75){
		starRating += 0.5;
		starFloat = 0.5;
	}
	else if(starFloat < 0.25){
		starRating = starRating;
		starFloat = 0;
	}
	else{
		starRating += 1;
		starFloat = 1;
	}
	// Thêm sao 
	let starHtml = [];
	if(rating_average != 0){
		// 1 sao
		for(let i = 1; i <= starRating; i++){
			starHtml.push(<i className="bi bi-star-fill fs-10px"></i>)
		}
		if(5-starRating > 0){
			// 0.5 sao
			if(5-starRating % 1 != 0){
				starHtml.push(<i className="bi bi-star-half fs-10px"></i>)
			}
			// sao rỗng
			for (let i = 0; i < 5-starRating -starFloat; i++) {
				starHtml.push(<i className="bi bi-star-fill star-gray fs-10px"></i>)
			}
		}
	}
	return starHtml;
}

function quantitySolded(quantity_sold){
	let solded = [];
	if(quantity_sold){
		solded.push(<p className='fs-10px text-secondary m-0'>{quantity_sold.text}</p>)
	}
	return solded;
}

export function current_price(c_price){
	const price = parseInt(c_price);
	const cur_price = price.toLocaleString('de-DE');
	return cur_price;
}

export function discount_percent(original_price, current_price){
	// Phần trăm giảm giá
	const origin_price = parseInt(original_price);
	let discount_percentage = Math.floor(((origin_price-current_price)/origin_price)*100);
	let discount = '';
	if(discount_percentage != 0){
		discount =( 
			<div className='bg-light rounded-pill px-2'>
				<p className='m-0 fs-12px text-black'>-{discount_percentage}%</p>
			</div>
		);
	}
	return discount;
}

export default Book;