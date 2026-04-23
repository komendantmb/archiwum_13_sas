# 07_APP

Starter przeglądarkowego frontu Archiwum 13.

## Cel
- dać działający punkt wejścia do archiwum bez stawiania od razu Omeka S,
- umożliwić wejście do klikanej wersji roboczej archiwum,
- spiąć front aplikacyjny z realnymi plikami repo.

## Otwórz archiwum od razu stąd
- [README główne](../README.md)
- [Rejestr Teczki 777](../05_T777/rejestr_t777.csv)
- [Rejestr artefaktów rodu](../06_NOTATKI/ARTEFAKTY_RODU.csv)
- [Rejestr pozycji prasowych](../02_I/pozycje_prasowe.csv)
- [Pakiet roboczy SAS](../06_NOTATKI/pakiet_roboczy_SAS.md)
- [Front HTML](./ARCHIWUM_13_START.html)

## Co już działa
- strona główna archiwum,
- sekcje: zbiory, obiekty, osoby, miejsca, oś czasu,
- filtrowanie po warstwach źródłowych [P] [I] [R] [H],
- szczegóły klikniętego obiektu,
- realne wejście do plików roboczych repo.

## Najkrótsza ścieżka pracy
1. Otwórz `README.md`.
2. Wejdź do `07_APP/README.md`.
3. Otwórz `05_T777/rejestr_t777.csv`.
4. Otwórz `06_NOTATKI/ARTEFAKTY_RODU.csv`.
5. Otwórz `02_I/pozycje_prasowe.csv`.
6. Czytaj `06_NOTATKI/pakiet_roboczy_SAS.md` jako notatkę operacyjną.

## Stan
To jest działający front roboczy i punkt wejścia do archiwum. Teczka 777 ma aktywny rejestr, artefakty są odseparowane od rdzenia, a pozycje prasowe są wydzielone do warstwy `02_I`.

## Uwaga metodologiczna
- `05_T777` jest rdzeniem dowodowym i ma opierać się wyłącznie na materiale `[P]`.
- `06_NOTATKI` zawiera rejestry pomocnicze i decyzje robocze.
- `02_I` zawiera prasę i opracowania wtórne.

## Następny etap
- dalsze dopinanie rekordów do T777,
- podpinanie prawdziwych skanów i zdjęć do frontu HTML,
- rozbudowa danych w `07_APP/ARCHIWUM_13_START.html`.
