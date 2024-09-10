import {
	Avatar,
	AvatarGroup,
	Box,
	Container,
	Flex,
	Heading,
	Highlight,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import BgLines from '@/components/ui/other/BgLines'

import HeroImage from '@/assets/img/main-hero.png'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

const avatars = [
	{
		image: 'https://bit.ly/ryan-florence',
		name: 'Ryan Florence'
	},
	{
		image: 'https://bit.ly/sage-adebayo',
		name: 'Segun Adebayo'
	},
	{
		image: 'https://bit.ly/kent-c-dodds',
		name: 'Kent Dodds'
	},
	{
		image: 'https://bit.ly/prosper-baba',
		name: 'Prosper Otemuyiwa'
	},
	{
		image: 'https://bit.ly/code-beast',
		name: 'Christian Nwamba'
	}
]

const MainHero = () => {
	return (
		<Box>
			<Box bg='#2B2B2B'>
				<Container maxW={CONTAINER_WIDTH}>
					<Box
						h='772px'
						position='relative'
						pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
					>
						<Flex
							mt='159px'
							position='relative'
							zIndex='1'
							gap='65px'
						>
							<Box>
								<Text
									fontWeight='500'
									lineHeight='21.6px'
									fontSize='18px'
									color='#FFFFFF'
									letterSpacing='8.6px'
								>
									новые возможности
								</Text>
								<Heading
									mt='2'
									textTransform='uppercase'
									fontSize='80px'
									lineHeight='96px'
									color='#FFFFFF'
									fontWeight='400'
									maxW='90%'
								>
									<Highlight
										query='Agrico Group'
										styles={{ color: '#E8C547' }}
									>
										Agrico Group – ВМЕСТЕ К УСПЕХУ
									</Highlight>
								</Heading>
							</Box>
							<Box w='392px'>
								<AvatarGroup
									max={3}
									spacing='-30px'
									// styleConfig={{ zIndex: '0' }}
								>
									{avatars.map((el, idx) => (
										<Avatar
											zIndex={idx}
											key={idx}
											name={el.name}
											src={el.image}
											border='2px solid #273F2B'
											width='48px'
											height='48px'
										/>
									))}
								</AvatarGroup>

								<Text
									mt='32px'
									fontSize='18px'
									color='#FFFFFF'
									lineHeight='28.8px'
									letterSpacing='-1px'
								>
									Качество, доверие и инновации для вашего успеха
								</Text>
								<DefButton
									mt='46px'
									maxW={{ md: '213px', base: '100%' }}
									isArrowDown={true}
								>
									Наши услуги
								</DefButton>
							</Box>
						</Flex>

						<BgLines />
					</Box>
				</Container>
			</Box>
			<Flex
				alignItems='end'
				justifyContent='space-between'
				mt='-190px'
			>
				<Box
					bg='#FFFDF6'
					borderTopRightRadius='56px'
					maxW={{ xl: '90px', base: '8px' }}
					w='100%'
					h='326px'
				/>
				<Container
					maxW={CONTAINER_WIDTH}
					px='0'
					w='100%'
				>
					<Box
						w='100%'
						h='460px'
						rounded='12px'
						border='8px solid #212121'
						overflow='hidden'
					>
						<Image
							src={HeroImage}
							alt='Image'
							className='full-image'
						/>
					</Box>
				</Container>
				<Box
					bg='#FFFDF6'
					borderTopLeftRadius='56px'
					maxW={{ xl: '90px', base: '8px' }}
					w='100%'
					h='326px'
				/>
			</Flex>
		</Box>
	)
}

export default MainHero
