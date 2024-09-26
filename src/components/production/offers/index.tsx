import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

const OurOffers = () => {
	const t = useTranslations() // Get the t function from useTranslation hook

	const data = [
		{
			title: t('offers.title1'), // Use translation keys
			desc: t('offers.desc1')
		},
		{
			title: t('offers.title2'),
			desc: t('offers.desc2')
		},
		{
			title: t('offers.title3'),
			desc: t('offers.desc3')
		},
		{
			title: t('offers.title4'),
			desc: t('offers.desc4')
		}
	]

	return (
		<Box mt={{ md: '120px', base: '150px' }}>
			<TitleComponent maxW='601px'>{t('offers.header')}</TitleComponent>

			<SimpleGrid
				mt='40px'
				columns={{ lg: 4, md: 2, base: 1 }}
				spacing={{ xl: '40px', md: '25px', base: '45px' }}
			>
				{data.map((el, idx) => (
					<Box
						key={idx}
						borderLeft='2px solid #254B45'
						pl='14px'
					>
						<Title>{el.title}</Title>
						<Text
							fontSize='16px'
							lineHeight='22px'
							color='#000000BF'
							mt='10px'
						>
							{el.desc}
						</Text>
					</Box>
				))}
			</SimpleGrid>
		</Box>
	)
}

export default OurOffers
