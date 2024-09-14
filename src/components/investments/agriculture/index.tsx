import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import AgricultureImage1 from '@/assets/img/Agriculture-1.png'
import AgricultureImage2 from '@/assets/img/Agriculture-2.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Agriculture = () => {
	return (
		<Box mt={{ md: '140px', base: '118px' }}>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent textAlign='center'>Сельское хозяйство</TitleComponent>

				<Flex
					mt={{ md: '70px', base: '30px' }}
					gap='20px'
					justifyContent='space-between'
					flexDirection={{ md: 'row', base: 'column' }}
				>
					<Box maxW='295px'>
						<Text
							fontWeight='700'
							lineHeight='36px'
							fontSize='30px'
							color='#000000'
						>
							Экологически чистые продукты
						</Text>
						<Text
							mt='6'
							fontWeight='400'
							lineHeight='28.8px'
							fontSize='18px'
							color='#212121'
						>
							Сельское хозяйство – одна из ключевых отраслей экономики
							Кыргызстана, предлагающая уникальные возможности для инвесторов.
						</Text>
					</Box>
					<Box
						maxW='900px'
						w='100%'
						h={{ md: '440px', base: '296px' }}
						overflow='hidden'
						rounded='12px'
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
					flexDirection={{ md: 'row', base: 'column-reverse' }}
				>
					<Box
						maxW='900px'
						w='100%'
						h={{ md: '440px', base: '296px' }}
						overflow='hidden'
						rounded='12px'
					>
						<Image
							src={AgricultureImage2}
							alt='Image'
							className='full-image'
						/>
					</Box>
					<Box maxW='295px'>
						<Text
							fontWeight='700'
							lineHeight='36px'
							fontSize='30px'
							color='#000000'
						>
							Экологически чистые продукты
						</Text>
						<Text
							mt='6'
							fontWeight='400'
							lineHeight='28.8px'
							fontSize='18px'
							color='#212121'
						>
							Сельское хозяйство – одна из ключевых отраслей экономики
							Кыргызстана, предлагающая уникальные возможности для инвесторов.
						</Text>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default Agriculture
