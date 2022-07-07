/** @type {import('next').NextConfig} */

const locales = ['en', 'fr', 'es', 'de', 'ru', 'cn', 'kr', 'jp']

const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
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
}

module.exports = nextConfig
