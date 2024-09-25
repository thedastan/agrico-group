// import {
// 	Box,
// 	Flex,
// 	Menu,
// 	MenuButton,
// 	MenuItem,
// 	MenuList
// } from '@chakra-ui/react'
// import { usePathname, useRouter } from 'next/navigation'
// import { AiOutlineCheck } from 'react-icons/ai'
// import { IoChevronDown } from 'react-icons/io5'
// import { about_accordion } from '@/components/home/about/data'
// import { inter } from '@/constants/fonts/fonts'
// import { IntlType } from '@/types/intl.types'
// import useTypedLocale from '@/hooks/useLocale'
// import { locales_data } from '@/i18n'
// const Services = () => {
// 	const localActive = useTypedLocale()
// 	const pathname = usePathname()
// 	const router = useRouter()
// 	const current_locale = about_accordion.find(el => el.title === localActive)
// 	const changeIntl = (title: IntlType) => {
// 		router.replace(pathname.replace(localActive, title))
// 	}
// 	return (
// 		<Menu>
// 			<MenuButton as={Box}>
// 				<Flex
// 					alignItems='center'
// 					cursor='pointer'
// 					gap='9px'
// 					fontSize={{ md: '14px', base: '24px' }}
// 					lineHeight={{ md: '14px', base: '24px' }}
// 					fontWeight={{ md: '400', base: '500' }}
// 					color='#FFFFFF'
// 				>
// 					{current_locale?.locale}
// 					<IoChevronDown />
// 				</Flex>
// 			</MenuButton>
// 			<MenuList
// 				w='204px'
// 				rounded='12px'
// 				bg='#FFFFFF'
// 				boxShadow='0px 8px 24px -6px #00000029'
// 				padding='4px 4px 4px 9px'
// 				className={inter.className}
// 			>
// 				{about_accordion.map((el, idx) => (
// 					<MenuItem
// 						key={idx}
// 						// onClick={() => changeIntl(el.title)}
// 						justifyContent='space-between'
// 						rounded='6px'
// 						alignItems='center'
// 						bg={el.title === localActive ? '#F5F5F5' : 'transparent'}
// 						p='2'
// 						_hover={{ bg: '#F5F5F5' }}
// 					>
// 						{el.title}
// 						{el.title === localActive && <AiOutlineCheck color='#5846FB' />}
// 					</MenuItem>
// 				))}
// 			</MenuList>
// 		</Menu>
// 	)
// }
// export default Services
import React from 'react'

const Services = () => {
	return <div></div>
}

export default Services
