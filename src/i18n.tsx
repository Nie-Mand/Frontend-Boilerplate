import { IntlProvider } from 'react-intl'
import en from './locale/en.json'

// TODO: Handle multiple languages

const i18nConfig = {
  locale: 'en',
  messages: en,
}

const Provider = (props: Props) => {
  return (
    <IntlProvider
      locale={i18nConfig.locale}
      defaultLocale={i18nConfig.locale}
      messages={i18nConfig.messages}
    >
      {props.children}
    </IntlProvider>
  )
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default Provider
