# 📖 Workwrights, the modular career intelligence system

v 0.8 note: Qualitative messages added to Scout and Evaluator to remind users that certain actions can use a large amount of their usage allowance.

v 0.7 note: When getting suggestions for tailored resume edits, the suggestions are now ranked by relevance.

v 0.6 note: Added a light search mode to help users of free AI plans reduce their token usage by Scout. To switch to light search, say "switch to light search".

v 0.5 note: Added versioning, an update method, and logic to flag low-quality job postings. To upgrade, just attach the new skill, ask your AI to scan it, and say "wrks"; it should give you some update options.

## The idea in one paragraph
You keep your own data. The skill holds only the logic (the personas and their rules) and blank templates. Your master resume, evidence bank, job ledger, reports and settings live in a workspace folder that **you** choose and control: a folder on your computer, a synced folder, or a cloud drive. Nothing personal is ever written into the skill itself.

## Install Notes
Before you start, have your master resume handy. A writing sample (a cover letter or a long email) is optional, but it helps the Editor match your voice. A dedicated tracker (Airtable, Notion, or a sheet somewhere) is best for this workflow *and* for your own records, but you can start without one.

1. Download the `workwrights` folder from this repo.
2. Install it as a skill:
    - **Claude (web or desktop):** zip the folder so that `workwrights/` is the root of the zip, then go to **Customize > Skills**, click **Add**, upload the zip, and make sure the skill is enabled. Skills need code execution to be turned on.
    - **Claude Code:** copy the folder to `~/.claude/skills/workwrights/` (or `.claude/skills/` inside a project).
    - **Another AI:** the skill is plain Markdown. Point your AI at `workwrights/SKILL.md` and ask it to follow it.
3. Recommended: create a dedicated project in Claude for your job search, and run everything there. Don't upload your resume into the project's knowledge; setup keeps it in your own storage instead.
4. If you want your files in a cloud drive or tracker, add a connector first (usually a + button in your chat window).
5. Say **"Set up my job search"**. The setup guide asks where you want your workspace to live, then for your master resume. **Those are the only two required steps.** It then offers a few optional ones (your portfolio and profile links, a tracker, a voice profile, a deliverables folder). Do them now or later; it keeps track of what's left.
6. At the end, setup offers a short snippet for your project instructions (or a `CLAUDE.md` in Claude Code) so that future chats find your workspace automatically. Take it.
7. Say **"Find me jobs"**. The Scout asks which titles to search (or can suggest some from your resume), then your location, seniority and job boards. Follow the instructions. Make choices. Have fun.

Every file is inspectable. You can see what's going on and change it if you want.

### Where your files end up
Your workspace folder looks like this:

```
job-search/
├── profile/        settings, evidence bank, target titles, saved searches
├── master/         your master resume (never modified)
├── job_search/     the ledger of listings, snapshots, run digests
├── drafts/         Evaluator and Researcher reports
└── deliverables/   tailored resumes and cover letters
```

If you skip the tracker, the system still works: the Scout shows prospects in chat and keeps its own record in the ledger. Say "set up my tracker" whenever you want to add one.

**Big note**: If you use this to search jobs for you, it may not work well if you're on a Free plan. Claude restricts that pretty heavily; ChatGPT is a little more free in its free features. I don’t recommend one over the other; this is meant to be adaptable to any AI.

**Second big note**: Need to customize this? Just do it. Tell your AI how you want to change things. It's yours.

## 🧠 The Core Philosophy: "The Evidence Bank"
The most important part of this system is your files: Your resume and evidence bank.
- **The Master Resume** is your static history.
- **The Evidence Bank** is your dynamic, conversational collection of "wins," metrics, and expanded context. At any point, you can tell an agent to add something to your evidence bank. Be specific; numbers help. Pull fresh analytics if you can. The evidence bank starts empty on purpose, and it is the only source the system uses for claims about you.
- **The Goal:** Every interaction with an agent should attempt to move a "vague" achievement from your resume into a "quantifiable" achievement in your evidence bank. Then, you can use those to determine where you really score against a job listing.

## Pro tip(s)

Use the persona names to perform tasks in quick sequence;
- Scout, take a look at this job listing.
- Evaluator, give me a gap analysis on that listing.
- Editor, suggest ways that I can address those gaps.

If you have more experience that's not on your master resume, tell any agent to 'store that in my evidence bank'.

