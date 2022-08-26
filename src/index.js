import React from 'react';
import ReactDOM from 'react-dom/client';
import { BotProvider } from './Context/botContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BotProvider>
    <App />
  </BotProvider>
);


