import { Route as RouteType } from 'types/base'
import { Route, Switch as Routes, Redirect as Navigate } from 'react-router-dom'
import NotFound from './NotFound'

const ProtectedRoute = (props: { element: JSX.Element; roles?: string[] }) => {
  const { element, roles } = props
  if (!roles || roles.length === 0) return element

  // TODO: Implement authorization

  return <Navigate to="/login" />
}

export const RoutesSetup = (props: { routes: RouteType[] }) => {
  return (
    <Routes>
      {props.routes.map(({ path, Component, Layout, roles }) => (
        <Route
          key={path}
          path={path}
          exact
          children={
            <ProtectedRoute
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
      <Route path="*">
        <NotFound />
      </Route>
    </Routes>
  )
}

export default RoutesSetup
