import { ITeamMember } from "@/components/Aboutpage/AboutPage";
import { IFilterButton } from "@/components/Button/FilterButton";
import { IReachout } from "@/components/Contactpage/Reachout";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { IReason } from "@/components/HomepageComp/Chooseus";
import { IFaq } from "@/components/HomepageComp/Faq";
import { ITestimony } from "@/components/HomepageComp/Testimonials";
import { IPlan } from "@/components/Payments/Payments";
import { getIntroVideo, iframeData } from "@/components/iFRame";


export const AllCourses: ICourse[] = [
  {
    name: "Crypto Trading Lesson 1",
    img: "/assets/thumbnails/thumb1.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 1,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(1),
  },
  {
    name: "Crypto Trading Lesson 2",
    img: "/assets/thumbnails/thumb2.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(2),
  },
  {
    name: "Crypto Trading Lesson 3",
    img: "/assets/thumbnails/thumb3.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(3),
  },
  {
    name: "Crypto Trading Lesson 4",
    img: "/assets/thumbnails/thumb4.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(4),
  },
  {
    name: "Crypto Trading Lesson 5",
    img: "/assets/thumbnails/thumb5.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(5),
  },
  {
    name: "Crypto Trading Lesson 6",
    img: "/assets/thumbnails/thumb6.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(6),
  },
  {
    name: "Crypto Trading Lesson 7",
    img: "/assets/thumbnails/thumb7.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(7),

  },
  {
    name: "Crypto Trading Lesson 8",
    img: "/assets/thumbnails/thumb8.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(8),
  },
  {
    name: "Crypto Trading Lesson 9",
    img: "/assets/thumbnails/thumb9.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(9),
  },
  {
    name: "Crypto Trading Lesson 10",
    img: "/assets/thumbnails/thumb10.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(10),
  },
  {
    name: "Crypto Trading Lesson 11",
    img: "/assets/thumbnails/thumb11.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(11),
  },
  {
    name: "Crypto Trading Lesson 12",
    img: "/assets/thumbnails/thumb12.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(12),
  },
  {
    name: "Crypto Trading Lesson 13",
    img: "/assets/thumbnails/thumb13.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(13),
  },
  {
    name: "Crypto Trading Lesson 14",
    img: "/assets/thumbnails/thumb14.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(14),
  },
  {
    name: "Crypto Trading Lesson 15",
    img: "/assets/thumbnails/thumb15.webp",
    dollarPrice: 245.99,
    nairaPrice: null,
    level: "Beginner",
    category: "Most Popular",
    isLoved: false,
    rating: 4.9,
    noEnrolled: 100,
    field: "Finance",
    id: 2,
    desc: "In this course, we'll introduce you to the world of cryptocurrency trading...",
    skills: [
      "Blockchain Technology",
      "Cryptocurrency Trading",
      "Market Analysis",
      "Risk Management",
      "Trading Strategies",
      "Technical Analysis",
      "Fundamental Analysis",
    ],
    duration: 3,
    requirements: [
      "No prior knowledge of cryptocurrency or trading is required...",
      "This is an introductory course. Most of your classes will be 2 hours, 3 times a week.",
      "You're required to have a laptop with a minimum of 4GB RAM to take this course comfortably.",
    ],
    syllabus: [
      {
        title: "Introduction to Blockchain",
        number: 1,
        topics: [
          "What is Blockchain?",
          "How does Blockchain work?",
          "Blockchain use cases beyond cryptocurrency",
        ],
      },
      {
        title: "Cryptocurrency Trading Basics",
        number: 2,
        topics: [
          "What is cryptocurrency?",
          "How to set up a trading account",
          "Understanding different types of cryptocurrencies",
        ],
      },
      {
        title: "Market Analysis and Trading Strategies",
        number: 3,
        topics: [
          "Introduction to market analysis",
          "Technical analysis vs fundamental analysis",
          "Basic trading strategies",
        ],
      },
      {
        title: "Risk Management and Trading Psychology",
        number: 4,
        topics: [
          "Understanding risk management",
          "Trading psychology",
          "Managing emotions in trading",
        ],
      },
    ],
    reviews: [
      {
        name: "Omotayo",
        post: "Alumni",
        review:
          "This course is a great starting point for anyone looking to get into crypto trading...",
        likes: 50,
        comments: 51,
        img: "/assets/tayo.png",
        daysAgo: 1,
      },
      {
        name: "Tolulope",
        post: "Student",
        review:
          "I was skeptical about taking an online course on crypto trading, but this course exceeded my expectations...",
        likes: 70,
        comments: 151,
        img: "/assets/tayo.png",
        daysAgo: 3,
      },
    ],
    totalReviews: 700,
    introVideo: getIntroVideo(15),
  },
];

