import { useIntl } from 'react-intl'
import messages from './messages'

const HomePage = (props: Props) => {
  const intl = useIntl()

  return (
    <div>
      <h1>{intl.formatMessage(messages['home.welcome'])}</h1>
    </div>
  )
}

type Props = {}

export default HomePage
