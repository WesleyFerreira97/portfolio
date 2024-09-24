/** @type {import('next').NextConfig} */

// const path = require('path');

const nextConfig = {
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'src')],
    //   },
    basePath: "/portfolio",
    output: "export",
    images: {
        unoptimized: true,
      },
}

module.exports = nextConfig
