import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'
import Title from '@/components/ui/texts/Title'

import NatureImage from '@/assets/img/tourism-nature.png'
import JamalTour from '@/assets/img/Снимок_экрана_от_2024-09-25_21-16-00-removebg-preview.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const TourismHero = () => {
	const t = useTranslations('TourismHero')
	return (
		<Box mt={{ md: '105px', base: '79px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Box
					display='flex'
					justifyContent='center'
					flexDirection='column'
					alignItems='center'
					gap={10}
				>
					<Box
						w='200px'
						alignItems='center'
						justifyContent='center'

						// h='200px'
						// overflow='hidden'
						// rounded='50%'
						// mt={-8}
					>
						<Image
							width={400}
							src={JamalTour}
							alt='Tour-Logo'
							className='full-image'
						/>
						<Link
							href='https://www.instagram.com/jamal_travel_kg'
							target='_blank'
						>
							<Button
								w='100%'
								mt={6}
								h='50px'
								bg='#2B2B2B'
								color='white'
								fontSize={18}
								// ml={12}
							>
								Instagram
							</Button>
						</Link>
					</Box>
					<Flex
						mt='5'
						justifyContent='space-between'
						alignItems='center'
						gap='100px'
					>
						<GiantText
							// data-aos='fade-right'
							maxW='650px'
						>
							{t('title')}
						</GiantText>
						<Box
							// data-aos='fade-left'
							maxW='499px'
							display={{ md: 'block', base: 'none' }}
						>
							<Title
								color='#000000'
								fontSize='30px'
								lineHeight='36px'
							>
								{t('text')}
							</Title>
							<Description mt='6'>{t('dis')}</Description>
						</Box>
					</Flex>
				</Box>

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
						{t('title1')}
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
						{t('text')}
					</Title>
					<Description
						mt='6'
						fontSize='22px'
					>
						{t('dis')}
					</Description>
				</Box>
			</Container>
		</Box>
	)
}

export default TourismHero
