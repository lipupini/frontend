/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	publicRuntimeConfig: {
		platformTitle: 'Installution',
	},
	serverRuntimeConfig: {
		baseDir: __dirname,
	}
}

module.exports = nextConfig
