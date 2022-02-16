import { HelmetProvider } from 'react-helmet-async'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@mui/material'
import theme from './ui/theme'
import SocketProvider from './socket'
import { RouterProvider } from './routes'

const Providers = (props: Props) => {
  return (
    <HelmetProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <SocketProvider isListening={false}>
            <Toaster />
            <RouterProvider>{props.children}</RouterProvider>
          </SocketProvider>
        </ThemeProvider>
      </ReduxProvider>
    </HelmetProvider>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}
export default Providers
