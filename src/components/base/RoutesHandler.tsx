import { Route, Switch as Routes, Redirect as Navigate } from 'react-router-dom'
import { Route as RouteType } from 'app/types/base'
import NotFound from './NotFound'

const Protected = (props: { element: JSX.Element; roles?: string[] }) => {
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
          exact
          key={path}
          path={path}
          children={
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
      <Route path="*" children={<NotFound />} />
    </Routes>
  )
}

export default RoutesSetup
