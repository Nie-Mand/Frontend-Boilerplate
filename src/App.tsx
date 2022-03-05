import { Suspense } from 'react'
import routes from './routes'
import Routes from './components/base/RoutesHandler'
import Loading from './components/base/Loading'
import Providers from './Providers'
import ErrorHandler from './components/base/ErrorHandler'

function App() {
  return (
    <ErrorHandler>
      <Providers>
        <Suspense fallback={<Loading />}>
          <Routes routes={routes} />
        </Suspense>
      </Providers>
    </ErrorHandler>
  )
}

export default App
