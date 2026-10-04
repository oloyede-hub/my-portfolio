export const projects = [
  {
    title: "UltraLink Live",
    description:
      "A real-time healthcare collaboration platform for ultrasound operators and remote experts, featuring role-based workflows for Owners, Managers, Experts and Operators, workspace access control, clinical cases, expert assignment, consultation scheduling, notifications and pay-per-consultation workflows. Built with a Next.js/TypeScript frontend and NestJS/PostgreSQL/Prisma backend, with JWT authentication and LiveKit plus WebSockets for live consultation and examination guidance.",
    image: "/images/ultralink.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "LiveKit",
      "WebSockets",
    ],
    github: "",
    live: "https://ultralink-dev.vercel.app/",
    featured: true,
  },

  {
    title: "Pneumonia Detection AI",
    description:
      "A CNN-based pneumonia detection web application using VGG16 transfer learning with TensorFlow/Keras, achieving 93.1% test accuracy and a 0.978 ROC AUC. It includes a FastAPI inference API for chest radiographs, Grad-CAM explainability for visualizing regions influencing predictions, and a Next.js/TypeScript interface with image upload, confidence scores and interactive explainability overlays.",
    image: "/images/pneumonia-ai.png",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "VGG16",
      "Grad-CAM",
      "FastAPI",
    ],
    github: "https://github.com/oloyede-hub/pneumonia_ai",
    live: "",
    featured: false,
  },

  {
    title: "Potato Disease Classifier",
    description:
      "A full-stack machine-learning application for identifying potato leaf diseases from uploaded images using TensorFlow/Keras. It combines a FastAPI REST backend for model inference with a Next.js frontend for image upload, prediction results and confidence display, integrating the model, API and interface into one end-to-end application.",
    image: "/images/potato.png",
    technologies: [
      "Python",
      "TensorFlow/Keras",
      "FastAPI",
      "Next.js",
      "TypeScript",
    ],
    github: "https://github.com/oloyede-hub/potato_disease_classifier_frontend",
    live: "https://potato-disease-classifier-frontend-pfyt.onrender.com/",
    featured: false,
  },
  {
  title: "Anka WiFi",
  description:
    "A full-stack platform for digitizing prepaid Wi-Fi access sales. Customers can select internet packages, make secure payments through Paystack and receive access codes after successful payment verification. It includes an admin dashboard for managing Wi-Fi packages, access-code inventory, purchases and payment transactions.",
  image: "/images/anka-wifi.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Paystack",
    "TanStack Query",
  ],
  github: "",
  live: "",
  featured: true,
},
];
