import { useTranslations } from 'next-intl'
import React from 'react'

import { LOCATION } from '@/constants/admin'

const Adress = () => {
	const t = useTranslations('Adress')

	return (
		<div>
			<a href={LOCATION}>{t('LOCATION')}</a>
		</div>
	)
}

export default Adress
