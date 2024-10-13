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
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import SlideImage1 from '@/assets/img/grigor_new.jpeg'
import SlideImage3 from '@/assets/img/jetiogyz_new.jpg'
import SlideImage4 from '@/assets/img/kyrchyn_new.png'
import SlideImage2 from '@/assets/img/kyrchyn_new.png'

const RestSlide = () => {
	const t = useTranslations('RestSlide')

	const tabs = ['Григорьевское ущелье', 'Кырчын', 'Джети-Огуз', 'Каракол']
	return (
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
					<TabPanel w={{ md: 550, base: '100%' }}>
						<Image
							className='toursa'
							src={SlideImage1}
							alt='img'
						/>
					</TabPanel>
					<TabPanel w={{ md: 550, base: '100%' }}>
						<Image
							className='toursa'
							src={SlideImage2}
							alt='img'
						/>
					</TabPanel>
					<TabPanel w={{ md: 550, base: '100%' }}>
						<Image
							className='toursa'
							src={SlideImage3}
							alt='img'
						/>
					</TabPanel>
					<TabPanel w={{ md: 550, base: '100%' }}>
						<Image
							className='toursa'
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
							{t('text1')}
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
							{t('text2')}
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
							{t('text3')}
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
							{t('text4')}
						</Tab>
					</Box>
				</TabList>
			</Tabs>
		</Box>
	)
}

export default RestSlide
