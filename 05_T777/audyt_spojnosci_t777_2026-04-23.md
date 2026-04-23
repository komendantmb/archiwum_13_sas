# Audyt spójności danych T777 vs 01_P

Data: 2026-04-23

## Statystyki
- Rekordy w `05_T777/rejestr_t777.csv`: **36**
- Rekordy z uzupełnionym `LOKALIZACJA_W_ZRODLE`: **14 / 36**
- Rekordy z uzupełnionym `CZY_DOTYCZY_BEZPOSREDNIO_JANA`: **5 / 36**
- Pliki metadanych w `01_P` (`*.meta.md`): **29**
- Fizyczne nośniki źródłowe (obrazy/PDF) w `01_P`: **0**

## Wniosek główny
- Brak fizycznych plików źródłowych (pdf/jpg/png/tif) bezpośrednio w `01_P`; obecne są głównie opisy metadanych `.meta.md`.

## Rekordy bez `LOKALIZACJA_W_ZRODLE`
- T777_001 | FOTO | Fotografia grupowa (5 osób w mundurach)
- T777_002 | DOK | Rozkaz wojskowy dot. chor. Jana Baczyńskiego
- T777_003 | DYPLOM | Dyplom MON - Medal Zwycięstwa i Wolności nr 024480
- T777_004 | REWERS | Rewers foto z datą 4.10.1945 i adnotacją o Włocławku
- T777_005 | TECZKA | Materiały WBH/CAW - akta wojskowe J. Baczyńskiego
- T777_007 | ZARZUTY | Pismo NSZZ Solidarność z 17 zarzutami (do NIK/KCPZPR)
- T777_008 | NOTATKA | Notatka dot. delegacji angielskiej i Fiata PA 0454
- T777_009 | WNIOSEK | Wniosek o limit 1000 km na samochód prywatny
- T777_010 | WNIOSEK | Ponowny wniosek o limit km dla dyrektora
- T777_011 | ZAPROSZENIE | Zaproszenie WOSS im. gen. A. Waszkiewicza dla Jana Baczyńskiego, dyrektora Zakładów Porcelany i Porcelitu Chodzież
- T777_012 | WIZYTOWKA | Wizytówka służbowa: Dyrektor Zakładów Porcelany i Porcelitu Chodzież
- T777_013 | WIZYTOWKA | Wizytówka zakładowa z adresem ul. Łąkowa 2 i numerem telefonu 147
- T777_014 | ZAPROSZENIE | Zaproszenie Dzień Budowlanych 1973
- T777_015 | LIST | List odręczny z Tušimic datowany 28.09.1972
- T777_016 | KOPERTA | Koperta adresowana do Chodzieskich Zakładów Porcelany i Porcelitu
- T777_017 | KOPERTA | Koperta od Norton Industrial Ceramic Division Europe do Jana Baczyńskiego, dyrektora generalnego
- T777_018 | KARTKA | Kartka świąteczna od Norton Industrial Ceramic Division Europe
- T777_019 | TELEGRAM | Telegram gratulacyjny od Franciszkiewicza z okazji odznaczenia orderem
- T777_020 | PRASA | Wycinek prasowy Scementowana krwią
- T777_021 | PRASA | Wycinek prasowy Z rozkazu do żołnierzy I Dywizji
- T777_022 | PRASA | Wycinek prasowy o polskich żołnierzach walczących na froncie wschodnim
- T777_023 | PRASA | Zestaw wycinków prasowych dotyczących I Dywizji i ZPP

