import { Box, Container, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import RestSlide from './resetSlide'

const ActiveRest = () => {
	const t = useTranslations('ActiveRest')
	return (
		<Box
			mt={{ md: '172px', base: '87px' }}
			bg={{ md: '#F2F5EB', base: 'transparent' }}
			pt={{ md: '83px', base: '0' }}
			pb={{ md: '99px', base: '0' }}
		>
			<Container
				maxW={CONTAINER_WIDTH}
				px={{ md: '4', base: '0' }}
			>
				<Flex
					justifyContent='space-between'
					alignItems='start'
					flexDirection={{ lg: 'row', base: 'column' }}
					gap='40px'
				>
					<Box
						pt={{ md: '15px', base: '33px' }}
						pb={{ md: '0', base: '17px' }}
						bg={{ md: 'transparent', base: '#F2F5EB' }}
						maxW={{ md: '523px', base: '100%' }}
						rounded='22px'
						px='4'
						w='100%'
					>
						<Box
							px='6'
							py='9px'
							bg='#FFFFFF78'
							border='1px solid #E8E8E8'
							textTransform='uppercase'
							fontWeight='400'
							fontSize='14px'
							lineHeight='22px'
							color='#000000'
							rounded='100px'
							w='208px'
						>
							{t('text')}
						</Box>
						<TitleComponent
							color='#26402B'
							mt='18px'
						>
							{t('title')}
						</TitleComponent>
						<Description mt='3'>{t('dis')}</Description>
					</Box>
					<Box px={{ md: '0', base: '4' }}>
						<RestSlide />
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default ActiveRest
