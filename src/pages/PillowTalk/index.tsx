import { Helmet } from 'react-helmet-async'
import PillowTalk from './PillowTalk'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const PillowTalkPage = () => {
  const t = useMessages('PillowTalk')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <PillowTalk />
    </>
  )
}

export default PillowTalkPage
