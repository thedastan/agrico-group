import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import BgLines from '@/components/ui/other/BgLines'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const TrustedPartner = () => {
	const data = [
		{ num: '100%', desc: 'Удовлетворенность клиентов' },
		{ num: '7+', desc: 'Лет опыта на международных рынках' },
		{ num: '100+', desc: 'Партнеров в различных странах' }
	]

	return (
		<Container
			maxW={CONTAINER_WIDTH}
			px={{ md: '4', base: '0' }}
			mt='50px'
		>
			<Box
				position='relative'
				bg='#2B2B2B'
				rounded='20px'
				pt='60px'
				pb={{ md: '84px', base: '60px' }}
				px='4'
			>
				<BgLines />

				<Flex
					flexDirection='column'
					alignItems='center'
					textAlign='center'
				>
					<TitleComponent
						fontSize={{ md: '40px', base: '24px' }}
						lineHeight={{ md: '48px', base: '28.8px' }}
						color='#FFFFFF'
					>
						Доверенный партнер в области международной торговли
					</TitleComponent>
				</Flex>

				<Flex
					mt='60px'
					justifyContent='center'
					gap='83px'
					alignItems='start'
					flexWrap='wrap'
				>
					{data.map((el, idx) => (
						<Box
							key={idx}
							textAlign='center'
							maxW='194px'
						>
							<Text
								fontSize='40px'
								lineHeight='48px'
								color='#E8C547'
								fontWeight='700'
							>
								{el.num}
							</Text>
							<Text
								mt='9px'
								fontWeight='400'
								fontSize='16px'
								lineHeight='19.2px'
								color='#FFFFFF'
							>
								{el.desc}
							</Text>
						</Box>
					))}
				</Flex>
			</Box>
		</Container>
	)
}

export default TrustedPartner
