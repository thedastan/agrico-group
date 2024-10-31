import { useTranslations } from 'next-intl'
import { StaticImageData } from 'next/image'

import Image1 from '@/assets/img/1object/6этажныйжд.jpg'
import Image2 from '@/assets/img/1object/2.jpg'
import Image3 from '@/assets/img/1object/4.jpg'
import Image4 from '@/assets/img/1object/3.jpg'

import Image5 from '@/assets/img/2object/1.jpg'
import Image6 from '@/assets/img/2object/2.jpg'
import Image7 from '@/assets/img/2object/4.jpg'
import Image8 from '@/assets/img/2object/5.jpg'
import Image9 from '@/assets/img/2object/6.jpg'
import Image10 from '@/assets/img/2object/9.jpg'

import Image11 from '@/assets/img/3object/1.jpg'
import Image12 from '@/assets/img/3object/2.jpg'
import Image13 from '@/assets/img/3object/3.jpg'
import Image14 from '@/assets/img/3object/4.jpg'
import Image15 from '@/assets/img/3object/5.jpg'
import Image16 from '@/assets/img/3object/7.jpg'

import Image17 from '@/assets/img/4object/1.jpeg'
import Image18 from '@/assets/img/4object/2.jpeg'
import Image19 from '@/assets/img/4object/3.jpeg'
import Image20 from '@/assets/img/4object/4.jpeg'
import Image21 from '@/assets/img/4object/5.jpeg'
import Image22 from '@/assets/img/4object/7.jpeg'
import Image23 from '@/assets/img/4object/8.jpeg'
import Image24 from '@/assets/img/4object/9.jpeg'
import Image25 from '@/assets/img/4object/10.jpeg'
import Image26 from '@/assets/img/4object/11.jpeg'
import Image27 from '@/assets/img/4object/12.jpeg'
import Image28 from '@/assets/img/4object/12.jpeg'
import Image29 from '@/assets/img/4object/13.jpeg'
import Image30 from '@/assets/img/4object/14.jpeg'
import Image31 from '@/assets/img/4object/15.jpeg'
import Image32 from '@/assets/img/4object/16.jpeg'
import Image33 from '@/assets/img/4object/17.jpeg'
import Image34 from '@/assets/img/4object/18.jpeg'
import Image35 from '@/assets/img/4object/19.jpeg'
import Image36 from '@/assets/img/4object/20.jpeg'




import Image37 from '@/assets/img/5object/1.jpeg'
import Image38 from '@/assets/img/5object/2.jpeg'
import Image39 from '@/assets/img/5object/3.jpeg'
import Image40 from '@/assets/img/5object/4.jpeg'
import Image41 from '@/assets/img/5object/5.jpeg'
import Image42 from '@/assets/img/5object/7.jpeg'
import Image43 from '@/assets/img/5object/8.jpeg'
import Image44 from '@/assets/img/5object/9.jpeg'




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
			gallery: [Image1, Image2, Image3,Image4],
			adress: t('adress'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title2'),
			description: t('dis2'),
			image: Image7,
			start_date: t('start_date2'),
			end_date: t('end_date2'),
			payback_period: t('payback_period2'),
			amount: t('amount2'),
			link: '',
			gallery: [Image5, Image6, Image7, Image8, Image9, Image10],
			adress: t('adress2'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title3'),
			description: t('dis3'),
			image: Image15,
			start_date: t('start_date3'),
			end_date: t('end_date3'),
			payback_period: t('payback_period3'),
			amount: t('amount3'),
			link: '',
			gallery: [Image11, Image12, Image13, Image14, Image15, Image16],
			adress: t('adress3'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title4'),
			description: t('dis4'),
			image: Image31,
			start_date: t('start_date4'),
			end_date: t('end_date4'),
			payback_period: t('payback_period4'),
			amount: t('amount4'),
			link: 'https://youtu.be/Pry43ETK3E0?si=4gpiKEC_a5NGEXbl',
			gallery: [Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25, Image26,Image27, Image28, Image29, Image30, Image31, Image32, Image33, Image34, Image35, Image36],
			adress: t('adress4'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
		{
			title: t('title5'),
			description: t('dis5'),
			image: Image43,
			start_date: t('start_date5'),
			end_date: t('end_date5'),
			payback_period: t('payback_period5'),
			amount: t('amount5'),
			link: '',
			gallery: [Image37, Image38, Image39, Image40, Image41, Image42, Image43, Image44],
			adress: t('adress5'),
			srok: t('srok'),
			summa: t('summa'),
			end_craft: t('end_craft'),
			start_craft: t('start_craft'),
			look_video: t('look_video')
		},
	]

	return construction
}
