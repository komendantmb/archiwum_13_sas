# ARCHIWUM 13 SAS – plan publikacji PDF i uruchomienia czytelni

Stan: 2026-04-25
Tryb: publikacja kontrolowana

## Cel

Celem tego etapu jest przejście z archiwum roboczego do czytelni publicznej, w której kliknięcie w dokument prowadzi do realnego pliku PDF albo do działającego podglądu.

Nie wolno tworzyć martwych linków. Każdy plik musi być najpierw fizycznie dostępny w stabilnym miejscu, a dopiero potem oznaczony jako aktywny w froncie archiwum.

## Stan wejściowy

Repo ma działający punkt startowy:

- `07_APP/ARCHIWUM_13_START.html`
- `05_T777/rejestr_t777.csv`
- `05_T777/t777_pdf_mapowanie_publikacyjne_2026-04-25.csv`
- `07_APP/manifest_pdf_czytelnia_2026-04-25.csv`
- `07_APP/DO_UPLOADU_PDF_2026-04-25.md`

PDF-y są zarejestrowane i opisane, ale nie wszystkie są fizycznie dostępne publicznie.

## Etap 1 – pierwsze pliki do uruchomienia

Priorytet mają pliki, które dają natychmiastowy efekt dowodowy albo wizualny:

1. `GW_1978_Wyd.AB_0039.pdf`
2. `Dyplomy do🪦.pdf`
3. `split_Dokumenty_Baczyńscy_-2_1-49.pdf`
4. `split_Dokumenty_Baczyńscy_-2_50-99.pdf`
5. `Zdjecia$asFamily)Baczynski_1-49.pdf`
6. `Profile_of_Family_Baczyńs_1-49-1.pdf`

## Etap 2 – metoda hostingu

Dopuszczalne warianty:

1. GitHub Pages z folderem `07_APP_PUBLIC/docs/`, jeśli rozmiar plików pozwala.
2. Git LFS, jeśli pliki przekraczają limity zwykłego repozytorium.
3. Google Drive lub inny publiczny storage, jeśli linki będą działały w trybie gościa.
4. Paczka offline ZIP jako wersja prywatna i kontrolna.

## Etap 3 – test publikacji

Każdy plik musi przejść test:

- link otwiera się bez logowania,
- nie ma błędu 404,
- nie ma komunikatu o braku dostępu,
- PDF otwiera się bezpośrednio albo przez stabilny viewer,
- wpis w T777 wskazuje ten sam nośnik.

## Etap 4 – aktualizacja frontu

Dopiero po pozytywnym teście należy zmienić status w muzeum z `do uploadu` na `aktywny`.

Aktualizowane pliki:

- `07_APP/ARCHIWUM_13_START.html`
- `07_APP/manifest_pdf_czytelnia_2026-04-25.csv`
- `05_T777/t777_pdf_mapowanie_publikacyjne_2026-04-25.csv`

## Etap 5 – priorytety dowodowe

Najpierw domykamy:

### T777_024

`GW_1978_Wyd.AB_0039.pdf` jako materiał prasowy z 17.02.1978, gdzie Jan Baczyński figuruje jako przewodniczący Wojewódzkiej Komisji Rewizyjnej PZPR.

Status: materiał [P], wysoki priorytet.

### T777_007

Blok `Solidarność / 3.12.1980`.

Wymagane:

- dokładna strona,
- transkrypcja,
- cytat minimalny,
- powiązanie z nośnikiem źródłowym,
- bez rozwijania narracji ponad dokument.

### T777_006

Akt zgonu Jana Stanisława Baczyńskiego.

Wymagane:

- zupełny odpis aktu zgonu,
- podstawa wpisu,
- karta zgonu albo informacja o jej braku,
- ustalenie dokumentacji transportu medycznego.

## Zasada końcowa

Teczka 777 opiera się wyłącznie na materiale [P].

Relacje, hipotezy i narracje nie mogą być wpisywane do rdzenia T777 jako dowód. Mogą istnieć tylko w osobnych warstwach: `03_R` i `04_H`.
