import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import GiantText from '@/components/ui/texts/GiantText'

import HeroImage from '@/assets/img/production-hero.png'

const ProductionHero = () => {
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
				<GiantText maxW='70%'>Швейное Производство</GiantText>
				<Flex
					pb={{ md: '25px', base: '0' }}
					pr={{ xl: '57px', base: '0' }}
					color='#212121'
					gap='70px'
				>
					<Box w='155px'>
						<Flex alignItems='end'>
							<Text
								fontWeight='500'
								fontSize='40px'
								lineHeight='48px'
							>
								+100
							</Text>
							<Text
								pb='2'
								fontWeight='400'
								fontSize='20px'
								lineHeight='24px'
							>
								тыс.
							</Text>
						</Flex>
						<Text
							mt='9px'
							fontWeight='400'
							fontSize='16px'
							lineHeight='19.2px'
						>
							Единиц продукции ежемесячно
						</Text>
					</Box>
					<Box w='142px'>
						<Text
							fontWeight='500'
							fontSize='40px'
							lineHeight='48px'
						>
							10+
						</Text>
						<Text
							mt='9px'
							fontWeight='400'
							fontSize='16px'
							lineHeight='19.2px'
						>
							Лет опыта в швейной отрасли
						</Text>
					</Box>
				</Flex>
			</Flex>
			<Divider
				mt='31px'
				h='1px'
				bg='#828282'
			/>
		</Box>
	)
}

export default ProductionHero
