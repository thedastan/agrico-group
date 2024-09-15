import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

const OurOffers = () => {
	const data = [
		{
			title: 'Пошив изделий любой сложности',
			desc: 'Мы специализируемся на пошиве изделий любого типа и сложности, от простой одежды до сложных дизайнерских решений.'
		},
		{
			title: 'Индивидуальные заказы',
			desc: 'Предлагаем индивидуальный подход к каждому клиенту, обеспечивая точное соответствие вашим требованиям и пожеланиям.'
		},
		{
			title: 'Скорость и надежность',
			desc: 'Наши производственные мощности позволяют выполнять заказы в сжатые сроки без потери качества, обеспечивая стабильные поставки.'
		},
		{
			title: 'Контроль качества',
			desc: 'На каждом этапе мы осуществляем строгий контроль качества, чтобы каждая единица продукта соответствовала ожиданиям.'
		}
	]
	return (
		<Box mt={{ md: '120px', base: '150px' }}>
			<TitleComponent maxW='601px'>Что мы предлагаем</TitleComponent>

			<SimpleGrid
				mt='40px'
				columns={{ lg: 4, md: 2, base: 1 }}
				spacing={{ xl: '40px', md: '25px', base: '45px' }}
			>
				{data.map((el, idx) => (
					<Box
						key={idx}
						borderLeft='2px solid #254B45'
						pl='14px'
					>
						<Title>{el.title}</Title>
						<Text
							fontSize='16px'
							lineHeight='22px'
							color='#000000BF'
							mt='10px'
						>
							{el.desc}
						</Text>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	)
}

export default OurOffers
