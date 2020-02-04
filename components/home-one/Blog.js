import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Blog extends React.Component {
    render() {
        return (
            <section className="blog-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>The News from Our Blog</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/blog-image/1.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i data-feather="calendar"></i> March 15, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="#">
                                            <a>The security risks of changing package owners</a>
                                        </Link>
                                    </h3>

                                    <span>
                                        by 
                                        <Link href="#">
                                            <a href="#">admin</a>
                                        </Link>
                                    </span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/blog-image/2.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i data-feather="calendar"></i> March 17, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Tips to Protecting Your Business and Family</a>
                                        </Link>
                                    </h3>

                                    <span>by 
                                        <Link href="#">
                                            <a>smith</a>
                                        </Link>
                                    </span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../static/images/blog-image/3.jpg")} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i data-feather="calendar"></i> March 19, 2019
                                    </div>
                                </div>

                                <div className="blog-post-content">
                                    <h3>
                                        <Link href="#">
                                            <a>Protect Your Workplace from Cyber Attacks</a>
                                        </Link>
                                    </h3>

                                    <span>by 
                                        <Link href="#">
                                            <a>john</a>
                                        </Link>
                                    </span>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">Read More <Icon.ArrowRight /> </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
