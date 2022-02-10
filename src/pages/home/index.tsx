import { Helmet } from 'react-helmet-async'
import Home from './Home'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
    </>
  )
}

export default HomePage
