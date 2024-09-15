'use client'

import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import { import_products } from './data'

const About = () => {
	const [activeIndex, setIndex] = useState(0)
	return (
		<Box mt={{ md: '218px', base: '120px' }}>
			<TitleComponent textAlign={{ md: 'center', base: 'start' }}>
				Почему выбирают нас
			</TitleComponent>

			<Flex
				gap={{ lg: '50px', md: '30px', base: '20px' }}
				mt='60px'
			>
				<Stack
					className={inter.className}
					spacing='14px'
					maxW='600px'
				>
					{import_products.map((el, idx) => (
						<Box
							key={idx}
							onClick={() => setIndex(idx)}
							border='1px solid #0000001F'
							bg={{
								md: activeIndex === idx ? '#F2F5EB' : 'transparent',
								base: '#F2F5EB'
							}}
							py={{ md: '21px', base: '3' }}
							px={{ md: '6', base: '3' }}
							rounded='16px'
							cursor='pointer'
						>
							<Text
								fontWeight={{ md: '600', base: '700' }}
								fontSize='18px'
								lineHeight='31.72px'
								color='#0C0E0F'
							>
								{el.title}
							</Text>
							<Text
								mt='6px'
								fontWeight='500'
								fontSize='16px'
								lineHeight='26px'
								color='#52525B'
							>
								{el.desc}
							</Text>
							<Box
								mt='10px'
								display={{ md: 'none', base: 'block' }}
								h='259px'
								overflow='hidden'
								rounded='12px'
							>
								<Image
									src={el.image}
									alt='Image'
									className='full-image'
								/>
							</Box>
						</Box>
					))}
				</Stack>
				<Box
					display={{ md: 'block', base: 'none' }}
					h='412px'
					overflow='hidden'
					rounded='12px'
				>
					<Image
						src={import_products[activeIndex].image}
						alt='Image'
						className='full-image'
					/>
				</Box>
			</Flex>
		</Box>
	)
}

export default About
