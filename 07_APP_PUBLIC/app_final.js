const documents = [
  {id:'T777', title:'Rejestr T777', category:'Teczka 777', layer:'[P]', status:'aktywny', file:'../05_T777/rejestr_t777.csv', description:'Główny rejestr materiału dowodowego Teczki 777.'},
  {id:'PRASA-IDX', title:'Indeks prasy', category:'Prasa', layer:'[I]', status:'aktywny', file:'../02_I/pozycje_prasowe.csv', description:'Indeks pozycji prasowych w repozytorium.'},
  {id:'ARTEFAKTY', title:'Artefakty rodu', category:'Artefakty', layer:'[P/I]', status:'aktywny', file:'../06_NOTATKI/ARTEFAKTY_RODU.csv', description:'Rejestr artefaktów rodowych i obiektów rodzinnych.'},
  {id:'T777-024', title:'Głos Wielkopolski 17.02.1978', category:'Prasa', layer:'[P]', status:'czeka na PDF w docs', file:'docs/GW_1978_Wyd.AB_0039.pdf', description:'Dowód prasowy funkcji Jana Baczyńskiego w strukturze wojewódzkiej PZPR.'},
  {id:'DOC-191-286', title:'Dokumenty Baczyńscy 191-286', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Dokumenty Baczyńscy _191-286.pdf', description:'Duży pakiet dokumentów źródłowych rodu Baczyńskich.'},
  {id:'DYP-02', title:'Dyplomy cz.2', category:'Dyplomy', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Dyplomy cz.2.pdf', description:'Pakiet dyplomów i dokumentów honorowych.'},
  {id:'SPLIT-001', title:'Dokumenty Baczyńscy 1-49', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/split_Dokumenty_Baczyńscy_-2_1-49.pdf', description:'Segment 1 dużego pakietu dokumentów.'},
  {id:'SPLIT-050', title:'Dokumenty Baczyńscy 50-99', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/split_Dokumenty_Baczyńscy_-2_50-99.pdf', description:'Segment 2 dużego pakietu dokumentów.'},
  {id:'SPLIT-100', title:'Dokumenty Baczyńscy 100-149', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/split_Dokumenty_Baczyńscy_-2_100-149.pdf', description:'Segment 3 dużego pakietu dokumentów.'},
  {id:'SPLIT-150', title:'Dokumenty Baczyńscy 150-199', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/split_Dokumenty_Baczyńscy_-2_150-199.pdf', description:'Segment 4 dużego pakietu dokumentów.'},
  {id:'SPLIT-200', title:'Dokumenty Baczyńscy 200-249', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/split_Dokumenty_Baczyńscy_-2_200-249.pdf', description:'Segment 5 dużego pakietu dokumentów.'},
  {id:'SPLIT-250', title:'Dokumenty Baczyńscy 250-286', category:'Dokumenty', layer:'[P]', status:'czeka na PDF w docs', file:'docs/split_Dokumenty_Baczyńscy_-2_250-286.pdf', description:'Segment 6 dużego pakietu dokumentów.'},
  {id:'ZDJ-001', title:'Zdjęcia Family Baczyński 1-49', category:'Zdjęcia', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Zdjecia$asFamily)Baczynski_1-49.pdf', description:'Pierwszy pakiet zdjęciowy.'},
  {id:'ZDJ-050', title:'Zdjęcia Ród Baczyński 50-99', category:'Zdjęcia', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Zdjęcia_Ród_Baczński_SaS_50-99-2.pdf', description:'Drugi pakiet zdjęciowy.'},
  {id:'ZDJ-100', title:'Zdjęcia Ród Baczyński 100-149', category:'Zdjęcia', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Zdjęcia_Ród_Baczński_SaS_100-149-2.pdf', description:'Trzeci pakiet zdjęciowy.'},
  {id:'ZDJ-150', title:'Zdjęcia Ród Baczyński 150-199', category:'Zdjęcia', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Zdjęcia_Ród_Baczński_SaS_150-199-2.pdf', description:'Czwarty pakiet zdjęciowy.'},
  {id:'ZDJ-250', title:'Zdjęcia Ród Baczyński 250-299', category:'Zdjęcia', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Zdjęcia_Ród_Baczński_SaS_250-299-2.pdf', description:'Piąty pakiet zdjęciowy.'},
  {id:'ZDJ-300', title:'Zdjęcia Ród Baczyński 300-349', category:'Zdjęcia', layer:'[P]', status:'czeka na PDF w docs', file:'docs/Zdjęcia_Ród_Baczński_SaS_300-349-2.pdf', description:'Szósty pakiet zdjęciowy.'}
];
let activeCategory = '';
function setCategory(category){ activeCategory = category; render(); }
function render(){
  const query = (document.getElementById('search')?.value || '').toLowerCase();
  const catalog = document.getElementById('catalog');
  if(!catalog) return;
  catalog.innerHTML = '';
  const filtered = documents.filter(doc => {
    const text = `${doc.id} ${doc.title} ${doc.category} ${doc.layer} ${doc.status} ${doc.description}`.toLowerCase();
    return (!activeCategory || doc.category === activeCategory) && text.includes(query);
  });
  const count = document.getElementById('count');
  if(count) count.textContent = `Widoczne: ${filtered.length} / ${documents.length}`;
  filtered.forEach(doc => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<div class="badge">${doc.category} · ${doc.layer}</div><h3>${doc.title}</h3><p>${doc.description}</p><p class="meta">ID: ${doc.id}<br>Status: ${doc.status}</p><div class="actions"><button onclick="openPdf('${doc.id}')">Otwórz w czytelni</button><a href="${doc.file}" target="_blank" rel="noopener">Nowa karta</a></div>`;
    catalog.appendChild(card);
  });
}
function openPdf(id){
  const doc = documents.find(item => item.id === id);
  if(!doc) return;
  document.getElementById('viewer-title').textContent = doc.title;
  document.getElementById('viewer-meta').textContent = `${doc.id} · ${doc.category} · ${doc.layer} · ${doc.status}`;
  document.getElementById('pdf-frame').src = doc.file;
  document.getElementById('open-new').href = doc.file;
  document.querySelector('.viewer')?.scrollIntoView({behavior:'smooth'});
}
render();
openPdf('T777');
