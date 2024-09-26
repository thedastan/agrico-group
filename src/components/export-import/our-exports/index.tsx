import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import Title from '@/components/ui/texts/Title'
import TitleComponent from '@/components/ui/texts/TitleComponent'

// import { useTranslation } from 'react-i18next'

const OurExports = () => {
	const t = useTranslations()

	const data = [
		{
			title: t('ourExports.agriculturalProducts.title'),
			desc: t('ourExports.agriculturalProducts.desc')
		},
		{
			title: t('ourExports.textileProducts.title'),
			desc: t('ourExports.textileProducts.desc')
		},
		{
			title: t('ourExports.mineralResources.title'),
			desc: t('ourExports.mineralResources.desc')
		},
		{
			title: t('ourExports.souvenirProducts.title'),
			desc: t('ourExports.souvenirProducts.desc')
		}
	]

	return (
		<Box mt='100px'>
			<TitleComponent maxW='601px'>{t('ourExports.title')}</TitleComponent>
			<SimpleGrid
				mt={{ md: '40px', base: '50px' }}
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

export default OurExports
