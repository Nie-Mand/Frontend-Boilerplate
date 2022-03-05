import { RoutesCreator } from './types/base'
import { lazy } from 'react'

export const createRoutes: RoutesCreator = routes => {
  return routes.map(route => {
    return {
      path: route.path,
      Component: lazy(
        () =>
          import(
            /* @vite-ignore */
            `./pages/${route.componentPath}`
          ),
      ),
      roles: route.roles,
    }
  })
}
