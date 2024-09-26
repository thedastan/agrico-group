import { useTranslations } from 'next-intl'
import { StaticImageData } from 'next/image'

import ImportExportImg from '@/assets/img/export-import-hero.png'
import InvestImg from '@/assets/img/invest-hero-2.png'
import ProductSliderImg from '@/assets/img/production-slide-1.png'
import TourismImg from '@/assets/img/tourism-nature.png'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

export interface IAccardion {
	title: string
	description: string
	path: string
	image: StaticImageData
}

export const useAccardionData = (): IAccardion[] => {
	const t = useTranslations('Data')
	const localActive = useTypedLocale()

	const about_accordion = [
		{
			title: t('0_title'),
			description: t('0_description'),
			image: ImportExportImg,
			path: DASHBOARD_PAGES.EXPORT_IMPORT(localActive)
		},
		{
			title: t('1_title'),
			description: t('1_description'),
			image: InvestImg,
			path: DASHBOARD_PAGES.INVESTMENTS(localActive)
		},
		{
			title: t('2_title'),
			description: t('2_description'),
			image: ProductSliderImg,
			path: DASHBOARD_PAGES.PRODUCTION(localActive)
		},
		{
			title: t('3_title'),
			description: t('3_description'),
			image: TourismImg,
			path: DASHBOARD_PAGES.TOURISM(localActive)
		}
	]

	return about_accordion
}

export default useAccardionData
