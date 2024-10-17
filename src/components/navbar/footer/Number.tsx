'use client'

import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { PHONE_NUMBER, PHONE_NUMBER_CONST } from '@/constants/admin'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

const Number = () => {
	const localActive = useTypedLocale()
	const pathname = usePathname()

	const isTourismPage = pathname === DASHBOARD_PAGES.TOURISM(localActive)

	return (
		<Box>
			<a
				href={`tel:${isTourismPage ? PHONE_NUMBER_CONST : PHONE_NUMBER}`}
				target={'_blank'}
			>
				{`${isTourismPage ? PHONE_NUMBER_CONST : PHONE_NUMBER}`}
			</a>
		</Box>
	)
}

export default Number
