import React from 'react'
import ReactDOM from 'react-dom'
import { TransactionProvider } from './context/TransactionContext';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.render(
  <TransactionProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TransactionProvider>,
  document.getElementById('root')
)
