# 🎨 Setup de Portfolio - Aguardando Informações

## ✅ O que já está pronto:

### 1. Estrutura de Pastas
```
app/portfolio/
├── leef/          # Lee F Alive
├── generoso/      # Generoso Locações
└── lolita/        # Lolita Criativa

public/images/portfolio/
├── leef/          # Imagens do Lee F Alive
├── generoso/      # Imagens do Generoso
└── lolita/        # Imagens do Lolita
```

### 2. Componentes Criados
- ✅ `DemoBadge.tsx` - Badge "Projeto Demonstrativo" (top-right)
- ✅ `Portfolio.tsx` - Atualizado com os 3 projetos reais

### 3. Links Configurados
- `/portfolio/leef/` - Lee F Alive
- `/portfolio/generoso/` - Generoso Locações
- `/portfolio/lolita/` - Lolita Criativa

## 🔄 Aguardando Você:

### Use o prompt fornecido para pedir a outra IA:

Analise os 3 sites e me envie:

1. **Identidade do Negócio**
   - Nome, tipo, segmento, proposta

2. **Paleta de Cores (HEX)**
   - Primária, secundária, destaque, fundo

3. **Estrutura da Home**
   - Seções (Hero, Sobre, Serviços, etc)
   - Textos completos de cada seção
   - Layout de cada seção

4. **Imagens**
   - URLs completas de TODAS as imagens
   - Descrição de cada uma
   - Onde aparecem

5. **Estilo Visual**
   - Vibe (moderno/elegante/bold)
   - Gradientes, sombras, border-radius
   - Animações visíveis

6. **CTAs e Contatos**
   - Texto dos botões
   - WhatsApp/telefone
   - Email

## 📋 Quando você me passar as informações:

Eu vou criar para cada projeto:

### 1. Landing Page Completa
```tsx
app/portfolio/[projeto]/page.tsx
```

Com:
- ✅ Hero impactante
- ✅ 3-4 seções principais
- ✅ Animações Framer Motion
- ✅ SEO otimizado
- ✅ Totalmente responsivo
- ✅ Badge "Projeto Demonstrativo"
- ✅ Link "Voltar ao Portfolio"

### 2. Download de Imagens
```bash
public/images/portfolio/[projeto]/
├── hero.jpg
├── section1.jpg
├── section2.jpg
└── ...
```

### 3. Paleta de Cores Customizada
```ts
// Cores específicas de cada projeto
colors: {
  primary: "#...",
  secondary: "#...",
  accent: "#...",
}
```

## 🎯 Formato Ideal da Resposta

Quando a outra IA te responder, me envie assim:

```
=== LEE F ALIVE ===

IDENTIDADE:
- Nome: [...]
- Tipo: [...]
- Proposta: [...]

CORES:
- Primária: #[...]
- Secundária: #[...]
- Destaque: #[...]

ESTRUTURA:
Seção 1 - Hero:
- Título: [...]
- Subtítulo: [...]
- CTA: [...]

Seção 2 - [Nome]:
- [Conteúdo...]

IMAGENS:
1. https://... (Hero background)
2. https://... (Sobre - foto do artista)
[...]

VIBE:
[3-5 frases descrevendo o estilo...]

---

=== GENEROSO LOCAÇÕES ===
[Mesmo formato...]

---

=== LOLITA CRIATIVA ===
[Mesmo formato...]
```

## 🚀 Próximos Passos

1. Você cola o prompt na outra IA
2. Outra IA analisa os 3 sites
3. Você me envia as informações
4. Eu crio os 3 showcases completos
5. Build + commit + push
6. Deploy!

## ⏱️ Estimativa

Com as informações em mãos:
- Showcase Lee F Alive: ~30min
- Showcase Generoso: ~30min
- Showcase Lolita: ~30min
- Download/otimização imagens: ~20min
- Build + testes: ~10min

**Total: ~2h para os 3 showcases completos**

---

Estou pronto para começar assim que você me enviar as informações! 🎨
