import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import BgLines from '@/components/ui/other/BgLines'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const TrustedPartner = () => {
	const t = useTranslations('TrustedPartner')

	const data = [
		{ num: '100%', desc: t('customerSatisfaction') },
		{ num: '7+', desc: t('yearsExperience') },
		{ num: '100+', desc: t('partnersWorldwide') }
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
						{t('title')}
					</TitleComponent>
				</Flex>

				<Flex
					mt={{ md: '60px', base: '55px' }}
					justifyContent='center'
					gap={{ md: '83px', base: '40px' }}
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
								color='#7BBA39'
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
