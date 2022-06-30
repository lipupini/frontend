/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		platformTitle: 'Instalution',
	},
	serverRuntimeConfig: {
		baseDir: __dirname,
	}
}

module.exports = nextConfig
