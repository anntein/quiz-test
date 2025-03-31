/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/quiz-test', // Replace 'quiz-test' with your repository name
}

module.exports = nextConfig 