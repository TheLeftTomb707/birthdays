import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import monkey from "./drill-monkey.webp"
import App from './App';
import reportWebVitals from './reportWebVitals';

const birth = [
  {
    fname: "Gabriel",
    lname: "Rabago",
    birthday: new Date('2005-08-16'),
    img: monkey
  },
  {
    fname: "Cameron",
    lname: "Rydwell",
    birthday: new Date('2004-10-12'),
    img: monkey
  },
  {
    fname: "Nelson",
    lname: "Vasquez",
    birthday: new Date('2005-02-26'),
    img: monkey
  },
  {
    fname: "Annabelle",
    lname: "Tran",
    birthday: new Date('2004-12-02'),
    img: monkey
  },
]

export default birth;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
