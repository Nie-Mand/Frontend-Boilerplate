import { createRoutes } from './utils'
import routesList from './routes.json'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { history } from './redux/store'

export const RouterProvider = (props: Props) => {
  return <Router history={history}>{props.children}</Router>
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default createRoutes(routesList)

export const home = () => '/'
