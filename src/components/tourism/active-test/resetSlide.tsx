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
				bg={{ md: '#26402B', base: '100%' }}
				rounded='48px'
				justifyContent={{ md: 'space-around', base: 'sta' }}
				gap={{ md: '4px', base: '8px 10px' }}
				w={{ md: '691px', base: '100%' }}
				flexWrap={{ md: 'nowrap', base: 'wrap' }}
			>
				{tabs.map((tab, idx) => (
					<Box
						key={idx}
						onClick={() => setIndex(idx)}
						color={{
							md: activeIndex === idx ? '#26402B' : '#FFFFFF',
							base: activeIndex === idx ? '#FFFFFF' : '#000000'
						}}
						bg={{
							md: activeIndex === idx ? '#FFFFFF' : 'transparent',
							base: activeIndex === idx ? '#212121' : 'transparent'
						}}
						rounded='36px'
						border={{ md: 'none', base: '1px solid #212121' }}
						padding={'16px 24px'}
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
