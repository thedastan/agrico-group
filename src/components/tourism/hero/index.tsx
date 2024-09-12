import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

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
					<GiantText maxW='621px'>Туризм в Кыргызстане</GiantText>
					<Box maxW='499px'>
						<Title
							color='#000000'
							fontSize='30px'
							lineHeight='36px'
						>
							О Кыргызстане
						</Title>
						<Text
							mt='6'
							fontSize='22px'
							lineHeight='35.2px'
							fontWeight='400'
							color='#212121'
						>
							Кыргызстан – это страна величественных гор, древних культур и
							гостеприимного народа. Предлагает путешественникам уникальные
							впечатления, знакомства с кочевой культурой.
						</Text>
					</Box>
				</Flex>

				<Flex
					mt='97px'
					h='460px'
					padding='40px'
					alignItems='start'
					bg='#2B2B2B'
					rounded='30px'
					justifyContent='space-between'
					gap='4'
				>
					<Box
						w='758px'
						h='503px'
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
			</Container>
		</Box>
	)
}

export default TourismHero
