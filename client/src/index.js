import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Particals from './components/Particals/particals';
import {store} from './redux/store'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Particals />
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
);


