import { useTranslations } from 'next-intl'
import React from 'react'

export interface IMessageNav {
	name: string
}

export function useMessage(): IMessageNav[] {
	const t = useTranslations('useMessage')
	return [
		{
			name: t('messages')
		}
	]
}
