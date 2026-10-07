---
title: Updating Workwrights
permalink: /updating/
lede: Your data lives in your own workspace, so updating the skill never touches it.
---

## How to update

1. Download the latest version from the [releases page]({{ site.links.repo }}/releases).
2. Remove the old skill and add the new one [the same way you installed the current version]({{ '/getting-started/install/' | relative_url }}).
3. Start a new chat and say **"wrks"**.

## What happens next

Workwrights records which version last updated your workspace.

- If only the skill changed, it tells you what's new, once.
- If a workspace file's structure changed, it explains what it will change, asks you first, adds what's missing and never deletes your data.
- A workspace made before versions were recorded is recognized and stamped automatically.
- If your workspace was made by a newer version than your skill, Workwrights leaves your files alone and suggests you update the skill.

{% capture body %}Updating never changes your master resume, evidence bank, ledger or settings without telling you first.{% endcapture %}
{% include callout.html kind="note" title="Your files are safe" body=body %}

See [what changed]({{ '/changelog/' | relative_url }}) in each version.
