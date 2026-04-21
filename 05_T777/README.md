# Teczka 777

Rejestr `rejestr_t777.csv` służy wyłącznie do ewidencji materiału [P].

## Reguła główna
Jeżeli materiał nie jest pierwotnym nośnikiem źródłowym albo wiernym odpisem źródła, nie trafia do T777.

## Kolejność pracy
1. Umieść materiał źródłowy w `01_P`.
2. Nadaj mu nazwę zgodną z zasadami nazewnictwa.
3. Dopiero potem dopisz rekord do `rejestr_t777.csv`.
4. Wpis ma opisywać dokument, nie interpretację dokumentu.

## Pola rejestru
- `ID` = kolejny numer rekordu
- `data_okres` = data dokumentu albo zakres dat
- `osoba` = główna osoba z dokumentu
- `zdarzenie` = czego dotyczy dokument
- `miejsce` = miejsce zdarzenia lub wystawienia
- `zrodlo` = nazwa dokumentu / nośnika
- `sygnatura` = sygnatura archiwalna, numer aktu albo inny identyfikator
- `typ_zrodla` = np. akt, metryka, karta ewidencyjna, fotografia, odpis urzędowy
- `status_dowodu` = np. potwierdzone, częściowe, do weryfikacji nośnika
- `znaczenie` = krótko: po co ten dokument jest ważny
- `uwagi` = tylko uwagi techniczne i identyfikacyjne

## Zakazy
- nie wpisuj relacji ustnych jako [P]
- nie wpisuj hipotez do rejestru
- nie łącz kilku różnych dokumentów w jeden rekord
- nie dopisuj wniosków, których nie ma w samym źródle
