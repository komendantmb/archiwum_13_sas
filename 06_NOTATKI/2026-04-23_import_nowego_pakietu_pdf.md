# Import nowego pakietu PDF z 2026-04-23

Dodano metadane dwoch nowych PDF-ow z sesji czatu i przypisano je do warstwy `02_I` jako pakiety mieszane wymagajace dalszego rozbioru.

## Rozmiary plikow
- `Wielkopolski Stol .pdf` - 34326525 bajtow
- `Gazety plakaty.pdf` - 70454177 bajtow
- `Czarno-biale.pdf` - 70706925 bajtow

## Klasyfikacja
- `Wielkopolski Stol .pdf` -> `02_I`
- `Czarno-biale.pdf` -> `02_I`

## Uwaga o konflikcie metadanych
`Gazety plakaty.pdf` nie zostal dodany jako nowa metadana w tym PR, poniewaz w repo istnieje juz wczesniejszy rekord:
`01_P/brak_daty_zestaw_gazety_plakaty_jan_baczynski.pdf.meta.md`.

Dla tego zrodla pozostaje klasyfikacja `[P]` z istniejacego rekordu w `01_P`. Nie tworzono drugiego opisu w `02_I`, zeby nie rozbijac modelu danych i nie dublowac jednego nosnika w dwoch warstwach.

## Dalszy ruch
- rozbierac pliki na pojedyncze karty lub male serie tematyczne
- dopiero po rozbiorze przenosic wybrane elementy do `01_P` lub T777
- nie zmieniac T777 na etapie tego importu
