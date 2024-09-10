import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import MapImage from '@/assets/img/map.svg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const statics = [
	{
		num: '98%',
		desc: 'Удовлетворенность клиентов '
	},
	{
		num: '7+',
		desc: 'Лет опыта на международных рынках'
	},
	{
		num: '100+',
		desc: 'Партнеров в различных странах'
	}
]

const WhyUs = () => {
	return (
		<Box
			mt='200px'
			bg='#F2F5EB'
			pt='68px'
			pb='50px'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='space-between'
					alignItems='center'
					gap='4'
				>
					<Box maxW='403px'>
						<TitleComponent>Почему мы</TitleComponent>
						<Description mt='2'>
							Многолетний опыт работы на международных рынках
						</Description>
					</Box>

					<Flex gap='48px'>
						{statics.map((el, idx) => (
							<Box
								key={idx}
								color='#212121'
							>
								<Text
									fontWeight='500'
									fontSize='40px'
									lineHeight='48px'
								>
									{el.num}
								</Text>
								<Text
									mt='9px'
									fontWeight='400'
									fontSize='16px'
									lineHeight='19.2px'
								>
									{el.desc}
								</Text>
							</Box>
						))}
					</Flex>
				</Flex>
				<Box mt='25px'>
					<Image
						src={MapImage}
						alt='Map'
						// className='full-image'
					/>
				</Box>
			</Container>
		</Box>
	)
}

export default WhyUs
