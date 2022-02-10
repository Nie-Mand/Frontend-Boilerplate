import { Route as RouteType } from 'types/base'
import { Route, Routes, Navigate } from 'react-router-dom'
import NotFound from './NotFound'

const ProtectedRoute = (props: { element: JSX.Element; roles?: string[] }) => {
  const { element, roles } = props
  if (!roles || roles.length === 0) return element

  // TODO: Implement authorization

  return <Navigate to="/login" replace />
}

export const RoutesSetup = (props: { routes: RouteType[] }) => {
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

export default RoutesSetup
