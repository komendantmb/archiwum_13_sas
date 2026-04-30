# ArCH 13 SAS — status aplikacji

Data: 2026-04-25
Status: ZAMKNIĘTE JAKO PEŁNA APLIKACJA STATYCZNA

## 1. Definicja zamknięcia

ArCH 13 SAS zostaje zamknięte jako pełna aplikacja statyczna.

Oznacza to, że aplikacja:
- ma działający plik wejściowy HTML,
- działa bez serwera,
- działa bez localhost,
- używa ścieżek względnych,
- ma filtrowanie,
- ma wyszukiwarkę,
- ma podział na sale/gabloty,
- ma rozróżnienie obiektów aktywnych i obiektów oczekujących na upload,
- nie tworzy fałszywych martwych linków dla plików, których fizycznie nie ma w repo.

## 2. Punkt wejścia

Główny plik aplikacji:

`07_APP/ARCHIWUM_13_START.html`

Wejście nawigacyjne repo:

`START_HERE.md`

## 3. Zakres działania

Aplikacja obsługuje:
- rejestr T777,
- artefakty rodu,
- pozycje prasowe,
- wejście techniczne,
- muzealne gabloty,
- obiekty oczekujące na fizyczne podpięcie plików PDF/JPG.

## 4. Ważne ograniczenie

Pełna aplikacja statyczna nie oznacza, że wszystkie skany, PDF i fotografie są już fizycznie obecne w repozytorium.

Oznacza, że aplikacja jest kompletna jako narzędzie przeglądania, a brakujące pliki są jawnie oznaczone jako `do uploadu`.

## 5. Jak uruchomić

1. Wejść do katalogu `07_APP`.
2. Otworzyć `ARCHIWUM_13_START.html` w Chrome, Edge albo Firefox.
3. Korzystać z wyszukiwarki, filtrów i sal muzealnych.
4. Dla obiektów aktywnych używać przycisku `Otwórz plik`.
5. Dla obiektów oczekujących podpiąć najpierw plik fizyczny.

## 6. Model prawdy

Aplikacja nie udaje, że plik istnieje, jeżeli go nie ma.

To jest główny warunek zamknięcia jako aplikacji bez halucynacji.

## 7. Werdykt

ArCH 13 SAS jest zamknięte jako pełna aplikacja statyczna i muzealny front roboczy.

Nie jest jeszcze zamknięte jako pełna baza wszystkich skanów źródłowych, bo to zależy od fizycznego uploadu plików.
