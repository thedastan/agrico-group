import {
	Box,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import Slide1 from '@/assets/img/production-slide-1.png'
import Slide2 from '@/assets/img/production-slide-2.png'
import Slide3 from '@/assets/img/production-slide-3.png'

const images = [Slide1, Slide2, Slide3]

const About = () => {
	const t = useTranslations('About') // Используем локализованный контекст

	// Массив элементов с переводом
	const products = [
		{
			title: t('title1'),
			desc: t('desc1')
		},
		{
			title: t('title2'),
			desc: t('desc2')
		},
		{
			title: t('title3'),
			desc: t('desc3')
		}
	]

	return (
		<Box
			display='flex'
			flexDirection='column'
			textAlign='center'
			alignItems='center'
		>
			<Text
				bg='#F2F5EB'
				p='5px 15px'
				fontSize={16}
				borderRadius={20}
			>
				{t('startText')}
			</Text>
			<TitleComponent
				mt={4}
				fontSize={{ md: 56, base: 30 }}
			>
				{t('name')}
			</TitleComponent>{' '}
			<Box
				mt={8}
				display={{ md: 'flex', base: 'none' }}
			>
				<Tabs
					display='flex'
					flexDirection={{ md: 'row', base: 'column' }}
					alignItems='center'
				>
					<TabPanels
						display='flex'
						justifyContent={{ md: 'start', base: 'center' }}
						alignItems='center'
					>
						{images.map((image, index) => (
							<TabPanel
								key={index}
								h='100%'
								w='100%'
								overflow='hidden'
								rounded='12px'
								mt='10px'
								display='flex'
								flexDirection='column'
								justifyContent='end'
								gap={8}
								p='0 20px'
							>
								<Image
									style={{
										width: '100%',
										height: '450px',
										borderRadius: '20px'
									}}
									src={image}
									alt={`Product Image ${index + 1}`}
								/>
							</TabPanel>
						))}
					</TabPanels>

					<TabList>
						<Box
							display='flex'
							flexDirection={{ md: 'column', base: 'row' }}
							gap={6}
						>
							{products.map((el, idx) => (
								<Tab
									key={idx}
									textAlign='start'
									display='flex'
									flexDirection='column'
									alignItems='start'
									border='1px solid #0000001F'
									py={{ sm: '21px', base: '10px' }}
									px={{ sm: '6', base: '10px' }}
									rounded='16px'
									cursor='pointer'
									_selected={{ backgroundColor: '#F2F5EB' }} // Фон для активной вкладки
								>
									<Text
										fontWeight='600'
										fontSize='18px'
										lineHeight='31.72px'
										color='#0C0E0F'
									>
										{el.title} {/* Переведённый заголовок */}
									</Text>
									<Text
										mt='6px'
										fontWeight='500'
										fontSize='16px'
										lineHeight='26px'
										color='#52525B'
									>
										{el.desc} {/* Переведённое описание */}
									</Text>
								</Tab>
							))}
						</Box>
					</TabList>
				</Tabs>
			</Box>
			<Box
				mt={4}
				display={{ md: 'none', base: 'block' }}
				flexDirection='column'
				textAlign='start'
				alignItems='center'
			>
				<Box>
					{products.map((item, index) => (
						<Box
							key={index}
							borderRadius={20}
							bg='#F2F5EB'
							mb={6}
							p={4}
						>
							<Text
								fontWeight='600'
								fontSize='20px'
								color='#0C0E0F'
							>
								{item.title} {/* Переведённый заголовок */}
							</Text>
							<Text
								mt={2}
								fontSize='16px'
								color='#52525B'
							>
								{item.desc} {/* Переведённое описание */}
							</Text>
							<Box
								mb={4}
								mt={4}
							>
								<Image
									src={images[index]}
									alt={item.title}
									style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
								/>
							</Box>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default About
