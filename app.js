const talks = [
  {
    id: 'green',
    session: '主題講堂',
    title: '都更不只換新屋：讓智慧綠建築提升家的性能與價值',
    speaker: '楊謙柔博士',
    pdf: 'assets/pdf/yang-keynote-smart-green.pdf',
    cover: 'assets/slides/green/page-01.jpg',
    pages: 25,
    tags: ['智慧綠建築', '居住性能', '節能減碳', '智慧管理'],
    insights: [
      '重建不只是把舊屋換新屋，而是重新檢討家的健康、舒適、能源與長期維護成本。',
      '智慧綠建築的價值可整理成生活品質語言：通風、隔熱、用電、管理與安全。',
      '更新條件不只看權狀面積，也可同步整理設備規格、公設維護與長期資產價值。'
    ]
  },
  {
    id: 'renewal',
    session: '趨勢論壇三',
    title: '都更新常態：自主更新時代來臨',
    speaker: '楊謙柔博士',
    pdf: 'assets/pdf/yang-forum-self-renewal.pdf',
    cover: 'assets/slides/renewal/page-01.jpg',
    pages: 35,
    tags: ['自主更新', '都市更新常態', '社區整合', '風險控管'],
    insights: [
      '更新會越來越接近社區日常議題，資料、共識與專業判讀能力會成為討論基礎。',
      '自主更新的重點不是完全排除建商，而是把整合、估價、規劃與合約整理到能比較的程度。',
      '成功案例背後通常包含代表機制、專業團隊、透明資料與階段式決策。'
    ]
  }
];

const transcriptSeed = [
  {
    topic: 'renewal',
    label: '自主更新',
    time: '演講知識點',
    title: '從被動接案轉向主動判讀',
    text: '基地資料、代表機制與基本問題清單，是比較自辦、合建、公辦或整建維護等不同路徑的底稿。'
  },
  {
    topic: 'green',
    label: '智慧綠建築',
    time: '演講知識點',
    title: '重建價值不只等於坪數',
    text: '更新後的價值可同時整理通風、隔熱、節能、設備維護、智慧管理與長期居住品質，不只用權狀坪數判斷。'
  },
  {
    topic: 'risk',
    label: '契約與風險',
    time: '演講知識點',
    title: '把風險寫成可檢核條件',
    text: '重建過程可把資金信託、履約保證、續建安排、合約審查與資訊揭露列成可討論項目。'
  },
  {
    topic: 'finance',
    label: '財務與估價',
    time: '演講知識點',
    title: '更新分配要回到價值與成本',
    text: '分回條件可拆開土地價值、建築成本、車位、公設、租金補助、找補與市場價格基準。'
  }
];

let activeTranscriptItems = transcriptSeed;

