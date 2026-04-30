# JAK ZASILIĆ ARCHIWUM T777 PLIKAMI

## Zasada główna

Rejestr T777 już działa. Teraz trzeba fizycznie wgrać skany, zdjęcia i PDF-y do repozytorium. Nie wystarczy mieć rekordu w CSV. Plik musi realnie istnieć pod wskazaną ścieżką.

## Gdzie wgrywać

- PDF: `assets/pdf/`
- Zdjęcia JPG, PNG, WEBP: `assets/img/`
- Inne pliki: `assets/media/`

## Główna tabela uploadu

Użyj pliku:

`07_APP/MANIFEST_UPLOAD_T777_ETAP2.csv`

Tam jest wskazane:

- ID rekordu T777,
- opis materiału,
- docelowa nazwa pliku,
- docelowa ścieżka,
- priorytet,
- status uploadu.

## Kolejność pierwszej paczki

Najpierw wgrać materiały priorytetu 1:

1. `T777_001_fotografia_grupowa_wloclawek_1945.jpg`
2. `T777_002_rozkaz_wojskowy_jan_baczynski_1945.pdf`
3. `T777_003_dyplom_mon_medal_zwyciestwa_024480.pdf`
4. `T777_004_rewers_foto_wloclawek_1945.jpg`
5. `T777_006_akt_zgonu_jan_stanislaw_baczynski_1982.pdf`
6. `T777_007_nszz_solidarnosc_17_zarzutow_1980.pdf`
7. `T777_025_notatka_sb_zeidler_rfn_polimex_1977.pdf`
8. `T777_026_notatka_sb_sos_wykop_1978.pdf`

## Jak wrzucić przez GitHub

1. Otwórz repo `komendantmb/archiwum_13_sas`.
2. Wejdź do katalogu `assets/pdf` albo `assets/img`.
3. Kliknij `Add file`.
4. Kliknij `Upload files`.
5. Przeciągnij plik z komputera.
6. Zmień nazwę pliku dokładnie według manifestu.
7. Zatwierdź przyciskiem `Commit changes`.

## Test po wrzuceniu

Po wgraniu każdego pliku:

1. Otwórz główny `index.html` lub stronę publikowaną z repo.
2. Wyszukaj ID, np. `T777_006`.
3. Wejdź w rekord.
4. Kliknij link do pliku.
5. Jeżeli plik się otwiera, status można zmienić z `DO_WGRANIA` na `WGRANE` w manifeście.

## Czego nie robić

- Nie zmieniać nazw losowo.
- Nie wrzucać wszystkiego do jednego folderu bez porządku.
- Nie oznaczać pliku jako gotowego, jeśli link daje 404.
- Nie nadpisywać rejestru T777 bez kopii.

## Status

Struktura zasilania: GOTOWA.
Wymagane działanie: fizyczny upload plików źródłowych.
