# Archiwum 13 SAS — master spis wsadu sesyjnego v2

Data robocza: 2026-04-23
Tryb: uzupełnienie archiwum / wariant 3

## Cel
Domknąć pakiet porządkowy dla aktualnego wsadu dostępnego w sesji i spiąć go z realną strukturą repozytorium `komendantmb/archiwum_13_sas`.

## Stan repo potwierdzony
Repo posiada aktywną strukturę warstwową:
- `01_P` materiały pierwotne
- `02_I` indeksy i opracowania wtórne
- `03_R` relacje
- `04_H` hipotezy robocze
- `05_T777` rdzeń dowodowy
- `06_NOTATKI` zaplecze robocze
- `07_APP` punkt wejścia do klikanej wersji archiwum

README główne prowadzi bezpośrednio do T777, rejestru artefaktów, rejestru prasy i wejścia 07_APP.

## Potwierdzony rdzeń dowodowy
Plik `05_T777/rejestr_t777.csv` zawiera rekordy `T777_001` do `T777_036`.
To oznacza, że Teczka 777 nie jest szkicem, tylko aktywnym rejestrem źródeł [P].

## Pakiet lokalny dostępny w sesji
Do dalszego wpięcia i pracy potwierdzone są następujące grupy materiałów:

### 01_P — pakiety źródłowe i fotograficzne
- `Dokumenty Baczyńscy _191-286.pdf`
- `Dyplomy cz.2.pdf`
- `Dyplomy do🪦.pdf`
- `GW_1978_Wyd.AB_0039.pdf`
- `kwi 19 Dokument 35.pdf`
- `kwi_19_Dokument_250_50-94.pdf`
- `split_Dokumenty_Baczyńscy_-2_1-49.pdf`
- `split_Dokumenty_Baczyńscy_-2_50-99.pdf`
- `split_Dokumenty_Baczyńscy_-2_100-149.pdf`
- `split_Dokumenty_Baczyńscy_-2_150-199.pdf`
- `split_Dokumenty_Baczyńscy_-2_200-249.pdf`
- `split_Dokumenty_Baczyńscy_-2_250-286.pdf`
- `Zdjecia$asFamily)Baczynski_1-49.pdf`
- `Zdjęcia_Ród_Baczński_SaS_50-99-2.pdf`
- `Zdjęcia_Ród_Baczński_SaS_100-149-2.pdf`
- `Zdjęcia_Ród_Baczński_SaS_150-199-2.pdf`
- `Zdjęcia_Ród_Baczński_SaS_250-299-2.pdf`
- `Zdjęcia_Ród_Baczński_SaS_300-349-2.pdf`

### 02_I — profile i kompilacje
- `Profile_of_Family_Baczyńs_1-49-1.pdf`
- `Profile of Family Baczyńs_50-99.pdf`
- `Profile_of_Family_Baczyńs_50-99-1.pdf`
- `pasted.txt`

### 04_H — materiały interpretacyjne odsunięte od rdzenia
- `Baczyński.txt`
- `Jan Stanisław Baczyński.txt`

### 06_NOTATKI — zaplecze techniczne
- `Nazewnictwo i wsad dowodowy.txt`
- `Pliki Baczyńscy.txt`
- `Procedura porządkowania repo.txt`
- `Repozytorium Archiwum 13 SAS.txt`
- `Stan archiwum 2026-04-21.txt`

## Wnioski operacyjne
1. Repo ma już działający front i działający rdzeń T777.
2. Manifest importu obejmuje dużą część dostępnego wsadu lokalnego.
3. Najbliższa realna praca to dalsze podpinanie konkretnych nośników do rekordów T777 oraz porządkowanie serii foto.
4. Materiały interpretacyjne pozostają poza rdzeniem i nie mogą mieszać się z `05_T777`.

## Następny ruch
- uzupełniać rekordy T777 o lokalizację w źródle i cytat minimalny,
- dopinać kolejne pozycje do `02_I/pozycje_prasowe.csv` i `06_NOTATKI/ARTEFAKTY_RODU.csv`,
- dopiero po tym wpychać ciężkie binaria do repo innym kanałem.
