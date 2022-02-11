import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './redux/store'
import { history } from './redux/store'
import { Toaster } from 'react-hot-toast'
import I18NProvider from './i18n'
import { ThemeProvider } from '@mui/material'
import theme from 'ui/theme'

const Providers = (props: Props) => {
  return (
    <I18NProvider>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Toaster />
          <ReduxProvider store={store}>
            <HelmetProvider>{props.children}</HelmetProvider>
          </ReduxProvider>
        </Router>
      </ThemeProvider>
    </I18NProvider>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
export default Providers
