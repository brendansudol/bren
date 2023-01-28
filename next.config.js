/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/card-counting-game",
        destination: "https://brendansudol.github.io/card-counting-game/",
        permanent: true,
      },
      {
        source: "/conan-jokes",
        destination: "https://brendansudol.github.io/conan-jokes/",
        permanent: true,
      },
      {
        source: "/neural-jokes",
        destination: "https://punchlines.ai/",
        permanent: true,
      },
      {
        source: "/writing",
        destination: "https://brendansudol.github.io/writing/",
        permanent: true,
      },
      {
        source: "/writing/:slug*",
        destination: "https://brendansudol.github.io/writing/:slug*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
