import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DetailPage from './DetailPage.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './login.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/Detail' element={<DetailPage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>
)
