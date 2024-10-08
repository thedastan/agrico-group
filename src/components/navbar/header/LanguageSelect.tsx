import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoChevronDown } from 'react-icons/io5'

import { inter } from '@/constants/fonts/fonts'

import { IntlType } from '@/types/intl.types'

import useTypedLocale from '@/hooks/useLocale'

import { locales_data } from '@/i18n'

const LanguageSelect = () => {
	const localActive = useTypedLocale()

	const pathname = usePathname()
	const router = useRouter()
	const current_locale = locales_data.find(el => el.locale === localActive)
	const changeIntl = (locale: IntlType) => {
		router.replace(pathname.replace(localActive, locale))
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
					{current_locale?.short_name}
					<IoChevronDown />
				</Flex>
			</MenuButton>
			<MenuList
				w='204px'
				rounded='12px'
				bg='#FFFFFF'
				boxShadow='0px 8px 24px -6px #00000029'
				padding='4px 4px 4px 9px'
				className={inter.className}
			>
				{locales_data.map((el, idx) => (
					<MenuItem
						key={idx}
						onClick={() => changeIntl(el.locale)}
						justifyContent='space-between'
						rounded='6px'
						alignItems='center'
						bg={el.locale === localActive ? '#F5F5F5' : 'transparent'}
						p='2'
						_hover={{ bg: '#F5F5F5' }}
					>
						{el.name}
						{el.locale === localActive && <AiOutlineCheck color='#5846FB' />}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default LanguageSelect
