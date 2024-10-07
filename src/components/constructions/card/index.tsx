'use client'

import {
	Box,
	Divider,
	Flex,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { CiLocationOn } from 'react-icons/ci'

import Title from '@/components/ui/texts/Title'

import { LOCATION_LINK } from '@/constants/admin'

import { IConstruction } from '../data'

const ConstructionCard = ({ el }: { el: IConstruction }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box
			px={{ md: '18px', base: '0' }}
			pt='5'
			pb='42px'
			w='100%'
			bg='#FFFFFF'
		>
			<Box
				onClick={onOpen}
				w='100%'
				cursor='pointer'
			>
				<Box
					w='100%'
					h='269px'
					rounded='10px'
					overflow='hidden'
					cursor='pointer'
				>
					<Image
						src={el.image}
						alt='Image'
						className='full-image'
					/>
				</Box>

				<Title
					fontSize='26px'
					lineHeight='35.1px'
					color='#101E28'
					mt='14px'
				>
					{el.title}
				</Title>
				<Text
					noOfLines={1}
					mt='10px'
					fontSize='18px'
					fontWeight='400'
					lineHeight='27.22px'
					color='#4E565C'
					w='100%'
				>
					{el.description}
				</Text>
			</Box>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size={{ md: '5xl', base: 'full' }}
			>
				<ModalOverlay />
				<ModalContent
					rounded='14px'
					pt='40px'
					h={{ md: '630px', base: '100%' }}
					px={{ md: '35px', base: '4' }}
					overflowY={{ md: 'initial', base: 'auto' }}
					className='unscroll'
				>
					<ModalCloseButton />

					<Flex
						flexDirection={{ md: 'row', base: 'column-reverse' }}
						gap={{ md: '35px', base: '45px' }}
						h={{ md: '100%', base: 'auto' }}
					>
						<Flex
							flexDirection='column'
							overflowY={{ md: 'auto', base: 'initial' }}
							h='100%'
							maxW={{ md: '600px', base: '100%' }}
							w='100%'
							className='unscroll'
						>
							<Stack
								spacing='10px'
								pb='40px'
							>
								{el.gallery.map((image, idx) => (
									<Box
										key={idx}
										h='341px'
										overflow='hidden'
										rounded='6px'
									>
										<Image
											src={image}
											alt='gallery'
											className='full-image'
										/>
									</Box>
								))}
							</Stack>
						</Flex>

						<Box
							py={{ md: '40px', base: '0' }}
							maxW={{ lg: '400px', md: '300px', base: '100%' }}
							overflowY={{ md: 'auto', base: 'initial' }}
							h='100%'
							className='unscroll'
						>
							<Flex justifyContent='start'>
								<Link
									href={el.link}
									target='_blank'
								>
									<Box
										fontWeight='400'
										fontSize='14px'
										lineHeight='22px'
										color='#000000'
										py='6px'
										px='14px'
										maxW='160px'
										rounded='100px'
										bg='#F2F5EB'
										border='1px solid #E8E8E8'
										textTransform='uppercase'
									>
										{el.look_video}
									</Box>
								</Link>
							</Flex>
							<Title
								fontSize='26px'
								lineHeight='35.1px'
								color='#101E28'
								mt='4'
							>
								{el.title}
							</Title>
							<Box mt='10px'>
								<KeyText>{el.description}</KeyText>
							</Box>

							<Divider
								bg='#A1A1A1'
								h='1px'
								my='5'
							/>

							<Flex
								justifyContent='space-between'
								alignItems='center'
							>
								<KeyText>{el.start_craft}</KeyText>
								<Text
									fontWeight='500'
									fontSize='20px'
									lineHeight='32px'
									color='#23262F'
								>
									{el.start_date}
								</Text>
							</Flex>
							<Flex
								mt='10px'
								justifyContent='space-between'
								alignItems='center'
							>
								<KeyText>{el.end_craft}</KeyText>
								<Text
									fontWeight='500'
									fontSize='20px'
									lineHeight='32px'
									color='#23262F'
								>
									{el.end_date}
								</Text>
							</Flex>

							<Divider
								bg='#A1A1A1'
								h='1px'
								my='5'
							/>

							<Flex
								justifyContent='space-between'
								gap='5'
							>
								<Box>
									<KeyText>{el.summa}</KeyText>
									<Text
										mt='9px'
										fontWeight='500'
										fontSize='34px'
										lineHeight='40.8px'
										color='#212121'
									>
										{el.amount}
									</Text>
								</Box>
								<Box>
									<KeyText>{el.srok}</KeyText>
									<Text
										mt='9px'
										fontWeight='500'
										fontSize='34px'
										lineHeight='40.8px'
										color='#212121'
									>
										{el.payback_period}
									</Text>
								</Box>
							</Flex>

							<Flex mt='60px'>
								<Link
									href={LOCATION_LINK}
									target='_blank'
								>
									<Flex
										alignItems='start'
										maxW='219px'
										gap='1'
										color='#1E34FB'
									>
										<CiLocationOn />
										<Text
											fontSize='14px'
											lineHeight='20px'
										>
											{el.adress}
										</Text>
									</Flex>
								</Link>
							</Flex>
						</Box>
					</Flex>
				</ModalContent>
			</Modal>
		</Box>
	)
}

function KeyText({ children }: PropsWithChildren) {
	return (
		<Text
			fontSize='14px'
			fontWeight='400'
			lineHeight='21.17px'
			color='#343434'
		>
			{children}
		</Text>
	)
}

export default ConstructionCard
