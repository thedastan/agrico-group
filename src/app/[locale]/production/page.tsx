import { Box, Container } from '@chakra-ui/react'
import { Metadata } from 'next'

import About from '@/components/production/about'
import Guarantee from '@/components/production/guarantee'
import ProductionHero from '@/components/production/hero'
import OurOffers from '@/components/production/offers'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

export const metadata: Metadata = {
	title: 'Швейное Производство',
	...NO_INDEX_PAGE
}
export default function ProductionPage() {
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			<Container maxW={CONTAINER_WIDTH}>
				<ProductionHero />
				<OurOffers />
			</Container>
			<Guarantee />
			<Container maxW={CONTAINER_WIDTH}>
				<About />
			</Container>
		</Box>
	)
}
