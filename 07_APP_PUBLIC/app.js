const documents = [
  {id:'T777', title:'Rejestr T777', category:'Teczka 777', layer:'[P]', status:'aktywny', file:'../05_T777/rejestr_t777.csv', description:'Główny rejestr Teczki 777.'},
  {id:'PRASA-IDX', title:'Indeks prasy', category:'Prasa', layer:'[I]', status:'aktywny', file:'../02_I/pozycje_prasowe.csv', description:'Indeks pozycji prasowych w repo.'},
  {id:'ARTEFAKTY', title:'Artefakty rodu', category:'Artefakty', layer:'[P/I]', status:'aktywny', file:'../06_NOTATKI/ARTEFAKTY_RODU.csv', description:'Rejestr artefaktów rodowych.'},
  {id:'T777-024', title:'Głos Wielkopolski 17.02.1978', category:'Prasa', layer:'[P]', status:'do uploadu PDF', file:'docs/GW_1978_Wyd.AB_0039.pdf', description:'Dowód prasowy funkcji Jana Baczyńskiego w strukturze wojewódzkiej PZPR.'},
  {id:'DOC-191-286', title:'Dokumenty Baczyńscy 191-286', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/Dokumenty Baczyńscy _191-286.pdf', description:'Duży pakiet dokumentów źródłowych.'},
  {id:'DYP-02', title:'Dyplomy cz.2', category:'Dyplomy', layer:'[P]', status:'do uploadu PDF', file:'docs/Dyplomy cz.2.pdf', description:'Pakiet dyplomów i dokumentów honorowych.'},
  {id:'SPLIT-001', title:'Dokumenty Baczyńscy 1-49', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/split_Dokumenty_Baczyńscy_-2_1-49.pdf', description:'Segment 1 dużego pakietu dokumentów.'},
  {id:'SPLIT-050', title:'Dokumenty Baczyńscy 50-99', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/split_Dokumenty_Baczyńscy_-2_50-99.pdf', description:'Segment 2 dużego pakietu dokumentów.'},
  {id:'SPLIT-100', title:'Dokumenty Baczyńscy 100-149', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/split_Dokumenty_Baczyńscy_-2_100-149.pdf', description:'Segment 3 dużego pakietu dokumentów.'},
  {id:'SPLIT-150', title:'Dokumenty Baczyńscy 150-199', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/split_Dokumenty_Baczyńscy_-2_150-199.pdf', description:'Segment 4 dużego pakietu dokumentów.'},
  {id:'SPLIT-200', title:'Dokumenty Baczyńscy 200-249', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/split_Dokumenty_Baczyńscy_-2_200-249.pdf', description:'Segment 5 dużego pakietu dokumentów.'},
  {id:'SPLIT-250', title:'Dokumenty Baczyńscy 250-286', category:'Dokumenty', layer:'[P]', status:'do uploadu PDF', file:'docs/split_Dokumenty_Baczyńscy_-2_250-286.pdf', description:'Segment 6 dużego pakietu dokumentów.'},
  {id:'ZDJ-001', title:'Zdjęcia Family Baczyński 1-49', category:'Zdjęcia', layer:'[P]', status:'do uploadu PDF', file:'docs/Zdjecia$asFamily)Baczynski_1-49.pdf', description:'Pakiet zdjęciowy 1.'},
  {id:'ZDJ-050', title:'Zdjęcia Ród Baczyński 50-99', category:'Zdjęcia', layer:'[P]', status:'do uploadu PDF', file:'docs/Zdjęcia_Ród_Baczński_SaS_50-99-2.pdf', description:'Pakiet zdjęciowy 2.'},
  {id:'ZDJ-100', title:'Zdjęcia Ród Baczyński 100-149', category:'Zdjęcia', layer:'[P]', status:'do uploadu PDF', file:'docs/Zdjęcia_Ród_Baczński_SaS_100-149-2.pdf', description:'Pakiet zdjęciowy 3.'},
  {id:'ZDJ-150', title:'Zdjęcia Ród Baczyński 150-199', category:'Zdjęcia', layer:'[P]', status:'do uploadu PDF', file:'docs/Zdjęcia_Ród_Baczński_SaS_150-199-2.pdf', description:'Pakiet zdjęciowy 4.'},
  {id:'ZDJ-250', title:'Zdjęcia Ród Baczyński 250-299', category:'Zdjęcia', layer:'[P]', status:'do uploadu PDF', file:'docs/Zdjęcia_Ród_Baczński_SaS_250-299-2.pdf', description:'Pakiet zdjęciowy 5.'},
  {id:'ZDJ-300', title:'Zdjęcia Ród Baczyński 300-349', category:'Zdjęcia', layer:'[P]', status:'do uploadu PDF', file:'docs/Zdjęcia_Ród_Baczński_SaS_300-349-2.pdf', description:'Pakiet zdjęciowy 6.'}
];

let activeCategory = '';

function getCategories() {
  return [...new Set(documents.map((d) => d.category))].sort((a, b) => a.localeCompare(b, 'pl'));
}

function initMenu() {
  const menu = document.getElementById('category-list');
  const categories = ['Wszystko', ...getCategories()];

  menu.innerHTML = categories.map((category) => {
    const isAll = category === 'Wszystko';
    const value = isAll ? '' : category;
    const cls = value === activeCategory ? 'active' : '';
    return `<button class="${cls}" onclick="setCategory('${value}')">${category}</button>`;
  }).join('');
}

function setCategory(category) {
  activeCategory = category;
  initMenu();
  render();
}

function getSortedDocuments(items) {
  const sortMode = document.getElementById('sort')?.value || 'title-asc';

  return [...items].sort((a, b) => {
    if (sortMode === 'title-desc') return b.title.localeCompare(a.title, 'pl');
    if (sortMode === 'status') return a.status.localeCompare(b.status, 'pl');
    if (sortMode === 'category') {
      const cat = a.category.localeCompare(b.category, 'pl');
      return cat !== 0 ? cat : a.title.localeCompare(b.title, 'pl');
    }
    return a.title.localeCompare(b.title, 'pl');
  });
}

function renderStats(visibleCount) {
  const layerP = documents.filter((d) => d.layer.includes('[P]')).length;
  document.getElementById('stat-total').textContent = documents.length;
  document.getElementById('stat-visible').textContent = visibleCount;
  document.getElementById('stat-p').textContent = layerP;
}

function render() {
  const query = (document.getElementById('search')?.value || '').toLowerCase().trim();
  const catalog = document.getElementById('catalog');

  const filtered = documents.filter((d) => {
    const inCategory = !activeCategory || d.category === activeCategory;
    const haystack = `${d.id} ${d.title} ${d.category} ${d.layer} ${d.status} ${d.description}`.toLowerCase();
    return inCategory && haystack.includes(query);
  });

  const sorted = getSortedDocuments(filtered);

  document.getElementById('count').textContent = `Widoczne: ${sorted.length} / ${documents.length}`;
  renderStats(sorted.length);

  if (!sorted.length) {
    catalog.innerHTML = '<article class="card empty"><h3>Brak wyników</h3><p>Zmień kategorię, frazę wyszukiwania albo sortowanie.</p></article>';
    return;
  }

  catalog.innerHTML = sorted.map((d) => `
    <article class="card">
      <div class="badge">${d.category} · ${d.layer}</div>
      <h3>${d.title}</h3>
      <p>${d.description}</p>
      <p class="meta">ID: ${d.id}<br>Status: ${d.status}</p>
      <div class="actions">
        <button onclick="openPdf('${d.id}')">Otwórz w czytelni</button>
        <a href="${d.file}" target="_blank" rel="noopener">Nowa karta</a>
      </div>
    </article>
  `).join('');
}

function openPdf(id) {
  const selected = documents.find((doc) => doc.id === id);
  if (!selected) return;

  document.getElementById('viewer-title').textContent = selected.title;
  document.getElementById('viewer-meta').textContent = `${selected.id} · ${selected.category} · ${selected.layer} · ${selected.status}`;
  document.getElementById('pdf-frame').src = selected.file;
  document.getElementById('open-new').href = selected.file;
  document.querySelector('.viewer').scrollIntoView({ behavior: 'smooth' });
}

initMenu();
render();
openPdf('T777');
