import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/colores.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { enrutador } from './router/enrutador'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={createBrowserRouter(enrutador)} />
  </StrictMode>,
)
