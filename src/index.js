import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './pages/home'
import './pages/home.scss'
import { BrowserRouter } from 'react-router-dom'

const appJsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
