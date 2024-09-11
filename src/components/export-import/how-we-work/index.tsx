import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'

import WorkImage from '@/assets/img/how-we-work.png'

const HowWeWork = () => {
	return (
		<Box mt='182px'>
			<Flex
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
			<Box
				mt='26px'
				h='503px'
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
		</Box>
	)
}

export default HowWeWork
