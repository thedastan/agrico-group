'use client'

import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Stack
} from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import DefButton from '../ui/buttons/DefButton'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'

const FeedbackForm = () => {
	const [value, setValue] = useState({
		section: '',
		phone: '',
		message: ''
	})
	return (
		<Box
			padding='32px'
			bg='#FFFFFF'
			rounded='16px'
			border='8px solid #212121'
			minW={{ sm: '393px', base: '100%' }}
			position='relative'
			zIndex='2'
		>
			<form>
				<Stack spacing='6px'>
					<Menu>
						<MenuButton
							as={Box}
							cursor='pointer'
							display='flex'
							alignItems='center'
							textAlign='start'
							px='4'
							h='54px'
							w='100%'
							rounded='8px'
							bg='#21212114'
							fontSize='16px'
							letterSpacing='0.5px'
							fontWeight='500'
							lineHeight='21.6px'
							color={value.section ? '#000000' : '#A4A3A3'}
						>
							<Flex
								justifyContent='space-between'
								alignItems='center'
							>
								{value.section ? value.section : 'section'}
								{!value.section && <FaChevronDown />}
							</Flex>
						</MenuButton>
						<MenuList
							minWidth='310px'
							maxH='200px'
						>
							<MenuOptionGroup
								textAlign='start'
								defaultValue='asc'
								title={''}
								type='radio'
								onChange={e => setValue({ ...value, section: e as string })}
							>
								{['test1', 'test2', 'test3'].map((item, index) => (
									<MenuItemOption
										key={index}
										value={item}
										isChecked={value.section === item}
										defaultChecked={value.section === item}
									>
										{item}
									</MenuItemOption>
								))}
							</MenuOptionGroup>
						</MenuList>
					</Menu>
					<PhoneInputComponent
						placeholder='Номер телефона'
						handleChange={phone => setValue({ ...value, phone })}
						value={value.phone}
					/>
					<InputComponent
						handleChange={e => setValue({ ...value, message: e.target.value })}
						as='textArea'
						value={value.message}
						name='message'
						placeholder='Сообщение'
					/>
				</Stack>
				<DefButton
					h='54px'
					mt='6'
					mb='2'
					type='submit'
				>
					Отправить
				</DefButton>
			</form>
		</Box>
	)
}

export default FeedbackForm
