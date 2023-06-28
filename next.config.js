/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "birds.kg",
            },
            {
                protocol: "https",
                hostname: "*.birds.watch",
            },
            {
                protocol: "https",
                hostname: "sibirds.ru",
                },
            {
                protocol: "https",
                hostname: "erbirds.ru",
            },
        ],
    }

}

module.exports = nextConfig
