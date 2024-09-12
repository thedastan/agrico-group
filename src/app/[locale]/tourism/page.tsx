import { Box } from '@chakra-ui/react'
import { Metadata } from 'next'

import ActiveRest from '@/components/tourism/active-test'
import TourismHero from '@/components/tourism/hero'
import ProgramIncludes from '@/components/tourism/includes'
import NatureSlide from '@/components/tourism/nature-slide'
import TourProgram from '@/components/tourism/tour-program'

import { NO_INDEX_PAGE } from '@/constants/seo/seo.constants'

import { HEADER_HEIGHT, MINI_HEADER_HEIGHT } from '@/config/_variables.config'

export const metadata: Metadata = {
	title: 'Туризм в Кыргызстане',
	...NO_INDEX_PAGE
}
export default function TourismPage() {
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			<TourismHero />
			<NatureSlide />
			<TourProgram />
			<ProgramIncludes />
			<ActiveRest />
		</Box>
	)
}
