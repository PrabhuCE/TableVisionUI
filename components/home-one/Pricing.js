import React from 'react'
import Link from 'next/link'
class Pricing extends React.Component {
    render() {
        return (
            <section className="pricing-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>Pricing Plans</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
​
                    <div className="row justify-content-md-center">
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    
                                    <h3>Basic Plan</h3>
                                </div>
                                
                                <div className="price">
                                    <span><sup>$</sup>15.00 <span>/Mon</span></span>
                                </div>
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">5 GB Bandwidth</li>
                                        <li className="active">Highest Speed</li>
                                        <li className="active">1 GB Storage</li>
                                        <li className="active">Unlimited Website</li>
                                        <li className="active">Unlimited Users</li>
                                        <li className="active">24x7 Great Support</li>
                                        <li>Data Security and Backups</li>
                                        <li>Monthly Reports and Analytics</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Select Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table active-plan">
                                <div className="pricing-header">
                                    <h3>Monthly Pay As You Go</h3>
                                </div>
                                
                                {/* <div className="price">
                                    <span><sup>$</sup>35.00 <span>/Mon</span></span>
                                </div> */}
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">First 50 requests free</li>
                                        <li className="active">$ 0.1/request (1-100K requests)</li>
                                        <li className="active">$ 0.2/request (100K+ requests)</li>
                                        <li className="active">&nbsp;</li>
                                        <li className="active">&nbsp;</li>
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="#">
                                        <a className="btn btn-primary">Select Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table">
                                <div className="pricing-header">
                                    <h3>Expertise</h3>
                                </div>
                                
                                
                                
                                <div className="pricing-features">
                                    <ul>
                                        <li className="active">Long term contracts</li>
                                        <li className="active">Discounted prices for high volume</li>
                                        <li className="active">24/7 support</li>
                                        <li className="active">Custom recognition features</li>
                                        <li className="active">SLAs</li>
                                        
                                    </ul>
                                </div>
                                
                                <div className="pricing-footer">
                                    <Link href="mailto:contac@continualengine.com">
                                        <a className="btn btn-primary">Contact</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
​
                <div className="shape8 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../static/images/shape2.svg")} alt="shape" />
                </div>
                <div className="shape7">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
                <div className="shape4">
                    <img src={require("../../static/images/shape4.svg")} alt="shape" />
                </div>
            </section>
        );
    }
}
export default Pricing;