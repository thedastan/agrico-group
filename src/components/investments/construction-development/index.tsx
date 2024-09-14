import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import { IoMdCheckmark } from 'react-icons/io'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { inter } from '@/constants/fonts/fonts'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const ConstructionDevelopment = () => {
	const program = [
		'Растущий рынок',
		'Инфраструктурные проекты',
		'Экологически чистое строительство',
		'Перспективы роста',
		'Низкие издержки'
	]
	return (
		<Box mt={{ md: '170px', base: '120px' }}>
			<Container
				maxW={CONTAINER_WIDTH}
				bg='#F2F5EB'
				rounded='22px'
				px={{ lg: '84px', md: '30px', base: '4' }}
				py={{ lg: '98px', md: '76px', base: '47.5px' }}
			>
				<Flex
					justifyContent='space-between'
					alignItems={{ md: 'center', base: 'start' }}
					flexDirection={{ md: 'row', base: 'column' }}
					gap={{ md: '50px', base: '80px' }}
				>
					<Box maxW='523px'>
						<Box
							px='6'
							py='9px'
							bg='#FFFFFF78'
							border='1px solid #E8E8E8'
							textTransform='uppercase'
							fontWeight='400'
							fontSize='14px'
							lineHeight='22px'
							color='#000000'
							rounded='100px'
							w='173px'
						>
							Строительство
						</Box>
						<TitleComponent
							color='#26402B'
							mt='15px'
						>
							Развитие строительства
						</TitleComponent>
						<Description mt='3'>
							Cпрос на современное жилье, коммерческие объекты и
							инфраструктурные проекты постоянно растет.
						</Description>
					</Box>
					<Stack
						spacing='5'
						maxW='422px'
					>
						{program.map((pr, idx) => (
							<Flex
								key={idx}
								alignItems='center'
								gap='18px'
							>
								<IoMdCheckmark
									color='#273F2B'
									fontSize='18px'
								/>
								<Text
									className={inter.className}
									fontWeight='400'
									fontSize='16px'
									color='#12141D'
									lineHeight='26px'
								>
									{pr}
								</Text>
							</Flex>
						))}
					</Stack>
				</Flex>
			</Container>
		</Box>
	)
}

export default ConstructionDevelopment
