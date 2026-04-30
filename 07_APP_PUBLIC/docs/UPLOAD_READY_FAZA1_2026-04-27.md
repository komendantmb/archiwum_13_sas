# UPLOAD READY FAZA 1 – PDF-y do czytelni

Status: paczka PDF została przygotowana lokalnie w środowisku roboczym jako `ARCHIWUM_13_UPLOAD_READY_FAZA1.zip`.

Ten plik jest śladem kontrolnym w repo. Same PDF-y nie zostały bezpośrednio przepchnięte przez konektor GitHub, ponieważ dostępny kanał nie obsługuje bezpiecznego uploadu lokalnych binariów z `/mnt/data` do repo bez przekazywania całej zawartości base64.

## Docelowy katalog

`07_APP_PUBLIC/docs/`

## Pliki w paczce FAZA 1

| Plik | Rozmiar bajty | SHA-256 |
|---|---:|---|
| `GW_1978_Wyd.AB_0039.pdf` | 21112152 | `a6f497816b1e522134c54566ae64df3de7d8c4e17f0a7bdeadf69e810ec7f96f` |
| `split_Dokumenty_Baczyńscy_-2_1-49.pdf` | 17458377 | `60e4e8d4097bf38958cefbf04b879cc47e2bbd0030c7fe2d3f73aca1e0ea0b0e` |
| `split_Dokumenty_Baczyńscy_-2_50-99.pdf` | 18019241 | `1beeed992b6e35dbc184b6ff94bfeabc1855e43639917bf658b97f48bc07bc33` |
| `Zdjęcia_Ród_Baczński_SaS_250-299-2.pdf` | 15405501 | `6ce5618cd17a685f9bdf1e210451b2f6212e13adf6a8f29fd276fe2453fd0cc7` |
| `Zdjęcia_Ród_Baczński_SaS_300-349-2.pdf` | 13390883 | `1b7ce80fb24f8527e39f8d15fd1a2da272ae09ea748004c214c1b0c19591e13c` |

## Priorytet dowodowy

Najważniejszy plik w tej paczce to `GW_1978_Wyd.AB_0039.pdf`, ponieważ odpowiada za węzeł `T777_024` i dowód prasowy z 17.02.1978.

## Instrukcja publikacyjna

Po fizycznym umieszczeniu tych PDF-ów w `07_APP_PUBLIC/docs/` aplikacja publiczna zacznie otwierać dokumenty zgodnie ze ścieżkami zapisanymi w `07_APP_PUBLIC/app.js`.
