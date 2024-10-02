import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { GoCheck } from 'react-icons/go'

// Import useTranslations
import { inter } from '@/constants/fonts/fonts'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const ProgramIncludes = () => {
	const t = useTranslations()

	const list = [
		t('programIncludes.accommodation'),
		t('programIncludes.transfer'),
		t('programIncludes.driverGuide'),
		t('programIncludes.internetMap'),
		t('programIncludes.roadTax'),
		t('programIncludes.kitchenUtensils')
	]

	return (
		<Box mt={{ md: '85px', base: '120px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Text
					className={inter.className}
					as='h1'
					textAlign='center'
					fontWeight='700'
					fontSize='32.51px'
					color='#26422B'
					lineHeight='43.54px'
				>
					{t('programIncludes.header')} {/* Translation for the header */}
				</Text>

				<SimpleGrid
					mt='50px'
					spacing='20px 53px'
					mx='auto'
					maxW='1035px'
					columns={{ md: 2, base: 1 }}
				>
					{list.map((el, idx) => (
						<Box
							key={idx}
							borderBottom='1px solid #0B2131'
							pb='5'
						>
							<Text
								color='#7BBA39'
								fontWeight='500'
								fontSize='24px'
								lineHeight='32.4px'
							>
								{`0${idx + 1}`} {/* Corrected display of index */}
							</Text>
							<Flex
								justifyContent='space-between'
								alignItems='center'
								mt='14px'
							>
								<Text
									color='#0C0E0F'
									fontWeight='400'
									fontSize='18px'
									lineHeight='24.3px'
								>
									{el} {/* Translated list item */}
								</Text>
								<Flex
									justifyContent='center'
									alignItems='center'
									w='36px'
									h='36px'
									rounded='50%'
									border='1.5px solid #0B2131'
								>
									<GoCheck
										color='#273F2B'
										fontSize='18px'
									/>
								</Flex>
							</Flex>
						</Box>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default ProgramIncludes
