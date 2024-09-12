import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import SlideImage1 from '@/assets/img/tourism-slide-1.png'
import SlideImage2 from '@/assets/img/tourism-slide-2.png'
import SlideImage3 from '@/assets/img/tourism-slide-3.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const NatureSlide = () => {
	const data = [
		{
			title: 'Древние города и маршруты',
			desc: 'Путешествуйте по древним торговым путям Шелкового пути, посещая исторические города и археологические памятники',
			image: SlideImage1,
			height: '443px'
		},
		{
			title: 'Озеро Иссык-Куль',
			desc: 'Окунитесь в чистые воды "жемчужины Кыргызстана" – высокогорного озера',
			image: SlideImage2,
			height: '620px'
		},
		{
			title: 'Национальные парки',
			desc: 'Откройте для себя разнообразие флоры и фауны, наслаждаясь природными красотами на территории охраняемых зон',
			image: SlideImage3,
			height: '443px'
		}
	]
	return (
		<Box mt={{ md: '263px', base: '100px' }}>
			<TitleComponent
				textAlign='center'
				px='4'
			>
				Что посмотреть
			</TitleComponent>
			<Container
				maxW={CONTAINER_WIDTH}
				px={{ lg: '4', base: '0' }}
				mt='50px'
			>
				<Flex
					overflow={{ lg: 'hidden', base: 'auto' }}
					className='unscroll'
					w='100%'
				>
					<Flex
						gap='6'
						alignItems='start'
						justifyContent='space-between'
						px={{ lg: '0', base: '4' }}
					>
						{data.map((el, idx) => (
							<Box
								key={idx}
								w={{ lg: '33%', base: '342px' }}
							>
								<Box
									h={{ lg: el.height, base: '426px' }}
									rounded={{ md: '20px', base: '16.5px' }}
									overflow='hidden'
									w='100%'
								>
									<Image
										src={el.image}
										alt={el.title}
										className='full-image'
									/>
								</Box>

								<Box
									borderLeft='2px solid #254B45'
									mt='33px'
									pl='14px'
								>
									<Title>{el.title}</Title>
									<Text
										mt='10px'
										fontSize='16px'
										lineHeight='22px'
										color='#000000BF'
									>
										{el.desc}
									</Text>
								</Box>
							</Box>
						))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default NatureSlide
