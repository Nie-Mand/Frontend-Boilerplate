import { Helmet } from 'react-helmet-async'
import InternalError from './InternalError'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const InternalErrorPage = () => {
  const t = useMessages('InternalError')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <InternalError />
    </>
  )
}

export default InternalErrorPage
