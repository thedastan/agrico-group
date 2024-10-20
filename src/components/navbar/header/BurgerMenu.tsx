'use client'

import {
	Box,
	Container,
	Flex,
	Modal,
	ModalCloseButton,
	ModalContent,
	Stack,
	Text,
	useDisclosure
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { IAccardion } from '@/components/home/about/data'
import BgLines from '@/components/ui/other/BgLines'

import {
	EMAIL_ADDRESS,
	EMAIL_ADDRESS_LINK,
	LOCATION,
	LOCATION_LINK,
	PHONE_NUMBER
} from '@/constants/admin'

import { IHeaderNav } from '../data'

import LanguageSelect from './LanguageSelect'
import Services from './Services'
import Adress from './adress'
import { IAdressNav, IServicesNav } from './useServices'

interface BurgerMenuProps {
	header_nav: IHeaderNav[]
	accardionData: IAccardion[]
	sectorsOp: IServicesNav[]
	adressBur: IAdressNav[]

	// call_button: string
}
const BurgerMenu = ({
	header_nav,
	accardionData,
	sectorsOp,
	adressBur
}: BurgerMenuProps) => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	return (
		<Box display={{ md: 'none', base: 'block' }}>
			<Stack
				onClick={onOpen}
				w='24px'
				spacing='2'
				cursor='pointer'
			>
				<Box
					h='2px'
					bg='#FFFFFF'
					w='100%'
				/>
				<Box
					h='2px'
					bg='#FFFFFF'
					w='100%'
				/>
				<Box
					h='2px'
					bg='#FFFFFF'
					w='100%'
				/>
			</Stack>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='full'
			>
				<ModalContent
					rounded='0'
					bg='#2B2B2B'
				>
					<ModalCloseButton
						color='#FFFFFF'
						left='6'
						top='55px'
						fontSize='20px'
					/>
					<Container>
						<Box
							position='relative'
							mt='100px'
						>
							<BgLines isMini={true} />

							<Flex
								flexDirection='column'
								justifyContent='space-between'
								position='relative'
								minH='80vh'
								zIndex='2'
							>
								<Box>
									<Flex justifyContent='center'>
										<Image
											src={'/logo.svg'}
											alt='Logo'
											width={57}
											height={49}
										/>
									</Flex>
									<Stack
										pl='3'
										spacing='22px'
										mt='78px'
									>
										{header_nav.map((el, idx) => (
											<Link
												href={el.path}
												key={idx}
												onClick={onClose}
											>
												<Text
													fontSize='24px'
													lineHeight='24px'
													fontWeight='500'
													color='#FFFFFF'
													transition='.2s'
													_active={{ color: '#E8C547' }}
												>
													{el.name}
												</Text>
											</Link>
										))}
										<Services
											accardionData={accardionData}
											onClose={onClose}
											sectorsOp={sectorsOp}
										/>
										<LanguageSelect />
									</Stack>
								</Box>

								<Stack
									lineHeight='20px'
									fontSize='16px'
									color='#FFFFFFE5'
									fontWeight='400'
									textAlign='center'
								>
									{/* <Link href={LOCATION_LINK}>{LOCATION}</Link> */}
									{adressBur.map((el, idx) => (
										<Link
											key={idx}
											href={LOCATION_LINK}
										>
											{el.name}
										</Link>
									))}
									<Link href={`mailto:{EMAIL_ADDRESS_LINK}`}>
										{EMAIL_ADDRESS}
									</Link>
									<Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
								</Stack>
							</Flex>
						</Box>
					</Container>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default BurgerMenu
