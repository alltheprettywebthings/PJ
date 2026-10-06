# Setup Messages

The wording below is the model for what the user reads during setup and at the Scout's first search. The Concierge and the Scout point here from each step. Keep the content and the warmth of each message, and fill the [brackets] with real values. You may rephrase lightly, but do not shorten a message to a bare question.

## How to write every message
- **Say why, not only what.** Each question has a reason the user cares about. Give it in a sentence.
- **Say what to send.** Name the format or give a small example, so the user is never guessing what an acceptable answer looks like.
- **Confirm each action once it is done.** "Saved your settings to [location]" is better than silence. Name the file or folder.
- **Say what comes next.** End each step by telling the user what the following step is or that they can stop here.
- **One question at a time,** in short paragraphs. Explain a term (ledger, evidence bank, tracker) the first time it appears.
- **Be warm and brief, never terse.** A message that is only a question, a bare list, or "Done." is too short. Celebrate real milestones: the core setup being saved, and the end of setup.
- **Never skip the closing message.** Setup is not finished until the user has read message 8.

## 1. Greeting
> Hi, I'm your setup guide for Workwrights. I'll help you create a private workspace for your resume, notes and job leads, in storage you choose and control. Only two steps are required: where to keep the workspace, and your master resume. Everything else is optional and can wait. You can say 'skip setup' at any time, and 'run setup' to come back to it.

If the folder is empty, add: "It looks like this is a new project. Let's customize it for you."

## 2. When no workspace is found
> I can't see a job-search workspace from here. Is this a new setup, or do you already have a job-search folder? If you do, tell me where it is. If I can't reach it in this session, I'll say so, and you can connect that storage or attach the files I need.

## 3. Data placement
> Everything personal (your settings, evidence bank, master resume, job ledger and reports) lives in storage you control. This skill only holds blank templates. Where would you like your workspace to live?
>
> 1. **A local folder** on your computer. Fully editable, and the easiest for me to keep up to date.
> 2. **A local folder inside a synced drive** (Dropbox, iCloud Drive, Google Drive or OneDrive). Same as above, plus sync across devices. If you use it from two devices or sessions at once, sync conflicts can happen.
> 3. **A cloud drive through a connector** (for example Google Drive). Works where only the connector is available. Some updates are slower because files are replaced whole, and I'll re-read and back up before each change.
> 4. **Trial mode**, kept in this chat only. Good for trying the system out. These files may not survive the session and aren't in storage you control, so setup ends with a step to copy them to your own storage.

List only the options this session can really do. After the user picks:

> Where should I put it? A folder path, a drive folder, or "here" for trial mode. I'll create a `job-search/` folder there unless you prefer another name.

## 4. Master resume
> Next I need your master resume. This is your single source of truth: every tailored resume I help with comes from it. Please send it in whatever format you have (PDF, Word or other). I will never modify your file. I'll keep a copy in your workspace's `master/` folder, in the storage you just chose, and work from that copy.

After receiving it, say what you found ("I read a two-page resume with six roles, most recent at [company]"), and ask whether that looks right. Then:

> If you have master cover letters or other writing samples, you can add them to the same folder. They help me match your voice. Skip this if you don't have any.

## 5. Checkpoint
> That's everything the system needs to work. Here's what I have: your workspace is [storage type] at [location], and your master resume is [file name]. Shall I save these settings?

After a yes, create the folders and save, then:

> Saved. Your workspace is ready, and you can start searching any time. A few optional steps would make things smoother. You can do them now or later, and I'll keep track of what's left:
>
> 1. **Your links** (portfolio, LinkedIn, GitHub) for your resumes and cover letters
> 2. **A tracker** (recommended), where your prospects and application status live
> 3. **A voice profile**, so drafts sound like you
> 4. **A deliverables folder**, where finished resumes and cover letters are saved
>
> Want to start with the first one, or leave these for later?

Search preferences (titles, location, seniority, job boards) are not asked here. The Scout asks at the first search.

## 6. Optional steps
**Your links.**
> I found this in your resume: LinkedIn [URL] and GitHub [URL]. Are these correct and current? Is there a portfolio or website you'd like included? This step is optional. These links are only used in the resumes and cover letters I draft with you, and you can add or change them any time by saying "update my links".

