import { Box, Container } from '@chakra-ui/react'
import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

export const metadata: Metadata = {
	title: 'Инвестиции в Кыргызстан',
	...NO_INDEX_PAGE
}
export default function InvestmentsPage() {
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			<Container maxW={CONTAINER_WIDTH}>Инвестиции в Кыргызстан</Container>
		</Box>
	)
}
