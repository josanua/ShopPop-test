import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Styles/index.css';
import App from './Components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const elem = (
  <div>
    <h2>Hello World</h2>
  </div>
);

console.log(elem);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);