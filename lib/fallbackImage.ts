const fallbackSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <rect x="8%" y="8%" width="84%" height="84%" rx="40" fill="none" stroke="#334155" stroke-width="10" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#94a3b8" font-size="40" font-family="Arial, sans-serif">
    Imagem indisponível
  </text>
</svg>
`;

export const fallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(fallbackSvg)}`;
