import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// ? Routes
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './shared/routes/AppRoutes'


const rootElement = document.getElementById('root')
render(
  <Router>
    <AppRouter />
  </Router>
  , rootElement);

serviceWorker.unregister();
