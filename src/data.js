/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERSONAL_INFO = {
  name: "Abhijith AR",
  title: "Computer Science Engineering Student",
  subtitle: "Passionate about Web Development & Digital Experiences",
  profilePicUrl: "https://lh3.googleusercontent.com/d/13qBSKXaS1eaPlC2oOcY6OaehKKANuAah", // Directly embeddable Google Drive link format
  fallbackProfilePicUrl: "https://drive.google.com/file/d/13qBSKXaS1eaPlC2oOcY6OaehKKANuAah/view?usp=drivesdk",
  email: "abhijith90711@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhijith-ar-770b47334",
  github: "https://github.com/ABHIJITH-AR",
  aboutMe: "I am a B.Tech Computer Science and Engineering student with a strong interest in web development and programming. I enjoy building projects, exploring new technologies, and continuously improving my technical skills.",
  currentRole: {
    role: "Associate Creative Officer",
    organization: "Innovation and Entrepreneurship Development Centre (IEDC MGMCET)",
    description: "Contributing to creative initiatives, event promotions, and innovation-driven student activities while supporting the entrepreneurial ecosystem within the college."
  }
};

export const EDUCATION = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "MGM College of Engineering and Technology",
    duration: "2026",
    status: "Currently pursuing",
    description: "Affiliated to APJ Abdul Kalam Technological University (KTU). Building a strong foundation in computer science, programming, problem-solving, and modern software technologies."
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Education (Plus Two)",
    institution: "Government Higher Secondary School Pampakuda",
    duration: "Completed in 2024",
    description: "Successfully completed higher secondary education, building a strong academic foundation and preparing for higher studies in engineering and technology."
  }
];

export const SKILL_CATEGORIES = [
  "Programming Languages",
  "Web Technologies",
  "Frameworks / Libraries",
  "Tools & Databases",
  "Core Concepts"
];

export const SKILLS = [
  // Programming Languages
  { name: "C", category: "Programming Languages", logoType: "c" },
  { name: "Python", category: "Programming Languages", logoType: "python" },
  { name: "SQL", category: "Programming Languages", logoType: "sql" },
  { name: "Java", category: "Programming Languages", logoType: "java" },
  { name: "TypeScript", category: "Programming Languages", logoType: "typescript" },

  // Web Technologies
  { name: "HTML", category: "Web Technologies", logoType: "html" },
  { name: "CSS", category: "Web Technologies", logoType: "css" },
  { name: "JavaScript", category: "Web Technologies", logoType: "javascript" },

  // Frameworks/Libraries
  { name: "React", category: "Frameworks / Libraries", logoType: "react" },
  { name: "Node.js", category: "Frameworks / Libraries", logoType: "nodejs" },
  { name: "Express.js", category: "Frameworks / Libraries", logoType: "express" },
  { name: "Tailwind CSS", category: "Frameworks / Libraries", logoType: "tailwind" },

  // Tools & Databases
  { name: "Git", category: "Tools & Databases", logoType: "git" },
  { name: "GitHub", category: "Tools & Databases", logoType: "github" },
  { name: "MySQL", category: "Tools & Databases", logoType: "mysql" },
  { name: "VS Code", category: "Tools & Databases", logoType: "vscode" },
  { name: "Vite", category: "Tools & Databases", logoType: "vite" },

  // Core Concepts
  { name: "Data Structures & Algorithm", category: "Core Concepts", logoType: "dsa" },
  { name: "Object Oriented Programming", category: "Core Concepts", logoType: "oop" }
];

export const EXPERIENCE = [
  {
    id: "exp-1",
    role: "Full Stack Web Development",
    company: "Future Intern",
    duration: "2026",
    description: [
      "Developed and improved web applications using modern technologies.",
      "Worked on assigned internship tasks and projects.",
      "Gained hands-on experience in frontend and backend development.",
      "Collaborated on project development and problem-solving activities."
    ]
  },
  {
    id: "exp-2",
    role: "Associate Creative Officer",
    company: "Innovation and Entrepreneurship Development Centre (IEDC MGMCET)",
    duration: "2026",
    description: [
      "Contributed to creative initiatives and event promotions.",
      "Supported innovation and entrepreneurship-related activities.",
      "Collaborated with students and team members on events and programs."
    ]
  }
];

