import React from 'react';
import './Home.css';
import Textbox from './Textboxx';

const Home = () => {
  return (
    <div className="about-container">
      <h1 className="heading">Sentimental Analysis of Text Messages</h1>
      <hr className="separator" />
      
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>

Sentiment analysis is the process of evaluating text to determine its emotional tone—positive, negative, or neutral. It’s widely used in areas like customer service, social media monitoring, and market research. By identifying sentiment, businesses can better understand customer feedback, improve responses, and adapt strategies to meet customer needs effectively.

           
          </p>
        </div>
        <img 
          src="/images/emojis.jpg" 
          alt="About Us" 
          className="about-image" 
        />
      </div>
      <Textbox />
    </div>
  );
};

export default Home;
