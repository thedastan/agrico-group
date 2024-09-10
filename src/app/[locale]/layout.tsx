import { Box, ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import Footer from '@/components/navbar/footer'
import Header from '@/components/navbar/header'

import { satoshi } from '@/constants/fonts/fonts'
import { SITE_NAME } from '@/constants/seo/seo.constants'

import { Providers } from '../providers'

import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Agrico'
}

interface RootLayoutProps {
	children: React.ReactNode
	params: {
		locale: string
	}
}

export default function RootLayout({
	children,
	params: { locale }
}: Readonly<RootLayoutProps>) {
	return (
		<html lang={locale}>
			<body className={satoshi.className}>
				<ChakraProvider>
					<Providers>
						<Header />
						<Box>{children}</Box>
						<Footer />
						<Toaster
							theme='dark'
							position='top-right'
							duration={2000}
						/>
						{/* <YandexMetrika /> */}
					</Providers>
				</ChakraProvider>
			</body>
		</html>
	)
}
