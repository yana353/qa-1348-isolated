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

## TSK-1361 regression check

The fresh unlabeled issue fixture is [issue #5](https://github.com/yana353/qa-1348-isolated/issues/5),
created on 2026-09-16 with the title `TSK-1361 regression check: fresh no-label issue intake`.
The issue was picked up by the PM sweep on 2026-09-17 at 08:26 UTC (the `ready_for_dev`
transition), and subsequently moved to `in_progress` at 08:31 UTC. This confirms that
the newly created issue was discovered even though it started without labels.

This repository does not contain the PM-agent intake implementation or sweep logs, so
pagination-boundary behavior cannot be independently inspected here. No intake or issue
metadata code was changed for this black-box check; the external observation above is the
regression result for TSK-1361.

The existing `QA-1362` failing test in `test_calc.py` is an unrelated, intentional baseline
failure and should remain classified as an inherited/unverified failure.
