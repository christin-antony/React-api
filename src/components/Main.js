import React, { useState } from 'react';
import './Main.css';

const Main = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const searchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=8d6e54c61fb449338d5f591f292ffb00`);
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.log("error")
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchNews();
  };

  return (
    <div>
      <div className='div1'>
        <h1 style={{fontSize:"50px",fontWeight:'bold',color:"black",marginBottom:'50px',marginTop:'30px'}}><i>News Search App</i></h1>
        <form onSubmit={handleSearch} className="d-flex gap-2 " style={{marginBottom:"30px"}}>
          <input  className="form-control bg-primary "
            type="text"
            placeholder="Search for news..."
            value={query}
            style={{width:'580px'}}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="btn btn-success" >
            Search
          </button>
        </form>
        {articles.map((article, index) => (
          <div key={index} className='card ' style={{backgroundColor:'yellow',borderRadius:'30px',marginBottom:"30px"}}>
            <h2 className='h1' style={{color:'red',margin:"30px"}}>{article.title}</h2>
            <p className='p1' style={{margin:"30px"}}>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={{margin:'30px'}}>Read more</a>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
