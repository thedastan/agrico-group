import { ChakraProps, Text } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const TitleComponent = ({
	children,
	fontSize = { md: '56px', base: '36px' },
	lineHeight = { md: '67.2px', base: '43.2px' },
	color = '#212121',
	...props
}: Props) => {
	return (
		<Text
			as='h1'
			{...props}
			color={color}
			fontWeight='700'
			lineHeight={lineHeight}
			fontSize={fontSize}
			letterSpacing='-0.5px'
		>
			{children}
		</Text>
	)
}

export default TitleComponent
