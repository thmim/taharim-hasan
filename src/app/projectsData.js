export const projects = [
  {
    id: "gearup",
    title: "GearUp –  Sports & Outdoor Equipment Rental Platform  ",
    timeline: "Aug 2026 – present",
    description:
      "GearUp is a Full Stack project for sports and outdoor equipment rental platform. It allows customers to rent sports gear, providers to manage their equipment, and admins to oversee the entire platform.",
    features: [
      "Role based rental system",
      "JWT authentication and separate permission-scoped workflows for each role",
      " Integrated SSLCommerz for payment processing and automatic rental-status updates on successful payment.",
      "Designed the full rental lifecycle from rent to return",
      "Automatic update availablity after product returned",
      "Admin manage whole thing",
    ],
    techStack: [
       "TypeScript", "Next.js", "ShadCN", "Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT","SSLComerz"

    ],
    liveLink: "https://sports-gear-rental-site.vercel.app/",
    codeLink: "https://github.com/thmim/different-sports-gear-rental-site-client",
    image: "/gearup-screenshot.png",
  },

  {
    id: "hotella",
    title: "Hotella – Hotel Booking System",
    timeline: "June 2025 – July 2025",
    description:
      "Real-time hotel booking experience with filters, availability checking, secure reservations, cancellation and update booking features.",
    features: [
      "Real-time availability check",
      "Room filtering & search",
      "Secure booking flow",
      "Secure Payment gateway with Stripe",
      "JWT-based authentication",
      "Booking Date update functionality",
      "Booking Cancellation facilities"
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "Firebase", "Tailwind"
    ],
    liveLink: "https://hotel-booking-auth-30d43.web.app/",
    codeLink: "https://github.com/thmim/hotel-booking-client-repo",
    image: "/hotel-booking.png",
  },
  {
    id: "edugenix",
    title: "EduGenix – E-Learning Platform",
    timeline: "Aug 2025 – Aug 2025",
    description:
      "EduGenix is a full-featured e-learning platform that allows users to enroll in courses, watch video lessons, and track learning progress.",
    features: [
      "User authentication & authorization",
      "Course enrollment system",
      "Video-based lessons",
      "Progress tracking dashboard",
      "Secure Payment gateway with Stripe",
      "Admin course management",
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "JavaScript", "MongoDB", "Firebase", "JWT", "Tailwind"
    ],
    liveLink: "https://eduginix-classroom-6ae6a.web.app/",
    codeLink: "https://github.com/thmim/edugenix-project-client-repo",
    image: "/edugenix.png",
  },
];
