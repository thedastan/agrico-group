'use client'

import {
	Box,
	ChakraProps,
	Container,
	Flex,
	Highlight,
	Stack,
	Text
} from '@chakra-ui/react'
import Link from 'next/link'

import FeedbackForm from '@/components/feedback-form'
import BgLines from '@/components/ui/other/BgLines'

import { MOTION_WEB_LINK } from '@/constants/admin'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { IHeaderNav, social_contact } from '../data'

interface FooterClientCompProps {
	header_nav: IHeaderNav[]
}
const FooterClientComp = ({ header_nav }: FooterClientCompProps) => {
	return (
		<Box
			mt='200px'
			id='contact'
		>
			<Flex mb='-220px'>
				<Box
					bg='#FFFDF6'
					maxW={{ xl: '90px', base: '8px' }}
					w='100%'
					h='216px'
				/>
				<Container
					maxW={CONTAINER_WIDTH}
					px='0'
				>
					<Flex justifyContent='space-between'>
						<Box
							bg='#FFFDF6'
							borderBottomRightRadius='26px'
							maxW='100%'
							w='100%'
							h='216px'
							position='relative'
						>
							<Box
								textTransform='uppercase'
								fontWeight='900'
								lineHeight='67.2px'
								fontSize='56px'
								w='100%'
								position='absolute'
								bottom='-137px'
								fontStyle='black'
								left='0'
							>
								<Text
									as='h1'
									color='#212121'
								>
									Отправьте нам сообщение,
								</Text>
								<Text
									as='h1'
									color='#FFFFFF'
								>
									<Highlight
										query='свяжемся'
										styles={{ color: '#E8C547' }}
									>
										и мы свяжемся с вами в ближайшее время
									</Highlight>
								</Text>
							</Box>
						</Box>
						<FeedbackForm />
					</Flex>
				</Container>
				<Box
					bg='#FFFDF6'
					borderBottomLeftRadius='26px'
					maxW={{ xl: '90px', base: '8px' }}
					w='100%'
					h='216px'
				/>
			</Flex>
			<Box bg='#212121'>
				<Container
					maxW={CONTAINER_WIDTH}
					position='relative'
				>
					<Box
						pt='339px'
						position='relative'
						zIndex='1'
					>
						<Flex
							justifyContent='space-between'
							alignItems='start'
						>
							<Stack
								lineHeight='20px'
								fontSize='16px'
								color='#FFFFFFE5'
								fontWeight='400'
							>
								<Link href=''>г. Бишкек, ул. Манаса, д. 45</Link>
								<Link href=''>info@agreco.kg</Link>
								<Link href=''>+996 (312) 123-456</Link>
							</Stack>

							<Flex gap='48px'>
								{header_nav.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Text
											fontWeight='400'
											fontSize='18px'
											lineHeight='24.3px'
											color='#FFFFFF'
											transition='.2s'
											_hover={{ color: '#E8C547' }}
										>
											{el.name}
										</Text>
									</Link>
								))}
							</Flex>
						</Flex>

						<Flex
							mt='44px'
							h='76px'
							justifyContent='space-between'
							alignItems='center'
							textTransform='uppercase'
							color='#737372'
							fontSize='14px'
							lineHeight='25.2px'
							fontWeight='400'
							borderTop='1px solid  #FFFFFF'
							rounded='30px'
							px={{ md: '71px', base: '4' }}
						>
							<Text>Все права защищены. Авторские права © 2024</Text>
							<Link href={MOTION_WEB_LINK}>
								Разработан студией Motion Web LLC
							</Link>
						</Flex>
					</Box>
					<BgLines />
				</Container>
			</Box>
		</Box>
	)
}

function SocialContacts({ display }: ChakraProps) {
	return (
		<Flex
			display={display}
			mt={{ md: '0', base: '5' }}
			px='5'
			alignItems='center'
			justifyContent='center'
			bg='#050505'
			w={{ md: '34%', base: '100%' }}
			h={{ md: '100%', base: 'auto' }}
			gap='19.28px'
		>
			{social_contact.map((el, idx) => (
				<Link
					href={el.path}
					key={idx}
					target='_blank'
				>
					<Flex
						w='43.38px'
						h='43.38px'
						justifyContent='center'
						alignItems='center'
						bg='#282828'
						rounded='50%'
						fontSize='18px'
					>
						<el.icon color='#BDBDBD' />
					</Flex>
				</Link>
			))}
		</Flex>
	)
}

export default FooterClientComp
