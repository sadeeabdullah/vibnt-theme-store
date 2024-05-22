import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    </RouterProvider>
)
