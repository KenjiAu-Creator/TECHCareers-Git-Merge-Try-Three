import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloD from './components/HelloD';
import HelloK from './components/HelloK';

ReactDOM.render(
  <React.StrictMode>
    <HelloD />
    <HelloK />
  </React.StrictMode>,
  document.getElementById('root')
);
