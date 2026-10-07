# Hui Cheuk Yin, Jack — Personal Portfolio

這是一個使用純 HTML、CSS 和 JavaScript 製作的個人履歷及作品集網站，適合直接部署到 GitHub Pages。

## 特色

- 繁體中文／英文切換
- 響應式設計，支援桌面、平板及手機
- 個人簡介、工作經驗、精選案例、技能、學歷及聯絡方式
- 使用本地圖片素材
- 支援鍵盤操作及可見 focus 狀態
- 支援 `prefers-reduced-motion: reduce`
- 不需要後端伺服器或資料庫

## 檔案結構

```text
github-pages/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── jack-hui.jpg
```

## 本地預覽

由於瀏覽器對本地檔案及 JavaScript 模組可能有限制，建議使用簡單的本地伺服器預覽。

如果電腦已安裝 Python：

```bash
cd github-pages
python -m http.server 8000
```

然後在瀏覽器開啟：

```text
http://localhost:8000
```

也可以使用 VS Code 的 Live Server 擴充功能開啟 `index.html`。

## GitHub Pages 部署

### 方法一：使用 GitHub 網頁介面

1. 登入 GitHub，建立一個新的 repository。
2. 將 `index.html`、`style.css`、`script.js`、`README.md` 及 `assets` 資料夾上傳到 repository 根目錄。
3. 開啟 repository 的 **Settings**。
4. 選擇 **Pages**。
5. 在 **Build and deployment** 中選擇：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/ (root)`
6. 按 **Save**。
7. 等待 GitHub Actions 完成後，GitHub 會提供網站網址。

### 方法二：使用 Git 指令

```bash
cd github-pages
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

之後到 GitHub repository 的 **Settings → Pages**，按照上述設定開啟 GitHub Pages。

## 更新內容

### 更新個人照片

將新照片放入 `assets/`，並在 `index.html` 更新：

```html
<img src="assets/your-photo.jpg" alt="Hui Cheuk Yin, Jack">
```

### 更新文字

主要內容位於 `index.html`。雙語文字會使用以下格式：

```html
<p data-zh="繁體中文內容" data-en="English content">
  繁體中文內容
</p>
```

切換語言的邏輯位於 `script.js`。

### 更新顏色及版面

主要顏色變數位於 `style.css` 最前方：

```css
:root {
  --ink: #18212e;
  --soft: #536170;
  --blue: #3f71f5;
  --cream: #f6f7f3;
  --lime: #d9f36c;
}
```

## 上線前檢查清單

- [ ] 確認姓名、職稱、日期及成果數字正確
- [ ] 確認所有外部連結可正常開啟
- [ ] 確認個人照片擁有公開使用權
- [ ] 確認沒有公開不應展示的公司機密
- [ ] 確認推薦人電話及電郵已移除或改成適當文字
- [ ] 在手機及桌面瀏覽器檢查版面
- [ ] 測試中文／英文切換
- [ ] 測試電郵、電話及 LinkedIn 連結
- [ ] 測試鍵盤 Tab 導覽
- [ ] 確認 GitHub Pages 網址可以正常載入圖片及 CSS

## 注意事項

此網站使用 `mailto:`、`tel:` 及 LinkedIn 連結，不包含真正的聯絡表單後端。若日後需要表單功能，應接駁可靠的表單服務，並在啟用前檢查私隱政策及資料處理方式。

