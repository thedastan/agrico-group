import { Box, Select } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

interface Option {
	title: string
	value: string
	path: string
}

interface SelectComponentProps {
	register: UseFormRegister<any>
	setValue: UseFormSetValue<any> // Добавляем setValue в тип пропсов
	required?: boolean
	options: Option[]
	message_plaseholderSelect: string
	header_nav: { path: string; name: string }[]
	accardionData: { path: string; title: string }[]
}

const SelectComponent: React.FC<SelectComponentProps> = ({
	register,
	setValue, // Деструктурируем setValue
	required = false,
	options,
	message_plaseholderSelect,
	header_nav,
	accardionData
}) => {
	const pathname = usePathname()
	const [selectedValue, setSelectedValue] = useState('')

	const currentPageTitle =
		accardionData.find(item => item.path === pathname)?.title || ''

	useEffect(() => {
		if (currentPageTitle) {
			setSelectedValue(currentPageTitle)
			setValue('section', currentPageTitle) // Используем setValue из react-hook-form
		}
	}, [currentPageTitle, pathname, setValue])

	return (
		<Select
			{...register('section', { required })}
			value={selectedValue}
			onChange={e => setSelectedValue(e.target.value)}
		>
			<option
				value=''
				disabled
				hidden
			>
				{message_plaseholderSelect}
			</option>
			{accardionData.map((el, index) => (
				<option
					key={index}
					value={el.title}
				>
					{el.title}
				</option>
			))}
			{header_nav.slice(2.1).map((el, index) => (
				<option
					key={index}
					value={el.path}
				>
					{el.name}
				</option>
			))}
		</Select>
	)
}

export default SelectComponent
