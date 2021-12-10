import { createI18n } from 'vue3-i18n'
import messages from './lang/translations'

const i18n = createI18n({
  locale: navigator.language.split('-')[0] || 'en',
  messages: messages
})

export default i18n
