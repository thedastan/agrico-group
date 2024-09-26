import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import MapImage from '@/assets/img/map 1.png'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const WhyUs = () => {
	const t = useTranslations('WhyUs')

	return (
		<Box
			mt={{ md: '200px', base: '120px' }}
			bg='#F2F5EB'
			pt={{ md: '68px', base: '50px' }}
			pb={{ md: '50px', base: '31px' }}
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='space-between'
					alignItems='center'
					gap='4'
				>
					<Box maxW='403px'>
						<TitleComponent>{t('why')}</TitleComponent>
						<Description mt='2'>{t('description')}</Description>
					</Box>
					<Box display={{ md: 'block', base: 'none' }}>
						<Statics />
					</Box>
				</Flex>
			</Container>
			<Container
				maxW={CONTAINER_WIDTH}
				px={{ md: '4', base: '0' }}
				mt='25px'
			>
				<Box
					display='flex'
					h={{ md: '420px', base: '456px' }}
					w='100%'
					overflowX='auto'
				>
					<Image
						src={MapImage}
						alt='Map'
						className='full-image'
						style={{ width: 'auto', height: '100%', minWidth: '1200px' }} // Задаем minWidth для предотвращения сжатия
					/>
				</Box>
			</Container>
			<Box
				display={{ md: 'none', base: 'block' }}
				px='4'
			>
				<Statics />
			</Box>
		</Box>
	)
}

// const statics = [
// 	{
// 		num: '98%',
// 		desc: 'Удовлетворенность клиентов '
// 	},
// 	{
// 		num: '7+',
// 		desc: 'Лет опыта на международных рынках'
// 	},
// 	{
// 		num: '100+',
// 		desc: 'Партнеров в различных странах'
// 	}
// ]

// function Statics() {
// 	return (
// 		<Flex
// 			gap={{ md: '48px', base: '14px' }}
// 			// flexWrap={{ md: 'nowrap', base: 'wrap' }}
// 		>
// 			{statics.map((el, idx) => (
// 				<Box
// 					key={idx}
// 					color='#212121'
// 					maxW={{ sm: '30%', base: '128px' }}
// 					p={2}
// 				>
// 					<Text
// 						fontWeight='500'
// 						fontSize='36px'
// 						lineHeight='48px'
// 					>
// 						{el.num}
// 					</Text>
// 					<Text
// 						mt='9px'
// 						fontWeight='400'
// 						fontSize='14px'
// 						lineHeight='19.2px'
// 					>
// 						{el.desc}
// 					</Text>
// 				</Box>
// 			))}
// 		</Flex>
// 	)
// }

const statics = [
	{
		num: '98%',
		descKey: 'satisfaction'
	},
	{
		num: '7+',
		descKey: 'experience'
	},
	{
		num: '100+',
		descKey: 'partners'
	}
]

function Statics() {
	const t = useTranslations('Statics')

	return (
		<Flex gap={{ md: '48px', base: '14px' }}>
			{statics.map((el, idx) => (
				<Box
					key={idx}
					color='#212121'
					maxW={{ sm: '30%', base: '128px' }}
					p={2}
				>
					<Text
						fontWeight='500'
						fontSize='36px'
						lineHeight='48px'
					>
						{el.num}
					</Text>
					<Text
						mt='9px'
						fontWeight='400'
						fontSize='14px'
						lineHeight='19.2px'
					>
						{t(el.descKey)}
					</Text>
				</Box>
			))}
		</Flex>
	)
}

export default WhyUs
