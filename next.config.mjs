import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['agrico.pythonanywhere.com']
	}
	// webpack: config => {
	// 	config.resolve.alias.canvas = false

	// 	return config
	// }
}

export default withNextIntl(nextConfig)
