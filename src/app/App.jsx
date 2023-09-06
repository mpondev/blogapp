import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';

import styles from '../global.module.scss';

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
