import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './AuthProvider/AuthProvider'
import './index.css'
import router from './router/router'
import 'animate.css'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
)
