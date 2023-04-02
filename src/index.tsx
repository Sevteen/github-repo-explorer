import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './components/Styles/globalStyles';
import { Pages } from './routes';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Pages />
  </React.StrictMode>
);
