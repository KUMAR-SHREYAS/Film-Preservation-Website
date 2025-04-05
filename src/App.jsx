import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FAQPage from './components/FAQPage';
import NewsSection from './components/NewsSection';
import Hero from './components/Hero';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import Landing from './components/Landing';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					{/* <Route path="/newssection" element={<NewsSection />} /> */}
					<Route path="/services" element={<Services />} />
					<Route
						path="/"
						element={
							<>
								<Header />
								<Landing />
								<Hero />
								<FAQPage />
								<Gallery />
								<ContactUs />
								<Footer />
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
