'use client'

import {
	Box,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Textarea
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { PiEyeClosedFill, PiEyeFill } from 'react-icons/pi'

export interface IInputComponentProps {
	name: string
	placeholder: string
	type?: string
	value?: string
	as?: 'input' | 'textArea'
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	handleChangeTextarea?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	required?: boolean
}

const InputComponent = ({
	name,
	placeholder,
	value,
	handleChange,
	handleChangeTextarea,
	type = 'text',
	required = true,
	as = 'input'
}: IInputComponentProps) => {
	const [show, setShow] = useState(false)
	return (
		<Stack>
			{as === 'input' ? (
				<InputGroup>
					<Input
						onChange={handleChange}
						variant='none'
						value={value}
						name={name}
						type={show ? 'text' : type}
						rounded='8px'
						placeholder={placeholder}
						h='54px'
						w='100%'
						border='none'
						bg='#21212114'
						fontSize='16px'
						letterSpacing='0.5px'
						px='4'
						fontWeight='500'
						lineHeight='21.6px'
						color='#212121'
						_placeholder={{
							opacity: '.6'
						}}
						isRequired={required}
						autoFocus={false}
					/>
					{type === 'password' && (
						<InputRightElement
							w='3rem'
							h='100%'
							display='flex'
							alignItems='center'
						>
							<Box
								onClick={() => setShow(!show)}
								fontSize='24px'
								color='#A8A8A8'
								cursor='pointer'
							>
								{show ? <PiEyeFill /> : <PiEyeClosedFill />}
							</Box>
						</InputRightElement>
					)}
				</InputGroup>
			) : (
				<Textarea
					onChange={handleChangeTextarea}
					value={value}
					name={name}
					placeholder={placeholder}
					variant='none'
					h='95px'
					px='4'
					pt='18px'
					w='100%'
					bg='#21212114'
					fontSize='16px'
					letterSpacing='0.5px'
					rounded='8px'
					fontWeight='500'
					lineHeight='21.6px'
					color='#212121'
					_placeholder={{
						opacity: '.6'
					}}
					isRequired={required}
				/>
			)}
		</Stack>
	)
}

export default InputComponent
