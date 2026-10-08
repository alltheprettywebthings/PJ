# Tracker Fields

*Use this when the assistant cannot create the fields in your tracker for you. Create these ten fields (columns) in Airtable, Notion, Google Sheets or any other tool, then tell the Concierge the name or ID of each one if you changed the names. A ready-made header row is in `tracker_template.csv`: open it in any spreadsheet app, or import it into Airtable or Notion to create the columns in one step.*

| Field | Suggested type | What goes in it |
| --- | --- | --- |
| `job_id` | Text | The unique ID the Scout gives each listing (lowercase `company--title`). Used to match records. |
| `company` | Text | The employer or organization name. |
| `title` | Text | The job title as posted. |
| `status` | Single select | Prospect, Applied, Submitted, Contacted, Interview Scheduled, Interviewed, Rejected, Withdrawn, Not Applying. |
| `match_score` | Number | The Scout's or Evaluator's score, 0 to 100. |
| `application_notes` | Long text | Summaries, report paths, file names and dated status notes added by the agents. |
| `job_description_url` | URL | Link to the original posting. |
| `board` | Text | The job board or source where the listing was found. |
| `pay` | Text | Salary or compensation in the standard format: `$112.5-150K`, `$150K`, `$68.9K+`, `$45/hr`, `est. $102-119K (Idealist)`, or `Not posted`. The exact posted text is kept in the Scout ledger. |
| `location_remote` | Text | Location or remote/onsite status. |

Tips:
- Keep `status` as a single-select field with exactly the options above so the agents can set it reliably.
- A Prospects view sorted by `match_score` (highest first), and a second view of everything else, makes the tracker easy to scan.
- If your tool uses different names, that is fine. Tell the Concierge which name matches which field.
