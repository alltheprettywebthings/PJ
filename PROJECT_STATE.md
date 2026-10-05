# 📊 PROJECT STATE: Settings, Logs & Templates

This file contains the project configuration and activity logs.

---


--- START OF settings.md ---
# System Settings

*This is the single source of truth for your personalized system configuration. Agents will read this file to determine how to interact with your specific databases and tracking tools.*

## 1. Tracking System (Job Applications)
*The database where your prospects and application statuses are stored.*

- **System Type:** [e.g., Airtable, Notion, Google Sheets, or a simple text file]
- **System ID:** [e.g., Base ID, Page ID, or Spreadsheet URL]
- **Table/Sheet Name:** [e.g., "Job Applications"]

### Field Mappings
*The system uses generic field names. Map them to your specific database field names/IDs below.*

| Generic Name | User Field Name / ID | Description |
| :--- | :--- | :--- |
| `job_id` | [e.g., fldE0cONcOynliAqZ] | The unique identifier for a job/listing. |
| `status` | [e.g., Status] | Current stage (Prospect, Applied, etc.). |
| `match_score` | [e.g., Match Score] | Evaluator's triage score.
| `application_notes` | [e.g., Application Notes] | A place for the agents to add summaries/reports. |
| `job_description_url` | [e.g., URL] | Link to the original posting. |
| `pay` | [e.g., Salary] | Salary or compensation data. |
| `location_remote` | [e.g., Location] | Location or remote/onsite status. |

## 2. Digital Identity
*Personal links to be included in generated career materials.*

- **Portfolio/Website:** [URL]
- **LinkedIn:** [URL]
- **GitHub:** [URL]

## 3. Voice Profile
*The stylistic guidelines extracted from your writing samples.*

- **Tone/Register:** [e.g., Professional, direct, warm]
- **Stylistic Elements:** [e.g., Use of contractions, sentence length, punctuation preferences]
- **Recurring Phrases/Themes:** [e.g., Key words or sentence structures]

## 4. Search & Preference Configuration
*Customize how the Scout interacts with specific web sources.*

- **Preferred location scope:** [e.g., "Remote only", "Dallas area", "Global"]
- **Roles or terms to exclude:** [e.g., "Internships", "Volunteer"]
- **Default seniority level:** [e.g., "Manager", "Director"]

--- END OF settings.md ---


--- START OF project_tracker_template.md ---
# Project Tracker: [Project Name]
*Read this first at the start of every new chat. Update at the end of every working session.*
*Last updated: [Date]*

## 1. System State
- **Architecture:** Master-Derivative-Bank. `{{MASTER_LOCATION}}` (master resume, identity assets, master cover letters) + `{{EVIDENCE_LOCATION}}/evidence-bank.md` (verified facts and metrics) feed tailored derivatives in `{{OUTPUT_LOCATION}}`.
- **Bank status:** [Status of evidence-bank.md]
- **Master resume filename:** [Filename of provided master resume]
- **Master cover letters filenames:** [Filenames of provided master cover letters]

## 2. Conventions
- **Lifecycle:** [Lifecycle rules]
- **Filenames:** [Filename conventions]
- **Voice:** [Voice profile settings]
- **Evidence labels:** [Evidence labeling rules]
- **Never invent metrics.** Flag gaps instead.

--- END OF project_tracker_template.md ---


--- START OF target_titles.md ---
# Target Job Titles

*This is a reference list of titles to search. This is advice, not a rule set: it does not change the Scout's screens in `search_sources.md`. To put a title into a live search, add it there (see "Using this list").*

## Recommended Title Families (Examples)
Use this table to find inspiration for your own search terms. Populate the "Why it fits" column based on your specific expertise.

| Title Family (Example) | Why it fits (Example) |
|---|---|
| Director / Head of **[Specialty]** | [Describe how your experience aligns with this title] |
| **[Industry Role]** Manager | [Describe your expertise in this specific area] |
| **[Function]** Director | [Describe your seniority/specialization] |

## Good fit, lighter search
*Examples of titles that might appear in varied searches:*
- **Director of [Function]** / [Specialty]
- **[Function]** Manager / [Specialty]
- **[Industry]** Communications Lead

## Targeted Employer Categories
*Use this section to note specific industries or organizations you are targeting.*
- **[Category 1, e.g., Non-Profit/Foundation]**
- **[Category 2, e.g., Government/Public Sector]**
- **[Category 3, e.g., Corporate/Industry]**

## Skip, or handle carefully
*Examples of roles/levels that may not fit your target profile:*
- **[Role type]** below your target seniority.
- **[Function]** roles that do not match your specialization.

## Seniority note
[Note: define your preferred seniority level here, e.g., "Focusing on Director-tier roles, but also considering Manager-tier roles."]

## Title menu for Scout title runs (User Defined)
One-off runs only; not part of the regular batch. The Scout lists this menu, you pick an ID, and it runs that title's terms on the sources in `search_sources.md` ("Title runs"). **Defaults: remote-only, Director tier.** Add "+[Location]" for local roles and "+[Level]" to also run the [Level]-tier terms.

| ID | Title family | Director-tier terms (default) | Manager-tier terms (+Manager) |
|---|---|---|---|
| T01 | [Specialty 1] | [term 1] · [term 2] | [term 3] · [term 4] |
| T02 | [Specialty 2] | [term 1] · [term 2] | [term 3] · [term 4] |
| T03 | [Specialty 3] | [term 1] · [term 2] | [term 3] · [term 4] |

## Using this list
- **Current Scout screens** (`search_sources.md`) apply to anything found with these titles.
- **Title runs:** Use the menu above for one-off searches.
- **Equivalent titles:** Equivalent Director-tier titles (e.g., "Head of", "Associate/Deputy Director", "VP") are accepted when screening results even if they were not the search term.

--- END OF target_titles.md ---


--- START OF search_sources.md ---
# Search Sources (read by the Scout Kernel)

Edit this file to add, change or retire a search. Last reviewed [Date].

## Triage thresholds
[Define thresholds for full-posting second pass, etc.]
[Define which roles/terms to drop/filter]

## [Source Name]
[Instructions: URL pattern, search terms, or specific quirks for this source]

## [Source Name]
[Instructions: URL pattern, search terms, or specific quirks for this source]

...

## Title runs (one-off, on request; NOT part of the regular batch)
[Instructions for title-based runs, including default location and seniority settings]

--- END OF search_sources.md ---
