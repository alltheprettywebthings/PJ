# Versioning

Workwrights uses [semantic versioning](https://semver.org): `major.minor.patch`, for example `0.10.0`.

Compare parts as whole numbers, left to right: 0.10.0 is newer than 0.9.0. A missing part counts as 0, so `0.9` is `0.9.0`.

## What counts as the "API"

What a user's saved workspace and habits depend on:

- The workspace file structure and settings keys (tracked by `schema_version`).
- The phrases and commands users say ("set up my job search", "switch to light search").
- The shape of the data the skill writes: ledger fields, tracker fields, the pay format.

## When to bump

| Bump | When | Examples |
| --- | --- | --- |
| **Major** (`1.0.0`) | Something a user relies on breaks: a non-additive migration, a renamed or removed command, a changed tracker field. | Renaming a settings key. |
| **Minor** (`0.11.0`) | New feature or visible behavior change that older workspaces still work with. | Editor choices, light mode, pay format. |
| **Patch** (`0.10.1`) | Wording, bug and docs fixes. | Fixing a typo in a setup message. |

Below `1.0.0` the project is in initial development and anything may change. Move to `1.0.0` when existing workspaces are expected to keep working.

`schema_version` is separate. Bump it only when a workspace file's structure changes, and add a step to `workwrights/references/migrations.md`.

## Release checklist

Keep these in step with each release:

1. `workwrights/SKILL.md`, the version line.
2. `workwrights/references/changelog.md`, a new entry at the top.
3. `docs/_config.yml`, `docs_version`.
4. `README.md`, "Latest version".
5. The git tag (`v0.10.0`) and the GitHub release, with the skill zip attached.
