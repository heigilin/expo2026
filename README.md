# 第八屆都更危老博覽會整理網站

這是一個可直接發布到 GitHub Pages 的靜態網站。

## Antigravity 上傳時請注意

請只上傳下列資料夾的內容作為 GitHub Pages 網站根目錄；不要把上一層 `中山北路` 根目錄整包上傳，因為那裡混有另一個 65 巷合建住戶說明網站。

```text
D:\Users\006340\Downloads\私人\中山北路\網站發布用\02_都更危老博覽會整理網站_GitHubPages
```

## 發布方式

1. 將 `網站發布用\02_都更危老博覽會整理網站_GitHubPages` 資料夾內全部檔案放到 GitHub repository 根目錄，或放到 `docs/` 後把 GitHub Pages 來源設定為 `docs/`。
2. 確認 repository 內包含：
   - `index.html`
   - `old-house.html`
   - `self-renewal.html`
   - `smart-green.html`
   - `style.css`
   - `app.js`
   - `.nojekyll`
   - `assets/pdf/`
   - `assets/slides/`
   - `data/transcript-highlights.json`
3. GitHub Pages 不需 Node、Python 或後端伺服器。

## 錄音檔原則

網站不放原始錄音檔。若需要完整錄音，請私訊整理者索取。

## 逐字稿更新

轉錄完成後，可執行：

```powershell
& 'D:\Users\006340\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' expo_site\make_transcript_highlights.py
```

會更新：

```text
expo_site\data\transcript-highlights.json
```

再重新上傳到 GitHub 即可。
