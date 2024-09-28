import { Select } from '@chakra-ui/react'
import { UseFormRegister } from 'react-hook-form'

interface SelectComponentProps {
	register: UseFormRegister<any> // To use react-hook-form register
	required?: boolean
}
const SelectComponent: React.FC<SelectComponentProps> = ({
	register,
	required = false
}) => {
	return (
		<Select
			placeholder='Выберите раздел'
			{...register('section', { required })}
		>
			<option value='Импорт и Экспорт'>Импорт и Экспорт</option>
			<option value='Инвестиции'>Инвестиции</option>
			<option value='Текстильная промышленность'>
				Текстильная промышленность
			</option>
			<option value='Туризм'>Туризм</option>
			<option value='Туризм'>Строительство</option>
		</Select>
	)
}
export default SelectComponent
