# Coding agent prompts

Part 1 is the core activity. Part 2 is an optional stretch that continues
from a completed Part 1 — do it only after Part 1 is finished and
committed. Start your coding agent from the repository root, and review
its proposed changes before committing or pushing anything.

## Part 1: Visualize the results

```text
Help me complete Path 1 in this repository.

Read the README, then inspect src/pages/index.astro. Find PATH 1 STARTER and the buildResultRow() function.

Modify only src/pages/index.astro. Extend buildResultRow() so each result includes a horizontal percentage bar using the choice's accent color. Add visible "— your pick" text to the selected choice while preserving the existing sole-leader and tied-leader labels and data attributes.

Use the CSS in learner-resources/path-1-styles.css. Paste those rules into the designated <style is:global> block near the bottom of index.astro.

Do not change PATH 2 STARTER, the database, migrations, API routes, choice definitions, or the learner resource files.

Run npm run build and git diff --check, then summarize the changes and validation results. Do not commit or push anything.
```

Use Part 2 only after Part 1 has been completed and committed.

## Part 2: Add a personalized comparison

```text
Complete the optional Path 2 stretch in this repository.

Read the README and inspect src/pages/index.astro. Find PATH 2 STARTER and renderComparisonInsight(). Modify only that function.

Use the selected choice and the current ResultsPayload to set one useful comparison sentence in #comparison-insight, then reveal the element.

Handle these cases: sole leader (name it and include the response count); tied leader (say it is tied for the lead and include the response count); trailing one leader (name the leader and include the response gap); trailing tied leaders (refer to "the tied leaders" and include the response gap); zero responses or an unresolved choice (clear the text and keep the element hidden). Use the correct singular or plural form of "response."

Leave all Path 1 markup and styles unchanged. Do not modify the database, migrations, API routes, choice definitions, or other files.

Run npm run build and git diff --check. Report the exact sentence templates and validation results. Do not commit or push anything.
```
