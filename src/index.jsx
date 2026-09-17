import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ListaNombres } from './components/ListaNombres';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListaNombres />
  </React.StrictMode>
);
