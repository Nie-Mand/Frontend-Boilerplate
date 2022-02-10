import { RouteBlueprint } from 'types/base'
import { createRoutes, createRoute } from 'utils'

const routes: RouteBlueprint[] = [
  // createRoute('/path', './pages/jsx/path', ['user', 'admin']),
  createRoute('/', './pages/home'),
  createRoute('/admin', './pages/admin', ['admin']),
  createRoute('/login', './pages/login'),
]

export default createRoutes(routes)
