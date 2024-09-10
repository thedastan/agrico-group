import { useTranslations } from 'next-intl'

import { useHeaderNav } from '../data'

import HeaderClientComp from './HeaderClientComp'

const Header = () => {
	const header_nav = useHeaderNav()
	const t = useTranslations('Header')
	return (
		<HeaderClientComp
			header_nav={header_nav}
			call_button={t('Button')}
		/>
	)
}

export default Header
