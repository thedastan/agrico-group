import { Box } from '@chakra-ui/react'
import { Metadata } from 'next'

import Agriculture from '@/components/investments/agriculture'
import ConstructionDevelopment from '@/components/investments/construction-development'
import InvestHero from '@/components/investments/hero'
import InvestExport from '@/components/investments/invest-export'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

import { HEADER_HEIGHT, MINI_HEADER_HEIGHT } from '@/config/_variables.config'

export const metadata: Metadata = {
	title: 'Инвестиции в Кыргызстан',
	...NO_INDEX_PAGE
}
export default function InvestmentsPage() {
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			<InvestHero />
			<ConstructionDevelopment />
			<Agriculture />
			<InvestExport />
		</Box>
	)
}
