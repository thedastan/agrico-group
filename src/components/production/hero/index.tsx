import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import CountNumberEx from '@/components/export-import/trusted-partner/countNumberEx/CountNumberEx'
import GiantText from '@/components/ui/texts/GiantText'

import HeroImageMobile from '@/assets/img/product-hero-mobail.png'
import HeroImage from '@/assets/img/production-hero.png'

const ProductionHero = () => {
	const t = useTranslations('ProductionHero')

	return (
		<Box pt={{ md: '6', base: '60px' }}>
			<GiantText display={{ md: 'none', base: 'block' }}>
				{t('title')}
			</GiantText>
			<Box
				w='100%'
				mt={{ md: '0', base: '10' }}
				rounded='20px'
				overflow='hidden'
			>
				<Box
					display={{ md: 'flex', base: 'none' }}
					data-aos='fade-right'
				>
					<Image
						src={HeroImage}
						alt='Image'
						className='full-image'
					/>
				</Box>

				<Box
					display={{ md: 'none', base: 'block' }}
					data-aos='fade-right'
				>
					<Image
						src={HeroImageMobile}
						alt='Image'
						className='full-image'
					/>
				</Box>
			</Box>

			<Flex
				mt={{ md: '6', base: '60px' }}
				justifyContent='space-between'
				alignItems='end'
				gap='151px'
				w={{ sm: 'auto', base: '100%' }}
				data-aos='fade-left'
			>
				<GiantText
					display={{ md: 'block', base: 'none' }}
					maxW='70%'
				>
					{t('title')}
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
							{/* Используем CountNumberEx для анимации 100+ */}
							<Text
								fontWeight='500'
								fontSize='40px'
								lineHeight='48px'
							>
								<CountNumberEx num='100+' /> {/* Передаем строку 100+ */}
							</Text>

							<Text
								pb='2'
								fontWeight='400'
								fontSize='20px'
								lineHeight='24px'
							>
								{t('num')}
							</Text>
						</Flex>
						<Text
							mt='9px'
							fontWeight='400'
							fontSize='16px'
							lineHeight='19.2px'
						>
							{t('text1')}
						</Text>
					</Box>
					<Box w='142px'>
						{/* Используем CountNumberEx для анимации 10+ */}
						<Text
							fontWeight='500'
							fontSize='40px'
							lineHeight='48px'
						>
							<CountNumberEx num='10+' /> {/* Передаем строку 10+ */}
						</Text>
						<Text
							mt='9px'
							fontWeight='400'
							fontSize='16px'
							lineHeight='19.2px'
						>
							{t('text2')}
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
