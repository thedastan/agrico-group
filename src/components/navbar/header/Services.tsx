import {
	Accordion,
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { IoChevronDown } from 'react-icons/io5'

import { IAccardion } from '@/components/home/about/data'

import { inter } from '@/constants/fonts/fonts'

const Services = ({ accardionData }: { accardionData: IAccardion[] }) => {
	// const t = useTranslations('Services')
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
					select
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
				{accardionData.map((el, index) => (
					<MenuItem key={index}>
						<Link href={el.path}>
							<MenuItem>{el.title}</MenuItem>
						</Link>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}
export default Services
