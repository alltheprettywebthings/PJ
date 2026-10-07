# Workwrights Docs

The documentation site for [Workwrights](https://github.com/alltheprettywebthings/Workwrights), built with Jekyll and the Workwrights design system, and published with GitHub Pages.

## Publish it on GitHub Pages

The site lives in `docs/` of the Workwrights repo and is built by `.github/workflows/pages.yml` (at the repo root) whenever `docs/` changes on `main`.

One-time setup, in the Workwrights repo:

1. Go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**. Don't use "Deploy from a branch": it builds with an older Jekyll than this site needs.
2. Merge a change to `docs/` (or run the workflow from the **Actions** tab). The first run takes a couple of minutes. If GitHub asks you to approve the `github-pages` environment, approve it.
3. Your site appears at `https://alltheprettywebthings.github.io/Workwrights/`. The workflow sets the base path for you, so links work there and on a custom domain later.

Once it's live, set `url` in `_config.yml` to the site's final address (used for the sitemap and link previews). The "Edit this page on GitHub" link is already set through `links.docs_edit_base`.

The workflow only runs in the public Workwrights repo. In any other copy of this repo it is skipped.

## Preview it on your Mac (optional)

You need Ruby 3.x. macOS's built-in Ruby is too old; install a current one with Homebrew (`brew install ruby`) and follow the PATH note it prints.

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Where things live

| Path | What it is |
| --- | --- |
| `_config.yml` | Site settings: title, version (`docs_version`), links, copyright holder. Update `docs_version` with each release. |
| `_data/nav.yml` | The side navigation, in reading order. Previous/next links and breadcrumbs follow it. |
| `_data/topnav.yml` | The top bar's section links. |
| `_layouts/doc.html` | The docs page frame: top bar, side nav, content, "On this page", footer. |
| `_layouts/default.html` | Plain pages (the 404). |
| `_includes/` | Top bar, side nav, breadcrumbs, pager, footer, callout, and inline icons. |
| `assets/css/tokens.css` | Design tokens (colors, type, spacing). Generated from the design system. |
| `assets/css/workwrights.css` | Component styles, copied from the design system's `bundle.css`. |
| `assets/css/site.css` | Site glue: Markdown tables, code fences, skip link, mobile drawer. |
| `assets/js/site.js` | Theme toggle, mobile nav, tabs, code-block Copy buttons, "On this page". |

## Writing pages

Pages are Markdown with front matter:

```yaml
---
title: Salary ranges
lede: One sentence under the title.
toc: false   # optional: hide "On this page"
---
```

Add each new page to `_data/nav.yml` so it appears in the nav and the previous/next links.

**Callouts** (note, tip, warning, danger):

```liquid
{% capture body %}Backblaze is my preferred offsite backup.{% endcapture %}
{% include callout.html kind="tip" title="Pro tip" body=body %}
```

**Steps, tabs and badges** are plain HTML using the design system's classes (`ww-steps`, `ww-tabs`, `ww-badge`). See `getting-started/install.md` for steps with tabs inside.

**Code** uses normal Markdown fences with a language (` ```shell `, ` ```text `). The Copy button and language label are added automatically.

Follow the voice and tone guide in the design system: talk to "you", sentence-case headings, agents named without "the", and no personal names anywhere on the site.

## Credits

Icons are from [Lucide](https://lucide.dev) (ISC; some from Feather, MIT), restyled for Workwrights. Their license is in `_includes/icons/LICENSE.txt` and must stay with them. Fonts are Young Serif and Cabin from Google Fonts.
