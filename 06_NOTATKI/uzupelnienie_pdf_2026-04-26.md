# ARCHIWUM 13 SAS – uzupełnienie PDF

Data wykonania: 2026-04-26

Zarejestrowano 21 plików PDF obecnych w sesji. Łączny rozmiar: 1217.25 MB.

## Wykonane

1. Utworzono manifest PDF z rozmiarem, szacowaną liczbą stron, warstwą archiwalną, statusem i ścieżką docelową online.
2. Przygotowano lokalną czytelnię HTML z aktywnymi linkami do PDF-ów.
3. Ustalono docelowy katalog publiczny: `07_APP_PUBLIC/docs/`.
4. Oznaczono duże pliki, których nie należy wysyłać zwykłym GitHub API.

## Plik manifestu w repo

`02_I/archiwum_13_manifest_pdf_2026-04-26.csv`

Commit manifestu:
`a134472981823aac825f9f5f58f869e30a06ca80`

## Ważne metodologicznie

Manifest potwierdza obecność pliku i porządkuje jego podpięcie. Nie zastępuje jeszcze opisu źródłowego, numeru strony, cytatu minimalnego ani finalnego przypięcia do konkretnego rekordu T777.

## Najważniejsze robocze powiązania

- `GW_1978_Wyd.AB_0039.pdf` → `T777_024`
- pliki `Dyplomy...` → blok dyplomów i odznaczeń, roboczo `T777_003`
- pakiety `split_Dokumenty...` oraz `Dokumenty Baczyńscy _191-286.pdf` → rdzeń dokumentów do dalszego przypięcia stron
- pakiety zdjęciowe i profile rodzinne → ikonografia do selekcji, roboczo `T777_028-036`
- `kwi 19 Dokument 35.pdf` oraz `kwi_19_Dokument_250_50-94.pdf` → blok do triage, w tym dyplomy, zakładowe i możliwy węzeł Solidarność / 3.12.1980

## Decyzja techniczna

Nie wrzucano ciężkich PDF-ów do repo przez zwykłe API. Pliki powyżej limitów powinny zostać podpięte przez Google Drive, GitHub Release, Git LFS albo inny hosting, a następnie połączone z `07_APP_PUBLIC/docs/` lub zewnętrznymi URL-ami.
