import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import WorkImage from '@/assets/img/how-we-work.png'

const HowWeWork = () => {
	return (
		<Box mt={{ md: '182px', base: '120px' }}>
			<Flex
				display={{ md: 'flex', base: 'none' }}
				gap='73px'
				alignItems='center'
				justifyContent='space-between'
			>
				<GiantText
					maxW='477px'
					w='100%'
				>
					Как мы работаем
				</GiantText>

				<Description>
					Agreco Group осуществляет поставки товаров из Кыргызстана в более чем
					30 стран по всему миру. Мы активно сотрудничаем с партнерами в Европе,
					Азии, Америке и других регионах, расширяя географию нашего бизнеса и
					укрепляя международные связи.
				</Description>
			</Flex>
			<TitleComponent display={{ md: 'none', base: 'block' }}>
				Как мы работаем
			</TitleComponent>
			<Box
				mt={{ md: '26px', base: '30px' }}
				h={{ md: '503px', base: '337px' }}
				w='100%'
				rounded='20px'
				overflow='hidden'
			>
				<Image
					src={WorkImage}
					alt='Image'
					className='full-image'
				/>
			</Box>
			<Description
				display={{ md: 'none', base: 'block' }}
				mt='30px'
			>
				Agreco Group осуществляет поставки товаров из Кыргызстана в более чем 30
				стран по всему миру. Мы активно сотрудничаем с партнерами в Европе,
				Азии, Америке и других регионах, расширяя географию нашего бизнеса и
				укрепляя международные связи.
			</Description>
		</Box>
	)
}

export default HowWeWork
