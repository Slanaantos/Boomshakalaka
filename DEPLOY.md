# 📦 Guia de Deploy - SLAN Design

## Deploy em cPanel / Hospedagem Tradicional

### 1. Gerar Build Estático

No seu computador local, execute:

```bash
npm install
npm run build
```

Isso vai gerar uma pasta `out/` com todos os arquivos estáticos.

### 2. Upload para public_html

Faça upload de **todo o conteúdo da pasta `out/`** (não a pasta em si) para o diretório `public_html` do seu servidor.

```
public_html/
├── .htaccess          (já incluído no build)
├── index.html
├── 404.html
├── _next/
│   ├── static/
│   └── ...
└── ...
```

### 3. Configurar .htaccess

O arquivo `.htaccess` já está configurado com:
- ✅ Compressão GZIP
- ✅ Cache de navegador
- ✅ Redirecionamento SPA
- ✅ Headers de segurança
- ✅ Suporte a WEBP/AVIF

### 4. SSL/HTTPS (Recomendado)

Após configurar SSL no cPanel, descomente estas linhas no `.htaccess`:

```apache
# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

---

## Deploy na Vercel (Recomendado - Mais Fácil) 🚀

### Opção A: Via GitHub

1. Acesse https://vercel.com
2. Conecte seu repositório GitHub
3. Selecione a branch `claude/redesign-slan-website-iSD7H`
4. Deploy automático!

### Opção B: Via CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

**Vantagens da Vercel:**
- ✅ Deploy automático ao fazer push
- ✅ Preview de PRs
- ✅ Edge Functions
- ✅ Image Optimization
- ✅ Analytics integrado
- ✅ SSL automático
- ✅ CDN global
- ✅ 100% compatível com Next.js

---

## Deploy na Netlify

```bash
npm run build
# Faça upload da pasta 'out/' no Netlify
```

Ou conecte via GitHub para deploy automático.

---

## Verificação Pós-Deploy

Após o deploy, verifique:

1. ✅ Site carrega corretamente
2. ✅ Navegação entre seções funciona
3. ✅ Botão WhatsApp funciona
4. ✅ Formulário de contato redireciona
5. ✅ Site é responsivo (mobile/desktop)
6. ✅ Imagens carregam
7. ✅ SSL configurado (HTTPS)

### Testar Performance

- Google PageSpeed: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/
- WebPageTest: https://www.webpagetest.org/

---

## Configurações Importantes

### Número do WhatsApp

Atualize o número em:
- `components/WhatsAppButton.tsx` (linha 24)
- `components/Contact.tsx` (linha 18)

Formato: `5511999999999` (código do país + DDD + número)

### Google Analytics

Adicione no `app/layout.tsx` dentro do `<head>`:

```tsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### SEO - Verificação Google

Atualize em `app/layout.tsx` (linha 54):
```tsx
verification: {
  google: "seu-codigo-de-verificacao",
},
```

---

## Troubleshooting

### Site não carrega depois do upload
- Verifique se o `.htaccess` está na raiz do `public_html`
- Confirme que `mod_rewrite` está ativado no servidor
- Verifique permissões dos arquivos (644 para arquivos, 755 para pastas)

### Imagens não aparecem
- As imagens precisam estar na pasta `public/` antes do build
- Após adicionar imagens, rode `npm run build` novamente

### Formulário não funciona
- Verifique se o número do WhatsApp está correto
- Teste em navegador sem bloqueadores de popup

---

## Suporte

Para problemas, abra uma issue no GitHub:
https://github.com/Slanaantos/Boomshakalaka/issues
