import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './MainLayout.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router'
import Kiymlar from './Kiymlar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
      <Route path='/' element={<MainLayout />}>
      <Route path='img/' element={<Kiymlar/>}></Route>

        <Route index element={<App />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
