# Szablon opisu aplikacji (MVP) — wersja wdrożeniowa

Ten plik służy do przygotowania **jednego źródła prawdy** przed kodowaniem.
Wypełnij sekcje poniżej, a następnie użyj ich jako podstawy do implementacji i PR.

## 0) Kontekst
- Nazwa projektu:
- Właściciel biznesowy / decyzyjny:
- Data przygotowania briefu:
- Link do zadania (Jira/Notion/GitHub Issue):

## 1) Problem i cel
- Jaki problem rozwiązujemy:
- Dla kogo:
- Dlaczego teraz:
- Cel mierzalny (np. czas, koszt, konwersja):

## 2) Zakres MVP (IN)
- Funkcja #1:
- Funkcja #2:
- Funkcja #3:
- Minimalny przepływ użytkownika (krok po kroku):
  1.
  2.
  3.

## 3) Poza zakresem (OUT)
Wpisz rzeczy, których **nie robimy** w tej iteracji:
- 
- 
- 

## 4) Wymagania funkcjonalne
- [ ] Użytkownik może ...
- [ ] System waliduje ...
- [ ] System zapisuje ...
- [ ] Widoczny jest komunikat sukcesu/błędu ...

## 5) Wymagania niefunkcjonalne
- Bezpieczeństwo (np. logowanie, role, RODO):
- Wydajność (np. czas odpowiedzi):
- Dostępność (np. mobile-first, WCAG):
- Logowanie błędów / monitoring:

## 6) Dane i integracje
- Źródło danych (API/DB/pliki):
- Pola obowiązkowe:
- Integracje zewnętrzne:
- Ograniczenia techniczne:

## 7) Kryteria akceptacji (DoD)
- [ ] Scenariusz A działa: ...
- [ ] Scenariusz B działa: ...
- [ ] Brak błędów krytycznych w konsoli/logach
- [ ] Zmiana opisana w README/changelogu

## 8) Plan wdrożenia
- Środowisko: (dev / staging / prod)
- Gdzie wdrażamy: (GitHub / Vercel / Render / serwer)
- Sekrety/klucze wymagane do uruchomienia:
- Plan rollbacku:

## 9) Checklista PR
- [ ] Zakres PR zgodny z sekcją „Zakres MVP (IN)”
- [ ] Dodane/odświeżone testy adekwatne do zmian
- [ ] Opis PR zawiera: cel, zakres, ryzyka, testy, rollout
- [ ] Reviewer ma komplet kontekstu (linki, screeny, dane testowe)

---

## Minimalna wersja „na szybko” (60 sekund)
Jeśli nie masz czasu, podaj tylko:
1. Typ aplikacji (web/mobile/desktop)
2. Dwie najważniejsze funkcje
3. Termin MVP
4. Jedno kryterium akceptacji („po czym poznamy, że działa”)

To wystarcza, żeby przygotować sensowny plan implementacji i PR.
