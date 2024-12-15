import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Question from 'pages/Question';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Main /> },
        { path: '/question', element: <Question /> }
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
