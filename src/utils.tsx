import { RoutesCreator } from './types/base'
import { lazy } from 'react'

const loadRoutes = () => {
  const ROUTES = import.meta.glob('/src/pages/**/index.tsx')
  const routes = Object.keys(ROUTES).reduce(
    (acc: { [key: string]: any }, cur: string) => {
      let key = cur
        .replace(/\/src\/pages|index|\.tsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1')
      key = key.substring(1, key.length - 1)
      return { ...acc, [key]: ROUTES[cur] }
    },
    {},
  )
  return routes
}

export const createRoutes: RoutesCreator = routes => {
  const loadedRoutes = loadRoutes()
  return routes.map(route => {
    const Component = lazy(loadedRoutes[route.componentPath])
    return {
      path: route.path,
      Component,
      roles: route.roles,
    }
  })
}