Want to see your current prospects? Say "Show me my current prospects".
Applied, or got rejected? Tell Scout in the conversation ("I applied to the Acme role", "mark Initech as rejected") and it updates your tracker, so you never have to leave the chat.
Need to change something about your setup? Say "update my links", "set up my tracker", or "run setup".
Getting burnt out? Talk to Ellis. Just keep in mind, an AI is no substitute for a therapist.
***Don't ask the AI to write your resume or cover letter for you***. They will, and you'll lose the human quality of your resume. Instead, ask them to suggest edits, and then make those yourself. The Evaluator, specifically, may argue about your word choice. That's part of its personality.

---

## 🔄 The Workflow Lifecycle

You can run this as multiple chats in a project or one chat. How you do is up to you. If you run in multiple chats, tell a chat to initiate a certain kernel (Scout, Researcher, Evaluator, Editor, or Ellis) and keep it that way. If you use one chat, direct your comments to a specific agent, like it's a Slack chat; "Ellis, I'm feeling burnt out. Talk to me about coping strategies," or "Scout, find me Director of Ecommerce jobs on my saved job boards".

### Phase 1: Searching *or* giving Scout your prospects
Either ask Scout to search for job titles for you, *or* give Scout some search results. The first time you search, Scout asks a few questions: which titles to search (you can name them, or ask Scout to suggest titles from your resume), your location scope and seniority, and your preferred job boards. It saves your answers so later searches repeat the same way.
1.  **Automatic:** Provide a title and job board(s). Scout will find, de-duplicate, and provide a preliminary rating.
2.  **Manual:** Give Scout URLs or copy-paste text, and Scout will create a prospects list.
3.  **The 55 Rule:** Scout only shows jobs with a fit score of **55/100 or higher** as prospects.
4.  **Tracking:** If you like the prospects, tell Scout which ones to write to your tracking system as prospects. It only adds the ones you approve.

### Phase 2: Deep Analysis & Gap Filling (The Evaluator)

1.  **The 65 Rule:** The **Evaluator** only automatically performs full analyses on jobs scored **65/100 or higher** by Scout. You can change this if you want. **Note**: The evaluator is very stringent. Most jobs won't make it to 70/100. If a job hits 70 or above it is a strong match. 80 is a very strong match.
2.  **Gap Analysis:** The Evaluator compares the job listing against your Master Resume and Evidence Bank. It will present a side-by-side gap analysis.
3.  **Evidence Harvesting (Crucial):** The Evaluator will ask you to fill specific gaps. 
    *   *Example:* If you say "I increased traffic," the Evaluator will prompt you for **metrics**: *"By what percentage? Over what timeframe?"*
    *   Once you provide these details, the Evaluator will ask to add them to your **Evidence Bank**.
    *   Expect it to be very hard on you. That is its job.
4. If you decide to apply, tell the agent to mark that job as applying or applied or whatever your preferred status is.

### Phase 3: Tailoring & Execution (The Editor)
Once the gaps are filled, it is time to create your application materials.
1.  **Resume Tailoring:** Ask the Editor for advice on specific bullet points. The Editor can generate drafts, but **the user should always perform the final edits** to maintain authentic voice. *This is how you avoid an AI agent lying on your resume: You write it.*
2.  **Cover Letters:** The Editor is highly capable of suggesting tailoring strategies for cover letters to match specific job requirements. It can even help you write, but it has strong opinions on the parts you should write. Ultimately, if the Editor writes something, make sure you re-write it. Human voice wins.

### Phase 4: Deep Research (The Researcher)
If a job listing is complex, you suspect there might be a controversy, or a company is new to you, use the **Researcher**. Because the system maintains job IDs and URLs, the Researcher can perform deep-dives into company culture, industry trends, or specific job requirements.

### Phase 5: Logging
Tell any agent to log or update a job with a particular status; prospect, applied, not applied, rejected, whatever. Then ask the AI to tell you what your prospects are, or tell it that you have an interview, or whatever it is. All that data goes into your tracking system (or, if you skipped the tracker, into the ledger in your workspace). You can perform meta-analyses and see what your response rate is on certain types of resumes, or certain job titles, or certain scores, using your tracking system or PJ.

### 🛡️ Emotional Support (Ellis)
Career hunting is taxing. If you feel overwhelmed, discouraged, or just need to vent, **Ellis** is always available. Ellis will use your actual evidence, listen to your concerns, and validate you. Ellis will never do toxic positivity. Your feelings are real. Job searches are hard. Say things like, "Ellis, I'm feeling burnt out by this job search," or "Ellis, I feel like I'm an impostor," and Ellis will listen.

### Feedback
Want to suggest an improvement? Email [me](mailto:43lgngb0@anonaddy.me) and I'll take a look. This is free, but I'll provide support if I can.
