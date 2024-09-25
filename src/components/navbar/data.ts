import { useTranslations } from 'next-intl'
import { IoLogoInstagram } from 'react-icons/io5'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { SlSocialFacebook } from 'react-icons/sl'

import { FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_LINK } from '@/constants/admin'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

export interface IHeaderNav {
	name: string
	path: string
}

export function useHeaderNav(): IHeaderNav[] {
	const t = useTranslations('Header.Navbar')
	const localActive = useTypedLocale()
	return [
		{
			name: t('main'),
			path: DASHBOARD_PAGES.HOME(localActive)
		},
		{
			name: t('about'),
			path: '#about'
		},

		{
			name: t('contacts'),
			path: '#contact'
		}
	]
}

export const social_contact = [
	{
		path: FACEBOOK_LINK,
		icon: SlSocialFacebook
	},
	{
		path: INSTAGRAM_LINK,
		icon: IoLogoInstagram
	},
	{
		path: YOUTUBE_LINK,
		icon: PiYoutubeLogoLight
	}
]