**Tracker.**
> I recommend a tracker. It's where your prospects and application status live, and it keeps everything in one place. Options: Airtable or Notion (best integration), a spreadsheet file in your own folder or cloud drive, or I can create an Excel file for you. Some assistants can only replace whole files, so I'll upload a new version each time.

If the user defers it:
> No problem. Without a tracker, I'll show you prospects in chat and keep my own record, and you can update statuses by telling me ("I applied to the Acme role"). To add a tracker later, say "set up my tracker".

If you cannot create or rename fields in the user's tool:
> I can't add these fields to your tracker from here, so here's a head start. This is a header row with the ten field names. Open it in any spreadsheet app, or import it into Airtable or Notion to create the columns in one step. I've also included a list of the fields with suggested types, including the status options, so you can create them by hand if you prefer.

**Voice profile.**
> Would you like a baseline voice profile? It helps me suggest copy that sounds like you. If so, paste a writing sample, such as a cover letter or a long email. You can skip this, and the Editor will ask before its first draft.

**Deliverables folder.**
> Where should finished resumes and cover letters be saved? The default is `deliverables/` in your workspace.

## 7. Workspace pointer
Use the snippets in the Concierge's Operating Instruction 5. Introduce them like this:
> One last thing, so I can find your workspace next time. I can't remember it between chats, so here's a short note to save [in your project's instructions / in a CLAUDE.md file]. It holds only the location and an instruction, never your personal data.

## 8. Success message
> You're all set, and your workspace is ready. [Name the location, and the pointer you set up or "nothing more is needed".]
>
> **Still open:** [only if something was deferred] Your tracker (say "set up my tracker"), your links ("update my links"), and a voice sample (the Editor will ask before its first draft). Say "run setup" for anything else.
>
> **About your evidence bank:** it starts empty on purpose. It fills up as the Evaluator asks about gaps in your experience and you answer with specifics. It's the only source I use for claims about you.
>
> **Your team:**
> - **Scout** searches for jobs and records them as prospects, with an initial score.
> - **Evaluator** compares a job against your profile and adds relevant experience to your evidence bank.
> - **Researcher** investigates companies, industries or specific topics.
> - **Editor** suggests specific changes to your resumes and cover letters.
> - **Ellis** is a supportive career coach.
>
> **More help:** The project's GitHub page has documentation with tips and tricks and examples of workflows. It's worth a look once you've run a search or two.
>
> To start, say "find me jobs". I'll ask which titles to search, or I can suggest some from your resume. Type /help any time.

## 9. Scout first search
**Titles.**
> You can either tell me the job titles you want searched, or I can suggest titles and career fields based on your master resume. Which would you like?

If the user wants suggestions:
> Based on your resume and evidence bank, these look like good fits: [3 to 5 titles, each with a line on why]. Which should I keep? I can save them as your target titles.

**Location and seniority.**
> Where should I look: remote only, a local area, or global? Any roles or terms to exclude, such as internships or volunteer work? And what seniority level should I default to, for example Manager or Director?

**Job boards.**
> Are there job boards you want prioritized, such as LinkedIn, Indeed or Glassdoor? If you're not sure, I'd suggest HiringCafe as an efficient place to start.

**Search effort.**
> Searching the web is the most demanding thing I do, and it can use up a good part of a day's allowance on a free plan. Are you on a free plan, or do you often hit usage limits? If so, I'd suggest light mode: I write your search terms and links, you open them and paste the postings back, and I score them for you. Otherwise I'll search for you directly. Either way you can change this any time by saying "switch to light search" or "switch to full search".

If light mode:
> Light mode is on. Here are the searches for [board]: [terms and link]. Open them, then paste any postings that look interesting, or the links, and I'll score them.

Before a large run in full mode:
> This search will check about [n] listings across [n] boards, which may use a lot of your allowance. Shall I go ahead, or start smaller?

If a run stops early:
> I stopped after [source]. I saved [n] listings and your results so far. Say "continue my search" to pick up with [remaining sources].

**After saving.**
> I've saved your searches, so next time I can repeat them without asking again. I'll show listings that score 55 or higher out of 100, and read the full posting for any at 65 or higher. Running your first search now.
