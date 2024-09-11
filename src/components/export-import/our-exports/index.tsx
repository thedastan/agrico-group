import { Box, SimpleGrid, Text } from '@chakra-ui/react'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

const OurExports = () => {
	const data = [
		{
			title: 'Сельскохозяйственная продукция',
			desc: 'Экспорт фруктов, овощей, зерновых и орехов из экологически чистых регионов Кыргызстана.'
		},
		{
			title: 'Текстильные изделия',
			desc: 'Мы поставляем текстильную продукцию, включая ткани, одежду и аксессуары, изготовленные на заказ по высоким стандартам качества.'
		},
		{
			title: 'Минеральные ресурсы',
			desc: 'Экспорт полезных ископаемых и других природных ресурсов, добываемых на территории Кыргызстана.'
		},
		{
			title: 'Сувенирная продукция',
			desc: 'Креативные изделия и сувениры, отражающие уникальную культуру Кыргызстана.'
		}
	]
	return (
		<Box mt='102px'>
			<TitleComponent maxW='601px'>Что мы экспортируем</TitleComponent>

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

export default OurExports
