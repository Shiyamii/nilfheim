import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { NextUIProvider } from '@nextui-org/react';
import { Background } from './components/layout/Background.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main>
        <Background />
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);
