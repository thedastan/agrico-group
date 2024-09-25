import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoChevronDown } from 'react-icons/io5'

import { about_accordion } from '@/components/home/about/data'

import { inter } from '@/constants/fonts/fonts'

import { IntlType } from '@/types/intl.types'

import useTypedLocale from '@/hooks/useLocale'

import { locales_data } from '@/i18n'

const Services = () => {
	const localActive = useTypedLocale()
	const pathname = usePathname()
	const router = useRouter()
	const current_locale = about_accordion.find(el => el.title === localActive)
	const changeIntl = (title: IntlType) => {
		router.replace(pathname.replace(localActive, title))
	}
	return (
		<Menu>
			<MenuButton as={Box}>
				<Flex
					alignItems='center'
					cursor='pointer'
					gap='9px'
					fontSize={{ md: '14px', base: '24px' }}
					lineHeight={{ md: '14px', base: '24px' }}
					fontWeight={{ md: '400', base: '500' }}
					color='#FFFFFF'
				>
					Сектор
					<IoChevronDown />
				</Flex>
			</MenuButton>
			<MenuList
				w='204px'
				rounded='12px'
				bg='#FFFFFF'
				boxShadow='0px 8px 24px -6px #00000029'
				padding='15px 15px'
				className={inter.className}
				display='flex'
				flexDirection='column'
				gap={6}
			>
				{about_accordion.map((el, idx) => (
					<Link href={el.path(localActive)}>{el.title}</Link>
				))}
			</MenuList>
		</Menu>
	)
}
export default Services
