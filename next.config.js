/** @type {import('next').NextConfig} */

// const path = require('path');

const nextConfig = {
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'src')],
    //   },
    basePath: "/portfolio",
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
      },
}

module.exports = nextConfig
