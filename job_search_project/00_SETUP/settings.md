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
