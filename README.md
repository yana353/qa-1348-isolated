# qa-1348-isolated

A small, dependency-free header and footer shell for the isolated QA-1348 fixture.

## Run locally

Serve the repository with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. The header is implemented in `index.html` and `styles.css`. No build step or package installation is required.

The footer is implemented as a small browser-native component in `footer.js`. It can be rendered into any existing footer host without a framework:

```html
<link rel="stylesheet" href="footer.css">
<footer data-footer data-brand="Your product"></footer>
<script type="module" src="footer.js"></script>
```

The component provides accessible navigation markup, keyboard-visible focus states, and a responsive layout that stacks on narrow screens. The demo entry point is `index.html`; serve the repository over HTTP so the browser can load the ES module.

The repository contains no application shell, assets, typography tokens, or Figma export. The header therefore only exposes the repository identity and does not invent navigation, account controls, assets, or responsive interaction states that cannot be verified from the design source.
