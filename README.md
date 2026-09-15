# qa-1348-isolated

A small, dependency-free header shell for the isolated QA-1348 fixture.

## Run locally

Serve the repository with any static web server, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. The header is implemented in `index.html` and `styles.css`. No build step or package installation is required.

The repository contains no application shell, assets, typography tokens, or Figma export. The header therefore only exposes the repository identity and does not invent navigation, account controls, assets, or responsive interaction states that cannot be verified from the design source.
