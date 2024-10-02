import { useTranslations } from 'next-intl'

export interface IServicesNav {
	name: string
}

export function useServices(): IServicesNav[] {
	const t = useTranslations('useServices')
	return [
		{
			name: t('sectors')
		}
	]
}

export interface IAdressNav {
	name: string
}

export function useAdress(): IAdressNav[] {
	const t = useTranslations('useAdress')
	return [
		{
			name: t('LOCATION')
		}
	]
}
