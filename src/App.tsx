import { Suspense } from 'react'
import routes from './routes'
import Routes from './components/base/RoutesHandler'
import Loading from './components/base/Loading'
import Providers from './Providers'

function App() {
  return (
    <Providers>
      <Suspense fallback={<Loading />}>
        <Routes routes={routes} />
      </Suspense>
    </Providers>
  )
}

export default App
