import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  RecoilRoot,
} from 'recoil';
import Router from './modules/main/Router';

const rootNode = document.getElementById('root')

if (rootNode == null) {
  throw new Error('Root node not found');
}

const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();