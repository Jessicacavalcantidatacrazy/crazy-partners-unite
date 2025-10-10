# Partners Crazy - Landing Page Estática

Esta pasta contém a versão HTML/CSS/JS puro da landing page Partners Crazy, pronta para upload no Elementor ou qualquer outro CMS.

## Arquivos

- `index.html` - Estrutura HTML completa da página
- `styles.css` - Todos os estilos CSS incluindo design system
- `script.js` - Interações e animações JavaScript
- `README.md` - Este arquivo

## Imagens Necessárias

As seguintes imagens precisam estar disponíveis nos caminhos relativos:
- `../../assets/hero-bg.jpg` - Background do hero
- `../../assets/commission-icon.jpg` - Imagem da seção de benefícios
- `../../assets/network-icon.jpg` - Imagem da seção "Como funciona"

Você pode ajustar os caminhos das imagens no `index.html` conforme necessário após o upload.

## Como Usar no Elementor

### Opção 1: Widget HTML Personalizado
1. Crie uma nova página no Elementor
2. Adicione um widget "HTML" 
3. Cole o conteúdo de `index.html` no widget
4. Adicione um widget "CSS Personalizado" e cole o conteúdo de `styles.css`
5. Adicione JavaScript personalizado com o conteúdo de `script.js`

### Opção 2: Template Completo
1. Acesse o WordPress Dashboard
2. Vá em Aparência > Editor de Temas
3. Crie um novo template
4. Cole o HTML completo
5. Adicione os estilos CSS nas configurações do tema
6. Adicione o JavaScript no rodapé

### Opção 3: Código Customizado (Recomendado)
1. Instale o plugin "Code Snippets" ou similar
2. Crie um snippet para adicionar o CSS no header
3. Crie outro snippet para adicionar o JS no footer
4. Use o widget HTML do Elementor para o conteúdo

## Dependências Externas

A página usa a biblioteca Lucide Icons via CDN:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

Isso está incluído no HTML e não requer instalação adicional.

## Funcionalidades

- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves ao scroll
- ✅ Efeitos de hover interativos
- ✅ Links funcionais para cadastro de parceiros
- ✅ Design fiel ao original
- ✅ Performance otimizada
- ✅ SEO-friendly

## Customização

### Cores
Todas as cores estão definidas em HSL no início do `styles.css`. Procure por:
- `--background: hsl(220, 84%, 3%);`
- `--primary: hsl(216, 100%, 65%);`
- `--secondary: hsl(259, 95%, 45%);`

### Links dos Botões
Os botões de CTA apontam para:
- Cadastro: `https://partner.datacrazy.io/signup`
- Site DataCrazy: `https://datacrazy.io`
- Agendar Demo: `https://cal.com/team/crm-datacrazy/demonstracao`

Para alterar, busque por `onclick="window.open(..."` no HTML.

### Textos
Todos os textos estão no `index.html` e podem ser editados diretamente.

## Suporte aos Navegadores

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

A página é otimizada para:
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Cumulative Layout Shift < 0.1

## Contato

Para dúvidas sobre implementação, consulte a documentação do DataCrazy ou entre em contato pelo suporte da plataforma.