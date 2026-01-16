# SLAN Design - Website Oficial

Site profissional desenvolvido com Next.js 15, TypeScript e Tailwind CSS, especializado em Web Performance, Automações n8n e Desenvolvimento SaaS.

## ✨ Features

- 🚀 **Next.js 15** com App Router e TypeScript
- 🎨 **Tailwind CSS** com tema dark moderno
- 🎭 **Framer Motion** para animações suaves
- 🔍 **SEO Avançado** com JSON-LD e Metadata API
- 📱 **Totalmente Responsivo**
- ⚡ **Performance Otimizada** (154kB First Load JS)
- 💬 **Integração WhatsApp** para contato direto
- 🌐 **Export Estático** para deploy em qualquer servidor

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── layout.tsx        # Layout principal + SEO
│   ├── page.tsx          # Página home
│   └── globals.css       # Estilos globais
├── components/
│   ├── Hero.tsx          # Seção principal
│   ├── Services.tsx      # Bento grid de serviços
│   ├── Portfolio.tsx     # Showcase de projetos
│   ├── Contact.tsx       # Formulário de contato
│   ├── WhatsAppButton.tsx # Botão flutuante
│   ├── Navbar.tsx        # Navegação
│   ├── Footer.tsx        # Rodapé
│   └── StructuredData.tsx # Schema JSON-LD
├── lib/
│   └── utils.ts          # Utilitários
└── public/
    └── .htaccess         # Configuração Apache
```

## 🚀 Quick Start

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev
```

Acesse http://localhost:3000

### Build para Produção

```bash
# Gerar build estático
npm run build
```

Os arquivos serão gerados na pasta `out/`

## 📦 Deploy

### Opção 1: cPanel / Hospedagem Tradicional

Execute o script de deploy:

```bash
./deploy-to-cpanel.sh
```

Ou manualmente:
1. Execute `npm run build`
2. Faça upload do conteúdo da pasta `out/` para `public_html`
3. Verifique se o `.htaccess` foi enviado

📖 **Documentação completa:** [DEPLOY.md](DEPLOY.md)

### Opção 2: Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Conecte seu repositório GitHub
2. Selecione a branch `claude/redesign-slan-website-iSD7H`
3. Deploy automático!

### Opção 3: Netlify

```bash
npm run build
# Faça upload da pasta 'out/'
```

## ⚙️ Configuração

### WhatsApp

Atualize o número em:
- `components/WhatsAppButton.tsx` (linha 24)
- `components/Contact.tsx` (linha 18)

Formato: `5511999999999` (código do país + DDD + número)

### SEO

Edite os metadados em `app/layout.tsx`:
- Título, descrição, keywords
- OpenGraph e Twitter Cards
- Google verification code

### Cores e Tema

Personalize em `tailwind.config.ts`:
```ts
colors: {
  background: "#050505",  // Fundo principal
  card: "#0f0f0f",        // Cards
  accent: "#3b82f6",      // Cor de destaque
}
```

## 📊 Performance

- ✅ First Load JS: 154kB
- ✅ Otimizado para Core Web Vitals
- ✅ Compressão GZIP
- ✅ Cache de navegador configurado
- ✅ Imagens otimizadas (AVIF/WebP)

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 📝 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Linter
```

## 🔒 Segurança

O `.htaccess` inclui:
- Headers de segurança (XSS, Clickjacking)
- Prevenção de directory listing
- MIME type sniffing protection

## 📄 Licença

© 2026 SLAN Design. Todos os direitos reservados.

## 🤝 Suporte

Para problemas ou dúvidas, abra uma issue no GitHub:
https://github.com/Slanaantos/Boomshakalaka/issues

---

**Desenvolvido com ❤️ usando Next.js 15**
