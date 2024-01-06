/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  // Uncomment the following code if you import images from outside source
  // images: {
  //     remotePatterns: {
  //         protocol: "https",
  //         hostname: "www.amitsen.de"
  //     }
  // }
};

module.exports = nextConfig;
