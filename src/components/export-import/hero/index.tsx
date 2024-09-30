import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import GiantText from '@/components/ui/texts/GiantText'

import HeroImage from '@/assets/img/export-import-hero.png'

const ExportHero = () => {
	const t = useTranslations('ExportHero')

	return (
		<Box pt={{ md: '6', base: '102px' }}>
			<GiantText display={{ md: 'none', base: 'block' }}>{t('expo')}</GiantText>
			<Box
				data-aos='fade-right'
				w='100%'
				mt={{ md: '0', base: '60px' }}
				h={{ md: '421px', base: '304px' }}
				rounded='20px'
				overflow='hidden'
			>
				<Image
					src={HeroImage}
					alt='Image'
					className='full-image'
				/>
			</Box>

			<Flex
				data-aos='fade-left'
				mt={{ sm: '6', base: '60px' }}
				justifyContent='space-between'
				alignItems='end'
				gap='151px'
			>
				<GiantText
					maxW='70%'
					display={{ md: 'block', base: 'none' }}
				>
					{t('title')}
				</GiantText>
				<DefButton
					maxW={{ sm: '213px', base: '100%' }}
					mb='25px'
					bg='#7BBA39'
				>
					{t('button')}
				</DefButton>
			</Flex>
			<Divider
				display={{ md: 'block', base: 'none' }}
				mt='31px'
				h='1px'
				bg='#828282'
			/>
		</Box>
	)
}

export default ExportHero
