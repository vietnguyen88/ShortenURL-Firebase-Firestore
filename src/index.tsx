import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App';
import Output from './pages/Output';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
 
},{
  path:'/:code',
  element :<Output/>
}])

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
