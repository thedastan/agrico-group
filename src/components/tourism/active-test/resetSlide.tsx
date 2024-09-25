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
					justifyContent='center'
					alignItems='center'
				>
					<TabPanel
						w={{ md: 550, base: '100%' }}
						// h={{ md: 550, base: 400 }}
					>
						<Image
							className='toursa'
							// style={{ width: '285px' }}
							src={SlideImage1}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={{ md: 550, base: '100%' }}
						// h={{ md: 550, base: 400 }}
					>
						<Image
							className='toursa'
							// style={{ maxWidth: '500px' }}
							src={SlideImage2}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={{ md: 550, base: '100%' }}
						// h={{ md: 550, base: 400 }}
					>
						<Image
							className='toursa'
							// style={{ maxWidth: '500px' }}
							src={SlideImage3}
							alt='img'
						/>
					</TabPanel>
					<TabPanel
						w={{ md: 550, base: '100%' }}
						// h={{ md: 550, base: 400 }}
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
						flexWrap='wrap'
						// flexDirection='column'
						borderRadius={40}
						bg={{ md: '#26402B', base: 'white' }}
						p={4}
						mt={{ md: -8, base: 2 }}
						gap={{ md: 2, base: 4 }}
					>
						<Tab
							objectFit='cover'
							overflow='hidden'
							w={{ md: 200, base: 200 }}
							borderRadius={30}
							p={{ md: 2, base: 1 }}
							border={{ md: 'solid 0px black', base: 'solid 1px black' }}
							color={{ md: 'white', base: 'black' }}
							_selected={{
								color: { md: '#26402B', base: 'white' },
								bg: { md: '#F4F5F6', base: 'black' }
							}}
						>
							Григорьевское ущелье
						</Tab>

						<Tab
							objectFit='cover'
							overflow='hidden'
							w={{ md: 200, base: 100 }}
							borderRadius={30}
							p={{ md: 2, base: 1 }}
							border={{ md: 'solid 0px black', base: 'solid 1px black' }}
							color={{ md: 'white', base: 'black' }}
							_selected={{
								color: { md: '#26402B', base: 'white' },
								bg: { md: '#F4F5F6', base: 'black' }
							}}
						>
							Кырчын
						</Tab>
						<Tab
							objectFit='cover'
							overflow='hidden'
							w={{ md: 130, base: 100 }}
							border={{ md: 'solid 0px black', base: 'solid 1px black' }}
							borderRadius={30}
							p={{ md: 2, base: 1 }}
							color={{ md: 'white', base: 'black' }}
							_selected={{
								color: { md: '#26402B', base: 'white' },
								bg: { md: '#F4F5F6', base: 'black' }
							}}
						>
							Джети-Огуз
						</Tab>
						<Tab
							objectFit='cover'
							overflow='hidden'
							w={{ md: 130, base: 100 }}
							borderRadius={30}
							border={{ md: 'solid 0px black', base: 'solid 1px black' }}
							p={{ md: 2, base: 1 }}
							color={{ md: 'white', base: 'black' }}
							_selected={{
								color: { md: '#26402B', base: 'white' },
								bg: { md: '#F4F5F6', base: 'black' }
							}}
						>
							Каракол
						</Tab>
					</Box>
				</TabList>
			</Tabs>
		</Box>
	)
}
