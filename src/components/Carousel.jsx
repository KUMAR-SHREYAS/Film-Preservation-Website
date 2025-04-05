import React, { useState, useEffect } from 'react';
import image1 from "../assets/shreyas_dir_photo.jpg";
import image2 from "../assets/shreyas_dir_photo2.png";
import image3 from "../assets/shreyas_dir_photo3.jpg";
import image4 from "../assets/shreyas_dir_photo4.jpg";
import '../components/Carousel.css';

const images = [
  {
    src: image1,
    author: '',
    title: 'Martin',
    topic: 'Scorsese',
    des: 'Film is history. With each lost reel, we lose a piece of who we are.',
  },
  {
    src: image2,
    author: '',
    title: 'Christopher',
    topic: 'Nolan',
    des: 'Film is the best way to preserve moving images for the future. We can’t let it vanish into digital oblivion.',
  },
  {
    src: image3,
    author: '',
    title: 'Steven',
    topic: 'Spielberg',
    des: 'If we don’t preserve film, we lose our ability to remember. And if we can’t remember, we can’t dream.',
  },
  {
    src: image4,
    author: '',
    title: 'Quentin',
    topic: 'Tarantino',
    des: 'There’s a soul to film you can’t replicate. That’s why saving it matters',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 700);
    return () => clearTimeout(autoSlide);
  }, [currentIndex]);

  const showSlider = (type) => {
    const sliderItems = document.querySelectorAll('.carousel .list .item');
    const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
    const carousel = document.querySelector('.carousel');
    const sliderList = document.querySelector('.carousel .list');
    const thumbnailList = document.querySelector('.carousel .thumbnail');

    if (type === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnailList.appendChild(thumbnailItems[0]);
      carousel.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailList.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carousel.classList.add('prev');
    }

    setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, 300);
  };

  return (
    <div className="carousel">
      <div className="list">
        {images.map((img, index) => (
          <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
            <img src={img.src} alt="carousel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="content">
              <div className="author">{img.author}</div>
              <div className="title">{img.title}</div>
              <div className="topic">{img.topic}</div>
              <div className="des">{img.des}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {images.map((img, index) => (
          <div key={index} className="item">
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={() => showSlider('prev')}>&lt;</button>
        <button onClick={() => showSlider('next')}>&gt;</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;