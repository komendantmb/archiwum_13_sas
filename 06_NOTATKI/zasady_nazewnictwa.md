# Zasady nazewnictwa i pracy

## Klasyfikacja materiału
- [P] = źródło pierwotne
- [I] = indeks / opracowanie wtórne / synteza
- [R] = relacja / wspomnienie / przekaz ustny
- [H] = hipoteza robocza

## Zasada główna
Teczka 777 opiera się wyłącznie na materiale [P].

## Zasada identyfikowalności
- w 01_P zachowuj identyfikowalność nośnika
- jeżeli istnieje sygnatura, wpisuj ją w rejestrze i uwagach
- jeżeli plik pochodzi ze skanu własnego, nie gub informacji o oryginalnym nośniku

## Standard metadanych
- nazwa pliku pozostaje krótka i techniczna
- metadane zapisuj wyłącznie w osobnym pliku `.meta.md`
- nie zapisuj metadanych w nazwie pliku
- dla jednego pliku źródłowego twórz jeden odpowiadający mu plik metadanych, np. `1945-09-28_rozkaz_wloclawek_jan_baczynski.pdf.meta.md`

## Nazewnictwo plików
- używaj małych liter
- używaj podkreśleń zamiast spacji
- nie używaj polskich znaków w nazwach plików
- jeżeli znana jest data, dawaj format RRRR-MM-DD na początku nazwy
- jeżeli data niepełna, używaj formatu:
  - RRRR
  - RRRR-MM
  - brak_daty
- na końcu nazwy dodawaj krótki opis nośnika lub treści

## Przykłady nazw
- 1945-09-28_rozkaz_wloclawek_jan_baczynski.pdf
- 1946-05-09_dyplom_medal_zwyciestwa_jan_baczynski.jpg
- brak_daty_notatka_ceremonialna_marszalek.jpg

## Zasady rejestru T777
Aktualny roboczy układ kolumn w `05_T777/rejestr_t777.csv`:

`ID;DATA_ISO;TYP;OPIS_KRÓTKI;MIEJSCE;STATUS_DOWODOWY;POWIĄZANIA`

Znaczenie kolumn:
- `ID` = unikalny identyfikator rekordu, np. `T777_001`
- `DATA_ISO` = data w formacie `RRRRMMDD`, a przy dacie niepełnej zapis techniczny z zerami na nieznanych pozycjach, np. `19450000`
- `TYP` = typ nośnika lub typu dokumentu, np. `FOTO`, `DOK`, `DYPLOM`, `AKT_ZGONU`
- `OPIS_KRÓTKI` = krótki opis jednego konkretnego faktu lub nośnika
- `MIEJSCE` = miejsce zdarzenia, wystawienia lub identyfikacji dokumentu
- `STATUS_DOWODOWY` = obecnie używany znacznik klasy materiału, dla T777 zasadniczo `[P]`
- `POWIĄZANIA` = identyfikatory rekordów lub pakietów powiązanych rzeczowo

## Uwaga rozwojowa
Docelowo rejestr może zostać rozszerzony o pola:
`OSOBA;ŹRÓDŁO;SYGNATURA;UWAGI`
ale dopiero po zachowaniu zgodności całego dotychczasowego wsadu.

## Zasady metodologiczne
- nie mieszaj [P] z [I], [R] i [H]
- nie dopisuj brakujących mostów narracyjnych
- oddzielaj fakt od wniosku i od hipotezy
- materiał AI, rekonstrukcje i notatki robocze nie są materiałem [P]
