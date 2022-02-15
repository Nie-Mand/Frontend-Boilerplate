import { Route, Routes, Navigate } from 'react-router-dom'
import { Route as RouteType } from 'app/types/base'
import NotFound from './NotFound'
import Forbidden from './Forbidden'

const Protected = (props: { element: JSX.Element; roles?: string[] }) => {
  const { element, roles } = props

  // TODO: Implement authorization
  const role = 'user'

  // * if the page is accessible
  if (!roles || roles.length === 0) return element

  // * if he is not authentified
  if (!role) return <Navigate to="/login" replace />

  // * if he is authentified and doesnt have the required role
  if (roles.indexOf(role) === -1) return <Forbidden />

  return element
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
