import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import { history } from './redux/store'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@mui/material'
import theme from './ui/theme'
import SocketProvider from './socket'
// import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { BrowserRouter as Router } from 'react-router-dom'
const Providers = (props: Props) => {
  return (
    <ReduxProvider store={store}>
      {console.log('ss', history.location)}
      <ThemeProvider theme={theme}>
        <Router>
          {/* <Router> */}
          <Toaster />
          <SocketProvider isListening={false}>
            <HelmetProvider>{props.children}</HelmetProvider>
          </SocketProvider>
        </Router>
      </ThemeProvider>
    </ReduxProvider>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
export default Providers
