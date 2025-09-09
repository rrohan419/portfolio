// Mock data for Rohan Shrivastava's Portfolio

export const personalInfo = {
  name: "Rohan Shrivastava",
  title: "Software Engineer",
  tagline: "Building scalable solutions with 3+ years of expertise in product development and engineering",
  location: "Pune, India",
  email: "rrohan419@gmail.com",
  phone: "+918668530410",
  linkedin: "https://linkedin.com/in/rrohan419",
  github: "https://github.com/rrohan419",
  website: "https://linktr.ee/rrohan419"
};

export const aboutMe = {
  summary: "Technically sound Software Engineer with 3+ years of expertise in product development and engineering. Adept at using tools like Spring Boot, Hibernate, and Kafka for real-time data solutions, emphasizing efficient data management and quality. Proven track record in addressing challenges promptly and collaborating with teams to deliver data-driven insights for informed organizational decision-making.",
  currentProject: "Currently working on www.kittyp.in - a personal project focused on innovative solutions.",
  education: {
    degree: "Bachelor of Engineering – Electronics & Telecommunication",
    institution: "Sinhgad Academy of Engineering, Pune, India",
    year: "2022",
    gpa: "7.9 GPA"
  },
  certifications: [
    {
      name: "Java Certification",
      issuer: "Cutshort",
      year: "2024"
    }
  ]
};

