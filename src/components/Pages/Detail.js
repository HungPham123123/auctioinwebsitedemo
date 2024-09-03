import React, { useState } from 'react';
import './Detail.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [mainImage, setMainImage] = useState('/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const toggleMoreInfo = () => {
    setIsMoreInfoVisible(!isMoreInfoVisible); 
  };

  const changeMainImage = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-1">
          <div className="d-flex flex-column">
            <img 
              src="/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg" 
              alt="Book Thumbnail" 
              className="img-thumbnail mb-2" 
              onClick={() => changeMainImage('/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg')}
            />
            <img 
              src="/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg" 
              alt="Book Thumbnail" 
              className="img-thumbnail mb-2" 
              onClick={() => changeMainImage('/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg')}
            />
            <img 
              src="/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg" 
              alt="Book Thumbnail" 
              className="img-thumbnail mb-2" 
              onClick={() => changeMainImage('/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg')}
            />
          </div>
        </div>

        <div className="col-md-7">
          <img className="img-fluid main-image" src={mainImage} alt="Main Book" />
          
          {/* Thông tin mô tả sản phẩm */}
          <div className="product-description mb-3">
            <p>Description</p>
            <p>Antique Item Description......</p>
            {isMoreInfoVisible && (
                    <div>
                    <p><strong> General Introduction:</strong> This is an antique painting from the 18th century, crafted using oil on canvas.</p>
                    <p><strong>Condition:</strong> This is an antique painting from the 18th century, crafted using oil on canvas.</p>
                    <p><strong>Provenance:</strong> This is an antique painting from the 18th century, crafted using oil on canvas.</p>
                    <p><strong>Author Bio:</strong> This is an antique painting from the 18th century, crafted using oil on canvas.</p>
                  </div>
            )}
            <p>
              <a 
                href="#" 
                style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }} 
                onClick={(e) =>{
                  e.preventDefault();
                toggleMoreInfo();
              }}
              >
                {isMoreInfoVisible ? '...Show less' : '...Show more'}
              </a>
            </p>
          </div>
        </div>
        {/* Thông tin sản phẩm */}
        <div className="col-md-4">
          <div className="product-info">
            <div className="product-title mb-3">
            <p className="text-muted" style={{ fontWeight: '500' }}>Fri 18 aug 10:50</p>
              <h2>Books</h2>
            </div>
            <div className="product-bid mb-3 d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-0">Leading bid | <span className="bidder-count" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>10 Bidders</span></p>
              </div>
              <div>
                <p className="mb-0">End in </p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="mb-0">1000$</h3>
              <span className="end-time text-danger">1 day 5 hours</span>
            </div>
            
            {/* Your max bid */}
            <div className="mb-1">
              <p className="mb-0" style={{ fontWeight: '500' }}> Your max bid</p>
            </div>
            
            <div className="bid-input mb-3 d-flex align-items-center" >
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter your maximum bid $" 
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                style={{ borderRadius: '0', padding: '10px', backgroundColor: '#f8f9fa', flex: '1' }}
              />
              <button className="btn btn-dark "  style={{ height: '45px',  flexShrink: '0' , borderRadius: '0' }}>Place Bid</button>
            </div>
            
            {/* Payment Info with Toggle */}
            <div className="payment-info mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Payment</h4>
                <button onClick={toggleDescription} className="btn btn-link"  style={{ color: 'black', fontWeight: 'bold' }}>
                  {isDescriptionVisible ? '∧' : '∨'}
                </button>
              </div>
              {isDescriptionVisible && (
                <p>All payments are reviewed by Fox Auction for your security.</p>
              )}
            </div>
            <p>Direct payment | Partial payment | Invoice
            Options with buyer protection are available.
            <p href="#" style={{ fontWeight: 'bold', textDecoration: 'underline', marginTop: '20px', display: 'inline-block', color: 'black' }}>
              Bran more</p>
            </p>
            <div className="seller-info">
            <hr className="custom-line" style={{  backgroundColor: 'black' }} />

              <div className="product-bid mb-3 d-flex justify-content-between align-items-center">
              <div>
                <p><strong>Markus</strong></p>
              </div>
              <div>
                <p>
                  <span className="text-black" style={{ marginRight: '10px' }}>
                  <i className="bi bi-star-fill"></i>
                  </span>
                <span style={{ marginRight: '10px' }}>4,5</span>
                <img src="/img/360_F_509386318_BCZziwuHvLAq70WUfzyXgE8meya9pywS.jpg" alt="Your Image" style={{ width: '30px', height: '40px' }} />
                </p>
              </div>
              </div>
                <p className="text-muted">Hanoi, Vietnam</p>
                <p><span className="text-black"><i className="bi bi-star"></i></span> | 10,000 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Home;