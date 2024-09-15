import { ChakraProps, Text } from '@chakra-ui/react'
import React from 'react'

interface Props extends ChakraProps {
	children: string
}
const Description = ({
	children,
	fontWeight = '400',
	fontSize = { md: '22px', base: '20px' },
	lineHeight = { md: '35.2px', base: '32px' },
	color = '#212121',
	...props
}: Props) => {
	return (
		<Text
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Description
