import { Box, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import WorkImage from '@/assets/img/how-we-work.png'

const HowWeWork = () => {
	const t = useTranslations('HowWeWork')

	return (
		<Box mt={{ md: '182px', base: '120px' }}>
			<Flex
				display={{ md: 'flex', base: 'none' }}
				gap='73px'
				alignItems='center'
				justifyContent='space-between'
			>
				<GiantText
					data-aos='fade-right'
					maxW='477px'
					w='100%'
				>
					{t('title')}
				</GiantText>

				<Description data-aos='fade-left'>{t('description')}</Description>
			</Flex>
			<TitleComponent display={{ md: 'none', base: 'block' }}>
				{t('title')}
			</TitleComponent>
			<Box
				mt={{ md: '26px', base: '30px' }}
				h={{ md: '503px', base: '337px' }}
				w='100%'
				rounded='20px'
				overflow='hidden'
			>
				<Image
					src={WorkImage}
					alt='Image'
					className='full-image'
				/>
			</Box>
			<Description
				display={{ md: 'none', base: 'block' }}
				mt='30px'
			>
				{t('description')}
			</Description>
		</Box>
	)
}

export default HowWeWork
