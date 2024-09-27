import { useTranslations } from 'next-intl'

import useAccardionData from '@/components/home/about/data'

import { useHeaderNav } from '../data'

import HeaderClientComp from './HeaderClientComp'

const Header = () => {
	const header_nav = useHeaderNav()
	const t = useTranslations('Header')
	const accardionData = useAccardionData()
	return (
		<HeaderClientComp
			accardionData={accardionData}
			header_nav={header_nav}
			call_button={t('Button')}
		/>
	)
}

export default Header
