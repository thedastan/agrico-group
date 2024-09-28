// import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
// import { IoMdCheckmark } from 'react-icons/io'
// import Description from '@/components/ui/texts/Description'
// import TitleComponent from '@/components/ui/texts/TitleComponent'
// import { inter } from '@/constants/fonts/fonts'
// import { CONTAINER_WIDTH } from '@/config/_variables.config'
// const InvestExport = () => {
// 	const program = [
// 		'Квалифицированная рабочая сила',
// 		'Рост внутреннего спроса',
// 		'Государственная поддержка'
// 	]
// 	return (
// 		<Box
// 			mt={{ md: '140px', base: '48px' }}
// 			pb={{ md: '100px', base: '0' }}
// 		>
// 			<Container
// 				maxW={CONTAINER_WIDTH}
// 				bg='#F2F5EB'
// 				rounded='22px'
// 				px={{ lg: '84px', md: '30px', base: '4' }}
// 				py={{ lg: '98px', md: '76px', base: '47.5px' }}
// 			>
// 				<Flex
// 					justifyContent='space-between'
// 					alignItems={{ md: 'end', base: 'start' }}
// 					flexDirection={{ md: 'row', base: 'column-reverse' }}
// 					gap={{ md: '50px', base: '80px' }}
// 				>
// 					<Box maxW='422px'>
// 						<Flex
// 							mt='41px'
// 							color='#212121'
// 							gap='48px'
// 						>
// 							<Box maxW='155px'>
// 								<Text
// 									fontWeight='500'
// 									fontSize='40px'
// 									lineHeight='48px'
// 								>
// 									50%
// 								</Text>
// 								<Text
// 									mt='9px'
// 									fontWeight='400'
// 									fontSize='16px'
// 									lineHeight='19.2px'
// 								>
// 									продукции на экспорт
// 								</Text>
// 							</Box>
// 							<Box maxW='194px'>
// 								<Text
// 									fontWeight='500'
// 									fontSize='40px'
// 									lineHeight='48px'
// 								>
// 									20%
// 								</Text>
// 								<Text
// 									mt='9px'
// 									fontWeight='400'
// 									fontSize='16px'
// 									lineHeight='19.2px'
// 								>
// 									Ежегодный рост в строительном секторе
// 								</Text>
// 							</Box>
// 						</Flex>
// 						<Stack
// 							spacing='5'
// 							mt='63px'
// 						>
// 							{program.map((pr, idx) => (
// 								<Flex
// 									key={idx}
// 									alignItems='center'
// 									gap='18px'
// 								>
// 									<IoMdCheckmark
// 										color='#273F2B'
// 										fontSize='18px'
// 									/>
// 									<Text
// 										className={inter.className}
// 										fontWeight='400'
// 										fontSize='16px'
// 										color='#12141D'
// 										lineHeight='26px'
// 									>
// 										{pr}
// 									</Text>
// 								</Flex>
// 							))}
// 						</Stack>
// 					</Box>
// 					<Box maxW='523px'>
// 						<Box
// 							px='6'
// 							py='9px'
// 							bg='#FFFFFF78'
// 							border='1px solid #E8E8E8'
// 							textTransform='uppercase'
// 							fontWeight='400'
// 							fontSize='14px'
// 							lineHeight='22px'
// 							color='#000000'
// 							rounded='100px'
// 							w='252px'
// 						>
// 							Легкая промышленность
// 						</Box>
// 						<TitleComponent
// 							color='#26402B'
// 							mt='15px'
// 						>
// 							Инновации и экспорт
// 						</TitleComponent>
// 						<Description mt='3'>
// 							Легкая промышленность Кыргызстана активно развивается, предлагая
// 							привлекательные условия для инвесторов.
// 						</Description>
// 					</Box>
// 				</Flex>
// 			</Container>
// 		</Box>
// 	)
// }
// export default InvestExport
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { IoMdCheckmark } from 'react-icons/io'

import CountNumberEx from '@/components/export-import/trusted-partner/countNumberEx/CountNumberEx'
import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

// Import useTranslations

const InvestExport = () => {
	const t = useTranslations('InvestExport') // Use the correct namespace

	const program = [
		'qualifiedWorkforce', // Key for qualified workforce
		'increasedDomesticDemand', // Key for increased domestic demand
		'governmentSupport' // Key for government support
	]

	return (
		<Box
			mt={{ md: '140px', base: '48px' }}
			pb={{ md: '100px', base: '0' }}
		>
			<Container
				maxW={CONTAINER_WIDTH}
				bg='#F2F5EB'
				rounded='22px'
				px={{ lg: '84px', md: '30px', base: '4' }}
				py={{ lg: '98px', md: '76px', base: '47.5px' }}
			>
				<Flex
					justifyContent='space-between'
					alignItems={{ md: 'end', base: 'start' }}
					flexDirection={{ md: 'row', base: 'column-reverse' }}
					gap={{ md: '50px', base: '80px' }}
				>
					<Box maxW='422px'>
						<Flex
							mt='41px'
							color='#212121'
							gap='48px'
						>
							<Box maxW='155px'>
								<Text
									fontWeight='500'
									fontSize='40px'
									lineHeight='48px'
								>
									<CountNumberEx num='50%' />
								</Text>
								<Text
									mt='9px'
									fontWeight='400'
									fontSize='16px'
									lineHeight='19.2px'
								>
									{t('textone')}
								</Text>
							</Box>
							<Box maxW='194px'>
								<Text
									fontWeight='500'
									fontSize='40px'
									lineHeight='48px'
								>
									<CountNumberEx num='20%' />
								</Text>
								<Text
									mt='9px'
									fontWeight='400'
									fontSize='16px'
									lineHeight='19.2px'
								>
									{t('texttwo')}
								</Text>
							</Box>
						</Flex>
						<Stack
							spacing='5'
							mt='63px'
						>
							{program.map((key, idx) => (
								<Flex
									key={idx}
									alignItems='center'
									gap='18px'
								>
									<IoMdCheckmark
										color='#273F2B'
										fontSize='18px'
									/>
									<Text
										className={inter.className}
										fontWeight='400'
										fontSize='16px'
										color='#12141D'
										lineHeight='26px'
									>
										{t(`program.${key}`)} {/* Use the translation key */}
									</Text>
								</Flex>
							))}
						</Stack>
					</Box>

					<Box maxW='523px'>
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
							w='252px'
						>
							{t('text')} {/* Translated text for "Light Industry" */}
						</Box>
						<TitleComponent
							color='#26402B'
							mt='15px'
						>
							{t('title')}
						</TitleComponent>
						<Description mt='3'>{t('dis')}</Description>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default InvestExport
