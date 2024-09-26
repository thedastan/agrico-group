'use client'

import { Box, Button, Container } from '@chakra-ui/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import HeroImage1 from '@/assets/img/hero_image.jpeg'
import HeroImage from '@/assets/img/main-hero.png'
import HeroImage2 from '@/assets/img/maxresdefault.jpg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const ImgSlider = () => {
	const sliderRef = useRef<Slider | null>(null)

	// Инициализация AOS
	useEffect(() => {
		AOS.init({
			duration: 800, // Длительность анимации
			once: true // Анимация только один раз
		})
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	return (
		<Box>
			<Container maxW={CONTAINER_WIDTH}>
				<Box position='relative'>
					{/* Кнопки с анимацией */}
					<Button
						onClick={() => sliderRef.current?.slickPrev()}
						colorScheme='#F8F8F8'
						position='absolute'
						left='10px'
						top='45%'
						transform='translateY(-50%)'
						color='#D4D4D4'
						border='solid 1px #D4D4D4'
						borderRadius='50%'
						padding='2px'
						bg='#7BBA39'
						zIndex={1}
						w={16}
						h={16}
						data-aos='fade-right' // Анимация кнопки "назад"
					>
						<FaAngleLeft />
					</Button>
					<Button
						onClick={() => sliderRef.current?.slickNext()}
						colorScheme='#F8F8F8'
						position='absolute'
						right='10px'
						top='45%'
						transform='translateY(-50%)'
						color='#D4D4D4'
						border='solid 1px #D4D4D4'
						borderRadius='50%'
						padding='2px'
						bg='#7BBA39'
						zIndex={1}
						w={16}
						h={16}
						data-aos='fade-left' // Анимация кнопки "вперед"
					>
						<FaAngleRight />
					</Button>

					{/* Слайдер с анимацией */}
					<Slider
						ref={sliderRef}
						{...settings}
					>
						<Box
							w='60%'
							h={{ md: '460px', base: '256px' }}
							rounded='12px'
							border='8px solid #212121'
							overflow='hidden'
							data-aos='fade-up' // Анимация при появлении слайда
						>
							<Image
								src={HeroImage}
								alt='Image'
								className='full-image'
							/>
						</Box>
						<Box
							w='60%'
							h={{ md: '460px', base: '256px' }}
							rounded='12px'
							border='8px solid #212121'
							overflow='hidden'
							data-aos='fade-up'
						>
							<Image
								src={HeroImage1}
								alt='Image'
								className='full-image'
							/>
						</Box>
						<Box
							w='100%'
							h={{ md: '460px', base: '256px' }}
							rounded='12px'
							border='8px solid #212121'
							overflow='hidden'
							data-aos='fade-up'
						>
							<Image
								src={HeroImage2}
								alt='Image'
								className='full-image'
							/>
						</Box>
					</Slider>
				</Box>
			</Container>
		</Box>
	)
}

export default ImgSlider
