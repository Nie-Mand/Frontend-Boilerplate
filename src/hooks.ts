export * from './redux/hooks'
import { useTranslation } from 'react-i18next'

export const useMessages = (ns: string) => {
  const { t } = useTranslation()

  type Message = {
    id: string
    defaultMessage: string
  }
  const handler = (message: Message) => {
    return t(`${ns}.${message.id}`, { defaultMessage: message.defaultMessage })
  }

  return handler
}

export const useSwitchLanguage = () => {
  const { i18n } = useTranslation()

  const handleSwitchLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
  }

  return handleSwitchLanguage
}
