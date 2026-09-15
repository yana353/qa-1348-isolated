# qa-1348-isolated

## Footer

The footer is implemented as a small browser-native component in `footer.js`. It
can be rendered into any existing footer host without a framework:

```html
<link rel="stylesheet" href="footer.css">
<footer data-footer data-brand="Your product"></footer>
<script type="module" src="footer.js"></script>
```

The component provides accessible navigation markup, keyboard-visible focus
states, and a responsive layout that stacks on narrow screens. The demo entry
point is `index.html`; serve the repository over HTTP so the browser can load
the ES module (for example, `python3 -m http.server`).
