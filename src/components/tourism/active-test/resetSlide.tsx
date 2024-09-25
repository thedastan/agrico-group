'use client'

import {
	Box,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import SlideImage1 from '@/assets/img/active-rest.png'
import SlideImage3 from '@/assets/img/jetiogyz.jpg'
import SlideImage4 from '@/assets/img/karakol.jpg'
import SlideImage2 from '@/assets/img/kurchun.jpg'

export default function RestSlide() {
	const [activeIndex, setIndex] = useState(0)
	const tabs = ['Григорьевское ущелье', 'Кырчын', 'Джети-Огуз', 'Каракол']
	return (
		// <Flex
		// 	flexDirection='column'
		// 	alignItems='center'
		// >
		// 	<Box
		// 		w={{ md: '568px', base: '100%' }}
		// 		h={{ md: '319px', base: '309px' }}
		// 		rounded='18px'
		// 		overflow='hidden'
		// 	>
		// 		<Image
		// 			src={SlideImage1}
		// 			alt='Image'
		// 			className='full-image'
		// 		/>
		// 	</Box>
		// 	<Flex
		// 		mt={{ md: '-40px', base: '22px' }}
		// 		px={{ md: '15px', base: '0' }}
		// 		alignItems='center'
		// 		py={{ md: '3', base: '0' }}
		// 		bg={{ md: '#26402B', base: '100%' }}
		// 		rounded='48px'
		// 		justifyContent={{ md: 'space-around', base: 'sta' }}
		// 		gap={{ md: '4px', base: '8px 10px' }}
		// 		w={{ md: '691px', base: '100%' }}
		// 		flexWrap={{ md: 'nowrap', base: 'wrap' }}
		// 	>
		// 		{tabs.map((tab, idx) => (
		// 			<Box
		// 				key={idx}
		// 				onClick={() => setIndex(idx)}
		// 				color={{
		// 					md: activeIndex === idx ? '#26402B' : '#FFFFFF',
		// 					base: activeIndex === idx ? '#FFFFFF' : '#000000'
		// 				}}
		// 				bg={{
		// 					md: activeIndex === idx ? '#FFFFFF' : 'transparent',
		// 					base: activeIndex === idx ? '#212121' : 'transparent'
		// 				}}
		// 				rounded='36px'
		// 				border={{ md: 'none', base: '1px solid #212121' }}
		// 				padding={'16px 24px'}
		// 				cursor='pointer'
		// 				transition='.2s'
		// 				whiteSpace='nowrap'
		// 			>
		// 				{tab}
		// 			</Box>
		// 		))}
		// 	</Flex>
		// </Flex>
		<Box>
			<Tabs
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				<TabPanels
					display='flex'
					justifyContent={{ md: 'center', base: 'center' }}
					alignItems='center'
				>
					<TabPanel
						w={550}
						h={320}
					>
						<Image
							className='toursa'
							// style={{ width: '285px' }}
							src={SlideImage1}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={550}
						h={320}
					>
						<Image
							className='toursa'
							// style={{ width: '285px' }}
							src={SlideImage2}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={550}
						h={320}
					>
						<Image
							className='toursa'
							// style={{ maxWidth: '500px' }}
							src={SlideImage3}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={550}
						h={320}
					>
						<Image
							className='toursa'
							// style={{ maxWidth: '500px' }}
							src={SlideImage4}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={550}
						h={320}
					>
						<Image
							className='toursa'
							// style={{ maxWidth: '500px' }}
							src={SlideImage4}
							alt='img'
						/>
					</TabPanel>
				</TabPanels>

				<TabList>
					<Box
						display='flex'
						// flexDirection='column'
						borderRadius={40}
						bg={'#26402B'}
						p={4}
						mt={-8}
						gap={2}
					>
						<Tab
							w={{ md: 200, base: 100 }}
							h={{ md: 50, base: 30 }}
							borderRadius={30}
							p={{ md: 2, base: 1 }}
							color='white'
							_selected={{ color: '#26402B', bg: '#F4F5F6' }}
						>
							Григорьевское ущелье
						</Tab>

						<Tab
							w={{ md: 130, base: 100 }}
							h={{ md: 50, base: 30 }}
							borderRadius={30}
							p={1}
							color='white'
							_selected={{ color: '#26402B', bg: '#F4F5F6' }}
						>
							Кырчын
						</Tab>

						<Tab
							w={{ md: 130, base: 100 }}
							h={{ md: 50, base: 30 }}
							borderRadius={30}
							p={1}
							color='white'
							_selected={{ color: '#26402B', bg: '#F4F5F6' }}
						>
							Джети-Огуз
						</Tab>
						<Tab
							w={{ md: 130, base: 100 }}
							h={{ md: 50, base: 30 }}
							borderRadius={30}
							p={1}
							color='white'
							_selected={{ color: '#26402B', bg: '#F4F5F6' }}
						>
							Каракол
						</Tab>
					</Box>
				</TabList>
			</Tabs>
		</Box>
	)
}
