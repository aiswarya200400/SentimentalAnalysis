import React, { useState } from 'react';
import './Textbox.css'; // Import the external CSS file

const Textbox = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted: ${text}`);
  };

  return (
    <div className="textbox-container">
      <h2 className="heading">Enter Your Text Here</h2>
      <input
        type="text"
        className="textbox"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      <p className="text-output">{text}</p>
    </div>
  );
};

export default Textbox;
