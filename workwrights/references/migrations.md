# Migrations: bringing an older workspace up to date

Read this file only when `schema_version` in `{{PROJECT_ROOT}}/profile/settings.md` is lower than the schema at the top of `SKILL.md`, or is missing.

## Ground rules

- **Additive only.** Add missing keys, fields and sections. Never delete, rename or overwrite the user's data, and never touch `master/`.
- **Tell, ask once, then do.** Say in plain words what will change and why, wait for a yes, apply the steps, then report what changed.
- **Safe to repeat.** Check whether each step is already done before doing it. If a step was half-finished in an earlier chat, finish it.
- **Their tools may limit you.** If you cannot edit the user's tracker (a spreadsheet or database you cannot change), give them the exact new column or field to add and let them do it. Do not pretend it is done.
- **Finish by stamping.** Set `schema_version` and `skill_version` in settings to the current values and tell the user what was updated.
- **Never block.** If the user declines or you cannot finish, keep working with the defaults below and offer again next time, at most once per chat.

## Defaults for missing items

Treat anything not listed here as required, and ask the user for it.

| Missing | Default |
|---|---|
| `skill_version` or `schema_version` in settings | Workspace is schema 1 from a release before 0.5 |
| `setup_deferred` | `none` |
| `search_mode` | `full` |
| A ledger line field the current Scout or Evaluator writes | Read as empty (null) |
| A tracker field the user has not mapped | Skip that field when writing to the tracker; do not invent a mapping |

## Schema 1 (releases 0.4 and 0.5)

Workspace layout as described in `SKILL.md`: `profile/settings.md`, `profile/evidence-bank.md`, `profile/target_titles.md`, `profile/search_sources.md`, `profile/project_tracker.md`, `master/`, `job_search/ledger/` (monthly `.jsonl`), `job_search/listings/`, `job_search/runs/`, `drafts/`, `deliverables/`.

There is no migration to schema 1. A workspace without stamps from release 0.4 is already schema 1. Add the two stamp lines to the Setup Status block of settings and stop.

## Adding a future migration

When a release changes a workspace file's structure, raise the schema number in `SKILL.md`, add a section here named "Schema N to N+1" with numbered, repeatable steps, and add a line about it to `changelog.md`. Prefer a change that needs no migration (a new optional key with a default in the table above).
