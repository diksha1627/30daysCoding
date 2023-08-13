/** @type {import('next').NextConfig} */
const nextConfig = {
    // Any other Next.js configuration options you want to set
  }
  
  module.exports = {
    ...nextConfig,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, 
              },
            },
          ],
        });
      }
  
      return config;
    },
  };

