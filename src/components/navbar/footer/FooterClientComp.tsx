// 'use client'
import {
	Box,
	ChakraProps,
	Container,
	Flex,
	Highlight,
	Stack,
	Text
} from '@chakra-ui/react'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import Link from 'next/link'

import FeedbackForm from '@/components/feedback-form'
import BgLines from '@/components/ui/other/BgLines'

import {
	EMAIL_ADDRESS,
	INSTAGRAM,
	LOCATION,
	MOTION_WEB_LINK,
	PHONE_NUMBER
} from '@/constants/admin'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { IHeaderNav, social_contact } from '../data'

interface FooterClientCompProps {
	header_nav: IHeaderNav[]
}

const FooterClientComp = ({ header_nav }: FooterClientCompProps) => {
	const t = useTranslations('FooterClientComp')
	const selectOptions = [
		t('selectOptions.iportEx'),
		t('selectOptions.invest'),
		t('selectOptions.textpro'),
		t('selectOptions.tours'),
		t('selectOptions.craft')
	]
	return (
		<Box
			mt={{ md: '200px', base: '0' }}
			id='contact'
		>
			<Flex
				mb='-220px'
				alignItems={{ md: 'start', base: 'end' }}
			>
				<Box
					bg='#FFFDF6'
					maxW={{ xl: '90px', base: '16px' }}
					minW='16px'
					w='100%'
					h='216px'
					borderBottomRightRadius={{ md: '0', base: '26px' }}
					mb={{ md: '0', base: '200px' }}
				/>
				<Container
					maxW={CONTAINER_WIDTH}
					px='0'
				>
					<Flex
						justifyContent='space-between'
						flexDirection={{ md: 'row', base: 'column' }}
					>
						<Box
							bg={{ md: '#FFFDF6', base: 'transparent' }}
							borderBottomRightRadius='26px'
							maxW='100%'
							w='100%'
							h='216px'
							position='relative'
							mb='160px'
						>
							<Box
								textTransform='uppercase'
								fontWeight={{ xl: '900', base: '700' }}
								lineHeight={{ xl: '67.2px', md: '44px', base: '28.8px' }}
								fontSize={{ xl: '56px', md: '40px', base: '24px' }}
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
									{t('title1')}
								</Text>
								<Text
									as='h1'
									color={{ md: '#FFFFFF', base: '#212121' }}
								>
									<Highlight
										query='свяжемся'
										styles={{ color: '#7BBA39' }}
									>
										{t('title2')}
									</Highlight>
								</Text>
							</Box>
						</Box>
						<FeedbackForm
							button_name={t('button')}
							message_plaseholder={t('message_plaseholder')}
							options={selectOptions}
							message_plaseholderSelect={t('message_plaseholderSelect')}
						/>
					</Flex>
				</Container>
				<Box
					bg='#FFFDF6'
					borderBottomLeftRadius='26px'
					maxW={{ xl: '90px', base: '16px' }}
					minW='16px'
					w='100%'
					h='216px'
					mb={{ md: '0', base: '200px' }}
				/>
			</Flex>
			<Box bg='#212121'>
				<Container
					maxW={CONTAINER_WIDTH}
					position='relative'
				>
					<Box
						pt={{ md: '339px', base: '280px' }}
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
								<Box
									display='flex'
									flexDirection='column'
									gap={2}
								>
									<a href={LOCATION}>{t('LOCATION')}</a>
									<a href={`mailto:{EMAIL_ADDRESS_LINK}`}>{EMAIL_ADDRESS}</a>
									<a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
								</Box>
							</Stack>

							{/* //////////////////// */}

							{/* ////////////////// */}

							<Flex
								gap='48px'
								display={{ md: 'flex', base: 'none' }}
							>
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
							justifyContent={{ md: 'space-between', base: 'center' }}
							flexDirection={{ md: 'row', base: 'column' }}
							alignItems='center'
							textTransform='uppercase'
							color='#737372'
							fontSize={{ md: '14px', base: '10px' }}
							lineHeight={{ md: '25.2px', base: '18px' }}
							fontWeight='400'
							borderTop='1px solid  #FFFFFF'
							rounded='30px'
							px={{ md: '71px', base: '4' }}
						>
							<Text>{t('text1')}</Text>
							<Link href={MOTION_WEB_LINK}>{t('text2')}</Link>
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
