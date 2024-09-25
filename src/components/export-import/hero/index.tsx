import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import GiantText from '@/components/ui/texts/GiantText'

import HeroImage from '@/assets/img/export-import-hero.png'

const ExportHero = () => {
	return (
		<Box pt={{ md: '6', base: '102px' }}>
			<GiantText display={{ md: 'none', base: 'block' }}>
				Импорт и Экспорт из Кыргызстана
			</GiantText>
			<Box
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
				mt={{ sm: '6', base: '60px' }}
				justifyContent='space-between'
				alignItems='end'
				gap='151px'
			>
				<GiantText
					maxW='70%'
					display={{ md: 'block', base: 'none' }}
				>
					Импорт и Экспорт из Кыргызстана
				</GiantText>
				<DefButton
					maxW={{ sm: '213px', base: '100%' }}
					mb='25px'
					bg='#7BBA39'
				>
					Наши услуги
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