## Kandydaci dopięć (heurystyka, do ręcznej walidacji)
- T777_001: 1945-10-04_fotografia_grupowa_mundury_wloclawek.jpg.meta.md (score=7); 1945-10-04_rewers_fotografii_wloclawek.jpg.meta.md (score=6); 1945_1946_akta_wojskowe_jan_baczynski_wbh_caw.pdf.meta.md (score=2)
- T777_002: 1945-09-28_rozkaz_wojskowy_jan_baczynski_wloclawek.pdf.meta.md (score=6); 1945_1946_akta_wojskowe_jan_baczynski_wbh_caw.pdf.meta.md (score=2); 1945-10-04_rewers_fotografii_wloclawek.jpg.meta.md (score=2)
- T777_003: 1946-05-09_dyplom_mon_medal_zwyciestwa_jan_baczynski.jpg.meta.md (score=7); 1945_1946_akta_wojskowe_jan_baczynski_wbh_caw.pdf.meta.md (score=2)
- T777_004: 1945-10-04_rewers_fotografii_wloclawek.jpg.meta.md (score=7); 1945-10-04_fotografia_grupowa_mundury_wloclawek.jpg.meta.md (score=6); 1945_1946_akta_wojskowe_jan_baczynski_wbh_caw.pdf.meta.md (score=2)
- T777_005: 1945_1946_akta_wojskowe_jan_baczynski_wbh_caw.pdf.meta.md (score=2); 1945-10-04_rewers_fotografii_wloclawek.jpg.meta.md (score=2); 1945-10-04_fotografia_grupowa_mundury_wloclawek.jpg.meta.md (score=2)
- T777_007: 1980-12-03_pismo_nszz_solidarnosc_17_zarzutow_chodziez.pdf.meta.md (score=6)
- T777_008: 1971-03-20_notatka_delegacja_angielska_fiat_pa_0454_chodziez.pdf.meta.md (score=7)
- T777_009: 1975-01-13_wniosek_limit_1000_km_samochod_prywatny_chodziez.pdf.meta.md (score=7); 1976-12-28_wniosek_limit_km_dyrektor_chodziez.pdf.meta.md (score=1)
- T777_010: 1976-12-28_wniosek_limit_km_dyrektor_chodziez.pdf.meta.md (score=7); 1975-01-13_wniosek_limit_1000_km_samochod_prywatny_chodziez.pdf.meta.md (score=1)
- T777_011: brak_daty_zaproszenie_woss_jan_baczynski_chodziez.jpg.meta.md (score=1); 1973_zaproszenie_dzien_budowlanych.jpg.meta.md (score=1)
- T777_012: brak_daty_wizytowka_zakladowa_ul_lakowa_2_tel_147_chodziez.jpg.meta.md (score=1); brak_daty_wizytowka_dyrektor_zaklady_porcelany_i_porcelitu_chodziez.jpg.meta.md (score=1)
- T777_013: brak_daty_wizytowka_zakladowa_ul_lakowa_2_tel_147_chodziez.jpg.meta.md (score=1); brak_daty_wizytowka_dyrektor_zaklady_porcelany_i_porcelitu_chodziez.jpg.meta.md (score=1)
- T777_014: 1973_zaproszenie_dzien_budowlanych.jpg.meta.md (score=3); brak_daty_zaproszenie_woss_jan_baczynski_chodziez.jpg.meta.md (score=1)
- T777_015: 1972-09-28_list_odreczny_tusimice.jpg.meta.md (score=7); 1972-09_koperta_chodzieskie_zaklady_porcelany_i_porcelitu.jpg.meta.md (score=4); 1972-12_kartka_swiateczna_norton_industrial_ceramic_division_europe.jpg.meta.md (score=2)
- T777_016: 1972-09_koperta_chodzieskie_zaklady_porcelany_i_porcelitu.jpg.meta.md (score=5); 1972-09-28_list_odreczny_tusimice.jpg.meta.md (score=4); 1972-12-11_koperta_norton_industrial_ceramic_division_europe.jpg.meta.md (score=3)
- T777_017: 1972-12-11_koperta_norton_industrial_ceramic_division_europe.jpg.meta.md (score=7); 1972-12_kartka_swiateczna_norton_industrial_ceramic_division_europe.jpg.meta.md (score=4); 1972-09_koperta_chodzieskie_zaklady_porcelany_i_porcelitu.jpg.meta.md (score=3)
- T777_018: 1972-12_kartka_swiateczna_norton_industrial_ceramic_division_europe.jpg.meta.md (score=5); 1972-12-11_koperta_norton_industrial_ceramic_division_europe.jpg.meta.md (score=4); 1972-09_koperta_chodzieskie_zaklady_porcelany_i_porcelitu.jpg.meta.md (score=2)
- T777_019: brak_daty_telegram_gratulacyjny_franciszkiewicz.jpg.meta.md (score=1)
- T777_020: brak_daty_wycinek_prasowy_scementowana_krwia.jpg.meta.md (score=2); brak_daty_wycinek_prasowy_polscy_zolnierze_front_wschodni.jpg.meta.md (score=1); 1943-10-11_wycinek_prasowy_z_rozkazu_do_zolnierzy_i_dywizji.jpg.meta.md (score=1)
- T777_021: 1943-10-11_wycinek_prasowy_z_rozkazu_do_zolnierzy_i_dywizji.jpg.meta.md (score=9); brak_daty_wycinek_prasowy_polscy_zolnierze_front_wschodni.jpg.meta.md (score=2); brak_daty_wycinek_prasowy_scementowana_krwia.jpg.meta.md (score=1)
- T777_022: brak_daty_wycinek_prasowy_polscy_zolnierze_front_wschodni.jpg.meta.md (score=2); 1943-10-11_wycinek_prasowy_z_rozkazu_do_zolnierzy_i_dywizji.jpg.meta.md (score=2); brak_daty_wycinek_prasowy_scementowana_krwia.jpg.meta.md (score=1)
- T777_023: brak_daty_zestaw_wycinkow_prasowych_i_dywizja_zpp.jpg.meta.md (score=1); brak_daty_zestaw_gazety_plakaty_jan_baczynski.pdf.meta.md (score=1); 1943-10-11_wycinek_prasowy_z_rozkazu_do_zolnierzy_i_dywizji.jpg.meta.md (score=1)

## Szybkie poprawki rekomendowane
1. Uzupełnić `LOKALIZACJA_W_ZRODLE` dla rekordów bez lokalizacji (priorytet: T777_001–T777_023).
2. Dodać do `01_P` fizyczne nośniki (pdf/jpg/png/tif) albo jawny link do ich repozytorium źródłowego.
3. Po dopięciu nośników uruchomić ponowny audyt i oznaczyć rekordy: POTWIERDZONE / WYMAGA_KWERENDY.
