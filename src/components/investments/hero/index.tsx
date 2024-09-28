import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import CountNumberEx from '@/components/export-import/trusted-partner/countNumberEx/CountNumberEx'
import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import HeroImage1 from '@/assets/img/invest-hero-1.png'
import HeroImage2 from '@/assets/img/invest-hero-2.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const InvestHero = () => {
	const t = useTranslations('InvestHero')

	return (
		<Box pt={{ md: '95px', base: '65px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					gap={{ md: '6', base: '60px' }}
					justifyContent='space-between'
					flexDirection={{ lg: 'row', base: 'column' }}
				>
					<GiantText
						data-aos='fade-down-right'
						display={{ md: 'block', base: 'none' }}
						maxW='673px'
						lineHeight={{ md: '112px', base: '43.2px' }}
						color='#273F2B'
					>
						{t('title')}
					</GiantText>
					<TitleComponent
						data-aos='fade-down-right'
						display={{ md: 'none', base: 'block' }}
						color='#273F2B'
					>
						{t('title')}
					</TitleComponent>
					<Box
						maxW='560px'
						data-aos='fade-down-left'
					>
						<Description>{t('description')}</Description>

						<Flex
							mt='41px'
							color='#212121'
							gap='48px'
						>
							<Box maxW='155px'>
								<Text
									fontWeight='500'
									fontSize='40px'
									lineHeight='48px'
								>
									<CountNumberEx num='95%' />
								</Text>
								<Text
									mt='9px'
									fontWeight='400'
									fontSize='16px'
									lineHeight='19.2px'
								>
									{t('text1')}
								</Text>
							</Box>
							<Box maxW='194px'>
								<Text
									fontWeight='500'
									fontSize='40px'
									lineHeight='48px'
								>
									<CountNumberEx num='20%' />
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
					</Box>
				</Flex>

				<Flex
					mt={{ md: '11px', base: '60px' }}
					gap={{ md: '6', base: '0' }}
					justifyContent='space-between'
					flexDirection={{ md: 'row', base: 'column-reverse' }}
				>
					<Box
						maxW='633px'
						w='100%'
					>
						<DefButton
							data-aos='fade-down-right'
							mt='60px'
							maxW={{ sm: '194px', base: '100%' }}
							isArrowDown={true}
							bg='#7BBA39'
						>
							{t('button')}
						</DefButton>
						<Box
							mt='101px'
							display={{ md: 'block', base: 'none' }}
							rounded='10px'
							overflow='hidden'
							w='100%'
							h='741px'
							data-aos='fade-up-right'
						>
							<Image
								src={HeroImage1}
								alt='Image'
								className='full-image'
							/>
						</Box>
					</Box>
					<Flex
						maxW='560px'
						w='100%'
						gap={{ md: '90px', base: '20px' }}
						flexDirection={{ md: 'column', base: 'column-reverse' }}
					>
						<Box
							mt={{ md: '100px', base: '0' }}
							rounded='11px'
							overflow='hidden'
							w='100%'
							h='375px'
							data-aos='fade-up-left'
						>
							<Image
								src={HeroImage2}
								alt='Image'
								className='full-image'
							/>
						</Box>
						<TitleComponent>{t('title2')}</TitleComponent>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default InvestHero
