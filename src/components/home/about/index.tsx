import { Box, Container, Flex, Text, Wrap } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import DefButton from '@/components/ui/buttons/DefButton'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import AccordionComponent from './Accordion'
import useAccardionData from './data'

// You no longer need the about array here
// const about = ['Надежность', 'Партнерство', 'Качество', 'Опыт', 'Глобальность']

const AboutUs = () => {
	const t = useTranslations('AboutUs')
	const about_accordion = useAccardionData()

	return (
		<Box id='about'>
			<Container
				maxW={CONTAINER_WIDTH}
				mt={{ md: '146px', base: '120px' }}
			>
				<Flex
					gap={{ lg: '100px', base: '80px' }}
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Box data-aos='fade-right'>
						<TitleComponent>{t('about')}</TitleComponent>

						<Wrap
							spacing='2'
							mt={{ md: '6', base: '30px' }}
						>
							{[0, 1, 2, 3, 4].map(idx => (
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
									_hover={{ bg: '#7BBA39', transition: '0.3s', color: 'white' }}
								>
									{t(`about_${idx}`)}
								</Flex>
							))}
						</Wrap>
					</Box>
					<Box
						data-aos='fade-left'
						maxW={{ md: '60%', base: '100%' }}
						w='100%'
					>
						<TitleComponent
							textTransform='uppercase'
							fontSize='32px'
							lineHeight='38.4px'
						>
							{t('title')}
						</TitleComponent>
						<Text
							fontSize='22px'
							lineHeight='35.2px'
							color='#212121'
							mt={{ md: '6', base: '30px' }}
						>
							{t('discription')}
						</Text>

						<DefButton
							mt={{ md: '32px', base: '40px' }}
							h='54px'
							isDark={true}
							maxW={{ sm: '251px', base: '100%' }}
						>
							{t('button')}
						</DefButton>
					</Box>
				</Flex>
			</Container>
			<Container
				maxW={CONTAINER_WIDTH}
				px={{ md: '4', base: '0' }}
			>
				<AccordionComponent data={about_accordion} />
			</Container>
		</Box>
	)
}

export default AboutUs
