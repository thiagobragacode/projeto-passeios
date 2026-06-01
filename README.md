# Turismo Nordeste — Site de Passeios

## Sobre o projeto

Site de apresentação de passeios e translados particulares pelo Nordeste. O usuário consegue filtrar os destinos por região, clicar em um card para abrir a galeria de fotos, ler uma breve descrição do destino e seguir para a reserva.

## Problema

Turistas podem ter dificuldade para encontrar, em um só lugar, opções de passeios com imagens, destino e caminho rápido para solicitar uma reserva.

## Público-alvo

Pessoas que desejam conhecer destinos na Paraíba, Pernambuco e Rio Grande do Norte, além de clientes que precisam de translado particular para aeroportos.

## Solução

A página reúne os destinos em cards, oferece filtros por categoria, abre um modal com galeria e descrição do passeio e mantém um formulário de solicitação de agendamento com validações de data, horário, passageiros, nome, WhatsApp e CPF.

## Funcionalidades

- Listagem dos destinos em cards responsivos.
- Filtro por Paraíba, Pernambuco, Rio Grande do Norte e Translado.
- Modal de galeria com fotos e descrição breve do destino selecionado.
- Modal de reserva com cálculo automático de veículos e valor total.
- Validação de campos obrigatórios, data futura, nome completo, WhatsApp e CPF.
- Menu responsivo com botão hambúrguer no mobile.
- Rodapé com ano preenchido automaticamente via JavaScript.

## Estrutura de arquivos

projeto-passeios/
├── index.html
├── projeto-passeios.html
├── style.css
├── js/
│   └── main.js
├── css/
│   ├── reset.css
│   ├── base.css
│   ├── layout.css
│   ├── utilities.css
│   ├── variables.css
│   └── components/
│       ├── navbar.css
│       ├── hero.css
│       ├── card.css
│       ├── btn.css
│       ├── modal.css
│       ├── form.css
│       └── footer.css
├── tokens/
│   ├── primitives.css
│   ├── semantic.css
│   ├── spacing.css
│   └── typography.css
│
└── assets/
    └── wireframe-home.png

## Arquitetura CSS

O arquivo `index.html` é a entrada principal para o Live Server. O arquivo `projeto-passeios.html` foi mantido como compatibilidade com o nome original do projeto.

O arquivo `style.css` funciona como entrada principal e importa os demais arquivos em camadas com `@layer`, seguindo a organização: tokens, reset, base, layout, componentes e utilitários.

Os tokens foram separados em:

- `tokens/primitives.css`: valores brutos de cor e sombra.
- `tokens/semantic.css`: tokens com intenção de uso, consumidos pelos componentes.
- `tokens/spacing.css`: escala de espaçamento baseada em múltiplos de 4px.
- `tokens/typography.css`: família, pesos e tamanhos fluidos.

## Estilo visual

A paleta original foi preservada: fundo escuro, cards em azul escuro e destaque em laranja/amarelo nos botões, ícones e elementos de ação.

## Responsividade e acessibilidade

O layout usa grid, flexbox, media queries e container queries. Também foram incluídos estados de `focus-visible`, botões com área mínima de toque, fonte mínima de 16px em inputs, preferência de redução de movimento e navegação por teclado nos cards.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro

## Autores

Thiago Braga e Iago Roberto.
