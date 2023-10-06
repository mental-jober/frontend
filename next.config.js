/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["loremflickr.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
