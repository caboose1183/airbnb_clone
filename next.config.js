/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2hpbm9uOTUiLCJhIjoiY2xodmczMTJ3MDgzNjNmbGloMjQ1cHp3YSJ9.6bhJxL7JxgImyZr7qnmyiQ",
  },
};

module.exports = nextConfig;
