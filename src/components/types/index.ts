export interface NewChapterOfBookmark {
  id: string;
  title: string;
  chapter?: number;
  timeAgo?: string;
  source?: string;
  coverImage: string;
  continueChapter?: number;
  status: "Ongoing" | "Stoped" | "Complete";
}
export const Series: NewChapterOfBookmark[] = [
  {
    id: "1",
    title: "Hiding a Logistics Center in The Apocalypse",
    chapter: 60,
    timeAgo: "19 hours ago",
    source: "ArcaneScans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-02-07-34-46-1751484886338.webp",
    continueChapter: 2333,
    status: "Ongoing",
  },
  {
    id: "2",
    title: "Office Worker in the Ice Age",
    chapter: 13,
    timeAgo: "14 hours ago",
    source: "Thunderscans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/05/2025-05-11-11-52-56-1746964376547.jpg",
    continueChapter: 16,
    status: "Ongoing",
  },
  {
    id: "3",
    title: "Black Haze (2025)",
    chapter: 41,
    timeAgo: "22 hours ago",
    source: "ArcaneScans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/05/2025-05-11-11-52-56-1746964376547.jpg",
    continueChapter: 31,
    status: "Ongoing",
  },
  {
    id: "4",
    title: "The Genius Who Sees Through Everything",
    chapter: 24,
    timeAgo: "1 day ago",
    source: "REST SCANS",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/09/2025-09-06-03-00-24-1757170824260.jpeg",
    continueChapter: 32,
    status: "Complete",
  },
  {
    id: "5",
    title: "The Awakening of Light Magic",
    chapter: 62,
    timeAgo: "2 days ago",
    source: "REST SCANS",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-04-10-29-52-1751624992766.png",
    continueChapter: 27,
    status: "Ongoing",
  },
  {
    id: "6",
    title: "The Investor Who Sees the Future",
    chapter: 60,
    timeAgo: "3 days ago",
    source: "Thunderscans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-08-24-03-34-03-1756049643948.jpeg",
    continueChapter: 60,
    status: "Ongoing",
  },
  {
    id: "7",
    title: "Divine Throne",
    chapter: 45,
    timeAgo: "1 day ago",
    source: "MangaScans",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-02-07-34-46-1751484886338.webp",
    continueChapter: 45,
    status: "Ongoing",
  },
];

export const Popular: NewChapterOfBookmark[] = [
  {
    id: "1",
    title: "Hiding a Logistics Center in The Apocalypse",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-02-07-34-46-1751484886338.webp",
    status: "Ongoing",
  },
  {
    id: "2",
    title: "Office Worker in the Ice Age",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/05/2025-05-11-11-52-56-1746964376547.jpg",
    status: "Ongoing",
  },
  {
    id: "3",
    title: "Black Haze (2025)",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/05/2025-05-11-11-52-56-1746964376547.jpg",
    status: "Ongoing",
  },
  {
    id: "4",
    title: "The Genius Who Sees Through Everything",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/09/2025-09-06-03-00-24-1757170824260.jpeg",
    status: "Ongoing",
  },
  {
    id: "5",
    title: "The Awakening of Light Magic",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-04-10-29-52-1751624992766.png",
    status: "Ongoing",
  },
  {
    id: "6",
    title: "The Investor Who Sees the Future",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-08-24-03-34-03-1756049643948.jpeg",
    status: "Ongoing",
  },
  {
    id: "7",
    title: "Divine Throne",
    coverImage:
      "https://madarascans.com/wp-content/uploads/2025/07/2025-07-02-07-34-46-1751484886338.webp",
    status: "Ongoing",
  },
];
