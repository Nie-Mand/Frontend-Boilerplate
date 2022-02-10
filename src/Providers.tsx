import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import store from './redux/store'
import { history } from './redux/store'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
import i18nConfig from './i18n'

const Providers = (props: Props) => {
  return (
    <IntlProvider
      locale={i18nConfig.locale}
      defaultLocale={i18nConfig.locale}
      messages={i18nConfig.messages}
    >
      <Router history={history}>
        <Toaster />
        <ReduxProvider store={store}>
          <HelmetProvider>{props.children}</HelmetProvider>
        </ReduxProvider>
      </Router>
    </IntlProvider>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
export default Providers
