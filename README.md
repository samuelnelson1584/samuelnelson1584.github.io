# Samuel Nelson — QA Engineer Portfolio

Personal portfolio website for Samuel Nelson, a Middle Quality Assurance Engineer at PT. Synapsis Sinergi Digital.

Built with plain **HTML, CSS, and vanilla JavaScript** — no build step required, served directly via GitHub Pages.

---

## 🌐 Live Site

Once deployed, the site will be available at:

```
https://samuelnelson1584.github.io/
```

---

## 🗂️ Project Structure

```
samuelnelson1584.github.io/
├── docs/
│   ├── index.html          # Main portfolio page
│   ├── styles.css          # All styling (dark/light theme)
│   ├── script.js           # Interactivity (nav, animations, dark mode)
│   └── pas foto 2x3.png    # Profile photo
├── CV ATS Samuel QA.pdf    # Source CV (optional: link from site)
├── CV ATS Samuel QA.md     # Markdown version of CV
├── .gitignore
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

1. Push this repository to GitHub (repo name: `samuelnelson1584.github.io`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`)
   - **Folder**: `/docs`
4. Click **Save**.
5. After a minute, the site will be live at `https://samuelnelson1584.github.io/`.

> **Note:** Because the repo is named `<username>.github.io`, GitHub Pages serves it at the root URL — no subdirectory path needed. All CSS, JS, and image paths in `docs/` use relative paths and will work correctly.

---

## ✏️ Customizing Content

| What to update | Where |
|---|---|
| Name, title, tagline | `docs/index.html` → Hero section |
| Work experience | `docs/index.html` → `#experience` |
| Skills & tools | `docs/index.html` → `#skills` |
| Projects | Replace `[ADD DETAILS]` / `[ADD LINK]` in `#projects` |
| Education | `docs/index.html` → `#education` |
| Awards | `docs/index.html` → `#organizations` |
| Contact links | Hero section + `#contact` + footer |
| Accent color | `docs/styles.css` → `--accent` variable |

---

## 🎨 Features

- **Dark / Light mode** toggle with preference saved to `localStorage`
- **Fully responsive** — mobile, tablet, desktop
- **Scroll animations** with staggered fade-in via `IntersectionObserver`
- **Active nav link** highlighting as you scroll
- **Keyboard navigable** — `Escape` closes mobile menu; all links focusable
- **Semantic HTML** with ARIA labels for screen readers
- **No external dependencies** — zero build step, instant deploy

---

## 📦 Adding Your CV PDF

1. Copy your PDF to `docs/CV ATS Samuel QA.pdf`.
2. In `docs/index.html`, update the Certificates button in the Hero section to point to `CV ATS Samuel QA.pdf` (relative path) instead of the Google Drive link, if preferred.
