import { useTranslations } from 'next-intl'

import useAccardionData from '@/components/home/about/data'

import { useHeaderNav } from '../data'

import HeaderClientComp from './HeaderClientComp'
import { useAdress, useServices } from './useServices'

const Header = () => {
	const header_nav = useHeaderNav()
	const t = useTranslations('Header')
	const accardionData = useAccardionData()
	const sectorsOp = useServices()
	const adressBur = useAdress()

	return (
		<HeaderClientComp
			accardionData={accardionData}
			header_nav={header_nav}
			sectorsOp={sectorsOp}
			adressBur={adressBur}
			call_button={t('Button')}
		/>
	)
}

export default Header
