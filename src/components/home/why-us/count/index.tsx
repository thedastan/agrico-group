// 'use client'
// import { Text } from '@chakra-ui/react'
// import dynamic from 'next/dynamic'
// import { useState } from 'react'
// import ScrollTrigger from 'react-scroll-trigger'
// const CountUp = dynamic(() => import('react-countup'), { ssr: false })
// const Count = () => {
// 	const [counts, setCounts] = useState(false)
// 	return (
// 		<div>
// 			<ScrollTrigger
// 				onEnter={() => setCounts(true)}
// 				onExit={() => setCounts(false)}
// 			>
// 				<Text>
// 					{counts && (
// 						<CountUp
// 							start={0}
// 							end={100}
// 							delay={0}
// 							duration={6}
// 						/>
// 					)}
// 				</Text>
// 			</ScrollTrigger>
// 		</div>
// 	)
// }
// export default Count
// import { Box, Text } from '@chakra-ui/react'
// import React from 'react'
// const Count = () => {
// 	return (
// 		<Box
// 			w={200}
// 			ml={-600}
// 			display='flex'
// 		>
// 			<Box
// 				ml={-550}
// 				mt={10}
// 			>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box
// 				ml={200}
// 				mt={8}
// 			>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box
// 				ml={10}
// 				mt={40}
// 			>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box
// 				ml={0}
// 				mt={20}
// 			>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box mt={4}>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box mt={4}>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box mt={4}>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box mt={4}>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box mt={4}>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 			<Box mt={4}>
// 				<Box
// 					display='flex'
// 					alignItems='center'
// 					justifyContent='center'
// 					gap={1}
// 					bg='white'
// 					width='100px'
// 					height='80px'
// 					p={2}
// 					transition='0.1s'
// 					_hover={{
// 						// border: 'solid 1px red'
// 						width: '110px',
// 						height: '90px',
// 						padding: '0px',
// 						transition: '0.1s'
// 					}}
// 					sx={{
// 						clipPath:
// 							'polygon(0 24%, 100% 22%, 100% 61%, 56% 63%, 48% 75%, 40% 64%, 0 63%)'
// 					}}
// 				>
// 					<Box
// 						w={8}
// 						mt={-2}
// 					>
// 						<img
// 							style={{ borderRadius: '4px' }}
// 							src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
// 							alt=''
// 						/>
// 					</Box>
// 					<Text
// 						mt={-2}
// 						fontSize={10}
// 					>
// 						kyrgyzstan
// 					</Text>
// 				</Box>
// 			</Box>
// 		</Box>
// 	)
// }
// export default Count
import React from 'react'

const index = () => {
	return <div></div>
}

export default index
