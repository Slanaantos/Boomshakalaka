#!/bin/bash

# Script de Deploy para cPanel/Hospedagem Tradicional
# SLAN Design Website

echo "🚀 Iniciando processo de deploy..."
echo ""

# 1. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 2. Gerar build estático
echo "🔨 Gerando build estático..."
npm run build

# Verificar se o build foi bem-sucedido
if [ ! -d "out" ]; then
  echo "❌ Erro: Pasta 'out' não foi gerada. Build falhou."
  exit 1
fi

echo "✅ Build gerado com sucesso!"
echo ""
echo "📂 Arquivos prontos para upload em: ./out/"
echo ""
echo "📋 Próximos passos:"
echo ""
echo "1. Acesse seu cPanel/FTP"
echo "2. Navegue até a pasta 'public_html'"
echo "3. Faça upload de TODOS os arquivos da pasta 'out/'"
echo "4. Certifique-se que o .htaccess foi enviado"
echo "5. Acesse seu domínio para verificar"
echo ""
echo "📊 Estatísticas do Build:"
du -sh out/
echo ""
echo "🔗 Arquivos importantes:"
echo "   - index.html (página principal)"
echo "   - .htaccess (configuração Apache)"
echo "   - _next/ (assets otimizados)"
echo ""
echo "✨ Deploy preparado com sucesso!"
