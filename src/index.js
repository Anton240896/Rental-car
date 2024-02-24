import React from 'react';
import { createRoot } from 'react-dom/client'; // Зміна імпорту

import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Rental-car">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
