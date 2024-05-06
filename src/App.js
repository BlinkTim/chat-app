import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const assignUserToMessage = (text) => {
  const users = ['User 1', 'User 2', 'User 3'];
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomIndex];
  return {
    user: randomUser,
    message: text
  };
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = assignUserToMessage(inputText.trim());
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  useEffect(scrollToBottom, [messages]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.user}:</strong> {message.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App
