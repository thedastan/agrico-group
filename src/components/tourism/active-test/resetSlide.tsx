'use client'

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import SlideImage1 from '@/assets/img/active-rest.png'

export default function RestSlide() {
	const [activeIndex, setIndex] = useState(0)
	const tabs = ['Григорьевское ущелье', 'Кырчын', 'Джети-Огуз', 'Каракол']
	return (
		<Flex
			flexDirection='column'
			alignItems='center'
		>
			<Box
				w={{ md: '568px', base: '100%' }}
				h={{ md: '319px', base: '309px' }}
				rounded='18px'
				overflow='hidden'
			>
				<Image
					src={SlideImage1}
					alt='Image'
					className='full-image'
				/>
			</Box>
			<Flex
				mt={{ md: '-40px', base: '22px' }}
				px={{ md: '15px', base: '0' }}
				alignItems='center'
				py={{ md: '3', base: '0' }}
				bg='#26402B'
				rounded='48px'
				justifyContent='space-around'
				// gap='47px'
				w='691px'
			>
				{tabs.map((tab, idx) => (
					<Box
						key={idx}
						onClick={() => setIndex(idx)}
						color={activeIndex === idx ? '#26402B' : '#FFFFFF'}
						bg={activeIndex === idx ? '#FFFFFF' : 'transparent'}
						rounded='36px'
						padding={activeIndex === idx ? '16px 24px' : '0'}
						cursor='pointer'
						transition='.2s'
						whiteSpace='nowrap'
					>
						{tab}
					</Box>
				))}
			</Flex>
		</Flex>
	)
}
