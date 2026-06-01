// ===================== DADOS DOS DESTINOS =====================
const pinSVG = `<svg class="pin-icon-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

// ===================== NAVBAR RESPONSIVA =====================
const header = document.querySelector('.header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const currentYear = document.getElementById('currentYear');

// Atualiza o ano no rodapé automaticamente.
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Fecha o menu mobile e devolve o botão para o estado inicial.
function fecharMenu() {
  if (!navToggle || !navMenu) return;
  navMenu.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.textContent = '☰';
}

// Controla a abertura e fechamento do menu mobile, além de atualizar o estado do botão e atributos ARIA para acessibilidade.
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.textContent = isOpen ? '✕' : '☰';
  });

  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });
}

// Adiciona uma classe ao header quando o usuário rola a página para baixo, permitindo estilos diferentes (ex: fundo escuro).
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('header--scrolled', window.scrollY > 80);
});

// ===================== DADOS DOS DESTINOS =====================
const destinosSemOpcaoVolta = ['litoral-norte', 'litoral-sul-1', 'litoral-sul-2'];
const adicionalVoltaMesmoDia = 100;

// Cada destino tem um ID único, categoria para filtro, região para exibição, título, descrição, imagem principal, galeria de fotos, tempo estimado de viagem, horário de retorno ao hotel (se aplicável) e preço base por veículo.
const destinos = [
  {
    id: 'litoral-norte', category: 'paraiba', regiao: 'Paraíba',
    titulo: 'Passeio Litoral Norte',
    descricao: 'Praias: Praia de Ponta de Campina, Praia de Camboinha, Dique de Cabedelo e Praia do Jacaré.',
    img: 'https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/09/joao-pessoa-aerea-praia-tambau.jpg',
    fotos: [
      'https://feriasemjoaopessoa.com.br/wp-content/uploads/2024/10/Ponta_Mato1.jpg.webp',
      'https://passagenspromo.com.br/blog/wp-content/uploads/2019/01/melhores-praias-de-joao-pessoa-paraiba.jpg',
      'https://passagenspromo.com.br/blog/wp-content/uploads/2019/01/melhores-praias-joao-pessoa-brasil.jpg',
      'https://passagenspromo.com.br/blog/wp-content/uploads/2019/01/melhores-praias-joao-pessoa-paraiba.jpg',
    ],
    tempoViagem: '1h 30min', retornoHotel: '17h', preco: 300
  },
  {
    id: 'litoral-sul-1', category: 'paraiba', regiao: 'Paraíba',
    titulo: 'Passeio Litoral Sul 1',
    descricao: 'Praias: Praia de Barra de Gramame, Praia do Amor, Praia de Carapibus e Praia de Tabatinga.',
    img: 'https://s2-g1.glbimg.com/UGM32bByxC7bUdevLuHGrgomhbU=/0x0:1600x901/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/1/Y/Bqq3EPRciRvAXnwKiFfA/praia-de-tambaba-no-litoral-sul-da-paraiba.jpg',
    fotos: [
      'https://s2-g1.glbimg.com/E6UO4hpDubFGKO51BqvAsoLJ7aw=/0x0:620x235/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/01/13/praia_5.jpg',
      'https://s2-g1.glbimg.com/Ma5O_da17usS49HTJyz6tW-j1cY=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/L/n/AJPBmGRv2vbAar6MCoAg/img-3280.jpg',
      'https://s2-g1.glbimg.com/iynCOqh5R_mBUZ2oRJQJumYe59w=/0x0:800x600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/2/M/6qcB67Qqy1Ai8TkJdFBw/praia-da-arapuca-pb-inae-teles-g1.jpg',
      'https://s2-g1.glbimg.com/0G5hLjDhdp-NdGKOMddr9rqEfxo=/0x0:1080x719/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/l/g/18Fr3YSjux6BWVe7fCgg/tambaba.jpg',
    ],
    tempoViagem: '1h 45min', retornoHotel: '17h', preco: 280
  },
  {
    id: 'litoral-sul-2', category: 'paraiba', regiao: 'Paraíba',
    titulo: 'Passeio Litoral Sul 2',
    descricao: 'Praias: Praia de Coqueirinho, Praia de Tambaba e Praia Bela.',
    img: 'https://s2-g1.glbimg.com/TyZ370Du1Cy2MrD6BVTPJYikeak=/0x0:768x512/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/s/k/yjZN6IRWSxz1plUX809g/praia-bela-litoral-sul.jpeg',
    fotos: [
      'https://s2-g1.glbimg.com/dsU1Cd2NIaWMw0ogJ87AlufmRjw=/0x0:960x720/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/3/THl6t7RrKFJLx1GOvrMg/praia-da-pontinha-pitimbu-divulgacao-2.jpeg',
      'https://www.pbtur.pb.gov.br/wp-content/uploads/2025/01/unnamed-4.jpg',
      'https://originalexperience.com.br/wp-content/uploads/2024/02/Passeio-Litoral-Sul-Paraiba-pb.jpg',
      'https://originalexperience.com.br/wp-content/uploads/2024/02/Passeio-Litoral-Sul-Paraiba.jpg',
    ],
    tempoViagem: '2h', retornoHotel: '17h', preco: 320
  },
  {
    id: 'campina-grande', category: 'paraiba', regiao: 'Paraíba',
    titulo: 'Campina Grande',
    descricao: 'Destino: Campina Grande, cidade conhecida por sua cultura, eventos e pontos turísticos no interior da Paraíba.',
    img: 'https://cdn.jornaldaparaiba.com.br/img/inline/170000/900x0/Campina-Grande-e-a-melhor-cidade-da-Paraiba-em-ran0017378400202407041106-8.webp?fallback=https%3A%2F%2Fcdn.jornaldaparaiba.com.br%2Fimg%2Finline%2F170000%2FCampina-Grande-e-a-melhor-cidade-da-Paraiba-em-ran0017378400202407041106.jpg%3Fxid%3D1058635&xid=1058635',
    fotos: [
      'https://campinagrande.pb.gov.br/wp-content/uploads/2025/02/IMG-20250221-WA0080-1536x1152.jpg',
      'https://campinagrande.pb.gov.br/wp-content/uploads/2022/04/IMG-20220418-WA0051.jpg',
      'https://recime.com.br/wp-content/uploads/2021/06/campina-grande-foto.jpg',
      'https://cdn.borainvestir.b3.com.br/2024/06/14092925/sao-joao.jpg.webp',
    ],
    tempoViagem: '2h', retornoHotel: '18h', preco: 350
  },
  {
    id: 'porto-galinhas', category: 'pernambuco', regiao: 'Pernambuco',
    titulo: 'Porto de Galinhas',
    descricao: 'Destino: Porto de Galinhas, passeio para conhecer praias e piscinas naturais em Pernambuco.',
    img: 'https://conteudo.imguol.com.br/c/noticias/33/2025/12/30/vista-aerea-de-porto-de-galinhas-pe-1767129513209_v2_900x506.jpg',
    fotos: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShtbpIXGQVYQ9NHkNeEO1F5IIZngEEDvhUrA&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSObMTUIgNreQXZN1KrrxuWvBzUmPPq-BIdg&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGAhd-7BRmKVs9Y35SQVnCbNS7AjEbzaBf9w&s',
      'https://pousadavillacaracol.com.br/wp-content/uploads/2022/05/porto-de-galinhas-destino-6-min.jpg',
    ],
    tempoViagem: '3h', retornoHotel: '18h', preco: 450
  },
  {
    id: 'recife', category: 'pernambuco', regiao: 'Pernambuco',
    titulo: 'Recife',
    descricao: 'Destino: Recife, capital pernambucana com atrações históricas, culturais e urbanas.',
    img: 'http://vidadeturista.com/wp-content/uploads/2009/03/recife-pe-530x398.jpg',
    fotos: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Praia_do_Pina_-_Recife%2C_Pernambuco%2C_Brasil_%28cropped%29.jpg/1920px-Praia_do_Pina_-_Recife%2C_Pernambuco%2C_Brasil_%28cropped%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Vista_do_S%C3%ADtio_Hist%C3%B3rico_de_Olinda-PE-br.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Torre_de_Cristal_-_Recife-PE%282%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Ground_Zero_-_Recife_-_Pernambuco_-_Brazil.jpg/1280px-Ground_Zero_-_Recife_-_Pernambuco_-_Brazil.jpg',
    ],
    tempoViagem: '2h 30min', retornoHotel: '18h', preco: 350
  },
  {
    id: 'pipa', category: 'rn', regiao: 'Rio Grande do Norte',
    titulo: 'Praia da Pipa',
    descricao: 'Destino: Praia da Pipa, litoral do Rio Grande do Norte conhecido por falésias, mar e natureza.',
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9d/24/9a/pipa.jpg?w=1000&h=-1&s=1',
    fotos: [
      'https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/1926143/praia-da-pipa.jpg',
      'https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/2663064/praia-da-pipa.jpg',
      'https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/2663065/praia-da-pipa.jpg',
      'https://imgmd.net/images/c_limit%2Cw_1200/v1/guia/2663066/praia-da-pipa.jpg',
    ],
    tempoViagem: '4h', retornoHotel: '19h', preco: 350
  },
  {
    id: 'natal', category: 'rn', regiao: 'Rio Grande do Norte',
    titulo: 'Natal',
    descricao: 'Destino: Natal, capital do Rio Grande do Norte com praias, dunas e atrações turísticas.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Natal%2C_capital_do_Rio_Grande_do_Norte%2C_Brasil.jpg/960px-Natal%2C_capital_do_Rio_Grande_do_Norte%2C_Brasil.jpg?_=20190301202556',
    fotos: [
      'https://marazulreceptivo.com.br/wp-content/uploads/2019/10/Pontos-turisticos-de-Natal-praia-de-ponta-negra.jpg',
      'https://visit.natal.br/assets/img/conheca_natal/002.jpg',
      'https://s2-g1.glbimg.com/8EUWj1w_HmeItTlcyVjsjOsqNq0=/0x0:1700x1700/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2016/12/07/arena_ney_douglas.jpg',
      'https://visit.natal.br/assets/img/conheca_natal/003.jpg',
    ],
    tempoViagem: '3h 30min', retornoHotel: '19h', preco: 480
  },
  {
    id: 'translado-recife-ae', category: 'translado', regiao: 'Translado',
    titulo: 'Translado Aeroporto Recife',
    descricao: 'Destino: Aeroporto do Recife, translado particular para chegada ou saída em Pernambuco.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Aeroporto_Internacional_de_Guararapes.jpg/1280px-Aeroporto_Internacional_de_Guararapes.jpg',
    fotos: [
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Aeroporto_Internacional_do_Recife-Guararapes_.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Aeroporto_do_recife.jpg',
      'https://www.aenabrasil.com.br/sites/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1576850453964&ssbinary=true',
      'https://www.aeroportoderecife.com/wp-content/uploads/2024/12/terminal-de-passageiros-aeroporto-do-recife.webp',
    ],
    tempoViagem: '2h 30min', retornoHotel: null, preco: 350
  },
  {
    id: 'translado-joaopessoa-ae', category: 'translado', regiao: 'Translado',
    titulo: 'Translado Aeroporto João Pessoa',
    descricao: 'Destino: Aeroporto de João Pessoa, translado particular para chegada ou saída na Paraíba.',
    img: 'https://cdn.jornaldaparaiba.com.br/wp-content/uploads/2021/11/900x0/Aeroporto_castro_pinto-1-1-7.webp?fallback=https%3A%2F%2Fcdn.jornaldaparaiba.com.br%2Fwp-content%2Fuploads%2F2021%2F11%2FAeroporto_castro_pinto-1-1.png%3Fxid%3D596204&xid=596204',
    fotos: [
      'https://upload.wikimedia.org/wikipedia/commons/2/26/Presidente_Castro_Pinto_International_Airport.jpg',
      'https://turismoemfoco.com.br/v1/wp-content/uploads/2025/01/Aeroporto_JoaoPessoa_07032024_%E2%82%A2RafaelPassos-608.jpg',
      'https://turismoemfoco.com.br/v1/wp-content/uploads/2024/12/Aeroporto-Castro-Pinto.jpg',
      'https://www.aenabrasil.com.br/sites/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1576873437531&ssbinary=true',
    ],
    tempoViagem: '30min', retornoHotel: null, preco: 80
  },
  {
    id: 'translado-campina-ae', category: 'translado', regiao: 'Translado',
    titulo: 'Translado Aeroporto Campina Grande',
    descricao: 'Destino: Aeroporto de Campina Grande, translado particular para chegada ou saída no interior da Paraíba.',
    img: 'https://www.teixeiraduarteconstrucao.com.br/wp-content/uploads/2024/02/aeroporto-campina-grande-brasil-5-1.jpg',
    fotos: [
      'https://www.aenabrasil.com.br/sites/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1576868879221&ssbinary=true',
      'https://upload.wikimedia.org/wikipedia/commons/9/92/Fachada_do_Aeroporto_de_Campina_Grande.jpg',
      'https://www.teixeiraduarteconstrucao.com.br/wp-content/uploads/2024/02/aeroporto-campina-grande-brasil-5-1.jpg',
      'https://brasilturis.com.br/wp-content/uploads/2025/01/Aena-Brasil-vagas-1068x640-1.webp',
    ],
    tempoViagem: '2h 30min', retornoHotel: null, preco: 350
  },
  {
    id: 'translado-natal-ae', category: 'translado', regiao: 'Translado',
    titulo: 'Translado Aeroporto Natal',
    descricao: 'Destino: Aeroporto de Natal, translado particular para chegada ou saída no Rio Grande do Norte.',
    img: 'https://www.mercadoeeventos.com.br/wp-content/uploads/2024/02/Aeroporto-Internacional-de-Natal.png',
    fotos: [
      'https://s2-g1.glbimg.com/77PbbkihaTZcCLJwRj5_lKgRFsI=/0x0:934x594/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/03/09/canidne_aerporoto.jpg',
      'https://natal-airport.com/assets/zurich-natal-ptbr/media/page-cover/desk/main/20250613125225326_102512.webp',
      'https://www.viajenaviagem.com/wp-content/uploads/2021/04/natal-como-chegar-destaque-aeroporto-natal-1920x640-1.jpg.webp',
      'https://aerotransfernatal.com.br/wp-content/uploads/2023/03/aeroporto-de-natal.jpg',
    ],
    tempoViagem: '3h 30min', retornoHotel: null, preco: 500
  },
];

// ===================== RENDER CARDS =====================
const grid = document.getElementById('cardsGrid');

destinos.forEach(d => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'card';
  card.dataset.category = d.category;
  card.dataset.id = d.id;
  card.setAttribute('aria-label', 'Abrir fotos de ' + d.titulo);
  card.innerHTML = `
    <div class="card-img" style="background-image: url('${d.img}')"></div>
    <div class="card-overlay">
      <div class="card-tag">${pinSVG} ${d.regiao}</div>
      <h3 class="card-title">${d.titulo}</h3>
    </div>
  `;
  card.addEventListener('click', () => abrirGaleria(d.id));
  grid.appendChild(card);
});

// ===================== FILTRO =====================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(c => {
      c.style.display = (f === 'todos' || c.dataset.category === f) ? 'block' : 'none';
    });
  });
});

// ===================== MODAL GALERIA =====================
let destinoAtual = null;

// Abre a galeria do destino selecionado e monta as fotos na tela.
function abrirGaleria(id) {
  destinoAtual = destinos.find(d => d.id === id);
  document.getElementById('galeriaTitulo').textContent = destinoAtual.titulo;
  document.getElementById('galeriaDescricao').textContent = destinoAtual.descricao || ('Destino: ' + destinoAtual.titulo + '.');
  const galeriaGrid = document.getElementById('galeriaGrid');
  galeriaGrid.innerHTML = '';
  destinoAtual.fotos.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = destinoAtual.titulo;
    img.className = 'galeria-img';
    galeriaGrid.appendChild(img);
  });
  abrirModal('modalGaleria');
}

// Fecha o modal da galeria.
document.getElementById('closeGaleria').addEventListener('click', () => fecharModal('modalGaleria'));
document.getElementById('btnFazerReserva').addEventListener('click', () => {
  fecharModal('modalGaleria');
  abrirReserva();
});

// ===================== MODAL RESERVA =====================
// Prepara o formulário de reserva com os dados do destino atual.
function abrirReserva() {
  document.getElementById('reservaTitulo').textContent = destinoAtual.titulo;
  document.getElementById('tempoViagem').textContent = 'Tempo de viagem: ' + destinoAtual.tempoViagem;

  const infoBox = document.getElementById('infoRetorno');
  if (destinoAtual.retornoHotel) {
    infoBox.textContent = 'ⓘ Este passeio inclui volta para o hotel às ' + destinoAtual.retornoHotel;
    infoBox.style.display = 'block';
  } else {
    infoBox.style.display = 'none';
  }

  atualizarOpcaoVoltaMesmoDia();

  // Limpa os campos sempre que uma nova reserva é aberta.
  document.getElementById('inputData').value = '';
  document.getElementById('inputHorario').value = '';
  document.getElementById('inputPassageiros').value = 1;
  document.getElementById('inputNome').value = '';
  document.getElementById('inputWhatsapp').value = '';
  document.getElementById('inputCPF').value = '';
  document.getElementById('inputVoltaMesmoDia').checked = false;
  atualizarVeiculos();
  atualizarValor();
  limparErros();

  abrirModal('modalReserva');
}

document.getElementById('closeReserva').addEventListener('click', () => fecharModal('modalReserva'));

// Botões de quantidade de passageiros.
document.getElementById('btnPlus').addEventListener('click', () => {
  const inp = document.getElementById('inputPassageiros');
  inp.value = Math.min(99, parseInt(inp.value || 1) + 1);
  atualizarVeiculos(); atualizarValor();
});
document.getElementById('btnMinus').addEventListener('click', () => {
  const inp = document.getElementById('inputPassageiros');
  inp.value = Math.max(1, parseInt(inp.value || 1) - 1);
  atualizarVeiculos(); atualizarValor();
});
document.getElementById('inputPassageiros').addEventListener('input', () => {
  atualizarVeiculos(); atualizarValor();
});

// Recalcula o valor quando o cliente marca ou desmarca a volta no mesmo dia.
document.getElementById('inputVoltaMesmoDia').addEventListener('change', atualizarValor);

// Calcula quantos veículos serão necessários considerando 4 passageiros por carro.
function atualizarVeiculos() {
  const p = parseInt(document.getElementById('inputPassageiros').value) || 1;
  document.getElementById('inputVeiculos').value = Math.ceil(p / 4);
}
// Mostra ou esconde a opção de ida e volta no mesmo dia conforme o destino.
function atualizarOpcaoVoltaMesmoDia() {
  const grupoVolta = document.getElementById('grupoVoltaMesmoDia');
  const inputVolta = document.getElementById('inputVoltaMesmoDia');
  const temVoltaIncluida = destinosSemOpcaoVolta.includes(destinoAtual.id);

  if (grupoVolta) grupoVolta.style.display = temVoltaIncluida ? 'none' : 'block';
  if (inputVolta && temVoltaIncluida) inputVolta.checked = false;
}

// Atualiza o total usando o preço base, a quantidade de veículos e o adicional de retorno.
function atualizarValor() {
  const veiculos = parseInt(document.getElementById('inputVeiculos').value) || 1;
  const inputVolta = document.getElementById('inputVoltaMesmoDia');
  const usarVoltaMesmoDia = inputVolta && inputVolta.checked && !destinosSemOpcaoVolta.includes(destinoAtual.id);
  const precoBase = destinoAtual.preco + (usarVoltaMesmoDia ? adicionalVoltaMesmoDia : 0);
  const total = veiculos * precoBase;
  document.getElementById('valorTotal').textContent = 'R$ ' + total;
}

// Aplica a máscara visual do campo de WhatsApp enquanto o usuário digita.
document.getElementById('inputWhatsapp').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'');
  if (v.length > 11) v = v.slice(0,11);
  if (v.length > 6) v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
  else if (v.length > 2) v = '(' + v.slice(0,2) + ') ' + v.slice(2);
  else if (v.length > 0) v = '(' + v;
  this.value = v;
});

// Aplica a máscara visual do CPF mantendo apenas números válidos para formatação.
document.getElementById('inputCPF').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'');
  if (v.length > 11) v = v.slice(0,11);
  if (v.length > 9) v = v.slice(0,3) + '.' + v.slice(3,6) + '.' + v.slice(6,9) + '-' + v.slice(9);
  else if (v.length > 6) v = v.slice(0,3) + '.' + v.slice(3,6) + '.' + v.slice(6);
  else if (v.length > 3) v = v.slice(0,3) + '.' + v.slice(3);
  this.value = v;
});

// ===================== VALIDAÇÃO E SUBMIT =====================
document.getElementById('btnAgendar').addEventListener('click', () => {
  if (!validarFormulario()) return;
  fecharModal('modalReserva');
  abrirModal('modalSucesso');
});

document.getElementById('btnFecharSucesso').addEventListener('click', () => fecharModal('modalSucesso'));

// Confere os campos obrigatórios antes de enviar a solicitação.
function validarFormulario() {
  limparErros();
  let ok = true;

  const data = document.getElementById('inputData').value;
  if (!data) { mostrarErro('erroData', 'Por favor, informe a data.'); ok = false; }
  else {
    const hoje = new Date(); hoje.setHours(0,0,0,0);
    const sel = new Date(data + 'T00:00:00');
    if (sel < hoje) { mostrarErro('erroData', 'A data não pode ser no passado.'); ok = false; }
  }

  const horario = document.getElementById('inputHorario').value;
  if (!horario) { mostrarErro('erroHorario', 'Por favor, informe o horário de partida.'); ok = false; }

  const pass = parseInt(document.getElementById('inputPassageiros').value);
  if (!pass || pass < 1) { mostrarErro('erroPassageiros', 'Informe ao menos 1 passageiro.'); ok = false; }
  else if (pass > 99) { mostrarErro('erroPassageiros', 'Máximo de 99 passageiros.'); ok = false; }

  const nome = document.getElementById('inputNome').value.trim();
  if (!nome || nome.split(' ').filter(Boolean).length < 2) {
    mostrarErro('erroNome', 'Informe seu nome completo (nome e sobrenome).'); ok = false;
  }

  const wpp = document.getElementById('inputWhatsapp').value.replace(/\D/g,'');
  if (wpp.length < 10 || wpp.length > 11) {
    mostrarErro('erroWhatsapp', 'Informe um número de WhatsApp válido.'); ok = false;
  }

  const cpf = document.getElementById('inputCPF').value.replace(/\D/g,'');
  if (cpf.length !== 11 || !validarCPF(cpf)) {
    mostrarErro('erroCPF', 'CPF inválido.'); ok = false;
  }

  return ok;
}

// Valida os dígitos verificadores do CPF informado no formulário.
function validarCPF(c) {
  if (/^(\d)\1+$/.test(c)) return false;
  let s = 0;
  for (let i = 0; i < 9; i++) s += parseInt(c[i]) * (10 - i);
  let r = (s * 10) % 11; if (r === 10 || r === 11) r = 0;
  if (r !== parseInt(c[9])) return false;
  s = 0;
  for (let i = 0; i < 10; i++) s += parseInt(c[i]) * (11 - i);
  r = (s * 10) % 11; if (r === 10 || r === 11) r = 0;
  return r === parseInt(c[10]);
}

// Exibe a mensagem de erro e destaca o campo correspondente.
function mostrarErro(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
  // highlight input
  const inputMap = { erroData:'inputData', erroHorario:'inputHorario', erroPassageiros:'inputPassageiros', erroNome:'inputNome', erroWhatsapp:'inputWhatsapp', erroCPF:'inputCPF' };
  const inp = document.getElementById(inputMap[id]);
  if (inp) inp.classList.add('input-error');
}

// Remove mensagens e marcações de erro antes de uma nova validação.
function limparErros() {
  document.querySelectorAll('.form-error').forEach(e => { e.textContent = ''; e.style.display = 'none'; });
  document.querySelectorAll('.form-input').forEach(i => i.classList.remove('input-error'));
}

// ===================== HELPERS =====================
// Abre um modal e bloqueia a rolagem do fundo da página.
function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeButton = modal.querySelector('.modal-close, .btn-reserva');
  if (closeButton) closeButton.focus();
}
// Fecha o modal indicado e libera novamente a rolagem da página.
function fecharModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}



// Permite fechar menu e modais usando a tecla Esc.
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  fecharMenu();
  ['modalGaleria','modalReserva','modalSucesso'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal && modal.classList.contains('active')) fecharModal(id);
  });
});

// Fecha o modal quando o clique acontece fora da caixa de conteúdo.
['modalGaleria','modalReserva','modalSucesso'].forEach(id => {
  document.getElementById(id).addEventListener('click', function(e) {
    if (e.target === this) fecharModal(id);
  });
});
