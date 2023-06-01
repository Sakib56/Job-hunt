import React from 'react';
import footerImg from "../../assets/Icons/Group 9969.png";

const Footer = () => {
    return (
        <div className='mt-8'>
            <footer className="footer p-10 bg-gray-800 text-white">
                <div>
                    <h1 className='text-2xl font-bold'>DevHunt</h1>
                    <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <img className='w-2/4 mt-3' src={footerImg} alt="" />
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Work</a>
                    <a className="link link-hover">Latest news</a>
                    <a className="link link-hover">Careers</a>
                </div>
                <div>
                    <span className="footer-title">Product</span>
                    <a className="link link-hover">Prototype</a>
                    <a className="link link-hover">Plans & Pricing</a>
                    <a className="link link-hover">Customers</a>
                    <a className="link link-hover">Integrations</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Help Desk</a>
                    <a className="link link-hover">Sales</a>
                    <a className="link link-hover">Become a Partner</a>
                    <a className="link link-hover">Developers</a>
                   
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                    
                   
                </div>
            </footer>
        </div>
    );
};

export default Footer;