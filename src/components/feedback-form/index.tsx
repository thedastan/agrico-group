import { Box, Stack } from '@chakra-ui/react'

import DefButton from '../ui/buttons/DefButton'
import InputComponent from '../ui/inputs/InputComponent'
import PhoneInputComponent from '../ui/inputs/PhoneInputComponent'

const FeedbackForm = () => {
	return (
		<Box
			padding='32px'
			bg='#FFFFFF'
			rounded='16px'
			border='8px solid #212121'
			minW={{ sm: '393px', base: '100%' }}
		>
			<form>
				<Stack spacing='6px'>
					<PhoneInputComponent placeholder='Номер телефона' />
					<PhoneInputComponent placeholder='Номер телефона' />
					<InputComponent
						as='textArea'
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
