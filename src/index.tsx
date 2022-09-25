import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const HTMLElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(HTMLElement);
root.render(
  <App />
);

