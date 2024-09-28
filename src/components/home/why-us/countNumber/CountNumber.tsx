'use client'

import { Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

interface CountNumberProps {
	num: number
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
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.1
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
			ref={countRef}
			fontWeight='500'
			fontSize='36px'
			lineHeight='48px'
		>
			{isVisible && (
				<CountUp
					end={num} // Ending value
					duration={2.5} // Duration of count-up
					delay={0} // Optional delay before counting starts
				/>
			)}

			{num === 98 ? '%' : '+'}
		</Text>
	)
}

export default CountNumber
