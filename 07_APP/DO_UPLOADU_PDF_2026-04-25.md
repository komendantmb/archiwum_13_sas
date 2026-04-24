# ARCHIWUM 13 SAS – lista PDF do fizycznego podpięcia

Stan: 2026-04-25
Tryb: MUZEUM / etap ożywienia plików

Ten plik nie udaje, że PDF-y są już publiczne. To kontrolna lista binariów, które trzeba fizycznie przesłać przez Git LFS, GitHub release, Google Drive albo inny publiczny storage, a następnie podmienić linki w `07_APP/ARCHIWUM_13_START.html`.

## Pierwsza paczka do podpięcia

| Lp. | Plik | Warstwa | Status | Uwagi |
|---:|---|---|---|---|
| 1 | `GW_1978_Wyd.AB_0039.pdf` | 01_P | do uploadu | Mały PDF, kandydat do szybkiego podpięcia jako pierwszy. |
| 2 | `Dyplomy do🪦.pdf` | 01_P | do uploadu | Mały/średni PDF. |
| 3 | `split_Dokumenty_Baczyńscy_-2_1-49.pdf` | 01_P | do uploadu | Pakiet dokumentów dzielonych. |
| 4 | `split_Dokumenty_Baczyńscy_-2_50-99.pdf` | 01_P | do uploadu | Pakiet dokumentów dzielonych. |
| 5 | `split_Dokumenty_Baczyńscy_-2_150-199.pdf` | 01_P | do uploadu | Pakiet dokumentów dzielonych. |
| 6 | `Zdjęcia_Ród_Baczński_SaS_300-349-2.pdf` | 01_P | do uploadu | Pakiet zdjęciowy, stosunkowo mały. |
| 7 | `Zdjecia$asFamily)Baczynski_1-49.pdf` | 01_P | do uploadu | Pakiet zdjęciowy. |
| 8 | `Zdjęcia_Ród_Baczński_SaS_50-99-2.pdf` | 01_P | do uploadu | Pakiet zdjęciowy. |
| 9 | `Profile_of_Family_Baczyńs_1-49-1.pdf` | 01_P | do uploadu | Profil rodzinny. |
| 10 | `Profile_of_Family_Baczyńs_50-99-1.pdf` | 01_P | do uploadu | Profil rodzinny. |

## Duże paczki wymagające LFS/storage

| Plik | Warstwa | Status |
|---|---|---|
| `kwi 19 Dokument 35.pdf` | 01_P | Git LFS / Drive / release |
| `Dokumenty Baczyńscy _191-286.pdf` | 01_P | Git LFS / Drive / release |
| `Dyplomy cz.2.pdf` | 01_P | Git LFS / Drive / release |
| `kwi_19_Dokument_250_50-94.pdf` | 01_P | Git LFS / Drive / release |
| `Zdjęcia_Ród_Baczński_SaS_100-149-2.pdf` | 01_P | Git LFS / Drive / release |
| `Zdjęcia_Ród_Baczński_SaS_150-199-2.pdf` | 01_P | Git LFS / Drive / release |

## Zasada publikacji

1. Najpierw wrzucić plik do stabilnego miejsca publicznego.
2. Sprawdzić, czy link otwiera się w trybie gościa.
3. Dopiero wtedy zmienić status w muzeum z `do uploadu` na `aktywny`.
4. Nie tworzyć martwych linków.
5. Nie mieszać materiału [P] z interpretacją [H].

## Minimalny test działania

Po fizycznym podpięciu pierwszego pliku klik w muzeum ma prowadzić bezpośrednio do dokumentu albo do podglądu PDF. Jeżeli użytkownik widzi 404, logowanie albo brak dostępu, plik nie jest jeszcze opublikowany.
