import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import store from './redux/store'
import { history } from './redux/store'
import { Toaster } from 'react-hot-toast'

const Providers = (props: Props) => {
  return (
    <Router history={history}>
      <Toaster />
      <ReduxProvider store={store}>
        <HelmetProvider>{props.children}</HelmetProvider>
      </ReduxProvider>
    </Router>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
export default Providers
