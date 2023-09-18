import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './App.js'; // 상기 코드와 같은 효과

// 둘 다 가능
// const root = ReactDOM.createRoot(document.querySelector('#root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        {/* <h1>일본반 화이팅</h1> */}
    </>
);

