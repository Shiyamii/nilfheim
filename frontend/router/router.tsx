import { createBrowserRouter } from 'react-router-dom';
import App from '../src/App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/about',
    element: (
      <div>
        <App />
      </div>
    ),
  },
]);

export default router;
