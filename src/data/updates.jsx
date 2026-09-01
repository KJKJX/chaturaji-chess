export const updates = [
  {
    version: "1.9.0",
    title: "updates release",
    description:
      "The updates tab has been released! View future updates, past ones, and huge goals!",
    date: "2026-08-11T04:00:00.000Z",
  },
  {
    version: "1.9.1",
    title: "links to content",
    description:
      "Now you can send links of openings and guides to various people by clicking a small 'Copy Link' button at the top of guide articles and openings.",
    date: "2026-08-15T04:00:00.000Z",
  },
  {
    version: "2.0.0",
    title: "puzzles release",
    description:
      "Puzzles have been released! Now you can view and solve special Chaturaji puzzles. More puzzles will be added gradually.",
    date: "2026-09-01T04:00:00.000Z",
  },
  {
    version: "2.0.5",
    title: "content additions",
    description:
      "Lots of content has been added! Opening variations, more guides, tips, puzzles, profiles, news, events, announcements, and more!",
    date: "2026-09-20T04:00:00.000Z",
  },
  {
    version: "2.3.0",
    title: "account update",
    description:
      "Now you can create an account! Creating one will allow you to create puzzles, guides, tips, and more, which will be revised by our special admin team, and it will allow you track your puzzle progress.",
    date: "2026-10-15T04:00:00.000Z",
  },
].sort((a, b) =>
  +a.version.replaceAll(".", "") <= +b.version.replaceAll(".", "") ? -1 : 1,
);
