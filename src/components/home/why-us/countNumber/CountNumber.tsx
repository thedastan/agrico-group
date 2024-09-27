// 'use client'
// import { Text } from '@chakra-ui/react'
// import React from 'react'
// import CountUp from 'react-countup'
// // Define the props interface
// interface CountNumberProps {
// 	num: number // Specify that num should be a number
// }
// // CountNumber Component
// const CountNumber: React.FC<CountNumberProps> = ({ num }) => {
// 	return (
// 		<Text
// 			fontWeight='500'
// 			fontSize='36px'
// 			lineHeight='48px'
// 		>
// 			<CountUp
// 				start={0} // Starting value
// 				end={num} // Ending value
// 				duration={2.5} // Duration of count-up
// 				delay={0} // Optional delay before counting starts
// 			/>
// 			{/* Add the percentage sign if needed */}
// 			{num === 98 ? '%' : '+'}
// 		</Text>
// 	)
// }
// export default CountNumber
'use client'

import { Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

// 'use client'

// import { Text } from '@chakra-ui/react'
// import React from 'react'
// import CountUp from 'react-countup'

// // Define the props interface
// interface CountNumberProps {
// 	num: number // Specify that num should be a number
// }

// // CountNumber Component
// const CountNumber: React.FC<CountNumberProps> = ({ num }) => {
// 	return (
// 		<Text
// 			fontWeight='500'
// 			fontSize='36px'
// 			lineHeight='48px'
// 		>
// 			<CountUp
// 				start={0} // Starting value
// 				end={num} // Ending value
// 				duration={2.5} // Duration of count-up
// 				delay={0} // Optional delay before counting starts
// 			/>
// 			{/* Add the percentage sign if needed */}
// 			{num === 98 ? '%' : '+'}
// 		</Text>
// 	)
// }

// export default CountNumber

// Define the props interface
interface CountNumberProps {
	num: number // Specify that num should be a number
}

// CountNumber Component
const CountNumber: React.FC<CountNumberProps> = ({ num }) => {
	const [isVisible, setIsVisible] = useState(false)
	const countRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						observer.unobserve(entry.target) // Stop observing once it's visible
					}
				})
			},
			{
				threshold: 0.1 // Trigger when 10% of the component is visible
			}
		)

		if (countRef.current) {
			observer.observe(countRef.current)
		}

		return () => {
			if (countRef.current) {
				observer.unobserve(countRef.current)
			}
		}
	}, [])

	return (
		<Text
			ref={countRef} // Attach ref to the Text component
			fontWeight='500'
			fontSize='36px'
			lineHeight='48px'
		>
			{isVisible && (
				<CountUp
					start={0} // Starting value
					end={num} // Ending value
					duration={2.5} // Duration of count-up
					delay={0} // Optional delay before counting starts
				/>
			)}
			{/* Add the percentage sign if needed */}
			{num === 98 ? '%' : '+'}
		</Text>
	)
}

export default CountNumber
