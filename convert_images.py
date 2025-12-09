#!/usr/bin/env python3
"""将项目 `资源/` 目录下的 PNG 图片转换为 WebP，并尝试更新 `script.js` 中的 asset 引用。

用法：
  python -m venv .venv            # 可选：创建虚拟环境
  .\.venv\Scripts\Activate.ps1 # 激活（Windows PowerShell）
  python -m pip install --upgrade pip
  python -m pip install Pillow
  python convert_images.py

脚本会：
- 遍历 `资源/` 下所有 PNG 文件，按相同路径生成 .webp（质量 85）。
- 如果成功生成 webp，会在 `script.js` 的 `assetSources` 块里把对应的 `.png` 替换为 `.webp`。
"""

import os
import glob
from PIL import Image

ROOT = os.path.abspath(os.path.dirname(__file__))
RES_DIR = os.path.join(ROOT, "资源")
SCRIPT_JS = os.path.join(ROOT, "script.js")

if not os.path.isdir(RES_DIR):
    print("错误：找不到资源目录：", RES_DIR)
    raise SystemExit(1)

created = []
for png_path in glob.glob(os.path.join(RES_DIR, "**", "*.png"), recursive=True):
    webp_path = os.path.splitext(png_path)[0] + ".webp"
    try:
        im = Image.open(png_path).convert("RGBA")
        im.save(webp_path, "WEBP", quality=85, method=6)
        created.append(os.path.relpath(webp_path, ROOT).replace(os.path.sep, "/"))
        print("已生成：", webp_path)
    except Exception as e:
        print("转换失败：", png_path, e)

if created and os.path.isfile(SCRIPT_JS):
    with open(SCRIPT_JS, "r", encoding="utf-8") as f:
        txt = f.read()
    start = txt.find("const assetSources = {")
    if start != -1:
        end = txt.find("};", start)
        if end != -1:
            block = txt[start:end+2]
            newblock = block
            for rel in created:
                name = os.path.basename(rel)
                base = os.path.splitext(name)[0]
                newblock = newblock.replace(base + ".png", base + ".webp")
            if newblock != block:
                txt = txt.replace(block, newblock)
                with open(SCRIPT_JS, "w", encoding="utf-8") as f:
                    f.write(txt)
                print("已更新 script.js 中 assetSources 的引用。")
    else:
        print("未在 script.js 中找到 assetSources 定义。")

print("完成。生成文件：", created)
