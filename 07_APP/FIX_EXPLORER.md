# Naprawa Explorer T777

## Problem
Explorer nie otwiera plikow (zdjecia, PDF). Przyczyna: brak polaczenia frontend -> pliki.

## Co jest zle

1. Linki wskazuja na localhost
2. Brak backend API
3. Sciezki do plikow sa niezgodne z repo

## Rozwiazanie minimalne

Frontend musi wskazywac bezposrednio na pliki:

Zamiast:
/api/file/T777_001

Uzyc:
/01_P/nazwa_pliku.pdf

## Mapowanie T777

Kazdy rekord T777 musi miec pole:
sciezka_pliku

Przyklad:
T777_001 -> 01_P/dokument1.pdf

## Rozwiazanie docelowe

1. Dodac API (Node / Python)
2. Endpoint:
GET /files/:id

3. API zwraca realna sciezke pliku

## Tymczasowa zasada

Explorer = opcjonalny
START_HERE + MUZEUM = glowne wejscie

## Wniosek

Problem nie jest w danych, tylko w polaczeniu warstw.
