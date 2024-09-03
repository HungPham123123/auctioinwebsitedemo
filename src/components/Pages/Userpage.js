import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';


function Userpage() {

    return (
        <div class="user-page">
        <div class="container container-user">
          <div class="user-box">
          <div class="user-header">
            <section>
              <button class="user-image">
                <img src="Shoes/IMAGES/IMAGES/defaultuserimg.jpg" alt=""/>
              </button>
              <div class="user-header-content">
                <h1 id="username"></h1>
                <p id="member-since">Walkz Member Since (Created ACCOUNT)</p>
              </div>
            </section>
          </div>
          <div class="user-select-header">
            <div class="selected-page">
              <h3>My Profile</h3>
              <a href="">Log Out</a>
            </div>
            <div class="Tab-Select">
              <div class="nav-tab">
                <span>
                  <Link class="nav-link selected active" to="/user/myprofile"  data-toggle="tab">My Profile</Link>
                </span>
              </div>
              <span class="Select-line selected-MyProfile"></span>
              <div class="nav-tab">
                <span>
                  <Link class="nav-link" to="/user/message" data-toggle="tab">Messages</Link>
                </span>
              </div>
              <div class="nav-tab">
                <span>
                  <a class="nav-link" href="#Orders" data-toggle="tab">Orders</a>
                </span>
              </div>
              <div class="nav-tab">
                <span>
                  <a class="nav-link" href="#Support" data-toggle="tab">Support</a>
                </span>
              </div>
            </div>
            <div class="tab-content">
          
              <div class="tab-pane" id="Support">
                <div class="contact-info" style={{ display: 'block' }}>
                  <div class="col-md-6">
                      <div class="customer-support">
                          <i class="fa-solid fa-user"><p>Customer Support</p></i>
                          <div class="contact-list">
                          <a href="mailto:support@gmail.com">support@gmail.com</a>
                          <a href="tel:+84 123 456 789">+84 123 456 789</a>
                          <p id="openLiveChatBtn">Live Chat</p>
                      </div>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <div class="store-location">
                          <div class="store-header">
                              <i class="fa-solid fa-location-dot"><p>Store</p></i>
                          </div>
                          <div class="store-list" >
                              <a href="https://www.google.com/maps?q=21.028722,105.783361">Số 8 Tôn Thất Thuyết, Hà Nội</a>
                              <a href="https://www.google.com/maps?q=10.786407244885046,106.66628462699894">590 Cách Mạng Tháng Tám, TP. HCM</a>
                              <a href="https://www.google.com/maps?q=10.790970924064588,106.68241486748099"> 391A, Nam Kỳ Khởi Nghĩa, TP. HCM</a>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        
    );
}


export default Userpage;