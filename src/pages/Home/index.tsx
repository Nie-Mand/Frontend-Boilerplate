import { Helmet } from 'react-helmet-async'
import Home from './Home'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import Layout from 'app/components/layouts/Default'

const HomePage = () => {
  const t = useMessages('Home')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Layout>
        <Home />
      </Layout>
    </>
  )
}

export default HomePage
