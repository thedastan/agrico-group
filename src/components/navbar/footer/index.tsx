import { useTranslations } from 'next-intl'

import useAccardionData from '@/components/home/about/data'

import { useHeaderNav } from '../data'

import FooterClientComp from './FooterClientComp'

const Footer = () => {
	const header_nav = useHeaderNav()
	const accardionData = useAccardionData()

	return (
		<FooterClientComp
			header_nav={header_nav}
			accardionData={accardionData}
		/>
	)
}

export default Footer
