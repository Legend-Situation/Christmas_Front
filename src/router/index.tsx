import { useRoutes } from 'react-router-dom';

import Main from 'pages/Main';
import Question from 'pages/Question';
import ResultPage from 'pages/Result';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Main /> },
        { path: 'question', element: <Question /> },
        { path: 'result', element: <ResultPage /> },
      ],
    },
  ]);
}