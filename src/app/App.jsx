import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from '../context/ThemeContext';
import ThemeProvider from '../providers/ThemeProvider';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import BlogPage from './Blog/BlogPage';
import SinglePage from './SinglePage/SinglePage';

import styles from '../global.module.scss';

const Layout = () => {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </ThemeContextProvider>
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
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/page',
        element: <SinglePage />,
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
