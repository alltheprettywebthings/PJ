# Workwrights

Workwrights ("wrks" for short in a chat) is a modular career intelligence system that you add to your AI as a skill. A small team of agents helps you find jobs, check your fit, tailor your resume and keep going when the search gets hard. You keep your own data: your files live in a workspace folder that you choose and control, and the skill holds only the logic and blank templates. Nothing personal is ever written into the skill.

**Latest version: 0.9**  
[![Documentation](https://img.shields.io/badge/Documentation-site-blue)](https://alltheprettywebthings.github.io/Workwrights/)  [![Changelog](https://img.shields.io/badge/Changelog-page-blue)](https://github.com/alltheprettywebthings/Workwrights/blob/main/workwrights/references/changelog.md)


## Quickstart

Have your master resume handy. A writing sample is optional, and a tracker is optional.

1. Download the latest zip from the [releases page](https://github.com/alltheprettywebthings/Workwrights/releases/latest).
2. Add it to your AI as a skill:
    - **Claude (web or desktop):** go to **Customize > Skills**, click **Add**, upload the zip, and make sure the skill is enabled. Skills need code execution to be turned on.
    - **Claude Code:** unzip it into `~/.claude/skills/` (or `.claude/skills/` in a project), so you have `~/.claude/skills/workwrights/`.
    - **Another AI:** the skill is plain Markdown. Point your AI at `workwrights/SKILL.md` and ask it to follow it.
3. Start a chat and say **"Set up my job search"**. It asks where your workspace should live, then for your master resume. Those are the only two required steps.
4. Say **"Find me jobs"**.

If you use the zip from this repository's `workwrights/` folder instead, zip it so that `workwrights/` is the root of the zip.

Using a free plan? Read [Use a free plan](https://alltheprettywebthings.github.io/Workwrights/tips/free-plan/). Updating from an older version? Read [Update Workwrights](https://alltheprettywebthings.github.io/Workwrights/updating/).

## Learn more

The [documentation site](https://alltheprettywebthings.github.io/Workwrights/) covers your workspace, the evidence bank, each agent, the full workflow, tips and quick commands.

## License

MIT. See [LICENSE](LICENSE).
