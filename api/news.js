// /api/news.js
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'movies OR film',
        pageSize: 5,
        apiKey: process.env.API_key
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}