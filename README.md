# 📖 User Guide: PJ, the AI architecture for job searching

v 0.2 note: **This** is a job search architecture that's designed to be used with any AI. This is designed around the idea of central memory and agentic cognitive architectures. The central memory (your database or sheet) helps to avoid hallucinations. If you start to see hallucinations, just open a new chat in the same project, and tell it to read the documents to get up to speed. That will keep the context window to a minimum, which is a major cause of AI mistakes.

## Install Notes:
1. Create a folder in Google Sheets, or a database in Notion or Airtable (or similar). Remember the name of your folder or database to give to your AI.
2. Add your master resume to that folder, or give it to your AI when it asks for it.
3. Download the PJ.zip file (the rest of the files are for power users to tweak or whatever).
4. Unzip and note where the folder and files go.
5. Start a new project in Claude, ChatGPT or LM Studio or whatever you use.
6. Add the files to your new project.
7. Add a connector to your source; this is usually a + button in your chat window.
8. Tell your AI "Initialize SYSTEM_CORE".
9. Follow the instructions. Make choices. Have fun.

Every file is inspectable. You can see what's going on and change it if you want.

**Big note**: If you use this to search jobs for you, it may not work well if you're on a Free plan. Claude restricts that pretty heavily; ChatGPT is a little more free.

**Second big note**: Need to customize this? Just do it. Tell your AI how you want to change things. It's yours.

## 🧠 The Core Philosophy: "The Evidence Bank"
The most important part of this system is your files: Your resume and evidence bank.
- **The Master Resume** is your static history.
- **The Evidence Bank** is your dynamic, conversational collection of "wins," metrics, and expanded context. At any point, you can tell an agent to add something to your evidence bank. Be specific; numbers help. Pull fresh analytics if you can.
- **The Goal:** Every interaction with an agent should attempt to move a "vague" achievement from your resume into a "quantifiable" achievement in your evidence bank. Then, you can use those to determine where you really score against a job listing.

## Pro tip(s)

Use the persona names to perform tasks in quick sequence;
- Scout, take a look at this job listing.
- Evaluator, give me a gap analysis on that listing.
- Editor, suggest ways that I can address those gaps.

If you have more experience that's not on your master resume, tell any agent to 'store that in my evidence bank'.

Want to see your current prospects? Say "Show me my current prospects".
Get rejected? Tell an agent to update a job listing to status=rejected.
Getting burnt out? Talk to Ellis. Just keep in mind, an AI is no substitute for a therapist.
***Don't ask the AI to write your resume or cover letter for you***. They will, and you'll lose the human quality of your resume. Instead, ask them to suggest edits, and then make those yourself. The Evaluator, specifically, may argue about your word choice. That's part of its personality.

---

## 🔄 The Workflow Lifecycle

You can run this as multiple chats in a project or one chat. How you do is up to you. If you run in multiple chats, tell a chat to initiate a certain kernel (Scout, Researcher, Evaluator, Editor, or Ellis) and keep it that way. If you use one chat, direct your comments to a specific agent, like it's a Slack chat; "Ellis, I'm feeling burnt out. Talk to me about coping strategies," or "Scout, find me Director of Ecommerce jobs on my saved job boards".

### Phase 1: Searching *or* giving Scout your prospects
Either ask Scout to search for job titles for you, *or* give Scout some search results.
1.  **Automatic:** Provide a title and job board(s). Scout will find, de-duplicate, and provide a preliminary rating.
2.  **Manual:** Give Scout URLs or copy-paste text, and Scout will create a prospects list.
2.  **The 55 Rule:** Scout only shows jobs with a fit score of **55/100 or higher** as prospects.
3.  **Tracking:** If you like the prospects, tell Scout to write them to your tracking system as prospects.

### Phase 3: Deep Analysis & Gap Filling (The Evaluator)

1.  **The 65 Rule:** The **Evaluator** only automatically performs full analyses on jobs scored **65/100 or higher** by Scout. You can change this if you want. **Note**: The evaluator is very stringent. Most jobs won't make it to 70/100. If a job hits 70 or above it is a strong match. 80 is a very strong match.
2.  **Gap Analysis:** The Evaluator compares the job listing against your Master Resume and Evidence Bank. It will present a side-by-side gap analysis.
3.  **Evidence Harvesting (Crucial):** The Evaluator will ask you to fill specific gaps. 
    *   *Example:* If you say "I increased traffic," the Evaluator will prompt you for **metrics**: *"By what percentage? Over what timeframe?"*
    *   Once you provide these details, the Evaluator will ask to add them to your **Evidence Bank**.
    *   Expect it to be very hard on you. That is its job.
4. If you decide to apply, tell the agent to mark that job as applying or applied or whatever your preferred status is.

### Phase 4: Tailoring & Execution (The Editor)
Once the gaps are filled, it is time to create your application materials.
1.  **Resume Tailoring:** Ask the Editor for advice on specific bullet points. The Editor can generate drafts, but **the user should always perform the final edits** to maintain authentic voice. *This is how you avoid an AI agent lying on your resume: You write it.*
2.  **Cover Letters:** The Editor is highly capable of suggesting tailoring strategies for cover letters to match specific job requirements. It can even help you write, but it has strong opinions on the parts you should write. Ultimately, if the Editor writes something, make sure you re-write it. Human voice wins.

### Phase 5: Deep Research (The Researcher)
If a job listing is complex, you suspect there might be a controversy, or a company is new to you, use the **Researcher**. Because the system maintains job IDs and URLs, the Researcher can perform deep-dives into company culture, industry trends, or specific job requirements.

### Phase 6: Logging
Tell any agent to log or update a job with a particular status; prospect, applied, not applied, rejected, whatever. Then ask the AI to tell you what your prospects are, or tell it that you have an interview, or whatever it is. All that dat goes into the CSV. You can perform meta-analyses and see what your response rate is on certain types of resumes, or certain job titles, or certain scores, if you take the CSV and put it into whatever AI or spreadsheet software you prefer.

### 🛡️ Emotional Support (Ellis)
Career hunting is taxing. If you feel overwhelmed, discouraged, or just need to vent, **Ellis** is always available. Ellis will use your actual evidence, listen to your concerns, and validate you. Ellis will never do toxic positiviy. Your feelings are real. Job searches are hard. Say things like, "Ellis, I'm feeling burnt out by this job search," or "Ellis, I feel like I'm an impostor," and Ellis will listen.

### Feedback
Want to suggest an improvement? Email [me](ben@theframeworkfile.com) and I'll take a look. This is free, but I'll provide support if I can.
