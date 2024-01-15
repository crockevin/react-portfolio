import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/*use Browser routes to to the App Routes to work */}
      <App /> {/*Loads App */}
    </BrowserRouter>
  </React.StrictMode>,
)
