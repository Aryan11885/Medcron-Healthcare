import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import HeroSection from './components/HeroSection.jsx'
import CompanyInfo from './components/CompanyInfo.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
)
