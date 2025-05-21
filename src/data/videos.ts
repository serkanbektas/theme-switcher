export const videoData = [
  {
    id: "nature-wonders",
    title: "Nature Wonders",
    description:
      "Explore the beautiful wonders of nature in this breathtaking video.",
    thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    duration: "3:45",
    views: "24K",
    date: "2023-09-15",
    category: "Nature",
  },
  {
    id: "urban-exploration",
    title: "Urban Exploration",
    description:
      "Discover hidden gems in the urban jungle with this fascinating exploration video.",
    thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    duration: "5:12",
    views: "18K",
    date: "2023-10-02",
    category: "Travel",
  },
  {
    id: "night-photography",
    title: "Night Photography Tips",
    description:
      "Learn professional techniques for capturing stunning night photographs.",
    thumbnail: "https://picsum.photos/200",
    duration: "7:30",
    views: "32K",
    date: "2023-08-28",
    category: "Photography",
  },
  {
    id: "cooking-basics",
    title: "Cooking Basics",
    description:
      "Master the fundamentals of cooking with these essential techniques.",
    thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    duration: "10:15",
    views: "45K",
    date: "2023-11-05",
    category: "Cooking",
  },
  {
    id: "meditation-guide",
    title: "Meditation Guide",
    description:
      "A comprehensive guide to meditation for beginners and experienced practitioners.",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    duration: "15:00",
    views: "28K",
    date: "2023-07-19",
    category: "Wellness",
  },
  {
    id: "tech-review",
    title: "Latest Tech Review",
    description:
      "An in-depth review of the latest technology gadgets and innovations.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    duration: "8:45",
    views: "56K",
    date: "2023-12-01",
    category: "Technology",
  },
];

export function getVideoById(id: string) {
  return videoData.find((video) => video.id === id);
} 