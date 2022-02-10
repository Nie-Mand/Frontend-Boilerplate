import { RoutesCreator, RouteCreator } from './@types/base'
import { lazy } from 'react'

export const createRoutes: RoutesCreator = routes => {
  return routes.map(route => {
    return {
      path: route.path,
      Component: lazy(() => import(route.componentPath)),
      roles: route.roles,
    }
  })
}

export const createRoute: RouteCreator = (path, componentPath, roles) => ({
  path,
  componentPath,
  roles,
})
