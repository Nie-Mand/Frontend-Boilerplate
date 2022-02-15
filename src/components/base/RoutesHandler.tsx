import { Route, Routes, Navigate } from 'react-router-dom'
import { Route as RouteType } from 'app/types/base'
import NotFound from './NotFound'

const Protected = (props: { element: JSX.Element; roles?: string[] }) => {
  const { element, roles } = props
  if (!roles || roles.length === 0) return element

  // TODO: Implement authorization
  return <Navigate to="/login" replace />
}

export const RoutesSetup = (props: { routes: RouteType[] }) => {
  return (
    <Routes>
      {props.routes.map(({ path, Component, Layout, roles }) => (
        <Route
          key={path}
          path={path}
          element={
            <Protected
              element={
                <Layout>
                  <Component />
                </Layout>
              }
              roles={roles}
            />
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesSetup
