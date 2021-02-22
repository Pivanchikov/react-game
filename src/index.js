import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CanvasCreator from './components/Canvas'

ReactDOM.render(
  <React.StrictMode>
    <CanvasCreator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
