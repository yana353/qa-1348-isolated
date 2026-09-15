# àlaCards eSIM home

The browser entry point implements the responsive logged-in Home experience from
the linked Alacards design. It includes destination search, popular eSIM plan
cards, the Top 10 Destinations strip, and the mobile primary navigation.

Run the demo over HTTP so the ES module can load:

```sh
python3 -m http.server
```

Then open `http://localhost:8000/` in a browser. The layout is mobile-first and
renders as a centered app surface on larger viewports.

## Footer

The footer remains available as a small browser-native component in `footer.js`
for pages that need it. It can be rendered into any existing footer host without
a framework:

```html
<link rel="stylesheet" href="footer.css">
<footer data-footer data-brand="Your product"></footer>
<script type="module" src="footer.js"></script>
```

The component provides accessible navigation markup, keyboard-visible focus
states, and a responsive layout that stacks on narrow screens.
