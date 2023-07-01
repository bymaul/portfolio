/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'fakeimg.pl',
            },
        ],
    },
};

module.exports = nextConfig;
