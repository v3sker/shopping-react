import Home from '../components/Home.jsx';
import Store from '../components/Store.jsx';
import ErrorPage from '../components/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/store',
    element: <Store />,
  },
]

export default routes;