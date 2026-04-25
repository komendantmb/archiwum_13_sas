# ARCHIWUM 13 SAS — karta publikacyjna 2026-04-25

Status: opublikowane systemowo w repo.

Ten plik jest kartą kontrolną po spięciu PDF z T777.

## Wejścia główne

- `07_APP/ARCHIWUM_13_START.html` — front muzealny
- `07_APP/CZYTELNIA_PDF_INDEX.md` — indeks czytelni PDF
- `07_APP/manifest_pdf_czytelnia_2026-04-25.csv` — manifest PDF
- `05_T777/t777_pdf_mapowanie_publikacyjne_2026-04-25.csv` — mapowanie PDF do T777

## Rdzeń dowodowy

- `05_T777/rejestr_t777.csv` — główny rejestr T777
- `05_T777/podpiecia_status_001_010_i_024_2026-04-25.csv` — status podpięć
- `05_T777/notatka_GW_1978_i_blok_Solidarnosc_1980_2026-04-25.md` — notatka o prasie 1978 i bloku 1980

## Co działa teraz

Działa w repo:

- front muzealny,
- rejestr T777,
- manifesty,
- indeksy,
- mapowanie PDF do T777,
- kontrola warstw P / I / H.

Działa lokalnie w paczce ZIP:

- otwieranie PDF,
- wyszukiwarka PDF,
- linki z `index.html` do katalogu `PDF/`,
- manifest SHA-256.

## Co wymaga zewnętrznego hostingu

Same ciężkie PDF-y nie są jeszcze stałym publicznym zasobem repo. Możliwe drogi:

1. katalog `PDF/` przez Git LFS,
2. katalog PDF na Google Drive albo innym hostingu,
3. prywatna paczka ZIP jako archiwum offline.

## Zasada metodyczna

Podpięcie techniczne PDF nie oznacza automatycznie statusu A w T777.

Rekord T777 jest mocny dopiero po wskazaniu:

- konkretnego PDF,
- strony lub karty,
- minimalnego cytatu albo opisu wizualnego,
- warstwy P / I / H,
- ograniczenia interpretacji do tego, co wynika ze źródła.

## Stan tej rundy

- PDF-y zostały spięte z T777 w osobnym mapowaniu.
- Czytelnia PDF działa lokalnie.
- Repo ma front, manifesty i indeksy.
- Do pełnego publicznego widoku brakuje stałego hostingu binariów PDF.
