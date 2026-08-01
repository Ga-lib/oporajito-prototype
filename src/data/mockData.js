export const currentUser = {
  name: "Rafiq Islam",
  district: "Dhaka",
  area: "Mirpur 10",
  bio: "3rd year CSE student. I love teaching basic coding and I'm trying to pick up guitar from someone nearby.",
  avatar: "🧑🏽‍💻",
  rating: 4.8,
  reviews: 12,
  teaches: ["Web Development", "English Speaking", "Excel Basics"],
  wants: ["Guitar", "Graphic Design"],
};

export const neighbors = [
  {
    id: 1,
    name: "Shirin Akter",
    area: "Mirpur 2, Dhaka",
    avatar: "👩🏽‍🏫",
    rating: 4.9,
    reviews: 21,
    teaches: ["Spoken English", "IELTS Prep"],
    distanceKm: 0.8,
  },
  {
    id: 2,
    name: "Tanvir Ahmed",
    area: "Kazipara, Dhaka",
    avatar: "🧑🏽‍🎨",
    rating: 4.7,
    reviews: 9,
    teaches: ["Graphic Design", "Photoshop"],
    distanceKm: 1.2,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    area: "Mirpur 10, Dhaka",
    avatar: "👩🏽‍💼",
    rating: 5.0,
    reviews: 15,
    teaches: ["Excel & Accounting", "Freelancing Basics"],
    distanceKm: 0.4,
  },
  {
    id: 4,
    name: "Imran Kabir",
    area: "Agargaon, Dhaka",
    avatar: "🧑🏽‍🔧",
    rating: 4.6,
    reviews: 7,
    teaches: ["Guitar", "Music Theory"],
    distanceKm: 2.1,
  },
  {
    id: 5,
    name: "Farzana Rahman",
    area: "Shewrapara, Dhaka",
    avatar: "👩🏽‍🍳",
    rating: 4.8,
    reviews: 18,
    teaches: ["Home Baking", "Bengali Calligraphy"],
    distanceKm: 1.6,
  },
];

export const districts = [
  "Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barishal",
];

export const skillTags = [
  "English", "Coding", "Design", "Guitar", "Math", "Cooking", "Excel", "Photography",
];

export const conversations = [
  {
    id: 1,
    name: "Nusrat Jahan",
    avatar: "👩🏽‍💼",
    lastMessage: "Sure, Saturday 5pm works for me!",
    time: "2m",
    unread: 2,
    messages: [
      { id: 1, from: "them", text: "Hi Rafiq! I saw you want to learn Excel." },
      { id: 2, from: "me", text: "Yes! I can teach you basic web dev in return 🙂" },
      { id: 3, from: "them", text: "That sounds great. When are you free this week?" },
      { id: 4, from: "me", text: "Saturday afternoon works for me, around 5pm?" },
      { id: 5, from: "them", text: "Sure, Saturday 5pm works for me!" },
    ],
  },
  {
    id: 2,
    name: "Imran Kabir",
    avatar: "🧑🏽‍🔧",
    lastMessage: "Bring your guitar to Mirpur park?",
    time: "1h",
    unread: 0,
    messages: [
      { id: 1, from: "them", text: "Hey! Ready for your first guitar lesson?" },
      { id: 2, from: "me", text: "Yes, very excited!" },
      { id: 3, from: "them", text: "Bring your guitar to Mirpur park?" },
    ],
  },
  {
    id: 3,
    name: "Shirin Akter",
    avatar: "👩🏽‍🏫",
    lastMessage: "Thank you for the review ⭐️⭐️⭐️⭐️⭐️",
    time: "1d",
    unread: 0,
    messages: [
      { id: 1, from: "them", text: "Thank you for the review ⭐️⭐️⭐️⭐️⭐️" },
      { id: 2, from: "me", text: "You're a great teacher, thank you!" },
    ],
  },
];
