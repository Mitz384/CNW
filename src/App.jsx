import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Book from './components/Book'
import { books } from '../data.json'

function App() {
  return <div>
    <Header />
    <div className="container pb-5">
      <div className="row">
        {/* Lọc sản phẩm */}
        <div className="col-2 d-none d-lg-flex gap-4 flex-column p-0 ">
          {/* Danh mục sản phẩm */}
          <div className="d-flex gap-3 flex-column">
            <h5 className='fw-medium fs-14px text-dark m-0'>Danh Mục Sản Phẩm</h5>
            <a className='fs-12px text-dark m-0'>English Books</a>
            <a className='fs-12px text-dark m-0'>Sách tiếng Việt</a>
            <a className='fs-12px text-dark m-0'>Văn phòng phẩm</a>
            <a className='fs-12px text-dark m-0'>Quà lưu niệm</a>
          </div>
          {/* Nhà cung cấp */}
          <div className="d-flex flex-column gap-3">
            <h5 className='fw-medium fs-14px text-dark m-0'>Nhà cung cấp</h5>
            <div className="d-flex gap-2">
              <input type="checkbox" id="fahasa"/>
              <label className='fs-12px text-dark' htmlFor="fahasa">Nhà sách Fahasa</label>
            </div>
            <div className="d-flex gap-2">
              <input type="checkbox" id="bamboo"/>
              <label className='fs-12px text-dark' htmlFor="bamboo">Bamboo Books</label>
            </div>
            <div className="d-flex gap-2">
              <input type="checkbox" id="times"/>
              <label className='fs-12px text-dark' htmlFor="times">Times Books</label>
            </div>
            <div className="d-flex gap-2">
              <input type="checkbox" id="NST"/>
              <label className='fs-12px text-dark' htmlFor="NST">Nhà Sách Trẻ Online</label>
            </div>
            <div className="d-flex gap-2">
              <input type="checkbox" id="VBooks"/>
              <label className='fs-12px text-dark' htmlFor="VBooks">VBooks</label>
            </div>
            <a className="d-flex align-items-center gap-1">
              <p className='fs-12px text-primary m-0'>Xem thêm</p>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.86389 7.70957L9.84045 4.73066C10.0608 4.51035 10.417 4.51035 10.635 4.73066C10.853 4.95098 10.853 5.30723 10.635 5.52754L7.26233 8.90254C7.04905 9.11582 6.70686 9.12051 6.48655 8.91895L3.09045 5.52988C2.9803 5.41973 2.92639 5.27441 2.92639 5.13145C2.92639 4.98848 2.9803 4.84316 3.09045 4.73301C3.31077 4.5127 3.66702 4.5127 3.88499 4.73301L6.86389 7.70957Z" fill="#0a68ff"/>
              </svg>
            </a>
          </div>
          {/* Đánh giá */}
          <div className="d-flex flex-column gap-3">
            <h5 className='fw-medium fs-14px text-dark m-0'>Đánh giá</h5>
            {/* 5 sao */}
            <a href='' className="d-flex align-items-center gap-2">
              <div className="rating d-flex gap-1">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p className='fs-13px m-0 text-secondary-emphasis'>từ 5 sao</p>
            </a>
            {/* 4 sao */}
            <a href='' className="d-flex align-items-center gap-2">
              <div className="rating d-flex gap-1">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill star-gray"></i>
              </div>
              <p className='fs-13px m-0 text-secondary-emphasis'>từ 4 sao</p>
            </a>
            {/* 3 sao */}
            <a href='' className="d-flex align-items-center gap-2">
              <div className="rating d-flex gap-1">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill star-gray"></i>
                <i class="bi bi-star-fill star-gray"></i>
              </div>
              <p className='fs-13px m-0 text-secondary-emphasis'>từ 3 sao</p>
            </a>
          </div>
        </div>
        {/* Danh sách sản phẩm */}
        <div className="col-lg-10">
          <div className="row row-gap-2 gap-lg-3 justify-content-lg-center">
            {books.map(b => <Book data={b} key={b.id} />)}
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
}

export default App
