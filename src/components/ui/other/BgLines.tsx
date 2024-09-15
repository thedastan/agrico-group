import { Box, Flex } from '@chakra-ui/react'

const BgLines = ({ isMini }: { isMini?: boolean }) => {
	return (
		<Box
			position='absolute'
			left='0'
			top='0'
			bottom='0'
			right='0'
			zIndex='0'
			px='2'
		>
			<Flex
				display={{ md: 'none', base: 'flex' }}
				justifyContent='space-between'
				gap='72px'
				w='100%'
				h='100%'
			>
				{Array(5)
					.fill(0)
					.map((_, idx) => (
						<Box
							key={idx}
							w='1px'
							h='100%'
							bg='linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.064) 23.96%, rgba(255, 255, 255, 0.024) 71.87%, rgba(255, 255, 255, 0) 100%); linear-gradient(180deg, color(display-p3 1.000 1.000 1.000 / 0) 0%, color(display-p3 1.000 1.000 1.000 / 0.064) 23.96%, color(display-p3 1.000 1.000 1.000 / 0.024) 71.87%, color(display-p3 1.000 1.000 1.000 / 0) 100%)'
						/>
					))}
			</Flex>

			<Flex
				display={{ md: 'flex', base: 'none' }}
				justifyContent='space-between'
				gap='72px'
				w='100%'
				h='100%'
			>
				{Array(!!isMini ? 5 : 19)
					.fill(0)
					.map((_, idx) => (
						<Box
							key={idx}
							w='1px'
							h='100%'
							bg='linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.064) 23.96%, rgba(255, 255, 255, 0.024) 71.87%, rgba(255, 255, 255, 0) 100%); linear-gradient(180deg, color(display-p3 1.000 1.000 1.000 / 0) 0%, color(display-p3 1.000 1.000 1.000 / 0.064) 23.96%, color(display-p3 1.000 1.000 1.000 / 0.024) 71.87%, color(display-p3 1.000 1.000 1.000 / 0) 100%)'
						/>
					))}
			</Flex>
		</Box>
	)
}

export default BgLines
