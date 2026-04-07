export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
  challenges: string;
  futureImprovements: string;
}

import carRentalImg from "@/assets/car-rental.png";
import foodHubImg from "@/assets/food-hub.png";
import goShopImg from "@/assets/goshop.png";
import realEstateImg from "@/assets/real-estate.png";

const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with real-time inventory, Stripe payments, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce solution from the ground up, featuring a dynamic product catalog with real-time inventory tracking, integrated Stripe payment processing with webhook support, and a full admin dashboard for order and customer management. The platform handles 10K+ concurrent users with optimized database queries and CDN-backed image delivery.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: goShopImg,
    demo: "https://goshop-five.vercel.app/",
    github: "https://github.com/monir6163/goshop",
    challenges:
      "Handling real-time inventory synchronization across multiple sessions was the biggest challenge. Implemented optimistic UI updates with server reconciliation using WebSocket events to ensure data consistency without sacrificing UX.",
    futureImprovements:
      "Planning to add AI-powered product recommendations, multi-vendor marketplace support, and a React Native mobile companion app.",
  },
  {
    slug: "Real Estate - Property Listing Platform",
    title: "Property Listing Platform",
    description:
      "A modern real estate platform for browsing and managing property listings with advanced search and filtering.",
    longDescription:
      "Developed a feature-rich real estate platform that allows users to browse properties, save favorites, and contact agents directly. The platform includes advanced search filters, interactive maps, and a responsive design that works seamlessly across all devices.",
    tags: ["Nextjs", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
    image: realEstateImg,
    demo: "https://real-estate-client-drab-three.vercel.app/",
    github: "https://github.com/monir6163/real-estate",
    challenges:
      "Integrating interactive maps with property data required careful handling of large datasets and optimizing performance for smooth user experience.",
    futureImprovements:
      "Planning to add virtual tour capabilities, AI-powered property recommendations, and a mobile app for on-the-go property browsing.",
  },
  {
    slug: "Food Hub - Food Ordering System",
    title: "Food Hub - Food Ordering System",
    description:
      "A food ordering platform with restaurant listings, menu browsing, and seamless checkout experience.",
    longDescription:
      "Created a comprehensive food ordering system that connects customers with local restaurants. The platform features restaurant profiles, dynamic menus, real-time order tracking, and a streamlined checkout process with multiple payment options.",
    tags: [
      "Next.js",
      "Node.js",
      "Tailwind",
      "Vercel",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Better Auth",
    ],
    image: foodHubImg,
    demo: "https://food-hub-client-eta.vercel.app/",
    github: "https://github.com/monir6163/foodhub",
    challenges:
      "Implementing real-time order tracking and ensuring data consistency across multiple users and restaurants was a significant challenge. Leveraged WebSocket for live updates and optimized database transactions to handle concurrent orders effectively.",
    futureImprovements:
      "Planning to add AI-powered restaurant recommendations, a loyalty rewards program, and a React Native mobile app for convenient food ordering on the go.",
  },
  {
    slug: "Car Rental Service",
    title: "Car Rental Service",
    description:
      "A platform for browsing and booking car rentals with real-time availability and pricing.",
    longDescription:
      "Developed a user-friendly car rental platform that allows customers to search for available vehicles, compare prices, and book rentals directly online. The platform includes a responsive design, integrated payment processing, and a comprehensive admin panel for managing inventory and reservations.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    image: carRentalImg,
    demo: "https://enjoycarrental.vercel.app/",
    github:
      "https://github.com/monir6163/enjoy-car-rental-convert-php-to-nextjs",
    challenges:
      "Ensuring real-time availability and accurate pricing across multiple rental locations required careful database design and optimization. Implemented efficient querying strategies and caching mechanisms to maintain performance under high load.",
    futureImprovements:
      "Planning to add AI-powered vehicle recommendations, a loyalty rewards program, and a React Native mobile app for convenient car rental management on the go.",
  },
];

export default projects;
