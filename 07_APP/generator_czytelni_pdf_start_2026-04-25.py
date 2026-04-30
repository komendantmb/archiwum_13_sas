import os, shutil, zipfile, html, hashlib, csv
from pathlib import Path

base = Path("/mnt/data")
out = base / "ARCHIWUM_13_PDF_CZYTELNIA_START"
pdf_dir = out / "PDF"

if out.exists():
    shutil.rmtree(out)
out.mkdir()
pdf_dir.mkdir()

pdf_files = [
    "GW_1978_Wyd.AB_0039.pdf",
    "Dyplomy do🪦.pdf",
    "Zdjęcia_Ród_Baczński_SaS_300-349-2.pdf",
    "split_Dokumenty_Baczyńscy_-2_1-49.pdf",
    "split_Dokumenty_Baczyńscy_-2_50-99.pdf",
]

rows = []
for name in pdf_files:
    src = base / name
    if src.exists():
        dest = pdf_dir / name
        shutil.copy2(src, dest)
        h = hashlib.sha256()
        with src.open("rb") as f:
            for chunk in iter(lambda: f.read(1024 * 1024), b""):
                h.update(chunk)
        rows.append({
            "plik": name,
            "sciezka": f"PDF/{name}",
            "rozmiar_MB": round(src.stat().st_size / 1024 / 1024, 2),
            "sha256": h.hexdigest(),
            "status": "podpięty_lokalnie"
        })

manifest = out / "manifest_pdf_archiwum_13_start.csv"
with manifest.open("w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["plik", "sciezka", "rozmiar_MB", "sha256", "status"], delimiter=";")
    writer.writeheader()
    writer.writerows(rows)

cards = ""
for r in rows:
    cards += f"""
    <article class="card">
      <h2>{html.escape(r['plik'])}</h2>
      <p><strong>Status:</strong> {html.escape(r['status'])}</p>
      <p><strong>Rozmiar:</strong> {r['rozmiar_MB']} MB</p>
      <p><strong>SHA-256:</strong> <code>{r['sha256']}</code></p>
      <a class="open" href="{html.escape(r['sciezka'])}" target="_blank">Otwórz PDF</a>
    </article>
    """

index_html = f"""<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ARCHIWUM 13 SAS – Czytelnia PDF START</title>
<style>
body{{margin:0;background:#0d0b08;color:#f3ead8;font-family:Georgia,'Times New Roman',serif;line-height:1.55}}
.wrap{{max-width:1100px;margin:0 auto;padding:28px}}
.hero{{border:1px solid #3b2d1f;border-radius:22px;padding:28px;background:linear-gradient(145deg,#2b2015,#111)}}
h1{{font-size:38px;margin:0 0 8px;color:#f4d28a}}
.grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-top:18px}}
.card{{border:1px solid #3b2d1f;border-radius:16px;background:#17120c;padding:16px}}
.card h2{{font-size:18px;margin:0 0 8px;color:#f4d28a;word-break:break-word}}
code{{font-size:11px;word-break:break-all;color:#d8c9ae}}
.open{{display:inline-block;margin-top:10px;padding:10px 12px;border:1px solid #b28a3d;border-radius:10px;color:#f0c56e;text-decoration:none;background:#2a1e12}}
.note{{margin-top:16px;color:#d8c9ae;border-left:3px solid #7b1f1f;padding-left:12px}}
</style>
</head>
<body>
<div class="wrap">
<section class="hero">
<h1>ARCHIWUM 13 SAS – Czytelnia PDF START</h1>
<p>Wersja lokalna testowa. Rozpakuj ZIP i otwórz <strong>index.html</strong>. Linki prowadzą do folderu <strong>PDF/</strong>.</p>
<p>Liczba podpiętych PDF: <strong>{len(rows)}</strong></p>
<div class="note">To jest działająca paczka startowa. Pełna publiczna wersja wymaga hostingu folderu PDF albo Git LFS.</div>
</section>
<div class="grid">{cards}</div>
</div>
</body>
</html>
"""
(out / "index.html").write_text(index_html, encoding="utf-8")
(out / "README.txt").write_text("ARCHIWUM 13 SAS – Czytelnia PDF START\n\nRozpakuj ZIP i otwórz index.html.\n", encoding="utf-8")

zip_path = base / "ARCHIWUM_13_PDF_CZYTELNIA_START_2026-04-25.zip"
if zip_path.exists():
    zip_path.unlink()

with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_STORED) as z:
    for p in out.rglob("*"):
        z.write(p, p.relative_to(out.parent))

print(f"Utworzono: {zip_path}")
print(f"PDF podpięte: {len(rows)}")
print(f"Rozmiar ZIP: {zip_path.stat().st_size/1024/1024:.2f} MB")
