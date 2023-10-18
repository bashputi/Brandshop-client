import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myRouter from './layOut/Router/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './layOut/Pages/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
  </React.StrictMode>,
)
