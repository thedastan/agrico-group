'use client'

import { Box, Stack, Textarea } from '@chakra-ui/react'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PhoneInput, defaultCountries } from 'react-international-phone'
import 'react-international-phone/style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useTypedLocale from '@/hooks/useLocale'

import DefButton from '../ui/buttons/DefButton'

import SelectComponent from './selectComponent/SelectComponent'

interface IFormTelegram {
	number: string // Измени тип number на string
	message: string
	section: string
}

interface IMagges {
	name: string
}

interface IFormProps {
	button_name: string
	message_plaseholder: string
	options: any[]
	message_plaseholderSelect: string
	header_nav: { path: string; name: string }[]
	accardionData: { path: string; title: string }[]
	messages: IMagges[]
}

const FeedbackForm = ({
	button_name,
	message_plaseholder,
	message_plaseholderSelect,
	options,
	header_nav,
	accardionData,
	messages
}: IFormProps) => {
	// const t = useTranslations('FeedbackForm')
	const { register, handleSubmit, reset, setValue } = useForm<IFormTelegram>()
	const [phoneValue, setPhoneValue] = useState('') // Состояние для номера телефона
	const pathname = usePathname()
	const localActive = useTypedLocale()
	const messageModel = (data: IFormTelegram) => {
		let messageTG = `Section: <b>${data.section}</b>\n`
		messageTG += `Message:  <b>${data.message}</b>\n`
		messageTG += `Number: <b>${data.number}</b>\n`
		return messageTG
	}

	const onSubmit: SubmitHandler<IFormTelegram> = async data => {
		try {
			await axios.post(
				`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TG_TOKEN}/sendMessage`,
				{
					chat_id: process.env.NEXT_PUBLIC_TG_CHAT_ID,
					parse_mode: 'html',
					text: messageModel(data)
				}
			)
			reset()
			setPhoneValue('')
			toast.success(messages.map(el => el.name).join(', '))
		} catch (err) {
			alert('Ошибка при отправке сообщения.')
		}
	}

	const handlePhoneChange = (value: string) => {
		setPhoneValue(value)
		reset()
		setValue('number', value) // Устанавливаем значение номера в форму
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
			<form
				noValidate
				onSubmit={handleSubmit(onSubmit)}
			>
				<Stack spacing='6px'>
					<SelectComponent
						register={register}
						required={true}
						setValue={setValue}
						options={options}
						header_nav={header_nav}
						accardionData={accardionData}
						message_plaseholderSelect={message_plaseholderSelect}
					/>

					<PhoneInput
						defaultCountry={'us'}
						countries={defaultCountries}
						value={phoneValue}
						onChange={handlePhoneChange}
						placeholder='Номер телефона'
						autoFocus={false}
						className='phone-input'
					/>

					<Textarea
						placeholder={message_plaseholder}
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
					{button_name}
				</DefButton>
			</form>

			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</Box>
	)
}

export default FeedbackForm
