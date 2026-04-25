# BLOKADA UPLOADU FIZYCZNEGO

Data: 2026-04-25
Repo: `komendantmb/archiwum_13_sas`

## Polecenie

Użytkownik polecił: `Wrzuć fizycznie`.

## Wynik kontroli

Sprawdzono repozytorium pod kątem realnych plików binarnych PDF/JPG/PNG oraz metaplików.

Ustalenie: repo zawiera metadane wielu nośników w `01_P/*.meta.md`, ale nie zawiera samych plików źródłowych PDF/JPG pod ścieżkami docelowymi.

Przykład kontrolny:

- metaplik: `01_P/1982-05-12_odpis_aktu_zgonu_jan_stanislaw_baczynski_usc_pila.pdf.meta.md`
- wskazany plik docelowy: `01_P/1982-05-12_odpis_aktu_zgonu_jan_stanislaw_baczynski_usc_pila.pdf`
- status z metapliku: `meta_utworzone_brak_pliku`
- próba odczytu PDF: `404 Not Found`

## Decyzja metodologiczna

Nie wolno tworzyć fałszywych PDF-ów ani pustych obrazów w miejsce źródeł [P]. Teczka 777 ma opierać się na materiale pierwotnym, więc fizyczne zasilenie może nastąpić dopiero po dostarczeniu rzeczywistych skanów albo plików.

## Co zostało przygotowane

- `assets/pdf/`
- `assets/img/`
- `assets/media/`
- `07_APP/MANIFEST_UPLOAD_T777_ETAP2.csv`
- `07_APP/JAK_ZASILIC_ARCHIWUM_T777.md`

## Co jest potrzebne do zamknięcia uploadu

Trzeba dostarczyć fizyczne pliki z dysku użytkownika albo załączyć je bezpośrednio w rozmowie. Po dostarczeniu plików można wykonać właściwy upload do katalogów `assets/pdf/`, `assets/img/`, `assets/media/` oraz zmienić status w manifeście z `DO_WGRANIA` na `WGRANE`.

## Status

Zasilenie strukturalne: WYKONANE.
Upload fizycznych źródeł: ZABLOKOWANY BRAKIEM PLIKÓW BINARNYCH.
