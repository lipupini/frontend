/** @type {import('next').NextConfig} */

const locales = ['en', 'fr', 'es', 'de', 'ru', 'cn', 'kr', 'jp']

const nextConfig = {
	publicRuntimeConfig: {
		breakpoints: {
			small: 640,
			medium: 768,
			large: 1280,
		},
		platformTitle: 'Instalution',
		locales,
	},
	serverRuntimeConfig: {
		baseDir: __dirname,
	},
	i18n: {
		locales,
		defaultLocale: 'en',
	},
	reactStrictMode: true,
}

module.exports = nextConfig
