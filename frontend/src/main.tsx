import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Background } from './components/layout/Background.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';
import { Providers } from './providers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <main>
        <Background />
        <RouterProvider router={router} />
      </main>
    </Providers>
  </React.StrictMode>,
);
