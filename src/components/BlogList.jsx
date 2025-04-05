import React from 'react';
import './BlogList.css'; 

const BlogList = () => {
  const blogs = [
    {
      title: 'Understanding React',
      author: 'John Doe',
      date: '2024-08-04',
      content: 'React is a powerful JavaScript library for building user interfaces...',
      imageUrl: 'https://via.placeholder.com/300?text=React' // Placeholder image URL
    },
    {
      title: 'A Guide to JavaScript ES6',
      author: 'Jane Smith',
      date: '2024-07-20',
      content: 'ES6 introduced many new features to JavaScript, including let and const...',
      imageUrl: 'https://via.placeholder.com/300?text=JavaScript' // Placeholder image URL
    },
    {
      title: 'Introduction to CSS Flexbox',
      author: 'Alice Johnson',
      date: '2024-06-15',
      content: 'CSS Flexbox is a layout module that makes it easier to design flexible responsive layout...',
      imageUrl: 'https://via.placeholder.com/300?text=CSS' // Placeholder image URL
    }
  ];

  return (
    <div className="blog-list">
      <h1><span>Blog</span> Posts</h1>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="info">
              <h3>{blog.title}</h3>
              <p><strong>By:</strong> {blog.author}</p>
              <p><strong>Date:</strong> {blog.date}</p>
              <p>{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
