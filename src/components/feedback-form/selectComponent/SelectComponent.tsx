import { Select } from '@chakra-ui/react'
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
	return (
		<Select
			{...register('section', { required })}
			defaultValue=''
		>
			<option
				value=''
				disabled
				hidden
			>
				{message_plaseholderSelect}
			</option>
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
