import { Box, Button, ChakraProps } from '@chakra-ui/react'
import { RiArrowRightDownLine, RiArrowRightUpLine } from 'react-icons/ri'

interface DefButtonProps extends ChakraProps {
	children: string | JSX.Element
	onClick?: () => void
	type?: 'button' | 'submit'
	disabled?: boolean
	isArrowDown?: boolean
	isDark?: boolean
}
const DefButton = ({
	onClick,
	type = 'button',
	disabled,
	children,
	isDark,
	h = '56px',
	isArrowDown,
	...props
}: DefButtonProps) => {
	return (
		<Button
			onClick={onClick}
			type={type}
			variant='none'
			w='100%'
			bg={isDark ? '#212121' : '#E8C547'}
			h={h}
			rounded='8px'
			color={isDark ? '#FFFFFF' : '#212121'}
			fontSize='18px'
			fontWeight='700'
			isDisabled={disabled}
			px='1'
			lineHeight='21.6px'
			letterSpacing='1px'
			gap='1'
			alignItems='center'
			{...props}
		>
			{children}
			<Box
				fontSize='24px'
				color={isDark ? '#E8C547' : '#212121'}
			>
				{!!isArrowDown ? <RiArrowRightDownLine /> : <RiArrowRightUpLine />}
			</Box>
		</Button>
	)
}

export default DefButton
