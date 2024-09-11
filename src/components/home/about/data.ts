import DefImage from '@/assets/img/about-accordion.png'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export const about_accordion = [
	{
		title: 'Импорт и Экспорт',
		description: 'Cтабильные и надежные поставки',
		image: DefImage,
		path: DASHBOARD_PAGES.EXPORT_IMPORT
	},
	{
		title: 'Инвестиции',
		description: 'Для иностранных инвесторов',
		image: DefImage,
		path: DASHBOARD_PAGES.INVESTMENTS
	},
	{
		title: 'Текстильная промышленность',
		description: 'Текстильные изделия на заказ',
		image: DefImage,
		path: DASHBOARD_PAGES.PRODUCTION
	},
	{
		title: 'Туризм',
		description: 'Культура и природа Кыргызстана',
		image: DefImage,
		path: DASHBOARD_PAGES.TOURISM
	}
]
