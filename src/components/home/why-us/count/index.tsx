import { Box, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import React from 'react'

const Count = () => {
	const t = useTranslations('Count')

	return (
		<Box
			display='flex'
			gap={2}
		>
			<Box
				ml={-1100}
				mt={10}
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/800px-Flag_of_the_United_States_%28Pantone%29.svg.png'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title1')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={300}
				mt={4}
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title2')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={-4}
				mt='110px'
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/250px-Flag_of_Kuwait.svg.png'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title3')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={-10}
				mt='140px'
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/800px-Flag_of_Saudi_Arabia.svg.png'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title4')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml='-120px'
				mt='100px'
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/800px-Flag_of_Tajikistan.svg.png'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title5')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml='-50px'
				mt={28}
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title6')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={-32}
				mt={16}
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title7')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={-10}
				mt='70px'
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://akorda.kz/assets/media/flag_mediumThumb.jpg'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title8')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={4}
				mt={6}
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title9')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
			<Box
				ml={-16}
				mt={24}
			>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
					_hover={{
						'.box1': {
							bg: 'gray.200',
							transform: 'scale(1.05)'
						},
						'.box2': {
							bg: 'gray.200'
						}
					}}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='center'
						gap={1}
						bg='white'
						borderRadius={5}
						p={2}
						className='box1'
						transition='all 0.3s ease'
					>
						<Box w={8}>
							<img
								style={{ borderRadius: '4px' }}
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png'
								alt=''
							/>
						</Box>
						<Text fontSize={8}>{t('title10')}</Text>
					</Box>
					<Box
						className='box2'
						transform='rotate(45deg)'
						bg='white'
						w={3}
						h={3}
						mt='-6px'
						transition='all 0.3s ease'
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default Count
