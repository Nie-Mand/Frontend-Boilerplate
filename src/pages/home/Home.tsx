import { useIntl } from 'react-intl'
import messages from './messages'
import Button from 'ui/Button'
import Input from 'ui/Input'
import { useState } from 'react'

import { useExample } from 'redux/hooks'

const HomePage = () => {
  useExample()
  const intl = useIntl()
  const [name, setName] = useState('')
  const [display, setDisplay] = useState('')

  const handleClick = () => {
    setDisplay(name)
  }

  return (
    <div>
      <h1>{intl.formatMessage(messages['home.welcome'])}</h1>
      <h1 cypress-id="cy-h1">{display}</h1>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        cypress-id="cy-input"
      />
      <Button onClick={handleClick} cypress-id="cy-button">
        Hello world
      </Button>
    </div>
  )
}

// type Props = {}

export default HomePage