export const PROJECTS = [
  {
    id: "proj-1",
    title: "Smart CRM",
    techStack: ["React", "HTML", "JavaScript", "Vite", "Tailwind CSS", "Node.js", "Express.js"],
    description: "Developed a full-stack Customer Relationship Management (CRM) platform for efficient client lead management. The system includes secure authentication, lead tracking, analytics dashboards, AI-powered forecasting, and complete CRUD operations to streamline business workflows.",
    features: [
      "Secure user authentication",
      "Client lead management (CRUD)",
      "Interactive analytics dashboard",
      "AI-powered forecasting",
      "Responsive modern UI"
    ],
    liveLink: "https://smart-crm-525t.onrender.com",
    githubLink: "https://github.com/ABHIJITH-AR/FUTURE_FS_02.git"
  },
  {
    id: "proj-2",
    title: "Rosemary Garden",
    techStack: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    description: "Designed and developed a responsive nursery website that enables users to explore plants, flowers, and garden products. The platform includes advanced search, shopping cart functionality, WhatsApp ordering, and a mobile-friendly user experience.",
    features: [
      "Dynamic plant catalog",
      "Advanced search and filtering",
      "Shopping cart system",
      "WhatsApp order integration",
      "Responsive design"
    ],
    liveLink: "https://rosemary-garden.vercel.app/",
    githubLink: "https://github.com/ABHIJITH-AR/FUTURE_FS_03.git"
  },
  {
    id: "proj-3",
    title: "Smart AI Resume Analyzer",
    techStack: ["React", "TypeScript", "Node.js", "Express.js", "Tailwind CSS"],
    description: "Developed an AI-powered resume analysis platform that evaluates resumes, provides detailed scoring, and offers insights to improve candidate profiles. The application features an intuitive dashboard, analytics visualization, and profile management capabilities.",
    features: [
      "AI-based resume analysis",
      "Resume scoring and evaluation",
      "Interactive analytics dashboard",
      "User profile management",
      "Responsive and modern UI"
    ],
    liveLink: "https://smart-ai-resume-analyzer-vg5v.onrender.com/",
    githubLink: "https://github.com/ABHIJITH-AR/Smart-AI-Resume-Analyzer.git"
  },
  {
    id: "proj-4",
    title: "Simple Calculator 2026",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    description: "Built a modern and responsive calculator application with scientific memory functions, calculation history tracking, keyboard support, and a clean dark-themed user interface for seamless mathematical computations.",
    features: [
      "Basic arithmetic operations",
      "Scientific memory functions",
      "Calculation history",
      "Keyboard shortcuts support",
      "Responsive dark-themed design."
    ],
    liveLink: "https://simple-calculator-five-pearl.vercel.app/",
    githubLink: "https://github.com/ABHIJITH-AR/Simple-Calculator.git"
  }
];

export const CERTIFICATES = [
  {
    id: "cert-1",
    title: "Prompt Wars",
    type: "Participation Certificate",
    organization: "Et Cetera Club, MGM College of Engineering and Technology",
    description: "Recognized for active participation in Prompt Wars, demonstrating prompt engineering and innovative thinking.",
    link: "https://drive.google.com/file/d/1Rozx0vLtn1l4_WxeAoMLzasMXz3i87cl/view?usp=drivesdk"
  },
  {
    id: "cert-2",
    title: "HackRush 16-Hour Innovation Sprint",
    type: "Hackathon Participation Certificate",
    organization: "IEDC MGMCET, SDC Networks & Et Cetera Club",
    description: "Participated in a 16-hour innovation sprint focused on problem-solving, teamwork, and technical innovation.",
    link: "https://drive.google.com/file/d/1ULxF9kLkk2yBj-PlW9eH9y_Btr-7OQxW/view?usp=drivesdk"
  },
  {
    id: "cert-3",
    title: "Machine Learning & Deep Learning Workshop",
    type: "Completion Certificate",
    organization: "MGM College of Engineering and Technology",
    description: "Successfully completed a workshop covering machine learning and deep learning fundamentals.",
    link: "https://drive.google.com/file/d/1vFugbw0TJgZdMjDqrrVKoDQebP-2CfTJ/view?usp=drivesdk"
  },
  {
    id: "cert-4",
    title: "Python Workshop",
    type: "Participation Certificate",
    organization: "MGM College of Engineering and Technology",
    description: "Participated in a Python programming workshop focusing on coding concepts and practical applications.",
    link: "https://drive.google.com/file/d/1bAip86AXcRjSJx_Wx7raeWNIwjnjy90k/view?usp=drivesdk"
  },
  {
    id: "cert-5",
    title: "Data Science & AI Webinar",
    type: "Participation Certificate",
    organization: "SDC Networks",
    description: "Attended a webinar on Data Science and Artificial Intelligence, exploring modern AI concepts and applications.",
    link: "https://drive.google.com/file/d/1iqB_EbhdDOEed-lua4-XdUlvOYJ2_68h/view?usp=drivesdk"
  }
];
