"""
Convert and resize heavy local images to WebP for performance optimization.
Run from project root: python scripts/convert_images.py
"""
from PIL import Image
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CONVERSIONS = [
    # (input_path, output_path, max_width, quality)
    # News article hero images — displayed up to ~800px, encode at 1600px (2×)
    ("src/assets/images/noticias/Nota Sinfonica 01 Principal.JPG",
     "src/assets/images/noticias/Nota Sinfonica 01 Principal.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Arte 01 Principal.JPG",
     "src/assets/images/noticias/Nota Arte 01 Principal.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Premio 01 Principal.jpeg",
     "src/assets/images/noticias/Nota Premio 01 Principal.webp", 1600, 82),
    # Secondary article images
    ("src/assets/images/noticias/Nota Arte 02.JPG",
     "src/assets/images/noticias/Nota Arte 02.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Arte 03.JPG",
     "src/assets/images/noticias/Nota Arte 03.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Arte 04.JPG",
     "src/assets/images/noticias/Nota Arte 04.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Sinfonica 02.JPG",
     "src/assets/images/noticias/Nota Sinfonica 02.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Sinfonica 03.JPG",
     "src/assets/images/noticias/Nota Sinfonica 03.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Premio 02.jpeg",
     "src/assets/images/noticias/Nota Premio 02.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Premio 03.jpeg",
     "src/assets/images/noticias/Nota Premio 03.webp", 1600, 82),
    ("src/assets/images/noticias/Nota Premio 04.jpeg",
     "src/assets/images/noticias/Nota Premio 04.webp", 1600, 82),
    # Instagram-style square cards — displayed at w-32 (128px), encode at 420px (2×+ margin)
    ("src/assets/images/noticias/insta1.png",
     "src/assets/images/noticias/insta1.webp", 420, 85),
    ("src/assets/images/noticias/insta2.png",
     "src/assets/images/noticias/insta2.webp", 420, 85),
    ("src/assets/images/noticias/insta3.png",
     "src/assets/images/noticias/insta3.webp", 420, 85),
    # Circle image — displayed at 245px, encode at 490px (2×)
    ("src/assets/images/Comuna CreatIva.jpeg",
     "src/assets/images/Comuna CreatIva.webp", 490, 85),
    # Logo — displayed at ~352px, encode at 704px (2×)
    ("src/assets/images/LogoTI.webp",
     "src/assets/images/LogoTI-opt.webp", 704, 88),
]


def convert(src_rel, dst_rel, max_w, quality):
    src = os.path.join(BASE, src_rel)
    dst = os.path.join(BASE, dst_rel)
    if not os.path.exists(src):
        print(f"  SKIP (not found): {src_rel}")
        return
    with Image.open(src) as img:
        img = img.convert("RGB")
        w, h = img.size
        if w > max_w:
            ratio = max_w / w
            img = img.resize((max_w, int(h * ratio)), Image.LANCZOS)
        img.save(dst, "WEBP", quality=quality, method=6)
        src_kb = os.path.getsize(src) / 1024
        dst_kb = os.path.getsize(dst) / 1024
        pct = 100 - (dst_kb / src_kb * 100)
        print(f"  OK  {os.path.basename(src_rel):45s}  {src_kb:7.1f} KB -> {dst_kb:6.1f} KB  (-{pct:.0f}%)")


print("Converting images to WebP...")
for args in CONVERSIONS:
    convert(*args)
print("Done.")
