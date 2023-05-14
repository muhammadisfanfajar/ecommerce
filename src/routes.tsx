import Index from '~/pages';
import Detail from '~/pages/detail';
import Home from '~/pages/home';
import Error from '~/components/pages/error';

export const routes = [
  {
    path: '/',
    element: <Index />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'detail', element: <Detail /> },
    ],
  },
  {
    path: '/login',
    element: <Index />,
  },
];
