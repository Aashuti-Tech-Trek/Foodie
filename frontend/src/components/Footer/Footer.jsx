import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'> 
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.foodie_icon} alt="" />
                <p>Enjoy delicious food from your favorite restaurants.
Fast delivery, easy to use, and always satisfying.

No more waiting in lines or cooking at home.
Order fresh, tasty meals with just a few taps.

</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-214-723-889</li>
                    <li>Contact@foodie.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 &nbsp;  &copy; &nbsp; foodie.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
