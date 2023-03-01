import React from "react";

import video from "./video/video.webm";
import { homeBg } from "../../assets/image";

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Home = () => {
	return (
		<>
			<Fade>
				<div id="About" className="HomeContainer">
					<video poster={homeBg} autoPlay loop muted src={video} />
				</div>
			</Fade>
			<div className="AboutUS">
				<div className="text-center">
					<Fade delay={2100} right cascade>
						<h1>
							Hello! My name is
							<span style={{ fontWeight: 600 }}> Syed Fawad Hashmi </span>
						</h1>
					</Fade>
					<Fade duration={2000} delay={2400} right cascade>
						<h3>
									<h2>For Web Developer</h2>
									<p>Hey! Are you looking For a Web developer, React developer or
							firebase developer or wordpress developer? I have 2.5 years of experience and working to
							make your development faster, easier and efficient. Available 24/7
							get in touch to discuss details.</p>
						</h3>
					</Fade>
					<Fade duration={3000} delay={2500} right cascade>
						<h3>
									<h2>For Graphic Designing</h2>
									<p>Hey! Are you looking For a graphic designing, ui ux mobile app and website designing or
							logo, flyers, business card, product image business, Book cover,? I have 2 years of experience and working to
							make your designing faster, easier and efficient.tools which i use adobe photoshop, adobe xd, figma Available 24/7
							get in touch to discuss details.</p>
						</h3>
					</Fade>
					{/* <!--===================== BLOB BUTTON START  =====================--> */}
					<a href="mailto:syedfawadhashmi5@gmail.com">
						<Flip delay={2600} duration={3200} bottom>
							<div class="buttons">
								<button class="blob-btn">
									Contact me
									<span class="blob-btn__inner">
										<span class="blob-btn__blobs">
											<span class="blob-btn__blob"></span>
											<span class="blob-btn__blob"></span>
											<span class="blob-btn__blob"></span>
											<span class="blob-btn__blob"></span>
										</span>
									</span>
								</button>
								<br />
							</div>
						</Flip>
					</a>
					{/* <!--===================== BLOB BUTTON END  =====================--> */}
				</div>
			</div>
		</>
	);
};

export default Home;
