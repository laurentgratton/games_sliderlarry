# Play Patch

A static showcase for our games. Each playable game belongs in `games/<game-slug>` as a Git submodule and should expose an `index.html` at its root.

## Add a game

```sh
git submodule add <repository-url> games/<game-slug>
```

Then add its title, description, path, tag, emoji, and accent as another object in `games.json`. The `path` must end in `/`, e.g. `games/<game-slug>/`.

## Preview locally

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser. Clone with `--recurse-submodules` (or run `git submodule update --init --recursive`) to retrieve the games.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` deploys the site on every push to `main` and can also be run manually. It checks out submodules recursively, so each game's files are included in the published site.

In the GitHub repository, open **Settings → Pages** and set the source to **GitHub Actions** once. The next push to `main` will publish the showcase.
