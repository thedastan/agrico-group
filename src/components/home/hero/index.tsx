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
						minH={{ md: '772px', base: '411px' }}
						position='relative'
						pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
					>
						<Flex
							mt={{ md: '159px', base: '79px' }}
							position='relative'
							zIndex='1'
							gap='65px'
						>
							<Box>
								<Text
									fontWeight='500'
									lineHeight={{ md: '21.6px', base: '16px' }}
									fontSize={{ md: '18px', base: '14px' }}
									color='#FFFFFF'
									letterSpacing={{ md: '8.6px', base: '5px' }}
								>
									новые возможности
								</Text>
								<Heading
									mt='2'
									textTransform='uppercase'
									fontSize={{ md: '80px', base: '36px' }}
									lineHeight={{ md: '96px', base: '43.2px' }}
									color='#FFFFFF'
									fontWeight={{ md: '400', base: '700' }}
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

							<Box
								maxW='392px'
								display={{ md: 'block', base: 'none' }}
							>
								<RightSide />
							</Box>
						</Flex>

						<BgLines />
					</Box>
				</Container>
			</Box>
			<Flex
				alignItems='end'
				justifyContent='space-between'
				mt={{ md: '-190px', base: '-110px' }}
			>
				<Box
					bg='#FFFDF6'
					borderTopRightRadius='56px'
					maxW={{ xl: '90px', base: '8px' }}
					w='100%'
					h={{ md: '326px', base: '166px' }}
				/>
				<Container
					maxW={CONTAINER_WIDTH}
					px='0'
					w='100%'
				>
					<Box
						w='100%'
						h={{ md: '460px', base: '256px' }}
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
					h={{ md: '326px', base: '166px' }}
				/>
			</Flex>
			<Box
				display={{ md: 'none', base: 'block' }}
				px='4'
				mt='30px'
			>
				<RightSide />
			</Box>
		</Box>
	)
}

function RightSide() {
	return (
		<Box w='100%'>
			<Flex
				gap='10px'
				alignItems='center'
			>
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
					// maxW='126px'
					color={{ md: '#E8C547', base: '#2B2B2B' }}
					fontSize={{ md: '12px', base: '15px' }}
					lineHeight={{ md: '14.4px', base: '18px' }}
				>
					партнеров в различных странах
				</Text>
			</Flex>

			<Text
				mt={{ md: '32px', base: '26px' }}
				fontSize='18px'
				color={{ md: '#FFFFFF', base: '#2B2B2B' }}
				lineHeight='28.8px'
				letterSpacing={{ md: '-1px', base: '.3px' }}
			>
				Качество, доверие и инновации для вашего успеха
			</Text>
			<DefButton
				mt={{ md: '46px', base: '52px' }}
				maxW={{ sm: '213px', base: '100%' }}
				isArrowDown={true}
			>
				Наши услуги
			</DefButton>
		</Box>
	)
}

export default MainHero
