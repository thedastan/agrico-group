import { Box, Container } from '@chakra-ui/react'
import { Metadata } from 'next'

import ExportHero from '@/components/export-import/hero'
import HowWeWork from '@/components/export-import/how-we-work'
import ImportProducts from '@/components/export-import/import-products.tsx'
import OurExports from '@/components/export-import/our-exports'
import TrustedPartner from '@/components/export-import/trusted-partner'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

export const metadata: Metadata = {
	title: 'Импорт и Экспорт из Кыргызстана',
	...NO_INDEX_PAGE
}
export default function ExportImportPage() {
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			<Container maxW={CONTAINER_WIDTH}>
				<ExportHero />
				<OurExports />
			</Container>
			<TrustedPartner />
			<Container maxW={CONTAINER_WIDTH}>
				<ImportProducts />
				<HowWeWork />
			</Container>
		</Box>
	)
}
