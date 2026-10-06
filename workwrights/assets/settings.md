# System Settings

*This is the single source of truth for your personalized system configuration. Agents will read this file to determine how to interact with your specific databases and tracking tools.*

## Setup Status
*Written by the Concierge. `setup_completed: true` means the required core (data placement and the master resume) is done. `setup_deferred` lists optional steps the user put off, such as the tracker, the voice profile or the digital identity links. `search_mode` is `full` or `light` (see the Scout); it defaults to `full` when missing. `skill_version` and `schema_version` record which version of Workwrights last updated this workspace, so a newer skill can bring an older workspace up to date.*

```
setup_completed: false
setup_deferred: none
search_mode: full
skill_version: [written by the Concierge]
schema_version: [written by the Concierge]
```

## 1. Tracking System (Job Applications)
*The database where your prospects and application statuses are stored.*

- **System Type:** [e.g., Airtable, Notion, Google Sheets, or a simple text file; use `none` to run without a tracker]
- **System ID:** [e.g., Base ID, Page ID, or Spreadsheet URL]
- **Table/Sheet Name:** [e.g., "Job Applications"]

### Field Mappings
*The system uses generic field names. Map them to your specific database field names/IDs below.*

| Generic Name | User Field Name / ID | Description |
| :--- | :--- | :--- |
| `job_id` | [e.g., fldE0cONcOynliAqZ] | The unique identifier for a job/listing. |
| `company` | [e.g., Company] | The employer or organization name. |
| `title` | [e.g., Job Title] | The job title as posted. |
| `status` | [e.g., Status] | Current stage (Prospect, Applied, etc.). |
| `match_score` | [e.g., Match Score] | Evaluator's triage score. |
| `application_notes` | [e.g., Application Notes] | A place for the agents to add summaries/reports. |
| `job_description_url` | [e.g., URL] | Link to the original posting. |
| `board` | [e.g., Board] | The job board or source where the listing was found. |
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
*Customize how the Scout interacts with specific web sources. The Scout fills these in the first time it searches.*

- **Preferred job boards:** [e.g., "HiringCafe", "LinkedIn", "Indeed"]
- **Preferred location scope:** [e.g., "Remote only", "Dallas area", "Global"]
- **Roles or terms to exclude:** [e.g., "Internships", "Volunteer"]
- **Default seniority level:** [e.g., "Manager", "Director"]

## 5. Locations
*Where the system keeps your files, chosen during setup. Only change these if you move your workspace or want something other than the default Folder Layout.*

- **Storage type:** [local folder, synced local folder, cloud drive, or trial]
- **Project root:** [Full path or drive location of the folder that contains this file, e.g., `job-search/`]
- **Deliverables folder:** [Default: `deliverables/` inside the project root, or a custom path]
