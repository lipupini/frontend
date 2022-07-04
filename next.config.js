/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		platformTitle: 'Instalution',
	},
	serverRuntimeConfig: {
		baseDir: __dirname,
	},
	i18n: {
		locales: ['en', 'fr', 'es', 'de', 'ru'],
		defaultLocale: 'en',
	},
}

module.exports = nextConfig
