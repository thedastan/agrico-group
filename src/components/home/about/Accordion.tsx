'use client'

import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineMinus } from 'react-icons/hi'
import { RiArrowRightUpLine } from 'react-icons/ri'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import useTypedLocale from '@/hooks/useLocale'

import { IAccardion } from './data'

const AccordionComponent = ({ data }: { data: IAccardion[] }) => {
	const localActive = useTypedLocale()
	return (
		<Accordion
			allowToggle
			mt={{ md: '170px', base: '130px' }}
			gap='0'
			id='services'
		>
			{data.map((el, idx) => (
				<AccordionItem
					key={idx}
					borderBottom='none'
					borderTop='1px solid #000000'
					rounded='30px'
					px={{ md: '22px', base: '0' }}
					className={inter.className}
				>
					{({ isExpanded }) => (
						<>
							<AccordionButton
								_hover={{ bg: 'transparent' }}
								as={Box}
								flex='1'
								pt={{ md: '40px', base: '28px' }}
								cursor='pointer'
							>
								<Flex
									justifyContent='space-between'
									alignItems='start'
									w='100%'
								>
									<TitleComponent
										w={{ md: '300px', base: '100%' }}
										fontSize='32px'
										lineHeight='38.4px'
									>
										{el.title}
									</TitleComponent>

									<Box display={{ md: 'block', base: 'none' }}>
										{!isExpanded ? (
											<Text
												textAlign='start'
												fontSize='32px'
												lineHeight='38.4px'
												color='#888888'
											>
												{el.description}
											</Text>
										) : (
											<Box
												display='flex'
												justifyContent='center'
												position='relative'
											>
												<Box
													w='600px'
													h='220px'
													rounded='8px'
													overflow='hidden'
												>
													<Image
														src={el.image}
														alt='Image'
														className='full-image'
													/>
												</Box>
												<Box
													position='absolute'
													right='-4%'
													bottom='5'
													bg='#FFFDF6'
													padding='2'
													rounded='50%'
												>
													<Link href={el.path}>
														<Flex
															justifyContent='center'
															align='center'
															bg='#212121'
															w='52px'
															h='52px'
															rounded='50%'
														>
															<RiArrowRightUpLine
																color='#7BBA39'
																fontSize='24px'
															/>
														</Flex>
													</Link>
												</Box>
											</Box>
										)}
									</Box>
									<Flex
										alignItems='center'
										h='100%'
										gap='53px'
									>
										{isExpanded && (
											<Text
												display={{ md: 'block', base: 'none' }}
												maxW='194px'
												fontSize='20px'
												lineHeight='24px'
												color='#212121'
											>
												{el.description}
											</Text>
										)}
										{isExpanded ? (
											<Flex
												flexDirection='column'
												alignItems='end'
												justifyContent='space-between'
												h='100%'
												gap='40px'
											>
												<HiOutlineMinus fontSize='24px' />
											</Flex>
										) : (
											<AiOutlinePlus fontSize='24px' />
										)}
									</Flex>
								</Flex>
							</AccordionButton>
							<AccordionPanel px='4'>
								<Box
									display={{ md: 'none', base: 'block' }}
									mt='3'
								>
									<Box position='relative'>
										<Box
											w='100%'
											h='220px'
											rounded='8px'
											overflow='hidden'
										>
											<Image
												src={el.image}
												alt='Image'
												className='full-image'
											/>
										</Box>
										<Box
											position='absolute'
											right='-6%'
											bottom='5'
											bg='#FFFDF6'
											padding='2'
											rounded='50%'
										>
											<Link href={el.path}>
												<Flex
													justifyContent='center'
													align='center'
													bg='#212121'
													w='52px'
													h='52px'
													rounded='50%'
												>
													<RiArrowRightUpLine
														color='#7BBA39'
														fontSize='24px'
													/>
												</Flex>
											</Link>
										</Box>
									</Box>
									<Text
										mt='5'
										textAlign='start'
										fontSize='20px'
										lineHeight='24px'
										color='#212121'
									>
										{el.description}
									</Text>
								</Box>
							</AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default AccordionComponent
