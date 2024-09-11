'use client'

import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import { import_products } from './data'

const ImportProducts = () => {
	const [activeIndex, setIndex] = useState(0)
	return (
		<Flex
			mt={{ md: '218px', base: '120px' }}
			gap={{ lg: '50px', md: '30px', base: '20px' }}
		>
			<Box>
				<TitleComponent maxW='495px'>Импортируемые товары</TitleComponent>
				<Box
					display={{ md: 'block', base: 'none' }}
					h='412px'
					overflow='hidden'
					rounded='12px'
					mt='6'
				>
					<Image
						src={import_products[activeIndex].image}
						alt='Image'
						className='full-image'
					/>
				</Box>
			</Box>

			<Stack
				className={inter.className}
				spacing='14px'
				maxW='570px'
			>
				{import_products.map((el, idx) => (
					<Box
						key={idx}
						onClick={() => setIndex(idx)}
						border='1px solid #0000001F'
						bg={activeIndex === idx ? '#F2F5EB' : 'transparent'}
						py='21px'
						px='6'
						rounded='16px'
						cursor='pointer'
					>
						<Text
							fontWeight='600'
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
					</Box>
				))}
			</Stack>
		</Flex>
	)
}

export default ImportProducts
