import { Suspense } from 'react'
import routes from './routes'
import { RouteSetup as Routes } from './utils'
import { BrowserRouter as Router } from 'react-router-dom'
import Loading from './components/Loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes routes={routes} />
      </Router>
    </Suspense>
  )
}

export default App
