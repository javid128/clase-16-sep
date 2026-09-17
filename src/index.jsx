import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ListaNombres } from './components/ListaNombres';
import { ApiPokemon } from './components/ApiPokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListaNombres />
    <ApiPokemon />
  </React.StrictMode>
);
