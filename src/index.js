import React from 'react';
import ReactDOm from 'react-dom/client';
import App from './App';
import './index.css';
const root = ReactDOm.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    
        <App/>
    </React.StrictMode>
);