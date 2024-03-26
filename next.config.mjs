/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/user-profile",
                destination: "/user-profile/delivery-address",
                permanent: true,
            },
        ];
    },
    env: {
        BASE_URL: process.env.API_URL,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
