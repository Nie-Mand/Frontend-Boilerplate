import { Helmet } from 'react-helmet-async'
import Erok from './Erok'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const ErokPage = () => {
  const t = useMessages('Erok')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Erok />
    </>
  )
}

export default ErokPage
