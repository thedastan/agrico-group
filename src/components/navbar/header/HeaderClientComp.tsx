'use client'

import { Button, Container, Flex, IconButton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LuPhone } from 'react-icons/lu'

import { IAccardion } from '@/components/home/about/data'

import { PHONE_NUMBER } from '@/constants/admin'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

import { IHeaderNav } from '../data'

import BurgerMenu from './BurgerMenu'
import LanguageSelect from './LanguageSelect'
import NavbarSelect from './NavbarSelect'
import Services from './Services'

interface HeaderClientCompProps {
	header_nav: IHeaderNav[]
	call_button: string
	accardionData: IAccardion[]
}

const HeaderClientComp = ({
	call_button,
	header_nav,
	accardionData
}: HeaderClientCompProps) => {
	const localActive = useTypedLocale()

	return (
		<Flex
			alignItems='center'
			position='fixed'
			left='0'
			zIndex='30'
			top='0'
			right='0'
			maxH={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
			h='100%'
			transition='.3s ease'
			bg='#2B2B2B'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex
						gap='35px'
						display={{ md: 'flex', base: 'none' }}
						alignItems='center'
					>
						{header_nav.map((el, idx) => (
							<Link
								href={el.path}
								key={idx}
							>
								<Text
									key={idx}
									fontSize='14px'
									lineHeight='14px'
									color='#FFFFFF'
									transition='.2s'
									_hover={{ color: '#E8C547' }}
								>
									{el.name}
								</Text>
							</Link>
						))}
						<Services accardionData={accardionData} />
						<LanguageSelect />
					</Flex>

					<Flex
						maxW={{ md: '55%', base: '100%' }}
						w='100%'
						justifyContent='space-between'
						alignItems='center'
					>
						<BurgerMenu
							header_nav={header_nav}
							accardionData={accardionData}
						/>
						<Link href={DASHBOARD_PAGES.HOME(localActive)}>
							<Image
								src={'/logo.svg'}
								alt='Logo'
								width={57}
								height={49}
							/>
						</Link>
						<Link href={`tel:${PHONE_NUMBER}`}>
							<Button
								display={{ md: 'flex', base: 'none' }}
								variant='none'
								border='1px solid #FFFFFF'
								color='#FFFFFF'
								lineHeight='19.2px'
								fontSize='16px'
								fontWeight='500'
								h='39px'
								w='149px'
								rounded='8px'
								bg='transparent'
							>
								{call_button}
							</Button>
							<IconButton
								aria-label='button'
								display={{ md: 'none', base: 'flex' }}
								variant='none'
								border='1px solid #F2F2F4'
								color='#FFFFFF'
								lineHeight='19.2px'
								fontSize='18px'
								fontWeight='500'
								h='40px'
								w='40px'
								rounded='50%'
								bg='transparent'
							>
								<LuPhone />
							</IconButton>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}

export default HeaderClientComp
