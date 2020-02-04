import React from 'react'
import * as Icon from 'react-feather';
import ReactWOW from 'react-wow'
class ServicesArea extends React.Component {
    render() {
        return (
            <React.Fragment>
                
​
                <section className="features-area ptb-80 bg-f7fafd">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Features</h2>
                            <div className="bar"></div>
                            <p>Our AI technology, converts complex table images to faithfully replicated HTML, and XLSX version. Also, auto-generate alt text for these images.</p>
                        </div>
​
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-features">
                                    <div className="icon">
                                        <Icon.Target />
                                    </div>
​
                                    <h3>Highly Accurate</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
​
                            <div className="col-lg-6 col-md-6">
                                <div className="single-features">
                                    <div className="icon">
                                        <Icon.Image />
                                    </div>
​
                                    <h3>Highly Complex Images</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
​
                            <div className="col-lg-6 col-md-6">
                                <div className="single-features">
                                    <div className="icon bg-c679e3">
                                        <Icon.Lock />
                                    </div>
​
                                    <h3>Secure</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
​
                            <div className="col-lg-6 col-md-6">
                                <div className="single-features">
                                    <div className="icon bg-c679e3">
                                        <Icon.Cloud />
                                    </div>
​
                                    <h3>Cloud Based</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
​
                            <div className="col-lg-6 col-md-6">
                                <div className="single-features">
                                    <div className="icon bg-eb6b3d">
                                        <Icon.Download />
                                    </div>
​
                                    <h3>Download in Multiple Formats</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
​
                            <div className="col-lg-6 col-md-6">
                                <div className="single-features">
                                    <div className="icon bg-c679e3">
                                        <Icon.Grid />
                                    </div>
​
                                    <h3>Simple Dashboard</h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default ServicesArea