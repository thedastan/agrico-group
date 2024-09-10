import { Box } from '@chakra-ui/react'

import AboutUs from '@/components/home/about'
import MainHero from '@/components/home/hero'
import WhyUs from '@/components/home/why-us'

export default function Home() {
	return (
		<Box>
			<MainHero />
			<AboutUs />
			<WhyUs />
		</Box>
	)
}
