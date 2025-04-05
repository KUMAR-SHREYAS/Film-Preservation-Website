import React, { useEffect, useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import './Header.css';

const Header = () => {
	const [showDiv, setShowDiv] = useState(false);
	useEffect(() => {
		const navbar1 = document.querySelector('.navbar1');
		const navbar = document.querySelector('.navbar');
		const menuIcon = document.querySelector('#menu-icon');
		const navLinks = document.querySelectorAll('header nav a');
		const sections = document.querySelectorAll('section');

		const handleScroll = () => {
			if (
				window.scrollY >=
				document.documentElement.scrollHeight - 1.5 * window.innerHeight
			) {
				navbar1.classList.add('show');
				navbar1.classList.remove('hide');
				navbar.classList.add('hide');
				navbar.classList.remove('show');
			} else if (window.scrollY > window.innerHeight) {
				navbar1.classList.add('hide');
				navbar1.classList.remove('show');
				navbar.classList.add('show');
				navbar.classList.remove('hide');
			} else {
				navbar1.classList.add('show');
				navbar1.classList.remove('hide');
				navbar.classList.add('hide');
				navbar.classList.remove('show');
			}

			sections.forEach((sec) => {
				let top = window.scrollY;
				let offset = sec.offsetTop - 150;
				let height = sec.offsetHeight;
				let id = sec.getAttribute('id');

				if (top >= offset && top < offset + height) {
					navLinks.forEach((link) => {
						link.classList.remove('active');
						document
							.querySelector(`header nav a[href*=${id}]`)
							.classList.add('active');
					});
				}
			});
		};
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleResize = () => {
		if (window.innerWidth > 895) {
			setShowDiv(false);
		}
	};
	const handleMenuIconClick = () => {
		setShowDiv(!showDiv);
	};
	

	return (
		<div>
			<header className="header">
				<a href="#home" className="logo">
					<span> CineRevive</span>
				</a>

				<i
					className={`bx bx-menu ${showDiv ? 'bx-x' : ''}`}
					id="menu-icon"
					onClick={handleMenuIconClick}
				></i>
				<nav className={'navbar1 show'}>
					<a href="#home" className="active">
						Home
					</a>
					{/* <a href="/newssection">News
					</a> */}
					<a href="/services">Services</a>
					<a href="#section-wrapper">Contact</a>
				</nav>
				{showDiv && (
					<div className={`showDiv ${showDiv ? 'active' : ''}`}>
						<ul>
							<li>
								<a href="#" className="active">
									Home
								</a>
							</li>
							<li>
								<a href="#education">Education</a>
							</li>
							<li>
								<a href="#services">Services</a>
							</li>
							<li>
								<a href="#testimonials">Testimonials</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				)}
			</header>

			<nav className={'navbar hide'}>
				<nav className="nav">
					<a href="#">
						<i className="fas fa-home"></i>Home
					</a>
					<a href="/services">
						<i className="fas fa-download"></i>Services
					</a>
					{/* <a href="/newssection">
						<i className="fas fa-comments-dollar"></i>News
					</a> */}
					<a href="#section-wrapper">
						<i className="fas fa-user"></i>Contact
					</a>
				</nav>
			</nav>
		</div>
	);
};

export default Header;
