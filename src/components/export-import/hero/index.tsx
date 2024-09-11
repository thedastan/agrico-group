import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import GiantText from '@/components/ui/texts/GiantText'

import HeroImage from '@/assets/img/export-import-hero.png'

const ExportHero = () => {
	return (
		<Box pt='6'>
			<Box
				w='100%'
				h='421px'
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
				mt='6'
				justifyContent='space-between'
				alignItems='end'
				gap='151px'
			>
				<GiantText maxW='70%'>Импорт и Экспорт из Кыргызстана</GiantText>
				<DefButton
					maxW='213px'
					mb='25px'
				>
					Наши услуги
				</DefButton>
			</Flex>
			<Divider
				mt='31px'
				h='1px'
				bg='#828282'
			/>
		</Box>
	)
}

export default ExportHero
