---
title: The workflow
permalink: /workflow/
lede: Five phases take a job from a search result to a logged application. You can run them in one chat or several.
---

## One chat or several

How you run Workwrights is up to you; the tool is workflow-agnostic.

- **Several chats in a project:** start each chat with one agent (Scout, Evaluator, Editor, Researcher or Ellis) and keep it that way.
- **One chat:** address each message to an agent by name, like a team chat. "Ellis, I'm feeling burnt out. Talk to me about coping strategies." Or "Scout, find me Director of Ecommerce jobs on my saved job boards."

## Scout can search for you, or you can save your usage

- Want to use less of your usage allowance? Say "switch to light search" to switch to a lower-usage mode.
- Want Scout to run searches for you? Say "switch to full search" to switch from lower-usage to higher-automation.
- Changing modes is non-destructive and both modes write to your ledger, evidence bank, and tracker, as you decide to.

## Phase 1: Search, or give Scout your prospects

Either ask [Scout]({{ '/agents/scout/' | relative_url }}) to search for job titles, *or* give Scout some search results. The first time you search, Scout asks a few questions: which titles to search (name them, or ask Scout to suggest some from your resume), your location and seniority, and your preferred job boards. It saves your answers so later searches run the same way.

- **Automatic:** give a title (or select one from Scout's suggested titles) and one or more job boards. Scout finds listings, removes duplicates and gives each a first-pass rating.
- **Manual:** give Scout URLs or pasted text, and it builds a prospects list.
- **The 55 rule:** Scout only shows jobs with a fit score of **55 out of 100 or higher** as prospects.
- **Tracking:** tell Scout which prospects to write to your tracker. It only adds the ones you approve.

## Phase 2: Analyze and fill gaps

[Evaluator]({{ '/agents/evaluator/' | relative_url }}) automatically runs a full analysis on jobs Scout scored **65 or higher**. You can change that threshold.

1. **Gap analysis.** Evaluator compares the listing with your master resume and evidence bank, side by side.
2. **Evidence harvesting.** Evaluator asks you to fill specific gaps, pushes for metrics, and asks to add your evidence to your evidence bank. Expect it to be hard on you; that's its job.
3. **Decide.** If you decide to apply, tell the agent to mark the job as applying, applied, or whatever status you use.

{% capture body %}Evaluator is strict. Most jobs won't reach 70. A score of 70 or above is a strong match, and 80 is a very strong one. Don't expect 100.{% endcapture %}
{% include callout.html kind="note" title="Reading the scores" body=body %}

## Phase 3: Tailor your application

Once the gaps are filled, it's time to make your application materials with [Editor]({{ '/agents/editor/' | relative_url }}).

- **Resume:** ask Editor for advice on specific bullet points. It can draft, but **you always make the final edits**. That's how you keep an AI from lying on your resume: you write it.
- **How it suggests:** Editor asks once whether you want suggested changes or pre-written sentences, and whether to list edits by relevance or in resume order. You can change either any time.
- **Cover letter:** Editor is good at suggesting how to tailor a letter to a job. It can help you write, and it has strong opinions about which parts you should write yourself. If Editor writes something, rewrite it. Human voice wins.

## Phase 4: Research the company

If a listing is complex, you suspect a controversy, or the company is new to you, use [Researcher]({{ '/agents/researcher/' | relative_url }}). Because Workwrights keeps job IDs and URLs for each listing (if provided), Researcher can dig into company culture, industry trends or specific requirements.

## Phase 5: Log what happened

Tell any agent to log or update a job's status: prospect, applied, not applied, rejected, whatever you use. Ask for your current prospects, or tell it you have an interview. Everything goes into your tracker, or into the ledger in your workspace if you skipped the tracker.

Over time you can look for patterns, like your response rate by resume version, job title or score, and iterate.

## Along the way: Ellis

Job searches are hard. If you feel overwhelmed or discouraged, or just need to vent, [Ellis]({{ '/agents/ellis/' | relative_url }}) is always there. Ellis is a supportive career coach.