export const FiltersByTime: IFilterButton[] = [
  { filter: "Most Popular", isSelected: true },
  { filter: "New", isSelected: false },
];
export const FiltersByType: IFilterButton[] = [
  { filter: "All Courses", isSelected: true, filterByType: true },
  { filter: "Design", isSelected: false, filterByType: true },
  { filter: "Programming", isSelected: false, filterByType: true },
  { filter: "Data", isSelected: false, filterByType: true },
  { filter: "Finance", isSelected: false, filterByType: true },
  { filter: "Security", isSelected: false, filterByType: true },
];

export const Reasons: IReason[] = [
  {
    img: "/assets/one.png",
    head: "Regular Accessments",
    text: "We give our students real life accessments to help them improve their knowledge on core areas",
  },
  {
    img: "/assets/two.png",
    head: "On-site & Remote Learning",
    text: "We are fully an online learning platform but for special cases, we can go the extra mile to provide mentorship service",
  },
  {
    img: "/assets/three.png",
    head: "Certificate",
    text: "On graduation, every student will be awarded our prestigious certificate of completion",
  },
 
];

export const Testimonies: ITestimony[] = [
  {
    id: null,
    img: "/assets/mide.png",
    name: "Omotosho Mide",
    position: "Alumni",
    isActive: false,
    comment:
      "Definitely one of the best places to learn. I can say that I'm very confident with my skills in Trading ",
  },
  {
    id: null,
    img: "/assets/mike.png",
    name: "Micheal Ajala",
    position: "Alumni",
    isActive: true,
    comment:
      "I enjoyed each course from the first week. I got to practise in real trading  and this made me confident",
  },
  {
    id: null,
    img: "/assets/tayo.png",
    name: "Omotayo",
    position: "Student",
    isActive: false,
    comment:
      "Definitely one of the best places to learn. I can say that I'm very confident with my skills in now",
  },
];

export const Faqs: IFaq[] = [
  {
    id: null,
    question: "How many months will it take to complete a course?",
    showAnswer: true,
    answer:
      "Each course takes approximately 3-4 months to be complete after which you take a certification test and you're given a project to work on. Your classes .",
  },
  {
    id: null,
    question: "How long is the demo class each course?",
    showAnswer: false,
    answer:
      "The demo class for each course will last for approximately 7days, you are advised to make the best use of it.",
  },
  {
    id: null,
    question: "Do I get a recognized a certificate?",
    answer: "You get a recognized certificate after completing a course",
    showAnswer: false,
  },
  {
    id: null,
    question: "Will i'll be able to trade after completing a course?",
    showAnswer: false,
    answer:
      "Yes, you will be able to trade after completing the course",
  },
  {
    id: null,
    showAnswer: false,
    question: "Are onsite classes available?",
    answer:
      "Our services are fully online but if needs be that you need an onsite, contact our hotlines.",
  },
];

export const TeamMembers: ITeamMember[] = [
  {
    name: "James",
    image: "/assets/mike-team.png",
    post: "CEO",
    desc: "James has built a reputation in the trading ecosystem",
  },
  {
    name: "Matthew",
    image: "/assets/mike-team.png",
    post: "Head of Trading",
    desc: "Matthew has built a reputation in the trading community",
  },
  {
    name: "Dev. Micheal Ajala",
    image: "/assets/mike-team.png",
    post: "Head of Trading",
    desc: "Michael has built a reputation in the trading community",
  },
];

export const Contacts: IReachout[] = [
  {
    name: "Email",
    deet: "contact@jamescryptoguru.com",
    note: "You can send us an email and we'll get back to you.",
    svg: "email",
    link: "mailto:contact@jamescryptoguru.com",
  },
  {
    name: "Call",
    deet: "+234 813 556 7894",
    note: "Have more questions? call us anytime, anyday",
    svg: "phone",
    link: "tel:08149756765",
  },
  {
    name: "Meet Us",
    deet: "Unilag, Akoka, Lagos",
    note: "  Mon-Thur:  8:00AM - 4:00PM Fri :  8:00AM - 1:30PM",
    svg: "location",
    link: "https://maps.google.com?q=6.5158,3.3898",
  },
];

export interface ITab {
  num: number;
  name: string;
  isSelected: boolean;
}

export const Tabs: ITab[] = [
  { num: 0, name: "OVERVIEW", isSelected: true },
  { num: 1, name: "SYLLABUS", isSelected: false },
  { num: 2, name: "REQUIREMENTS", isSelected: false },
  { num: 3, name: "QUIZ", isSelected: false },
  { num: 4, name: "REVIEWS", isSelected: false },
 
];

export interface IEnrolledCourse {
  courseId: number;
  isFree: boolean;
  isPaid: boolean;
  plan : IPlan;
}
export interface IUser {
  name: string;
  email: string;
  enrolledCourses: IEnrolledCourse[] | null;
}
