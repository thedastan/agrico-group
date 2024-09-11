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

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import useTypedLocale from '@/hooks/useLocale'

import { about_accordion } from './data'

const AccordionComponent = () => {
	const localActive = useTypedLocale()
	return (
		<Accordion
			allowToggle
			mt='170px'
			gap='0'
			className='services'
		>
			{about_accordion.map((el, idx) => (
				<AccordionItem
					key={idx}
					borderBottom='none'
					borderTop='1px solid #000000'
					rounded='30px'
					px='22px'
					className={inter.className}
				>
					{({ isExpanded }) => (
						<>
							<AccordionButton
								_hover={{ bg: 'transparent' }}
								as={Box}
								flex='1'
								pt='40px'
								cursor='pointer'
							>
								<Flex
									justifyContent='space-between'
									alignItems='start'
									w='100%'
								>
									<TitleComponent
										w='284px'
										fontSize='32px'
										lineHeight='38.4px'
									>
										{el.title}
									</TitleComponent>

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
											w='341px'
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
									)}
									<Flex
										alignItems='center'
										h='100%'
										gap='53px'
									>
										{isExpanded && (
											<Text
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

												<Link href={el.path(localActive)}>
													<Text>{`Больше >`}</Text>
												</Link>
											</Flex>
										) : (
											<AiOutlinePlus fontSize='24px' />
										)}
									</Flex>
								</Flex>
							</AccordionButton>
							<AccordionPanel></AccordionPanel>
						</>
					)}
				</AccordionItem>
			))}
		</Accordion>
	)
}

export default AccordionComponent
