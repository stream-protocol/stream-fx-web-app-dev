/** @type {import('next').NextConfig} */

const securityHeaders = [{
	key: 'X-Frame-Options',
	value: 'SAMEORIGIN'
}]

module.exports = {
	reactStrictMode: true,
	async headers() {
		return [{
			source: '/:pay',
			headers: securityHeaders,
		}, ]
	},
  async redirects() {
    return [
      {
        source: '/challenge',
        destination: 'https://bafybeifm3xpooj5s62kknijjqnbbsr55zacu6jleiqc7inkxyssalwxtam.ipfs.nftstorage.link/',
        permanent: true,
      },
    ]
  },
}

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: "stream-protocol-ltd",
    project: "stream-payment-app",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
