import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import DefButton from '@/components/ui/buttons/DefButton'
import BgLines from '@/components/ui/other/BgLines'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Guarantee = () => {
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
				pt={{ md: '86px', base: '45px' }}
				pb={{ md: '75px', base: '37px' }}
				px='4'
			>
				<BgLines />

				<Flex
					flexDirection='column'
					alignItems='center'
					textAlign='center'
				>
					<TitleComponent
						mx='auto'
						fontSize={{ md: '40px', base: '24px' }}
						lineHeight={{ md: '48px', base: '28.8px' }}
						color='#FFFFFF'
					>
						Закажите пошив с Agrico Group
					</TitleComponent>
					<Description
						lineHeight='22px'
						maxW='619px'
						mt='22px'
						color='#FFFFFF'
						letterSpacing='.6px'
					>
						Гарантируем качество, скорость и индивидуальный подход к каждому
						заказу!
					</Description>

					<DefButton
						maxW='186px'
						mt='64px'
						isArrowDown={true}
					>
						Связаться
					</DefButton>
				</Flex>
			</Box>
		</Container>
	)
}

export default Guarantee
