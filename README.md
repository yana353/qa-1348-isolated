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

Result: PASS. The fresh unlabeled issue fixture is [issue #5](https://github.com/yana353/qa-1348-isolated/issues/5),
created on 2026-09-16 at 08:32:11 UTC with the title
`TSK-1361 regression check: fresh no-label issue intake`. Its issue event history shows no
label event between creation and the first `ready_for_dev` label at 2026-09-17 08:26:13
UTC, so the fixture entered the intake window with no labels. The later `in_progress`
transition at 08:31:29 UTC confirms that the workflow continued after pickup.

### Boundary and intake-window evidence

The GitHub issues endpoint was probed with `state=all`, `sort=created`,
`direction=asc`, and `per_page=4`:

| Request page | Returned issue numbers | Boundary observation |
| --- | --- | --- |
| 1 | 1, 2, 3, 4 | The response included a `rel="next"` link. |
| 2 | 5 | Issue #5 was slot 1 on page 2, the first item after the page-1/page-2 boundary; the response included a `rel="prev"` link. |

Thus the five-position intake-window probe placed issue #5 at global position 5,
page 2, slot 1 (`offset=4`), and the issue was present there despite having no
labels when it was created. The captured boundary facts and event timestamps are
stored in [`reports/tsk-1361-intake-evidence.json`](reports/tsk-1361-intake-evidence.json).
The probe URLs were:

```text
GET https://api.github.com/repos/yana353/qa-1348-isolated/issues?state=all&sort=created&direction=asc&per_page=4&page=1
GET https://api.github.com/repos/yana353/qa-1348-isolated/issues?state=all&sort=created&direction=asc&per_page=4&page=2
GET https://api.github.com/repos/yana353/qa-1348-isolated/issues/5/events?per_page=100
```

The PM-agent implementation and its private sweep log are not present in this
repository, so this record does not claim to reproduce that implementation. It
does record both observable sweep evidence (the `ready_for_dev` pickup) and the
explicit pagination-boundary probe. No intake or issue metadata code was changed.

The regression decision is deliberately asymmetric: issue #5 present in the
observed result is a pass; issue #5 absent is recorded as `REGRESSION against
TSK-1361`, never as a successful check. Both branches are covered by
`test_tsk_1361.py`.

The existing `QA-1362` failing test in `test_calc.py` is an unrelated, intentional baseline
failure and should remain classified as an inherited/unverified failure.
