export const config = {
  // Personal Information
  herName: "Samasemoo",
  myName: "Seif",
  
  // Chapter 1: Love Letter
  letter: {
    greeting: `Dear ${"Samasemoo"},`,
    body: [
      "Happy birthday, my love ♡",
      "",
      "Since the day i met you, i knew you were special.",
      "",
      "I knew that if i didn't ask you out, i would regret it for the rest of my life.",
      "And i almost didn't.",
      "But i did.",
      "And i'm sooooo glad i did.",
      "",
      "You are wonderful, amazing, and beautiful.",
      "Not just on the outside, but on the inside too.",
      "(bas bsaraha on the ouside brdooo)",
      "You are so caring and pretty and smart",
      "And you have the most beautiful smile",
      "And your laugh is so contagious",
      "And you are so sweet",
      "And your eyes are so beautiful",
      "You will always have my heart",
      "And i will always love you",
      "And i will always be here for you",
      "And i will always support you",
      "And i will always be your partner/friend/bestie/whatever you need",
      "",
      "You make the ordinary moments extraordinary.",
      "You make the hard days easier.",
      "And you make my life so much brighter just by being in it.",
      "You are the best thing that has ever happened to me.",
      "You are my everything.",
      "And i can't imagine my life without you.",
      "",
      "I hope this year brings you everything you've been dreaming of and more.",
      "I hope that i always make you smile and laugh.",
      "I hope that i always make you feel loved and appreciated.",
      "Just like you always make me feel loved and appreciated.",
      "",
      "Thank you for being you.",
      "Thank you for choosing me.",
      "Thank you for being my favorite person.",
      "Thank you for always being there for me even when i thought i didn't need anyone.",

      "",
      "I love you more than words could ever say.",
      "And I promise to always love, care for, and cherish you.",
      "Because you deserve all the love in the world.",
      "And I'm so lucky to be the one to give it to you.",
      "I can't imagine my life without you.",
      "I really want to spend the rest of my life with you.",
      "w ensy msh haseebk fa yala ba ana re5em",
      "Sorry if it was too long bas ana bgd bahebk w mmkn afdl atklm l bokra msh ha5alas"
    ],
    closing: "With all my love,",
    signature: "Seif ♡"
  },
  
  // Chapter 2: Memories
  memories: [
    {
      id: 1,
      image: "/images/bank.jpeg", // Replace with actual image paths
      caption: "Where it all started",
      date: "August 2025",
      rotation: -2,
      position: { x: 0, y: 0 }
    },
    {
      id: 2,
      image: "/images/holdhand.jpeg",
      caption: "Our first time holding hands",
      date: "September 2025",
      rotation: 3,
      position: { x: 10, y: 5 }
    },
    {
      id: 3,
      image: "/images/firstnzool.jpeg",
      caption: "Our \"first\" date",
      date: "October 2025",
      rotation: -1,
      position: { x: -5, y: 15 }
    },
    {
      id: 4,
      image: "/images/racer.jpeg",
      caption: "I have lots of fans ik",
      date: "June 2026",
      rotation: 2,
      position: { x: 8, y: -3 }
    },
    {
      id: 5,
      image: "/images/bahr.jpeg",
      caption: "Best moment of my life ♡",
      date: "August 2026",
      rotation: -3,
      position: { x: -8, y: 10 }
    },
    {
      id: 6,
      image: "/images/glowing.jpeg",
      caption: "I really love this pic you are glowing",
      date: "August 2026",
      rotation: 1,
      position: { x: 5, y: 8 }
    }
  ],
  
  // Chapter 3: Date Selection
  dates: [
    { id: 1, label: "Saturday, August 30", available: true },
    { id: 2, label: "Monday, September 1", available: true },
    { id: 3, label: "Tuesday, September 2", available: true }
  ],
  
  times: [
    { id: 1, label: "12:00 PM", icon: "🕛" }
  ],
  
  // Chapter 4: Day Plan
  itinerary: [
    {
      time: "12:00",
      activity: "Pick you up (law tesmaheely y3ny)",
      location: "Your place",
      icon: "🚗",
      image: "" // Add image path if desired, e.g., "/images/car.jpg"
    },
    {
      time: "1:00",
      activity: "Morninggggg Coffee",
      location: "At our famous Starbucks",
      icon: "☕",
      image: "/images/coffee.webp" // Add image path if desired, e.g., "/images/coffee.jpg"
    },
    {
      time: "3:00",
      activity: "Cinema timeeeee (Spooderman)",
      location: "CFC Cinema",
      icon: "🎬",
      image: "/images/spiderman.jpg" // Add image path if desired, e.g., "/images/cinema.jpg"
    },
    {
      time: "6:00",
      activity: "We nom nom ",
      location: "Retro Restaurant",
      icon: "🍔",
      image: "/images/retro.webp" // Add image path if desired, e.g., "/images/retro.jpg"
    },
    {
      time: "???",
      activity: "One last surprise...",
      location: "Secret location",
      icon: "🎁",
      isSurprise: true,
      image: "" // Add image path if desired
    }
  ],
  
  // Final message
  finalMessage: {
    title: "Happy Birthday, my love.",
    subtitle: "Here's to another year of us."
  },
  
  // Music (optional)
  music: {
    enabled: true,
    // Add your music file path here
    // track: "/music/romantic-piano.mp3"
  }
};

export type Config = typeof config;
