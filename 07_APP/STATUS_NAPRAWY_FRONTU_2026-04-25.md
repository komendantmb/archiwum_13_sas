# STATUS NAPRAWY FRONTU ARCHIWUM 13 SAS

Data: 2026-04-25
Repo: `komendantmb/archiwum_13_sas`

## Co zostało wykonane

1. Publiczny `index.html` został przebudowany z martwej listy placeholderów na dynamiczny front T777.
2. Strona ładuje realny plik `05_T777/rejestr_t777.csv`.
3. Dodano filtrowanie po typach rekordów, wyszukiwarkę oraz widok szczegółowy rekordu.
4. Każdy rekord pokazuje status dowodowy, datę, miejsce, powiązania, lokalizację w źródle i uwagę metodologiczną.
5. Front nie udaje już, że nieistniejące PDF-y lub zdjęcia są dostępne. Jeżeli brakuje binariów, widoczny jest jasny komunikat o konieczności fizycznego uploadu.

## Co działa teraz

- Wejście główne przez `index.html`.
- Czytanie i filtrowanie T777 z realnego CSV.
- Otwieranie rejestru T777.
- Pokazywanie kandydackiej ścieżki pliku źródłowego, jeżeli wynika ona z kolumny `LOKALIZACJA_W_ZRODLE`.
- Odróżnienie rekordu istniejącego od brakującego skanu/PDF.

## Co nadal wymaga fizycznego uploadu

Aplikacja nie może pokazać skanu lub PDF, którego nie ma w repozytorium albo hostingu. Trzeba wgrać pliki binarne do jednej z lokalizacji:

- `assets/pdf/`
- `assets/img/`
- `assets/media/`

Po wgraniu pliku pod ścieżką wskazaną przez front link zacznie działać bez zmiany kodu strony.

## Najważniejsza diagnoza

Problem nie był w samym menu. Problem polegał na tym, że część przycisków wskazywała na pliki, które nie były fizycznie obecne w repozytorium. Obecna wersja frontu pokazuje realny stan: rejestr działa, ale binaria trzeba dopiąć jako osobny upload.

## Status

Naprawa frontu: WYKONANA.
Status plików binarnych: DO UZUPEŁNIENIA PRZEZ UPLOAD.
