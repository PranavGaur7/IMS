import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <header>
                <nav>
                    <h1 style={{ fontSize: '25px' }}>Industrial Management System</h1>
                    <div>
                        <button className="login-btn" style={{ margin: '10px' }}> <Link to='/login'>Login</Link> </button>
                        <button className="login-btn" style={{ margin: '10px', color: 'white' }}> <Link to='/signup'>Signup</Link> </button>
                    </div>
                </nav>
            </header>
            <section className="homepage">
                <h1 style={{ fontSize: '60px' }}>Welcome to Industrial Management System</h1>
                <p style={{ fontSize: '26px' }}>This is the homepage of our industrial management system.</p>
            </section>


            <section>
                <h1 style={{ textAlign: 'center', marginTop: '30px', fontSize: '50px' }} className=' text-center mt-[100px]'>Our Services</h1>
                <div className="inst mx-96 mb-20">
                    <div style={{ textAlign: 'center', color: 'white', marginTop: '5px', fontSize: '40px', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} className='mx-96'><b>Instructions</b></div>
                    <ul>
                        <li style={{ '--accent-color': '#41516C' }}>
                            <div className="date" style={{ fontSize: '30px' }}>Supply Chain Management</div>
                            <div className="title" style={{ color: 'black', width: '50vw', fontSize: '20px' }}>Efficiently manage the flow of goods and services from raw materials to finished products, ensuring timely delivery and optimal utilization of resources.Efficiently manage the flow of goods and services from raw materials to finished products, ensuring timely delivery and optimal utilization of resources.</div>
                        </li>
                        <li style={{ '--accent-color': '#FBCA3E' }}>
                            <div className="date" style={{ fontSize: '30px' }}>Inventory Control</div>
                            <div className="title" style={{ color: 'black', width: '50vw', fontSize: '20px' }}>Streamline inventory management processes to minimize stockouts, reduce excess inventory, and optimize inventory turnover.</div>
                        </li>
                        <li style={{ '--accent-color': '#E24A68' }}>
                            <div className="date" style={{ fontSize: '30px' }}>Quality Assurance</div>
                            <div className="title" style={{ color: 'black', width: '50vw', fontSize: '20px' }}>Implement robust quality control measures to maintain product quality standards, meet customer expectations, and comply with regulatory requirements.</div>
                        </li>
                        <li style={{ '--accent-color': '#1B5F8C' }}>
                            <div className="date" style={{ fontSize: '30px' }}>Production Planning</div>
                            <div className="title" style={{ color: 'black', width: '50vw', fontSize: '20px' }}>Plan and schedule production activities effectively to meet demand forecasts, optimize resource allocation, and enhance overall production efficiency.</div>
                        </li>
                        <li style={{ '--accent-color': '#4CADAD' }}>
                            <div className="date" style={{ fontSize: '30px' }}>Bills management</div>
                            <div className="title" style={{ color: 'black', width: '50vw', fontSize: '20px' }}>Handle invoicing, billing, and payment processes seamlessly to ensure accurate financial transactions and maintain healthy cash flow.</div>
                        </li>
                        <li style={{ '--accent-color': '#41516C' }}>
                            <div className="date" style={{ fontSize: '30px' }}>Order management</div>
                            <div className="title" style={{ color: 'black', width: '50vw', fontSize: '20px' }}>Efficiently process customer orders, track order status, and manage order fulfillment to ensure timely delivery and customer satisfaction.</div>
                        </li>
                    </ul>
                </div>
            </section>


            <section className="homepage">
                <h2 style={{ fontSize: '35px' }}>About Us</h2>
                <p style={{ fontSize: '20px', paddingBlock: '20px' }}>We are a team of experts dedicated to optimizing industrial processes and enhancing efficiency.</p>
            </section>

            <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <div id="contact">
                    <h2 style={{ fontSize: '40px' }}>Contact Us</h2>
                </div>
                <div>
                    <p>If you have an inquiries or need assistance, feel free to reach out to us.</p>
                    <p className="footer-company-about">
                        <i className="fa fa-phone"></i>
                        Contact no :
                        <a style={{ color: "white" }} href="tel:987-969-4954">987-969-4954</a>
                        <br />
                        whatsapp no :
                        <a style={{ color: "white" }} href="tel:987-969-4954">987-969-4954</a>
                        <br />
                        <i className="fa fa-envelope"></i>
                        Email ID :
                        <a style={{ color: "white" }} href="mailto: manavkalola1612@gmail.com">manavkalola1612@gmail.com</a>
                        <br />
                    </p>
                    <p>&copy; 2024 Industrial Management System</p>
                </div>
            </footer>
        </>
    );
}
