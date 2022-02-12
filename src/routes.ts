import { RouteBlueprint } from './types/base'
import { createRoutes } from './utils'

const routes: RouteBlueprint[] = [
  {
    path: '/',
    componentPath: './pages/home',
    layout: 'LeftSidebar',
  },
  {
    path: '/admin',
    componentPath: './pages/admin',
    roles: ['admin'],
  },
  {
    path: '/login',
    componentPath: './pages/login',
  },
]

export default createRoutes(routes)
