// import { Box, Container, Flex, Text } from '@chakra-ui/react'
// import { useTranslations } from 'next-intl'
// import Image from 'next/image'
// import Title from '@/components/ui/texts/Title'
// import TitleComponent from '@/components/ui/texts/TitleComponent'
// import SlideImage1 from '@/assets/img/tourism-slide-1.png'
// import SlideImage2 from '@/assets/img/tourism-slide-2.png'
// import SlideImage3 from '@/assets/img/tourism-slide-3.png'
// import { CONTAINER_WIDTH } from '@/config/_variables.config'
// const NatureSlide = () => {
// 	const t = useTranslations('NatureSlide') // Get the translation function
// 	const data = [
// 		{
// 			title1: t('NatureSlide.title1'),
// 			desc1: t('NatureSlide.desc1'),
// 			image: SlideImage1,
// 			height: '443px'
// 		},
// 		{
// 			title2: t('NatureSlide.title2'),
// 			desc2: t('NatureSlide.desc2'),
// 			image: SlideImage2,
// 			height: '620px'
// 		},
// 		{
// 			title3: t('NatureSlide.title3'),
// 			desc3: t('NatureSlide.desc3'),
// 			image: SlideImage3,
// 			height: '443px'
// 		}
// 	]
// 	return (
// 		<Box mt={{ md: '263px', base: '100px' }}>
// 			<TitleComponent
// 				data-aos='zoom-in'
// 				textAlign={{ md: 'center', base: 'start' }}
// 				px='4'
// 			>
// 				{t('title')}
// 			</TitleComponent>
// 			<Container
// 				maxW={CONTAINER_WIDTH}
// 				px={{ lg: '4', base: '0' }}
// 				mt={{ md: '50px', base: '30px' }}
// 			>
// 				<Flex
// 					overflow={{ lg: 'hidden', base: 'auto' }}
// 					className='unscroll'
// 					w='100%'
// 				>
// 					<Flex
// 						gap={{ md: '6', base: '5' }}
// 						alignItems='start'
// 						justifyContent='space-between'
// 						px={{ lg: '0', base: '4' }}
// 					>
// 						{data.map((el, idx) => (
// 							<Box
// 								key={idx}
// 								w={{ lg: '33%', base: '342px' }}
// 							>
// 								<Box
// 									h={{ lg: el.height, base: '426px' }}
// 									rounded={{ md: '20px', base: '16.5px' }}
// 									overflow='hidden'
// 									w='100%'
// 								>
// 									<Image
// 										src={el.image}
// 										alt='img'
// 										className='full-image'
// 									/>
// 								</Box>
// 								<Box
// 									data-aos='fade-up'
// 									borderLeft='2px solid #254B45'
// 									mt='33px'
// 									pl='14px'
// 								>
// 									<Title>{el.title}</Title>
// 									<Text
// 										mt='10px'
// 										fontSize='16px'
// 										lineHeight='22px'
// 										color='#000000BF'
// 									>
// 										{el.desc}
// 									</Text>
// 								</Box>
// 							</Box>
// 						))}
// 					</Flex>
// 				</Flex>
// 			</Container>
// 		</Box>
// 	)
// }
// export default NatureSlide
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import SlideImage1 from '@/assets/img/tourism-slide-1.png'
import SlideImage2 from '@/assets/img/tourism-slide-2.png'
import SlideImage3 from '@/assets/img/tourism-slide-3.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const NatureSlide = () => {
	const t = useTranslations('NatureSlide') // Получаем функцию для перевода

	// Массив данных с переводами
	const data = [
		{
			title: t('title1'), // Заголовок для первого слайда
			desc: t('desc1'), // Описание для первого слайда
			image: SlideImage1,
			height: '443px'
		},
		{
			title: t('title2'), // Заголовок для второго слайда
			desc: t('desc2'), // Описание для второго слайда
			image: SlideImage2,
			height: '620px'
		},
		{
			title: t('title3'), // Заголовок для третьего слайда
			desc: t('desc3'), // Описание для третьего слайда
			image: SlideImage3,
			height: '443px'
		}
	]

	// Выводим данные в консоль для отладки
	console.log(data)

	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			mt={{ md: '263px', base: '100px' }}
		>
			<TitleComponent
				data-aos='zoom-in'
				textAlign={{ md: 'center', base: 'start' }}
				px='4'
			>
				{t('title')}
			</TitleComponent>
			<Container
				maxW={CONTAINER_WIDTH}
				px={{ lg: '4', base: '0' }}
				mt={{ md: '50px', base: '30px' }}
			>
				<Flex
					overflow={{ lg: 'hidden', base: 'auto' }}
					className='unscroll'
					w='100%'
				>
					<Flex
						gap={{ md: '6', base: '5' }}
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
										alt='img'
										className='full-image'
									/>
								</Box>

								<Box
									data-aos='fade-up'
									borderLeft='2px solid #254B45'
									mt='33px'
									pl='14px'
								>
									<Title>{el.title}</Title> {/* Используем заголовок слайда */}
									<Text
										mt='10px'
										fontSize='16px'
										lineHeight='22px'
										color='#000000BF'
									>
										{el.desc} {/* Используем описание слайда */}
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
