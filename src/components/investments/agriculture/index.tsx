import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import AgricultureImage1 from '@/assets/img/Agriculture-1.png'
import AgricultureImage2 from '@/assets/img/Agriculture-2.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Agriculture = () => {
	const t = useTranslations('Agriculture')

	return (
		<Box mt={{ md: '140px', base: '118px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent textAlign={{ md: 'center', base: 'start' }}>
					{t('title')}
				</TitleComponent>

				<Flex
					mt={{ md: '70px', base: '30px' }}
					gap='20px'
					justifyContent='space-between'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Flex
						flexDirection={{ md: 'column', base: 'column-reverse' }}
						maxW={{ md: '295px', base: '100%' }}
						gap='6'
					>
						<Text
							fontWeight='700'
							lineHeight='36px'
							fontSize='30px'
							color='#000000'
						>
							{t('text1')}
						</Text>
						<Text
							fontWeight='400'
							lineHeight='28.8px'
							fontSize='18px'
							color='#212121'
						>
							{t('dis1')}
						</Text>
					</Flex>
					<Box
						maxW='900px'
						w='100%'
						h={{ md: '440px', base: '296px' }}
						overflow='hidden'
						rounded='12px'
						data-aos='zoom-in-left'
					>
						<Image
							src={AgricultureImage1}
							alt='Image'
							className='full-image'
						/>
					</Box>
				</Flex>
				<Flex
					mt={{ md: '70px', base: '60px' }}
					gap='20px'
					justifyContent='space-between'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Box
						maxW='900px'
						w='100%'
						h={{ md: '440px', base: '296px' }}
						overflow='hidden'
						rounded='12px'
						data-aos='zoom-in-right'
					>
						<Image
							src={AgricultureImage2}
							alt='Image'
							className='full-image'
						/>
					</Box>
					<Box maxW={{ md: '295px', base: '100%' }}>
						<Text
							fontWeight='700'
							lineHeight='36px'
							fontSize='30px'
							color='#000000'
						>
							{t('text1')}
						</Text>
						<Text
							mt={{ md: '6', base: '5' }}
							fontWeight='400'
							lineHeight='28.8px'
							fontSize='18px'
							color='#212121'
						>
							{t('dis2')}
						</Text>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default Agriculture
