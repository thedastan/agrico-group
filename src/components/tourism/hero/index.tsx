import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'
import Title from '@/components/ui/texts/Title'

import JamalTour from '@/assets/img/jamal-tour.svg'
import NatureImage from '@/assets/img/tourism-nature.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const TourismHero = () => {
	return (
		<Box mt={{ md: '105px', base: '79px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Box
					w='50px'
					h='50px'
					overflow='hidden'
					rounded='50%'
				>
					<Image
						src={JamalTour}
						alt='Tour-Logo'
						className='full-image'
					/>
				</Box>
				<Flex
					mt='5'
					justifyContent='space-between'
					alignItems='start'
					gap='30px'
				>
					<GiantText maxW='650px'>Туризм в Кыргызстане</GiantText>
					<Box
						maxW='499px'
						display={{ md: 'block', base: 'none' }}
					>
						<Title
							color='#000000'
							fontSize='30px'
							lineHeight='36px'
						>
							О Кыргызстане
						</Title>
						<Description mt='6'>
							Кыргызстан – это страна величественных гор, древних культур и
							гостеприимного народа. Предлагает путешественникам уникальные
							впечатления, знакомства с кочевой культурой.
						</Description>
					</Box>
				</Flex>

				<Flex
					mt={{ md: '97px', base: '60px' }}
					h={{ md: '460px', base: 'auto' }}
					padding={{ md: '40px', base: '0' }}
					alignItems='start'
					bg={{ md: '#2B2B2B', base: 'transparent' }}
					rounded={{ md: '30px', base: '32px' }}
					justifyContent='space-between'
					gap='4'
				>
					<Box
						w='758px'
						h={{ md: '503px', base: '263px' }}
						overflow='hidden'
						// rounded='20px'
					>
						<Image
							src={NatureImage}
							alt='Image'
							className='full-image'
							style={{ borderRadius: '20px' }}
						/>
					</Box>
					<Text
						display={{ md: 'block', base: 'none' }}
						mt='102px'
						color='#FFFFFF'
						fontSize='40px'
						lineHeight='48px'
						fontWeight='700'
						maxW='418px'
					>
						Здесь природа осталась в своем первозданном виде
					</Text>
				</Flex>
				<Box
					mt='60px'
					display={{ md: 'none', base: 'block' }}
				>
					<Title
						color='#000000'
						fontSize='30px'
						lineHeight='36px'
					>
						О Кыргызстане
					</Title>
					<Description
						mt='6'
						fontSize='22px'
					>
						Кыргызстан – это страна величественных гор, древних культур и
						гостеприимного народа. Предлагает путешественникам уникальные
						впечатления, знакомства с кочевой культурой.
					</Description>
				</Box>
			</Container>
		</Box>
	)
}

export default TourismHero