const learningModules = [
  {
    no: '01',
    title: '先理解為什麼要談更新',
    theme: '人屋雙老、老屋安全、制度選項',
    pdf: '趨勢論壇三 PDF：建議先看封面與政策背景頁',
    slide: 'assets/slides/renewal/page-03.jpg',
    transcript: '演講提醒的核心是：重建不是單純換房子，而是城市老化、人口老化、社區共識與法規工具交會後的選擇題。',
    points: ['盤點屋齡、結構與使用需求', '釐清危老、都更、整建維護的差異', '把制度理解放在建商條件比較之前'],
    questions: ['本社區真正急迫的問題是安全、機能、價值，還是管理？', '目前適合討論危老、都更、公辦都更，或先做可行性評估？']
  },
  {
    no: '02',
    title: '再建立自主判讀能力',
    theme: '社區整合、代表機制、專業團隊',
    pdf: '趨勢論壇三 PDF：自主更新與案例架構頁',
    slide: 'assets/slides/renewal/page-10.jpg',
    transcript: '逐字稿整理出的重點是：自主更新不是什麼都自己做，而是先建立資料、共識與判斷力，再決定要如何委任專業與談條件。',
    points: ['建立所有權人名冊與意見蒐集方式', '區分討論、授權、簽約三種不同階段', '專業者的角色需要文字化，不只口頭協助'],
    questions: ['誰能代表社區對外溝通？代表權如何取得與撤回？', '估價師、律師、建築師或第三方監督要在哪個階段介入？費用由誰負擔？']
  },
  {
    no: '03',
    title: '把新房子的價值看完整',
    theme: '智慧綠建築、居住性能、長期維護',
    pdf: '主題講堂 PDF：智慧綠建築與居住性能頁',
    slide: 'assets/slides/green/page-06.jpg',
    transcript: '演講把「更新」拉回居住品質：通風、隔熱、節能、設備管理、安全與維護成本，都是未來房子價值的一部分。',
    points: ['權狀變大不等於室內一定變大', '公設比、設備空間與管理費會影響實際感受', '綠建築或智慧建築可落到規格文字'],
    questions: ['新案承諾的是室內實坪、權狀坪，還是總價值？', '設備與公設後續維護費如何估算？誰負責？']
  },
  {
    no: '04',
    title: '最後整理契約、財務與分配',
    theme: '信託、履約、估價、車位與補貼',
    pdf: '兩份 PDF 對照：制度、案例與價值判斷頁',
    slide: 'assets/slides/renewal/page-18.jpg',
    transcript: '逐字稿整理後可轉成討論表：錢在哪裡、誰保證、誰續建、如何估價、租金補助或車位價值是否明列。',
    points: ['分回條件可拆成土地、建物、車位、補貼與找補', '合建與自建帶入的資源和風險不同', '重要承諾可對照合約、信託或附件'],
    questions: ['建商帶入的資金、技術、風險承擔與利潤如何量化？', '若進度延宕或建商出問題，是否有續建與資金保護機制？']
  }
];

function slidePath(id, page) {
  return `assets/slides/${id}/page-${String(page).padStart(2, '0')}.jpg`;
}

