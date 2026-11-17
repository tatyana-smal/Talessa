import LegalPage from './LegalPage'
import { privacy } from '../i18n/legalStrings'

export default function Privacy() {
  return <LegalPage docs={privacy} toc />
}
