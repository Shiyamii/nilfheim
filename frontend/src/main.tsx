import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Background } from './components/layout/Background.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.tsx';
import { Providers } from './providers.tsx';
import { Header } from './components/layout/Header.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Background />
      <Header />
      <main className={'flex-grow flex flex-col justify-center items-center'}>
        <RouterProvider router={router} />
      </main>
    </Providers>
  </React.StrictMode>,
);
