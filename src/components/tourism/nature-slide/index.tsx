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
	const t = useTranslations('NatureSlide') // Get the translation function

	const data = [
		{
			title: t('NatureSlide.title1'),
			desc: t('NatureSlide.desc1'),
			image: SlideImage1,
			height: '443px'
		},
		{
			title: t('NatureSlide.title2'),
			desc: t('NatureSlide.desc2'),
			image: SlideImage2,
			height: '620px'
		},
		{
			title: t('NatureSlide.title3'),
			desc: t('NatureSlide.desc3'),
			image: SlideImage3,
			height: '443px'
		}
	]

	return (
		<Box mt={{ md: '263px', base: '100px' }}>
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
										alt={el.title}
										className='full-image'
									/>
								</Box>

								<Box
									data-aos='fade-up'
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
