import 'boxicons/css/boxicons.min.css';
import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="mainFooter">
				<div className="footerDescription">
					<h2>CineRevive</h2>
					<p>
						Welcome to CineRevive – The Vault of Cinematic Legacy
						At CineRevive, we believe that every reel tells a story worth saving. In a world where digital dominates, we are committed to preserving the soul of cinema — the physical film reels that shaped generations.

					</p>
				</div>
				<div className="quick">
					<h4>Quick Access</h4>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#education">Movies</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#testimonials">Testimonials</a>
						</li>
					</ul>
				</div>
				<div className="help">
					<h4>Help &amp; Support</h4>
					<ul>
						<li>
							<a href="#home">Contact Us</a>
						</li>
						<li>
							<a href="#education">Services</a>
						</li>
						<li>
							<a href="#services">Hire Us</a>
						</li>
					</ul>
				</div>
				<div className="social">
					<h4>Socials</h4>
					<ul>
						<li>
							<a href="#home">Facebook</a>
						</li>
						<li>
							<a href="#education">LinkedIn</a>
						</li>
						<li>
							<a href="#services">Instagram</a>
						</li>
						<li>
							<a href="#">Discord</a>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="disclaimer">
				&copy; 2024 KalkiNi&trade; is a registered trademark. All Rights
				Reserved.
			</p>
		</footer>
	);
}
