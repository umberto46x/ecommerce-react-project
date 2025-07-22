import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.ts';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
