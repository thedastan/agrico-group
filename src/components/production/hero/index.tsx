import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import GiantText from '@/components/ui/texts/GiantText'

import HeroImage from '@/assets/img/production-hero.png'

const ProductionHero = () => {
	return (
		<Box pt={{ md: '6', base: '60px' }}>
			<GiantText display={{ md: 'none', base: 'block' }}>
				Швейное Производство
			</GiantText>
			<Box
				w='100%'
				mt={{ md: '0', base: '10' }}
				h={{ md: '421px', base: '338px' }}
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
				mt={{ md: '6', base: '60px' }}
				justifyContent='space-between'
				alignItems='end'
				gap='151px'
				w={{ sm: 'auto', base: '100%' }}
			>
				<GiantText
					display={{ md: 'block', base: 'none' }}
					maxW='70%'
				>
					Швейное Производство
				</GiantText>
				<Flex
					justifyContent={{ sm: 'start', base: 'space-between' }}
					pb={{ md: '25px', base: '0' }}
					pr={{ xl: '57px', base: '0' }}
					color='#212121'
					gap={{ md: '70px', base: '4' }}
					w={{ sm: 'auto', base: '100%' }}
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
				display={{ md: 'block', base: 'none' }}
				mt='31px'
				h='1px'
				bg='#828282'
			/>
		</Box>
	)
}

export default ProductionHero
