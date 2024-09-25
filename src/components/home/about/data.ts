import { EnumIntl } from '@/types/intl.types'

import DefImage from '@/assets/img/about-accordion.png'
import ImportExportImg from '@/assets/img/export-import-hero.png'
import InvestImg from '@/assets/img/invest-hero-2.png'
import ProductSliderImg from '@/assets/img/production-slide-1.png'
import TourismImg from '@/assets/img/tourism-nature.png'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export const about_accordion = [
	{
		title: 'Импорт и Экспорт',
		description: 'Cтабильные и надежные поставки',
		image: ImportExportImg,
		path: DASHBOARD_PAGES.EXPORT_IMPORT,
		locale: EnumIntl.ENGLISH,
		short_name: 'Eng'
	},
	{
		title: 'Инвестиции',
		description: 'Для иностранных инвесторов',
		image: InvestImg,
		path: DASHBOARD_PAGES.INVESTMENTS
	},
	{
		title: 'Текстильная промышленность',
		description: 'Текстильные изделия на заказ',
		image: ProductSliderImg,
		path: DASHBOARD_PAGES.PRODUCTION
	},
	{
		title: 'Туризм',
		description: 'Культура и природа Кыргызстана',
		image: TourismImg,
		path: DASHBOARD_PAGES.TOURISM
	}
]
