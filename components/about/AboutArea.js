import React from 'react'
export default function About() {
    return (
        <section className="about-area ptb-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<img src={require("../../static/images/1.png")} alt="image" />
						</div>
					</div>
​
					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<div className="section-title">
								<h2>About Us</h2>
								<div className="bar"></div>
								<p>Traditional methods of content design and development are not sufficient to meet the exploding demand for high quality learning experiences in educational institutions and corporates.</p>
							</div>
​
							<p>Continual Engine is dedicated to finding simpler and less expensive ways to deliver learning at the pace and at a cost that enables scalable solutions.</p>
​
							<p>We use automation, deep learning, machine learning, computer vision and natural language processing techniques to make the process of content discovery, extraction, curation and consumption more precise and efficient.</p>
​
							{/* <p>Business-to-business metrics analytics value proposition funding angel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.</p> */}
						</div>
					</div>
				</div>
​
				<div className="about-inner-area">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our History</h3>
								<p>Traditional methods of content design and development are not sufficient to meet the exploding demand for high quality learning experiences in educational institutions and corporates.</p>
							</div>
						</div>
​
						<div className="col-lg-4 col-md-6">
							<div className="about-text">
								<h3>Our Mission</h3>
								<p>Continual Engine is dedicated to finding simpler and less expensive ways to deliver learning at the pace and at a cost that enables scalable solutions.</p>
							</div>
						</div>
​
						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="about-text">
								<h3>Who we are</h3>
								<p>We use automation, deep learning, machine learning, computer vision and natural language processing techniques to make the process of content discovery, extraction, curation and consumption more precise and efficient.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}