function renderTalks() {
  const grid = document.getElementById('talkGrid');
  if (!grid) return;
  grid.innerHTML = talks.map(talk => `
    <article class="talk-card" data-talk="${talk.id}">
      <img class="talk-cover" src="${talk.cover}" alt="${talk.title}">
      <div class="talk-content">
        <p class="eyebrow">${talk.session}</p>
        <h3>${talk.title}</h3>
        <p>${talk.speaker}｜PDF ${talk.pages} 頁</p>
        <div class="pill-row">${talk.tags.map(tag => `<span class="pill">${tag}</span>`).join('')}</div>
        <div class="insight-list">
          ${talk.insights.map((text, idx) => `<div class="insight"><span>${idx + 1}</span><p>${text}</p></div>`).join('')}
        </div>
        <div class="slides-strip" data-strip="${talk.id}">
          ${[1,2,3,4,5,6].map(page => `<button data-page="${page}" class="${page === 1 ? 'active' : ''}"><img src="${slidePath(talk.id, page)}" alt="${talk.title} 第${page}頁"></button>`).join('')}
        </div>
        <div class="slide-preview"><img src="${slidePath(talk.id, 1)}" alt="${talk.title} 預覽"></div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.slides-strip button').forEach(btn => {
    btn.addEventListener('click', () => {
      const strip = btn.closest('.slides-strip');
      const card = btn.closest('.talk-card');
      const id = strip.dataset.strip;
      const page = Number(btn.dataset.page);
      strip.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      card.querySelector('.slide-preview img').src = slidePath(id, page);
    });
  });
}

function renderLearningPath() {
  const wrap = document.getElementById('learningPath');
  if (!wrap) return;
  wrap.innerHTML = learningModules.map(module => `
    <article class="lesson-card">
      <div class="lesson-media">
        <img src="${module.slide}" alt="${module.title} 對應簡報頁">
      </div>
      <div class="lesson-body">
        <div class="lesson-topline"><span>${module.no}</span><strong>${module.theme}</strong></div>
        <h3>${module.title}</h3>
        <p class="pdf-ref">${module.pdf}</p>
        <div class="lesson-block">
          <b>演講整理脈絡</b>
          <p>${module.transcript}</p>
        </div>
        <div class="lesson-columns">
          <div>
            <b>本章要理解</b>
            <ul>${module.points.map(point => `<li>${point}</li>`).join('')}</ul>
          </div>
          <div>
            <b>延伸思考</b>
            <ul>${module.questions.map(question => `<li>${question}</li>`).join('')}</ul>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function renderTranscripts(items = activeTranscriptItems) {
  const searchInput = document.getElementById('searchInput');
  const topicFilter = document.getElementById('topicFilter');
  const grid = document.getElementById('transcriptGrid');
  if (!searchInput || !topicFilter || !grid) return;
  const q = searchInput.value.trim().toLowerCase();
  const topic = topicFilter.value;
  const filtered = items.filter(item => {
    const topicOk = topic === 'all' || item.topic === topic;
    const text = `${item.label} ${item.title} ${item.text}`.toLowerCase();
    const queryOk = !q || text.includes(q);
    return topicOk && queryOk;
  });
  grid.innerHTML = filtered.map(item => `
    <article class="quote-card">
      <div><span class="pill">${item.label}</span> <span class="time">${item.time}</span></div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('') || '<div class="status-card">沒有符合條件的知識點。</div>';
}

async function loadTranscriptStatus() {
  const status = document.getElementById('transcriptStatus');
  if (!status) return;
  try {
    const response = await fetch('data/transcript-highlights.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('not ready');
    const data = await response.json();
    status.innerHTML = `<strong>知識點已整理：</strong>${data.updated}，共 ${data.items.length} 張議題卡；引用前仍建議回看簡報或向整理者確認原始內容。`;
    activeTranscriptItems = data.items;
    renderTranscripts(data.items);
  } catch {
    status.innerHTML = '<strong>整理狀態：</strong>目前先顯示核心議題架構；後續可持續補入更精準的演講知識點。';
    activeTranscriptItems = transcriptSeed;
    renderTranscripts();
  }
}

function setupPdfTabs() {
  const frame = document.getElementById('pdfFrame');
  const open = document.getElementById('pdfOpen');
  if (!frame || !open) return;
  const pdfs = {
    green: 'assets/pdf/yang-keynote-smart-green.pdf',
    renewal: 'assets/pdf/yang-forum-self-renewal.pdf'
  };
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const url = pdfs[tab.dataset.pdf];
      frame.src = url;
      open.href = url;
    });
  });
}

function setupTopButton() {
  const btn = document.getElementById('topButton');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function setupNavState() {
  const links = Array.from(document.querySelectorAll('.nav-links a'));
  const samePageLinks = links.filter(link => {
    const href = link.getAttribute('href') || '';
    return href.startsWith('#');
  });
  if (!samePageLinks.length) return;

  const setActive = link => {
    links.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  };

  samePageLinks.forEach(link => {
    link.addEventListener('click', () => setActive(link));
  });

  const observed = samePageLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  if (!observed.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const link = samePageLinks.find(item => item.getAttribute('href') === `#${visible.target.id}`);
    if (link) setActive(link);
  }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.25, 0.5] });

  observed.forEach(section => observer.observe(section));
}

function setupImageLightbox() {
  const selector = [
    '.slide-note-card img',
    '.evidence-card img',
    '.slide-preview img',
    '.lesson-media img',
    '.topic-visual',
    '.hero-panel img'
  ].join(',');
  const images = Array.from(document.querySelectorAll(selector));
  if (!images.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-bar">
      <div class="lightbox-title"></div>
      <button class="lightbox-close" type="button">關閉</button>
    </div>
    <div class="lightbox-stage"><img alt=""></div>
  `;
  document.body.appendChild(lightbox);

  const title = lightbox.querySelector('.lightbox-title');
  const image = lightbox.querySelector('.lightbox-stage img');
  const close = () => {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
  };
  const open = source => {
    image.src = source.currentSrc || source.src;
    image.alt = source.alt || '投影片放大檢視';
    title.textContent = source.alt || '投影片放大檢視';
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  images.forEach(img => {
    img.addEventListener('click', event => {
      event.preventDefault();
      open(img);
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox || event.target.classList.contains('lightbox-stage')) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('show')) close();
  });
}

renderLearningPath();
renderTalks();
loadTranscriptStatus();
setupPdfTabs();
setupTopButton();
setupNavState();
setupImageLightbox();
const searchInput = document.getElementById('searchInput');
const topicFilter = document.getElementById('topicFilter');
if (searchInput) searchInput.addEventListener('input', () => renderTranscripts());
if (topicFilter) topicFilter.addEventListener('change', () => renderTranscripts());
