'use client'

import { Box, Center, Divider, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'

import Logo from '@/assets/img/construction-logo.svg'

import GiantText from '../ui/texts/GiantText'

import ConstructionCard from './card'
import { construction } from './data'

const Constructions = () => {
	return (
		<Box pt='77px'>
			<Center>
				<Image
					src={Logo}
					alt='Logo'
				/>
			</Center>
			<GiantText
				mt='18px'
				textAlign='center'
			>
				Наши обЪекты
			</GiantText>

			<Divider
				mt='29px'
				h='1px'
				bg='#A1A1A1'
			/>

			<SimpleGrid
				mt='32px'
				bg='#A1A1A1'
				columns={{ lg: 3, md: 2, base: 1 }}
				spacing='1px'
				pb='1px'
				maxW={{ md: '100%', base: '520px' }}
				w='100%'
				mx='auto'
			>
				{construction.map((el, idx) => (
					<ConstructionCard
						el={el}
						key={idx}
					/>
				))}
			</SimpleGrid>
		</Box>
	)
}

export default Constructions
