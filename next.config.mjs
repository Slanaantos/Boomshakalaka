/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necessário para export estático
  },
  compress: true,
  poweredByHeader: false,
  trailingSlash: true, // Ajuda com roteamento em Apache
};

export default nextConfig;
