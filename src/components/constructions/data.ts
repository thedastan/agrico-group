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
}

export const construction: IConstruction[] = [
	{
		title: 'Солнечный берег',
		description:
			'Жилой комплекс бизнес-класса, расположенный в живописной части города, рядом с набережной. Комплекс включает 4 дома по 12 этажей с просторными квартирами и панорамными окнами. ',
		image: Image1,
		start_date: 'Январь 2023',
		end_date: 'Июль 2025',
		payback_period: '4 года',
		amount: '150 млн',
		link: '',
		gallery: [Image1, Image2, Image3]
	},
	{
		title: 'Дели люкс',
		description:
			'Жилой комплекс бизнес-класса, расположенный в живописной части города, рядом с набережной. Комплекс включает 4 дома по 12 этажей с просторными квартирами и панорамными окнами. ',
		image: Image4,
		start_date: 'Январь 2023',
		end_date: 'Июль 2025',
		payback_period: '4 года',
		amount: '150 млн',
		link: '',
		gallery: [Image1, Image2, Image3]
	},
	{
		title: 'Солнечный берег',
		description:
			'Жилой комплекс бизнес-класса, расположенный в живописной части города, рядом с набережной. Комплекс включает 4 дома по 12 этажей с просторными квартирами и панорамными окнами. ',
		image: Image2,
		start_date: 'Январь 2023',
		end_date: 'Июль 2025',
		payback_period: '4 года',
		amount: '150 млн',
		link: '',
		gallery: [Image1, Image2, Image3]
	},
	{
		title: 'Солнечный берег',
		description:
			'Жилой комплекс бизнес-класса, расположенный в живописной части города, рядом с набережной. Комплекс включает 4 дома по 12 этажей с просторными квартирами и панорамными окнами. ',
		image: Image1,
		start_date: 'Январь 2023',
		end_date: 'Июль 2025',
		payback_period: '4 года',
		amount: '150 млн',
		link: '',
		gallery: [Image1, Image2, Image3]
	},
	{
		title: 'Солнечный берег',
		description:
			'Жилой комплекс бизнес-класса, расположенный в живописной части города, рядом с набережной. Комплекс включает 4 дома по 12 этажей с просторными квартирами и панорамными окнами. ',
		image: Image5,
		start_date: 'Январь 2023',
		end_date: 'Июль 2025',
		payback_period: '4 года',
		amount: '150 млн',
		link: '',
		gallery: [Image1, Image2, Image3]
	},
	{
		title: 'Дели люкс',
		description:
			'Жилой комплекс бизнес-класса, расположенный в живописной части города, рядом с набережной. Комплекс включает 4 дома по 12 этажей с просторными квартирами и панорамными окнами. ',
		image: Image6,
		start_date: 'Январь 2023',
		end_date: 'Июль 2025',
		payback_period: '4 года',
		amount: '150 млн',
		link: '',
		gallery: [Image1, Image2, Image3]
	}
]
