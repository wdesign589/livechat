import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Client from './client.jsx'
import AdminClient from './adminClient.jsx'
import Admin from './admin.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div className='text-xl bg-white font-bold'>404 not found</div>
  },
  {
    path: '/client/:id',
    element: <Client />
  },
  {
    path: '/admin/client/:id',
    element: <AdminClient />
  },
  {
    path: '/admin',
    element: <Admin />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
