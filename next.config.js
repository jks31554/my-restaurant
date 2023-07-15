/** @type {import('next').NextConfig} */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    BASE_URL: "https://google-scammers-crud-203d75ad52b8.herokuapp.com",
  },
};
