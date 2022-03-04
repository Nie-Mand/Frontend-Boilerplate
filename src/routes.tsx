import { createRoutes } from './utils'
import routesList from './routes.json'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { history } from './redux/store'

// ! FIXME: Redux first history is not building with RR6
export const RouterProvider = (props: Props) => {
  return <Router history={history}>{props.children}</Router>
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default createRoutes(routesList)

export const home = () => '/'

export const pillowTalk = (params: { talk: string; id: string }) =>
  `/pillo/${params.talk}/${params.id}`

export const erok = (params: { id: string; fo: string }) =>
  `/eorp/${params.id}/${params.fo}`
