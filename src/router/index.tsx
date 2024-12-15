import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Intj from 'pages/result/INTJ';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Main /> },
        { path: 'intj', element: <Intj /> }
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
