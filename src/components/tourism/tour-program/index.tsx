import {
	Box,
	Container,
	Flex,
	SimpleGrid,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { IoMdCheckmark } from 'react-icons/io'

// Import useTranslations
import { inter } from '@/constants/fonts/fonts'

import ProgramImage3 from '@/assets/img/Ala-Archa-home.jpg'
import ProgramImage4 from '@/assets/img/Olimphotel.jpg'
import ProgramImage2 from '@/assets/img/arthotel.jpg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const TourProgram = () => {
	const t = useTranslations()

	const program = [
		t('tourProgram.night1'),
		t('tourProgram.night2'),
		t('tourProgram.night3'),
		t('tourProgram.night4'),
		t('tourProgram.night5'),
		t('tourProgram.night6')
	]

	// const images = [ProgramImage4, ProgramImage2, ProgramImage3]

	return (
		<Box
			mt={{ md: '160px', base: '130px' }}
			pt={{ md: '106px', base: '5' }}
			pb={{ md: '103px', base: '62px' }}
			bg='#F2F5EB'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					alignItems={{ lg: 'start', base: 'center' }}
					flexDirection={{ lg: 'row', base: 'column' }}
					gap={{ xl: '90px', base: '40px' }}
				>
					{/* /////////// */}

					<Box>
						<Tabs
							display='flex'
							flexDirection={{ md: 'row', base: 'column' }}
							alignItems='center'
						>
							<TabPanels
								display='flex'
								justifyContent={{ md: 'start', base: 'center' }}
								alignItems='center'
							>
								<TabPanel>
									<Image
										className='tours'
										src={ProgramImage2}
										alt='img'
									/>
								</TabPanel>
								<TabPanel>
									<Image
										className='tours'
										src={ProgramImage4}
										alt='img'
									/>
								</TabPanel>
								<TabPanel>
									<Image
										className='tours'
										src={ProgramImage3}
										alt='img'
									/>
								</TabPanel>
							</TabPanels>

							<TabList>
								<Box
									display='flex'
									flexDirection={{ md: 'column', base: 'row' }}
									gap={2}
								>
									<Tab
										w={{ md: 145, base: 100 }}
										h={{ md: 140, base: 100 }}
										objectFit='cover'
										overflow='hidden'
										p={1}
										_selected={{ color: 'black', bg: '#F4F5F6' }}
									>
										<Image
											style={{
												width: '200px',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '10px'
											}}
											src={ProgramImage2}
											alt='img'
										/>
									</Tab>

									<Tab
										w={{ md: 145, base: 100 }}
										h={{ md: 140, base: 100 }}
										objectFit='cover'
										overflow='hidden'
										p={1}
										_selected={{ color: 'black', bg: '#F4F5F6' }}
									>
										<Image
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '10px'
											}}
											src={ProgramImage4}
											alt='img'
										/>
									</Tab>

									<Tab
										w={{ md: 145, base: 100 }}
										h={{ md: 140, base: 100 }}
										objectFit='cover'
										overflow='hidden'
										p={1}
										_selected={{ color: 'black', bg: '#F4F5F6' }}
									>
										<Image
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '10px'
											}}
											src={ProgramImage3}
											alt='img'
										/>
									</Tab>
									{/* ))} */}
								</Box>
							</TabList>
						</Tabs>
					</Box>

					{/* /////////// */}

					<Box>
						<Text
							className={inter.className}
							as='h1'
							fontWeight='700'
							fontSize='32.51px'
							color='#26422B'
							lineHeight='43.54px'
						>
							{t('tourProgram.header')}
						</Text>
						<Text
							mt='26px'
							as='h1'
							fontWeight='900'
							fontSize='32px'
							color='#7BBA39'
							lineHeight='32px'
						>
							$1650{' '}
						</Text>
						<Stack
							spacing='3'
							mt='23px'
						>
							{program.map((pr, idx) => (
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
										{pr}
									</Text>
								</Flex>
							))}
						</Stack>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default TourProgram
