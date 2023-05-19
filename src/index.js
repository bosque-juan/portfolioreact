import React from 'react';
import ReactDOM from 'react-dom/client';
import Style from './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App className={Style}/>

);

reportWebVitals();