export const skills = {
  "Programming Languages": ["Java", "JavaScript", "TypeScript", "SQL"],
  "Backend Frameworks": ["Spring Boot", "Spring Core", "Spring Security", "Hibernate", "Apache Kafka"],
  "Frontend Technologies": ["React", "Angular"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB"],
  "Cloud & AWS": ["AWS S3", "EC2", "Lambda", "DynamoDB", "RDS", "CloudWatch", "Secrets Manager"],
  "Tools & Technologies": ["Docker", "GraphQL", "REST APIs", "JUnit", "Mockito", "Git", "Jira", "Postman"],
  "Integration Services": ["Twilio", "SendGrid", "Stripe", "Google APIs", "Mailchimp", "Xero", "Intuit QuickBooks", "Plaid", "Excel", "Google Sheets", "ZeptoMail", "Razorpay"]
};

export const experience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Mindbowser Info Solutions",
    duration: "June 2023 - Present",
    type: "Current Position",
    projects: [
      {
        name: "MyMori - Healthcare Platform",
        client: "Jocelyn Campbell",
        description: "Collaborated on microservice-based healthcare platform implementing Google and Apple subscription services with full compliance to App Store guidelines.",
        achievements: [
          "Implemented subscription services with renewal, cancellation, refunds, and upgrades/downgrades",
          "Integrated Twilio for phone verification and SMS notifications",
          "Developed SSO functionality for Google, Apple, and Facebook",
          "Utilized AWS Secrets Manager and S3 for secure data management"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    company: "Mindbowser Info Solutions",
    duration: "August 2022 – May 2023",
    type: "Previous Role",
    projects: [
      {
        name: "StartupOS - Financial Management",
        client: "Michael Lee",
        description: "Developed comprehensive solution for startups to manage and visualize financial data with third-party integrations.",
        achievements: [
          "Integrated Google Drive, Google Sheets, Intuit, Xero, and productivity platforms",
          "Designed analytical dashboard with visual insights through graphs and charts",
          "Optimized complex search queries improving performance by 70%",
          "Built scalable backend using Spring Boot and GraphQL"
        ]
      },
      {
        name: "Mindbowser Epico - Internal Automation",
        client: "Internal Project",
        description: "Led development of microservice-based automation system for streamlining team review processes.",
        achievements: [
          "Automated workflows for feedback exchange between teams and managers",
          "Designed hierarchical relationship management system",
          "Integrated real-time notification systems",
          "Improved productivity by eliminating review cycle bottlenecks"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Trainee Engineer",
    company: "Mindbowser Info Solutions",
    duration: "February 2022 - July 2022",
    type: "Training Period",
    projects: [
      {
        name: "Online Theatre Ticketing System",
        client: "Training Project",
        description: "Developed scalable ticketing system inspired by BookMyShow using microservices architecture.",
        achievements: [
          "Built real-time ticket booking with search and filtering",
          "Implemented user authentication using Spring Security and JWT",
          "Used Angular frontend with Spring Boot backend",
          "Followed Agile methodologies with Git version control"
        ]
      },
      {
        name: "Online Jewelry Store",
        client: "Training Project",
        description: "Built full-functional e-commerce platform with payment integration and catalog management.",
        achievements: [
          "Integrated Stripe Payment Gateway with PCI DSS compliance",
          "Designed responsive UI with Angular and Spring Boot backend",
          "Optimized PostgreSQL database for inventory and order management",
          "Conducted comprehensive unit testing with JUnit and Mockito"
        ]
      }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "RainyDayParents - Mobile App",
    description: "Currently developing a comprehensive React Native mobile application with Spring Boot backend, focusing on modern parenting solutions and family management.",
    technologies: ["React Native", "Spring Boot", "AWS S3", "AWS Secrets Manager", "AWS SQS", "Twilio", "Firebase"],
    category: "Mobile",
    status: "In Development",
    link: null,
    highlights: [
      "React Native cross-platform development",
      "AWS cloud infrastructure integration",
      "Real-time messaging with SQS and Firebase",
      "Secure credential management"
    ]
  },
  {
    id: 2,
    title: "MyMori Healthcare Platform",
    description: "Microservice-based healthcare platform with subscription management and secure authentication systems.",
    technologies: ["Spring Boot", "AWS", "Twilio", "Apple/Google APIs"],
    category: "Healthcare",
    status: "Production",
    link: null,
    highlights: [
      "Subscription service integration",
      "Multi-platform SSO",
      "HIPAA compliant architecture"
    ]
  },
  {
    id: 3,
    title: "StartupOS Financial Dashboard",
    description: "Comprehensive financial management solution for startups with third-party integrations and analytics.",
    technologies: ["Spring Boot", "GraphQL", "Google APIs", "Data Visualization"],
    category: "FinTech",
    status: "Production",
    link: null,
    highlights: [
      "70% query performance improvement",
      "Multiple third-party integrations",
      "Real-time financial analytics"
    ]
  },
  {
    id: 4,
    title: "Kitty P - Personal Project",
    description: "Currently developing an innovative solution focused on modern web technologies and user experience.",
    technologies: ["Modern Web Stack", "Responsive Design"],
    category: "Personal",
    status: "In Development",
    link: "https://www.kittyp.in",
    highlights: [
      "Modern architecture",
      "User-focused design",
      "Scalable solution"
    ]
  },
  {
    id: 5,
    title: "Theatre Ticketing System",
    description: "Scalable online ticketing platform inspired by BookMyShow with real-time booking capabilities.",
    technologies: ["Spring Boot", "Angular", "Spring Security", "JWT"],
    category: "Entertainment",
    status: "Completed",
    link: null,
    highlights: [
      "Microservices architecture",
      "Real-time booking system",
      "Secure authentication"
    ]
  },
  {
    id: 6,
    title: "E-commerce Jewelry Store",
    description: "Full-featured online jewelry store with secure payment processing and inventory management.",
    technologies: ["Angular", "Spring Boot", "Stripe", "PostgreSQL"],
    category: "E-commerce",
    status: "Completed",
    link: null,
    highlights: [
      "Stripe payment integration",
      "PCI DSS compliance",
      "Advanced catalog management"
    ]
  },
  {
    id: 7,
    title: "Epico Automation System",
    description: "Internal automation system for streamlining team review processes and feedback management.",
    technologies: ["Spring Boot", "Microservices", "REST APIs"],
    category: "Enterprise",
    status: "Production",
    link: null,
    highlights: [
      "Workflow automation",
      "Hierarchical management",
      "Real-time notifications"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jocelyn Campbell",
    role: "Project Client - MyMori",
    content: "Rohan demonstrated exceptional technical skills in implementing complex subscription services and ensuring full compliance with platform guidelines.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Project Client - StartupOS",
    content: "The analytical dashboard and performance optimizations delivered by Rohan significantly enhanced our financial data management capabilities.",
    rating: 5
  }
];

export const contact = {
  email: "rrohan419@gmail.com",
  phone: "+918668530410",
  location: "Pune, India",
  linkedin: "https://linkedin.com/in/rrohan419",
  github: "https://github.com/rrohan419",
  website: "https://linktr.ee/rrohan419"
};