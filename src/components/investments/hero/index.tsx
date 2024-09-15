import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import DefButton from '@/components/ui/buttons/DefButton'
import Description from '@/components/ui/texts/Description'
import GiantText from '@/components/ui/texts/GiantText'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import HeroImage1 from '@/assets/img/invest-hero-1.png'
import HeroImage2 from '@/assets/img/invest-hero-2.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const InvestHero = () => {
	return (
		<Box pt={{ md: '95px', base: '65px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					gap={{ md: '6', base: '60px' }}
					justifyContent='space-between'
					flexDirection={{ lg: 'row', base: 'column' }}
				>
					<GiantText
						display={{ md: 'block', base: 'none' }}
						maxW='633px'
						lineHeight={{ md: '112px', base: '43.2px' }}
						color='#273F2B'
					>
						Инвестиции в Кыргызстан
					</GiantText>
					<TitleComponent
						display={{ md: 'none', base: 'block' }}
						color='#273F2B'
					>
						Инвестиции в Кыргызстан
					</TitleComponent>
					<Box maxW='560px'>
						<Description>
							Инвестируйте в будущее Кыргызстана с Agrico Group. Возможности в
							строительстве, сельском хозяйстве и легкой промышленности.
						</Description>

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
									95%
								</Text>
								<Text
									mt='9px'
									fontWeight='400'
									fontSize='16px'
									lineHeight='19.2px'
								>
									Удовлетворенность клиентов
								</Text>
							</Box>
							<Box maxW='194px'>
								<Text
									fontWeight='500'
									fontSize='40px'
									lineHeight='48px'
								>
									20%
								</Text>
								<Text
									mt='9px'
									fontWeight='400'
									fontSize='16px'
									lineHeight='19.2px'
								>
									Ежегодный рост в строительном секторе
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
							mt='60px'
							maxW={{ sm: '194px', base: '100%' }}
							isArrowDown={true}
						>
							Подробнее
						</DefButton>
						<Box
							mt='101px'
							display={{ md: 'block', base: 'none' }}
							rounded='10px'
							overflow='hidden'
							w='100%'
							h='741px'
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
						>
							<Image
								src={HeroImage2}
								alt='Image'
								className='full-image'
							/>
						</Box>
						<TitleComponent>Откройте новые горизонты с нами</TitleComponent>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default InvestHero
