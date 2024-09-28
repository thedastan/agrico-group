// 'use client'
// import { Text } from '@chakra-ui/react'
// import React, { useEffect, useRef, useState } from 'react'
// import CountUp from 'react-countup'
// interface CountNumberProps {
// 	num: any
// }
// // CountNumber Component
// const CountNumberEx: React.FC<CountNumberProps> = ({ num }) => {
// 	const [isVisible, setIsVisible] = useState(false)
// 	const countRef = useRef<HTMLDivElement | null>(null)
// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			entries => {
// 				entries.forEach(entry => {
// 					if (entry.isIntersecting) {
// 						setIsVisible(true)
// 						observer.unobserve(entry.target)
// 					}
// 				})
// 			},
// 			{
// 				threshold: 0.1
// 			}
// 		)
// 		if (countRef.current) {
// 			observer.observe(countRef.current)
// 		}
// 		return () => {
// 			if (countRef.current) {
// 				observer.unobserve(countRef.current)
// 			}
// 		}
// 	}, [])
// 	return (
// 		<Text
// 			ref={countRef}
// 			fontWeight='500'
// 			fontSize='36px'
// 			lineHeight='48px'
// 		>
// 			{isVisible && (
// 				<CountUp
// 					end={num} // Ending value
// 					duration={2.5} // Duration of count-up
// 					delay={0} // Optional delay before counting starts
// 				/>
// 			)}
// 			{num === 98 ? '%' : '+'}
// 		</Text>
// 	)
// }
// export default CountNumberEx
'use client'

import { Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'

// 'use client'
// import { Text } from '@chakra-ui/react'
// import React, { useEffect, useRef, useState } from 'react'
// import CountUp from 'react-countup'
// interface CountNumberProps {
// 	num: any
// }
// // CountNumber Component
// const CountNumberEx: React.FC<CountNumberProps> = ({ num }) => {
// 	const [isVisible, setIsVisible] = useState(false)
// 	const countRef = useRef<HTMLDivElement | null>(null)
// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			entries => {
// 				entries.forEach(entry => {
// 					if (entry.isIntersecting) {
// 						setIsVisible(true)
// 						observer.unobserve(entry.target)
// 					}
// 				})
// 			},
// 			{
// 				threshold: 0.1
// 			}
// 		)
// 		if (countRef.current) {
// 			observer.observe(countRef.current)
// 		}
// 		return () => {
// 			if (countRef.current) {
// 				observer.unobserve(countRef.current)
// 			}
// 		}
// 	}, [])
// 	return (
// 		<Text
// 			ref={countRef}
// 			fontWeight='500'
// 			fontSize='36px'
// 			lineHeight='48px'
// 		>
// 			{isVisible && (
// 				<CountUp
// 					end={num} // Ending value
// 					duration={2.5} // Duration of count-up
// 					delay={0} // Optional delay before counting starts
// 				/>
// 			)}
// 			{num === 98 ? '%' : '+'}
// 		</Text>
// 	)
// }
// export default CountNumberEx

interface CountNumberProps {
	num: string // Изменим тип на string, так как вы передаёте строки с символами
}

// CountNumberEx Component
const CountNumberEx: React.FC<CountNumberProps> = ({ num }) => {
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

	// Преобразуем num в число, убирая любые символы
	const numericValue = parseInt(num.replace(/\D/g, ''), 10)

	// Определяем, какой символ должен быть отображен после числа
	const suffix = num.includes('%') ? '%' : num.includes('+') ? '+' : ''

	return (
		<Text
			ref={countRef}
			fontWeight='500'
			fontSize='36px'
			lineHeight='48px'
		>
			{isVisible && (
				<CountUp
					end={numericValue} // Передаем чисто число в CountUp
					duration={2.5} // Длительность анимации
					delay={0} // Задержка перед анимацией
				/>
			)}
			{suffix} {/* Добавляем символ после числа */}
		</Text>
	)
}

export default CountNumberEx
