# Abisek Dewan — academic website

A responsive, static academic website for GitHub Pages. There are no dependencies or build steps.

## Website files

```text
index.html
styles.css
script.js
.nojekyll
assets/
  favicon.svg
  abisek-dewan.png
  posters/
    dms-symposium-2025-poster.pdf
```

The portrait uses the supplied photograph with the requested forehead retouch. The poster is linked from the workshops and conferences section. A CV link is intentionally omitted until a downloadable CV is available.

## Preview and edit

Double-click `index.html` to preview the site in your browser. For an optional local server, open a terminal in this folder and run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

- Edit biography, research, papers, education, teaching, events, and contact links in `index.html`.
- Edit colours, type, spacing, and responsive layout in `styles.css`.
- Keep the portrait at `assets/abisek-dewan.png`, or update its filename in `index.html` when replacing it.
- Put new PDFs in `assets/posters/` and link to the correct filename in `index.html`.
- `script.js` handles the mobile menu, current section indication, and footer year.

## Publish with GitHub Pages

1. Create a public repository named `YOUR_USERNAME.github.io`, replacing `YOUR_USERNAME` with your GitHub username.
2. Upload this folder's **contents**, including `assets`, into the repository. `index.html` must be at the top level, not inside an enclosing `academic-website` folder. Upload the extracted files, not the ZIP.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, and folder **/ (root)**. Save.
5. Wait for deployment to finish, then open `https://YOUR_USERNAME.github.io/`. The Pages settings will show the published address.

On a Mac, press **Command + Shift + .** in Finder to reveal `.nojekyll`. Include this empty file in the upload. GitHub Pages will publish updates when you commit changed files to the selected branch.

## Content sources

The website is based on Abisek Dewan's existing Google Site and subsequent changes requested by its owner:

- [Home](https://sites.google.com/view/abisekdewan/home)
- [Research](https://sites.google.com/view/abisekdewan/research)
- [Education](https://sites.google.com/view/abisekdewan/education)
- [Teaching](https://sites.google.com/view/abisekdewan/teaching)
- [Contacts](https://sites.google.com/view/abisekdewan/contacts)
- [Talks, conferences, and workshops](https://sites.google.com/view/abisekdewan/talksconferencesworkshops)
- [Google Scholar](https://scholar.google.com/citations?user=yBCrMdMAAAAJ&hl=en)
- Public arXiv records: [2604.02086](https://arxiv.org/abs/2604.02086), [2605.06253](https://arxiv.org/abs/2605.06253), [2609.21645](https://arxiv.org/abs/2609.21645), and [2610.21636](https://arxiv.org/abs/2610.21636).
- The arXiv author listing is linked in `index.html`.

The DMS Symposium 2025 poster title and event details come from the supplied poster PDF. The joint presentation with Rajiv Mishra and second-prize award were provided by Abisek Dewan.
