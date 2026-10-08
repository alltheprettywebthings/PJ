# What's new in Workwrights

Newest first. Versions are major.minor.patch; older entries below use two parts (0.9 means 0.9.0). When you tell the user about an update, summarize the entries between their `skill_version` and the current version in two or three plain sentences. Skip internal details.

## 0.10.0
- Pay in your tracker and in Scout's tables now uses one consistent format: `$112.5-150K`, `$150K`, `$68.9K+`, `$45/hr`, `est. $102-119K (Idealist)` or `Not posted`. The exact posted text is still kept in Scout's own record.
- Existing tracker entries are not changed. Workspace schema: 1 (no migration needed).

## 0.9
- The Editor now asks once whether you want suggested changes or pre-written sentences, and whether to list edits by relevance or in resume order. It remembers your answers, and you can switch any time or override them for one request.
- Workspace schema: 1 (no migration needed; the new settings have defaults).

## 0.8
- In light search mode, the scored list now says that a full Evaluator report uses several times more of your allowance than a short score, so you can choose which listings deserve one.
- Workspace schema: 1 (no migration needed).

## 0.7
- The Editor now ranks suggested edits by how much they matter to the posting, tags each with the requirement it addresses, and groups any that need evidence you haven't added yet.
- Workspace schema: 1 (no migration needed).

## 0.6
- Added search effort: Workwrights asks once whether you are on a free plan or often hit usage limits, and offers a light mode where it writes your search terms and links, you browse and paste postings back, and it scores them. Say "switch to light search" or "switch to full search" any time.
- Large searches ask before they start, and save after each source so a usage limit never loses your results. "Continue my search" picks up where it stopped.
- Workspace schema: 1 (no migration needed; `search_mode` defaults to `full`).

## 0.5
- Added a "Dense or vague postings" check to the Evaluator: it separates the real requirements from buzzwords, states how confident it is, and suggests questions to ask the recruiter.
- Workspaces now record which version of Workwrights last updated them, so future updates can bring an older workspace forward without touching your data.
- The setup success message links to the renamed Workwrights GitHub page.
- Workspace schema: 1 (no migration needed).

## 0.4
- First release under the name Workwrights ("wrks"), with tiered setup, an optional tracker, Scout status updates, and monthly ledger files.
