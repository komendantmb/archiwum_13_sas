# ARCHIWUM 13 SAS — pełny plan wjazdu do Omeka S

Status: plan operacyjny do ponownego zasilenia archiwum od początku do końca.
Data: 2026-04-23
Tryb: [SAS]

## Cel

Ten plik jest instrukcją pełnego załadowania Archiwum 13 SAS do działającej instalacji Omeka S pod `localhost/archiwum13`.

Aplikacja Omeka S już działa. Widoczny jest frontend `Archiwum 13` z działami:

- Start
- Materiały P
- Indeksy I
- Relacje R
- Hipotezy H
- Teczka 777

Teraz trzeba zasilić ją treścią od zera, bez pomijania warstw.

## Zasada główna

Teczka 777 opiera się wyłącznie na materiale [P].

Do T777 nie wolno dodawać:

- interpretacji AI,
- luźnych esejów,
- hipotez rodzinnych,
- materiałów bez konkretnego nośnika źródłowego,
- dokumentów, których nie da się przypiąć do pliku lub skanu.

## Kolejność prac

### Krok 1. Przygotowanie kolekcji / Item sets

Utwórz w Omeka S następujące Item sets:

1. `01_P — Materiały pierwotne`
2. `02_I — Indeksy i opracowania wtórne`
3. `03_R — Relacje`
4. `04_H — Hipotezy robocze`
5. `05_T777 — Teczka 777`
6. `06_NOTATKI — Notatki robocze`
7. `07_APP — Portal i warstwa publikacyjna`

### Krok 2. Przygotowanie podstawowych klas zasobów

Dla dokumentów używaj klasy:

- `dcterms:Text` dla dokumentów tekstowych i PDF,
- `dctype:Image` dla zdjęć,
- `dctype:PhysicalObject` dla artefaktów,
- `dctype:Dataset` dla rejestrów CSV,
- `dctype:Collection` dla zbiorów i pakietów.

### Krok 3. Minimalny zestaw metadanych każdego rekordu

Każdy Item musi mieć co najmniej:

- `Title` — nazwa czytelna,
- `Identifier` — np. `A13-P-0001`, `T777_001`,
- `Description` — krótki opis bez dopowiadania,
- `Date` — data dokumentu albo zakres,
- `Source` — nazwa pliku źródłowego,
- `Relation` — powiązanie z T777 lub warstwą [P]/[I]/[R]/[H],
- `Rights` — prywatne archiwum rodzinne / status do uzupełnienia,
- `Subject` — osoba, miejsce, instytucja,
- `Coverage` — miejscowość lub obszar,
- `Type` — dokument, fotografia, prasa, artefakt, relacja.

### Krok 4. Statusy dowodowe

W polu Description albo osobnym polu `Evidence status` wpisuj:

- `A — potwierdzone źródłem pierwotnym`,
- `B — potwierdzone częściowo / wymaga transkrypcji`,
- `C — kontekst`,
- `R — relacja ustna`,
- `H — hipoteza robocza`,
- `X — odsunięte od rdzenia`.

### Krok 5. Pierwszy wsad obowiązkowy

Najpierw dodaj rekordy bazowe:

1. `T777_001 — Włocławek 1945`
2. `T777_002 — rozkaz wojskowy`
3. `T777_003 — dyplom MON 1946`
4. `T777_004 — rewers fotografii`
5. `T777_005 — materiały WBH/CAW`
6. `T777_006 — akt zgonu 1982`
7. `T777_007 — pismo Solidarności 3.12.1980`
8. `T777_008 — notatka delegacyjna 1971`
9. `T777_009 — wniosek samochodowy 13.01.1975`
10. `T777_010 — wniosek samochodowy 28.12.1976`

Uwaga: rekordy `T777_008` do `T777_010` wymagają ponownego sprawdzenia nośnika. Wcześniejsze automatyczne podpięcie do `kwi 19 Dokument 35.pdf` zostało zatrzymane jako niepewne.

### Krok 6. Blok prasowy

Dodaj osobno pozycje prasowe, szczególnie:

- `GW_1978_Wyd.AB_0039.pdf` jako prasa/kontekst z mocnym rekordem dotyczącym Jana Baczyńskiego jako przewodniczącego Wojewódzkiej Komisji Rewizyjnej PZPR.

To jest kandydat do T777, ale powinien wejść dopiero jako osobny rekord po potwierdzeniu strony i opisu.

### Krok 7. Blok AGH / Chodzież

Dodać jako osobny blok:

- karta Jana Baczyńskiego z albumu AGH,
- rejestr suplementu T777 AGH,
- dokumenty dotyczące ChZPiP i edukacji technicznej.

### Krok 8. Artefakty rodu

Dodać jako osobne Items:

- srebrny widelec / łyżeczka z monogramem MB,
- zdjęcia stołu / zastawy,
- inne obiekty rodzinne.

Nie oznaczać ich automatycznie jako dowód zdarzeń T777. To są artefakty statusu i pamięci rodzinnej.

### Krok 9. Relacje R

Relacje ustne zapisuj osobno w `03_R`.

Nie mieszaj relacji z T777 bez wskazania dokumentu [P].

### Krok 10. Hipotezy H

Do `04_H` trafiają:

- rekonstrukcje,
- możliwe związki,
- hipotezy o mechanizmach,
- teksty robocze i interpretacyjne.

Nie wolno przenosić ich do [P].

## Strony Omeka S

Dla każdej strony dodaj blok `Browse preview` lub `Item showcase`:

- `Materiały P` pokazuje Item set `01_P`.
- `Indeksy I` pokazuje Item set `02_I`.
- `Relacje R` pokazuje Item set `03_R`.
- `Hipotezy H` pokazuje Item set `04_H`.
- `Teczka 777` pokazuje tylko Item set `05_T777`.

## Kontrola po imporcie

Po dodaniu pierwszych rekordów sprawdzić:

1. Czy item otwiera się publicznie.
2. Czy PDF/zdjęcie można kliknąć.
3. Czy item jest w dobrym Item set.
4. Czy ma identifier.
5. Czy T777 nie zawiera [H] ani [R] bez dokumentu [P].
6. Czy wyszukiwarka znajduje: `Baczyński`, `T777`, `Solidarność`, `Chodzież`, `AGH`.

## Wzorzec nazwy rekordu

`A13-P-0001 | Jan Stanisław Baczyński | dokument wojskowy | 1945 | [P]`

`T777_001 | Włocławek 1945 | dokument pierwotny | status A/B`

## Wzorzec opisu

Krótko, bez narracji:

`Dokument z prywatnego archiwum rodzinnego dotyczący Jana Stanisława Baczyńskiego. Materiał pierwotny [P]. Rekord powiązany z T777_001. Wymaga / nie wymaga dalszej transkrypcji.`

## Następny etap

Po ręcznym dodaniu pierwszych 10 rekordów należy wykonać audyt:

- lista itemów,
- porównanie z rejestrem T777,
- wskazanie braków,
- korekta statusów,
- dopiero potem pełne ładowanie PDF i zdjęć.
