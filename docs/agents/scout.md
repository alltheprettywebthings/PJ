---
title: Scout
lede: Scout finds jobs, or inspects the ones you find, so you can see which are solid prospects and which aren't worth your time.
---

Scout also flags problems early, like a title that doesn't match the work, or a listing that says "remote" while the job requires four days a week in the office. From v0.5, Workwrights also flags low-quality job postings.

Scout only shows jobs with a fit score of **55 out of 100 or higher** as prospects.

## On a free plan

Not every free plan lets your AI browse the web or connect to other services. If yours doesn't, either;

- find the listings yourself and give them to Scout, or
- ask Scout to generate some search suggestions for you

You can give it a list of URLs for a quick pass, do a copy-paste of an entire page of search results, or give it a page to look at. If it can't do something, it'll tell you.

To use fewer tokens, use light search (added in v0.6). The first time you search, Scout asks whether you're on a free plan or often hit usage limits, and suggests light search if you are. You can also switch any time:

> Switch to light search.

In light search, Scout writes search terms and links for your job boards, and you open them and paste the postings back. Scout scores what you paste with a short score and one line each. If Scout does browse, it stays to one board and about ten listings, then offers more. A full Evaluator report reads your resume, your evidence bank and the whole posting, so it uses several times more of your allowance than a short score. Look at the scored list first, then ask for reports on listings that sound like they're worth your time.

To go back, say:

> Switch to full search.

In full search, Scout asks before a large run, saves as it finishes each source, and **picks up where it stopped if you hit a limit**. Say **"continue my search"**.

## On a paid plan

Scout can usually open a browser, search the web for you, scrape the listings and log prospects. It can even schedule runs, so you can have it pull everything at a pre-defined time; 5 PM on a Tuesday, or whenever suits you.

{% capture body %}You don't need a paid plan. If the $20 a month is tough, don't worry: this is all designed to work without premium tools. They save time, but they aren't necessary.{% endcapture %}
{% include callout.html kind="note" title="Paid plans are optional" body=body %}

{% capture body %}Searching and scraping can use a large share of your plan's usage allowance. From v0.8, Scout reminds you before initiating heavier actions.{% endcapture %}
{% include callout.html kind="warning" title="Watch your usage" body=body %}

## Keep your tracker up to date

Applied, or got rejected? Tell Scout in the chat ("I applied to the Acme role", "mark Initech as rejected") and it updates your tracker, so you never have to leave the conversation.

## How pay is written

Pay in your tracker and in Scout's tables uses one format (added in v0.10.0), so it sorts and compares cleanly:

| Posted as | Recorded as |
| --- | --- |
| $112,500 to $150,000 a year | `$112.5-150K` |
| $90,000 - $100,000 | `$90-100K` |
| $150,000 | `$150K` |
| From $68,900 | `$68.9K+` |
| $250,000-$350,000 plus equity | `$250-350K + equity` |
| $45 per hour | `$45/hr` |
| No pay shown, estimate from a pay site | `est. $102-119K (Idealist)` |
| No pay shown | `Not posted` |

Scout keeps the exact posted wording in its own record, so nothing is lost. Existing tracker entries are not rewritten.
