import { IntlType } from '@/types/intl.types'

class DASHBOARD {
	private root = '/'

	HOME = (locale: IntlType) => {
		return this.root + locale
	}
	EXPORT_IMPORT = (locale: IntlType) => {
		return `${this.root + locale}/export-import`
	}
	TOURISM = (locale: IntlType) => {
		return `${this.root + locale}/tourism`
	}
	INVESTMENTS = (locale: IntlType) => {
		return `${this.root + locale}/investments`
	}
	PRODUCTION = (locale: IntlType) => {
		return `${this.root + locale}/production`
	}
}
export const DASHBOARD_PAGES = new DASHBOARD()
