import React, { useState } from 'react';
import '../components/ContactUs.css';
import emailjs from '@emailjs/browser';
import { useSnackbar } from "notistack";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, message } = formData;
        if (!firstName || !lastName || !email || !phone || !message) {
            return false;
        }
        return true;
    };

    

    return (
        <section id="section-wrapper">
            <div className="box-wrapper">
                <div className="info-wrap">
                    <h2 className="info-title">Contact Information</h2>
                    <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                    <ul className="info-details">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span className='info-form-title'>Phone:</span> <a href="tel:+1235235598">+91 6387156580</a>
                        </li>
                        <li>
                            <i className="fas fa-paper-plane"></i>
                            <span className='info-form-title'>Email:</span> <a href="mailto:info@yoursite.com">yashsahay00@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-globe"></i>
                            <span className='info-form-title'>Website:</span> <a href="#">cineRevive.com</a>
                        </li>
                    </ul>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div className="form-wrap">
                    <form>
                        <h2 className="form-title">Send us a message</h2>
                        <div className="form-fields">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="fname"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="lname"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="email"
                                    placeholder="Mail"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="phone"
                                    placeholder="Phone"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message"
                                />
                            </div>
                        </div>
                        <input type="submit" value="Send Message" className="submit-button"/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
