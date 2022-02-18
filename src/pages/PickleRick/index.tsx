import { Helmet } from 'react-helmet-async'
import PickleRick from './PickleRick'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const PickleRickPage = () => {
  const t = useMessages('PickleRick')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <PickleRick />
    </>
  )
}

export default PickleRickPage
