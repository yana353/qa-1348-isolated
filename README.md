# àlaCards eSIM home

The browser entry point implements the responsive logged-in Home experience from
the linked Alacards design. It includes destination search, popular eSIM plan
cards, the Top 10 Destinations strip, and the mobile primary navigation.

Run the demo over HTTP so the ES modules can load:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. The layout is mobile-first and renders as a
centered app surface on larger viewports. The page also includes the small,
dependency-free QA-1348 header and footer shell.

The header is implemented in `index.html` and `styles.css`; the àlaCards
experience uses `app.css` and `app.js`. No build step or package installation is
required.

The footer is implemented as a small browser-native component in `footer.js`.
It can be rendered into any existing footer host without a framework:

```html
<link rel="stylesheet" href="footer.css">
<footer data-footer data-brand="Your product"></footer>
<script type="module" src="footer.js"></script>
```

The component provides accessible navigation markup, keyboard-visible focus
states, and a responsive layout that stacks on narrow screens. The demo entry
point is `index.html`; serve the repository over HTTP so the browser can load
both ES modules.

The repository contains no external application shell, assets, or Figma export.
The àlaCards demo uses the self-contained visual treatment in `app.css`, while
the QA header exposes the repository identity without inventing additional
navigation or account controls.
