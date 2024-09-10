import { Box, Container, Flex, Text, Wrap } from '@chakra-ui/react'

import DefButton from '@/components/ui/buttons/DefButton'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import AccordionComponent from './Accordion'

const about = ['Надежность', 'Партнерство', 'Качество', 'Опыт', 'Глобальность']

const AboutUs = () => {
	return (
		<Container
			maxW={CONTAINER_WIDTH}
			mt={{ md: '146px', base: '120px' }}
		>
			<Flex gap='100px'>
				<Box>
					<TitleComponent>О нас</TitleComponent>

					<Wrap
						spacing='2'
						mt='6'
					>
						{about.map((item, idx) => (
							<Flex
								key={idx}
								py='3'
								px='23px'
								border='1px solid #212121'
								rounded='32px'
								fontWeight='500'
								fontSize='16px'
								lineHeight='19.2px'
								color='#212121'
							>
								{item}
							</Flex>
						))}
					</Wrap>
				</Box>
				<Box
					maxW={{ md: '60%', base: '100%' }}
					w='100%'
				>
					<TitleComponent
						textTransform='uppercase'
						fontSize='32px'
						lineHeight='38.4px'
					>
						Agrico Group
					</TitleComponent>
					<Text
						fontSize='22px'
						lineHeight='35.2px'
						color='#212121'
						mt='6'
					>
						Ведущая компания Кыргызстана, специализирующаяся на экспорте и
						импорте товаров, инвестиционных возможностях и текстильной
						промышленности. Мы стремимся быть мостом между Кыргызстаном и
						мировым рынком, предоставляя высококачественные услуги нашим
						клиентам и партнерам.
					</Text>

					<DefButton
						mt='32px'
						h='54px'
						isDark={true}
						maxW='251px'
					>
						Связаться с нами
					</DefButton>
				</Box>
			</Flex>

			<AccordionComponent />
		</Container>
	)
}

export default AboutUs
