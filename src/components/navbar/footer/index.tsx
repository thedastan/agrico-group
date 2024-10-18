import { useTranslations } from 'next-intl'

import useAccardionData from '@/components/home/about/data'

import { useHeaderNav } from '../data'

import FooterClientComp from './FooterClientComp'
import { useMessage } from './Message'

const Footer = () => {
	const header_nav = useHeaderNav()
	const accardionData = useAccardionData()
	const messages = useMessage()

	return (
		<FooterClientComp
			header_nav={header_nav}
			accardionData={accardionData}
			messages={messages}
		/>
	)
}

export default Footer
