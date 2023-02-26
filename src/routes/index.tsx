import { PageWrapper } from '@/components/layout/PageWrapper'
import { createBrowserRouter } from 'react-router-dom'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'

export enum RouteName {
  ROOT = '/',
  DETAILS = '/details/:id',
}

export const router = createBrowserRouter([
  {
    path: RouteName.ROOT, element: <PageWrapper />, children: [
      { path: RouteName.ROOT, element: <Home /> },
      { path: RouteName.DETAILS, element: <Details /> },
    ]
  }
])
