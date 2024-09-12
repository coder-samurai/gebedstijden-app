import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './pages/App.jsx';
import Wie from './pages/Wie.jsx';
import Gebedstijden from './pages/Gebedstijden.jsx';
import './css/index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/gebedstijden",
    element: <Gebedstijden/>
  },
  {
    path: "/wie-ben-ik",
    element: <Wie/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);