import { useTranslations } from 'next-intl'
import { StaticImageData } from 'next/image'

import Image1 from '@/assets/img/construction-1.jpeg'
import Image2 from '@/assets/img/construction-2.jpeg'
import Image3 from '@/assets/img/construction-3.jpeg'
import Image4 from '@/assets/img/construction-4.jpeg'
import Image5 from '@/assets/img/construction-5.jpeg'
import Image6 from '@/assets/img/construction-6.jpeg'

export interface IConstruction {
	title: string
	description: string
	image: StaticImageData
	start_date: string
	end_date: string
	payback_period: string
	amount: string
	gallery: StaticImageData[]
	link: string
	adress: string
	srok: string
	summa: string
	end_craft: string
	start_craft: string
	look_video: string
}

export const ConstructionComponent = () => {
	const t = useTranslations('ConstructionComponent')
	// используем хук перевода

	const construction: IConstruction[] = [
		{
			title: t('title1'),
			description: t('dis'),
			image: Image1,
			start_date: t('start_date'),
			end_date: t('end_date'),
			payback_period: t('payback_period'),
			amount: t('amount'),
			link: '',
			gallery: [Image1, Image2, Image3],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title2'),
			description: t('dis'),
			image: Image4,
			start_date: t('start_date'),
			end_date: t('end_date'),
			payback_period: t('payback_period'),
			amount: t('amount'),
			link: '',
			gallery: [Image1, Image2, Image3],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title1'),
			description: t('dis'),
			image: Image2,
			start_date: t('start_date'),
			end_date: t('end_date'),
			payback_period: t('payback_period'),
			amount: t('amount'),
			link: '',
			gallery: [Image1, Image2, Image3],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title1'),
			description: t('dis'),
			image: Image1,
			start_date: t('start_date'),
			end_date: t('end_date'),
			payback_period: t('payback_period'),
			amount: t('amount'),
			link: '',
			gallery: [Image1, Image2, Image3],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title1'),
			description: t('dis'),
			image: Image5,
			start_date: t('start_date'),
			end_date: t('end_date'),
			payback_period: t('payback_period'),
			amount: t('amount'),
			link: '',
			gallery: [Image1, Image2, Image3],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title2'),
			description: t('dis'),
			image: Image6,
			start_date: t('start_date'),
			end_date: t('end_date'),
			payback_period: t('payback_period'),
			amount: t('amount'),
			link: '',
			gallery: [Image1, Image2, Image3],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		}
	]

	return construction
}
