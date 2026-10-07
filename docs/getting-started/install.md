---
title: Install Workwrights
lede: Add the skill to your AI, run setup, and start your first search.
---

## Before you start

Have these ready:

- **Your master resume.** 
- **A writing sample** that sounds like you, like a cover letter or a long email. Optional, but it helps Editor match your voice.
- **A tracker** like Airtable, Notion or a spreadsheet. Best for this workflow *and* for your own records, but you can start without one.

## Install the skill

<ol class="ww-steps">
<li>
  <h3 class="ww-steps__title">Download the skill</h3>
  <p>Download the <code>latest release</code> folder from the <a href="{{ site.links.repo }}">Workwrights repo</a>.</p>
</li>
<li>
  <h3 class="ww-steps__title">Add it to your AI</h3>
  <div class="ww-tabs" data-tabs-sync="ai">
    <div class="ww-tabs__list" role="tablist" aria-label="Your AI">
      <button class="ww-tabs__tab" type="button" role="tab" id="ai-tab-1" aria-controls="ai-panel-1" aria-selected="true">Claude</button>
      <button class="ww-tabs__tab" type="button" role="tab" id="ai-tab-2" aria-controls="ai-panel-2" aria-selected="false" tabindex="-1">Claude Code</button>
      <button class="ww-tabs__tab" type="button" role="tab" id="ai-tab-3" aria-controls="ai-panel-3" aria-selected="false" tabindex="-1">Another AI</button>
    </div>
    <div class="ww-tabs__panel" role="tabpanel" id="ai-panel-1" aria-labelledby="ai-tab-1" tabindex="0">
      <p>Download the latest release zip. Go to <strong>Customize &gt; Skills</strong>, click <strong>Add</strong>, upload the zip, and make sure the skill is turned on. Skills need code execution to be turned on.</p>
    </div>
    <div class="ww-tabs__panel" role="tabpanel" id="ai-panel-2" aria-labelledby="ai-tab-2" tabindex="0" hidden>
      <p>Download the latest release zip. Unzip the folder. Copy the folder to <code>~/.claude/skills/workwrights/</code>, or to <code>.claude/skills/</code> inside a project.</p>
    </div>
    <div class="ww-tabs__panel" role="tabpanel" id="ai-panel-3" aria-labelledby="ai-tab-3" tabindex="0" hidden>
      <p>Download the latest release zip. Unzip the folder. The skill is plain Markdown. Point your AI at <code>workwrights/SKILL.md</code> and ask it to follow it.</p>
    </div>
  </div>
</li>
<li>
  <h3 class="ww-steps__title">Make a project for your search</h3>
  <p>Recommended: create a dedicated project in Claude for your job search, and run everything there. Don't upload your resume into the project; keep it in your own storage instead, and simply point setup to the location of your resume.</p>
</li>
<li>
  <h3 class="ww-steps__title">Connect your storage</h3>
  <p>If you want your files in a cloud drive or tracker, add a connector first. It's usually the <strong>+</strong> button in your chat window.</p>
</li>
</ol>

## Run setup

Say **"Set up my job search."** Setup asks where you want your workspace to live, then for your master resume. **Those are the only two required steps.**

It then offers a few optional ones: your portfolio and profile links, a tracker, a voice profile and a deliverables folder. Do them now or later; setup keeps track of what's left.

At the end, setup offers a short snippet for your project instructions (or a `CLAUDE.md` in Claude Code), so future chats find your workspace automatically. Take it, and put it in your project instructions.

## Start searching

Say **"Find me jobs."** Scout asks which titles to search (or suggests some from your resume), then your location, seniority and job boards. Follow along and make choices.

{% capture body %}Searching the web for you may not work well on a free plan. If you are on a free plan, I highly recommend using light search mode; just say "switch to light search" and Workwrights will change a few things to reduce your usage. Say "switch to full search" to switch back. Scout can also generate search suggestions for you to perform manually, and paste back in for evaluation. See [Scout]({{ '/agents/scout/' | relative_url }}).{% endcapture %}
{% include callout.html kind="note" title="On a free plan" body=body %}

## Updating

From v0.5 on, Workwrights can update itself. Attach the new skill, ask your AI to scan it, and say **"wrks"**. It offers you some update options. If it needs to be re-pointed to your workspace, just tell it where to look.
