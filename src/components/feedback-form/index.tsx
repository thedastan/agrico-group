'use client'

import {
	Box,
	Flex,
	Input,
	Menu,
	MenuButton,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
	Select,
	Stack,
	Textarea
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaChevronDown } from 'react-icons/fa6'
import {
	PhoneInput,
	defaultCountries,
	parseCountry
} from 'react-international-phone'
import 'react-international-phone/style.css'

import DefButton from '../ui/buttons/DefButton'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'

export interface IInputComponentProps {
	name?: string
	placeholder?: string
	value?: string
	handleChange?: (value: string) => void
	required?: boolean
}

interface IFormTelegram {
	number: number
	message: string
	section: string
}

const FeedbackForm = () => {
	const { register, handleSubmit, reset } = useForm<IFormTelegram>()

	const TOKEN = process.env.NEXT_PUBLIC_TG_TOKEN
	const CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID

	const messageModel = (data: IFormTelegram) => {
		let messageTG = ` Number:  <b>${data.number} </b>\n`
		messageTG += `Message: <b>${data.message}</b>\n`
		messageTG += `Section: <b>${data.section}</b>\n`
		return messageTG
	}

	const onSubmit: SubmitHandler<IFormTelegram> = async data => {
		await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
			chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID,
			parse_mode: 'html',
			text: messageModel(data)
		})
		reset()
	}

	const [value, setValue] = useState({
		section: '',
		phone: '',
		message: ''
	})

	const PhoneInputComponent = ({
		name = 'phone',
		placeholder = 'Номер',
		value,
		handleChange,
		required = true
	}: IInputComponentProps) => {
		return (
			<PhoneInput
				defaultCountry='us' // You can set a default country here, e.g., 'us'
				countries={defaultCountries} // Use all default countries
				{...register('number', { required: true })}
				// name={name}
				value={value}
				required={required}
				onChange={handleChange}
				className={'phone-input'}
				placeholder={placeholder}
				autoFocus={false}
			/>
		)
	}

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
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing='6px'>
					<Select
						placeholder='Выберите раздел'
						{...register('section', { required: true })}
					>
						<option value='Импорт и Экспорт'>Импорт и Экспорт</option>
						<option value='Инвестиции'>Инвестиции</option>
						<option value='Текстильная промышленность'>
							Текстильная промышленность
						</option>
						<option value='Туризм'>Туризм</option>
					</Select>

					<PhoneInputComponent
						{...register('number', { required: true })}
						placeholder='Номер телефона'
					/>

					<Textarea
						placeholder='Сообщение'
						{...register('message', { required: true })}
					/>
				</Stack>
				<DefButton
					h='54px'
					mt='6'
					mb='2'
					type='submit'
					bg='#7BBA39'
				>
					Отправить
				</DefButton>
			</form>
		</Box>
	)
}

export default FeedbackForm
