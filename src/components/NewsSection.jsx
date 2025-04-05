import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsSection.css';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: 'Movies OR filmmaker',
            pageSize: 5,
            apiKey: '748c06cb42284e3c9574920779353f08'
          }
        });
        setNewsItems(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-section">
      <h1 className="news-heading"><span>Latest Movies </span>& filmmaker News</h1>
      <div className="news-container">
        {newsItems.map((news, index) => (
          <div key={index} className="news-card">
            {news.urlToImage && <img src={news.urlToImage} alt={news.title} className="news-image" />}
            <div className="news-content">
              <h2 className="news-title">{news.title}</h2>
              <p className="news-description">{news.description}</p>
              <span className="news-category">{news.source.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
