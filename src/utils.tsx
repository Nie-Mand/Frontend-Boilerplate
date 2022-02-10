import { RoutesCreator, RouteCreator, Route as RouteType } from './@types/base'
import { Route, Routes, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import NotFound from './components/NotFound'

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

export const RouteSetup = (props: { routes: RouteType[] }) => {
  return (
    <Routes>
      {props.routes.map(({ path, Component, roles }) => (
        <Route
          key={path}
          path={path}
          element={<ProtectedRoute element={<Component />} roles={roles} />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export const ProtectedRoute = (props: {
  element: JSX.Element
  roles?: string[]
}) => {
  const { element, roles } = props
  if (!roles || roles.length === 0) return element

  // TODO: Implement authorization

  return <Navigate to="/login" replace />
}
