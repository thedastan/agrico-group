import { Select } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { UseFormRegister } from 'react-hook-form'

interface SelectComponentProps {
	register: UseFormRegister<any>
	required?: boolean
	options: string[]
	message_plaseholderSelect: string
}
const SelectComponent: React.FC<SelectComponentProps> = ({
	register,
	required = false,
	options,
	message_plaseholderSelect
}) => {
	// const t = useTranslations('SelectComponent')

	return (
		<Select
			placeholder={message_plaseholderSelect}
			{...register('section', { required })}
		>
			{options.map((el, index) => (
				<option
					key={index}
					value={el}
				>
					{el}
				</option>
			))}
		</Select>
	)
}
export default SelectComponent
