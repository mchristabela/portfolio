import re, pathlib

p = pathlib.Path("index.html")
src = p.read_text(encoding="utf-8")
src = src[: src.index("</html>") + 7]            # buang salinan dobel kalau ada
pathlib.Path("index.backup.html").write_text(src, encoding="utf-8")

css = re.findall(r"<style[^>]*>(.*?)</style>", src, re.S)
js  = re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", src, re.S)

def once(tag):
    done = []
    def f(m):
        if done: return ""
        done.append(1)
        return tag
    return f

html = re.sub(r"<style[^>]*>.*?</style>\s*", once('<link rel="stylesheet" href="style.css">\n'), src, flags=re.S)
html = re.sub(r"<script(?![^>]*\bsrc=)[^>]*>.*?</script>\s*", once('<script src="script.js"></script>\n'), html, flags=re.S)

pathlib.Path("style.css").write_text("\n\n".join(c.strip() for c in css), encoding="utf-8")
pathlib.Path("script.js").write_text("\n;\n".join(j.strip() for j in js), encoding="utf-8")
p.write_text(html, encoding="utf-8")
print("Selesai: index.html, style.css, script.js")