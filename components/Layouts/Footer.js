import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'
export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/logo.svg")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>
​
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
​
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
​
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        4th Floor, Ferns Icon, Doddanekundi, Mahadevapura, Bengaluru 560037, India
                                    </li>
                                    <li>
                                        <Icon.MapPin/>
                                        5440 Harvest Hill Road, Suite 249, Dallas, Texas 75230, USA
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>contact@continualengine.com</a></Link>
                                    </li>
                                  
                                </ul>
                                <ul className="social-links">
                                    
                                    <li>
                                        <Link href="https://twitter.com/ContinualEngine">
                                            <a className="twitter"><Icon.Twitter /></a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="https://medium.com/continual-engine">
                                            <a className="instagram"><Icon.Medium /></a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="https://in.linkedin.com/company/continual-engine">
                                            <a className="linkedin"><Icon.Linkedin /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
​
                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright &copy;2019 by Continual Engine India Pvt. Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
​
                <img src={require("../../static/images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../../static/images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../static/images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}