import { useIntl } from 'react-intl'
import messages from './messages'
import Button from 'ui/Button'

const HomePage = (props: Props) => {
  const intl = useIntl()

  return (
    <div>
      <h1>{intl.formatMessage(messages['home.welcome'])}</h1>
      <Button />
    </div>
  )
}

type Props = {}

export default HomePage
