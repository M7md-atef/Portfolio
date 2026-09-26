/**
 * Centralized Bilingual Portfolio Data for Mohamed Atef
 * Supports English ('en') and Arabic ('ar')
 */

export const portfolioContent = {
  en: {
    personalInfo: {
      name: "Mohamed Atef",
      firstName: "Mohamed",
      lastName: "Atef",
      title: "Software Engineer",
      roleSubtitle: "Computer & Systems Engineer • Web & Software Solutions",
      tagline: "Building clean, responsive, and user-centric web applications with React.js, Next.js, and modern web architectures.",
      location: "Cairo, Egypt (Open to On-site & Remote)",
      email: "mohamed110377@gmail.com",
      phone: "+201012741752",
      birthDate: "28/02/2004",
      availability: "Available for Full-Time Software Engineering & Web Development Roles",
      avatarUrl: "/Gemini_Generated_Image_s8rvt5s8rvt5s8rv.PNG",
      resumeUrl: "/Mohamed_Atef_CV.pdf",
      shortBio: "Software Engineer with a Computer & Systems Engineering degree from Minia University. Specialized in building modern, high-performance web applications with a focus on scalable UI design, clean code architecture, and fast tech-stack adaptability.",
      fullBio: [
        "I am a Software Engineer with a Computer & Systems Engineering background and deep core expertise in modern software architecture. During my engineering studies at Minia University, I built a strong foundation spanning Data Structures, Algorithms, Object-Oriented Programming (OOP), Databases, and Distributed Systems.",
        "My primary engineering focus centers on architecting clean, interactive, and responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Notably, I engineered 'NEFREX'—an enterprise-grade institutional governance platform designed for Minia University to digitize and automate complex quality-assurance workflows.",
        "Driven by clean code principles and architectural maintainability, I excel in fast-paced environments where I can leverage my problem-solving skills, collaborate on high-scale systems, and deliver impactful digital products."
      ]
    },
    heroBadges: [
      "Software Engineer",
      "Computer & Systems Engineer",
      "Clean Code & Web Architecture",
      "Fast Tech-Stack Adaptability"
    ],
    floatingBadges: {
      b1: "React.js & TypeScript",
      b2: "Tailwind & UI/UX",
      b3: "C++ & Python"
    },
    cta: {
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      viewCv: "View & Print CV",
      visitGithub: "Visit GitHub Profile",
      sendMessage: "Send Message",
      sending: "Sending Message...",
      backToTop: "Back to top",
      liveDemo: "Live Demo",
      code: "Code"
    },
    stats: [
      {
        id: 1,
        value: "2026",
        label: "Engineering Qualification",
        description: "B.S. in Computer & Systems",
        icon: "GraduationCap"
      },
      {
        id: 2,
        value: "77.74%",
        label: "Very Good Distinction",
        description: "Minia University Engineering",
        icon: "Award"
      },
      {
        id: 3,
        value: "100%",
        label: "Productivity & Quality",
        description: "Dedicated to scalable solutions",
        icon: "Zap"
      },
      {
        id: 4,
        value: "4+",
        label: "Domain Specializations",
        description: "Full-Stack, DB, Security, Analytics",
        icon: "BookOpen"
      }
    ],
    education: {
      degree: "B.S. in Engineering (Computer & Systems Major)",
      institution: "Minia University - Faculty of Engineering",
      period: "2021 – 2026",
      location: "Minia, Egypt",
      grade: "Very Good (77.74%)",
      keyTopics: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (C++ / Python)",
        "Database Systems & Query Optimization",
        "Computer Architecture & Operating Systems",
        "Software Engineering & Agile Methodologies"
      ]
    },
    softSkills: [
      {
        title: "Adaptability & Fast Learning",
        description: "Rapid learning curve for new frameworks, modern libraries, languages, and technical stacks.",
        icon: "Zap"
      },
      {
        title: "Analytical Problem-Solving",
        description: "Root cause analysis, system troubleshooting, and optimizing algorithmic bottlenecks.",
        icon: "Cpu"
      },
      {
        title: "Team Collaboration",
        description: "Cross-functional teamwork, paired programming, code reviews, and Git repository coordination.",
        icon: "Users"
      },
      {
        title: "Time & Task Management",
        description: "Breaking complex features down into manageable milestones, estimating effort accurately, and prioritizing high-impact deliverables.",
        icon: "Clock"
      }
    ],
    skills: [
      {
        category: "Web & Frontend Frameworks",
        icon: "Layout",
        skills: [
          { name: "React.js & Next.js", level: 88, tag: "Primary Stack" },
          { name: "JavaScript (ES6+) & TypeScript", level: 85, tag: "Proficient" },
          { name: "Tailwind CSS & Modern Styling", level: 90, tag: "Advanced" },
          { name: "HTML5 & Semantic Markup", level: 92, tag: "Advanced" },
          { name: "CSS3 (Flexbox, Grid, Animations)", level: 90, tag: "Advanced" },
          { name: "Responsive & Cross-Browser Design", level: 88, tag: "Proficient" }
        ]
      },
      {
        category: "Programming Languages & Backend",
        icon: "Server",
        skills: [
          { name: "C / C++ (OOP & Algorithms)", level: 82, tag: "Core Engineering" },
          { name: "Python & Django Basics", level: 80, tag: "Proficient" },
          { name: "PHP & Web Backend Logic", level: 75, tag: "Working Knowledge" },
          { name: "MySQL & PostgreSQL", level: 82, tag: "Proficient" },
          { name: "RESTful API Integration", level: 85, tag: "Proficient" },
          { name: "Database Design & SQL Queries", level: 84, tag: "Proficient" }
        ]
      },
      {
        category: "Developer Tools & Infrastructure",
        icon: "Wrench",
        skills: [
          { name: "Git & GitHub Version Control", level: 88, tag: "Advanced" },
          { name: "Docker (Containerization Basics)", level: 72, tag: "Familiar" },
          { name: "Linux Command Line Environment", level: 78, tag: "Proficient" },
          { name: "VS Code & Debugging Tools", level: 90, tag: "Advanced" },
          { name: "Vite & Modern Build Tooling", level: 85, tag: "Proficient" },
          { name: "Data Analysis & Tools", level: 85, tag: "Proficient" }
        ]
      }
    ],
    projectCategories: ["All", "Featured Project", "Web Application", "Interactive Web Game"],
    projects: [
      {
        id: 1,
        title: "NEFREX - Institutional Governance & Performance Platform",
        subtitle: "Web-based Governance Platform for Minia University",
        category: "Featured Project",
        description: "A specialized web-based governance and performance-measurement platform engineered to replace paper-based quality-assurance and institutional governance processes currently used at Minia University's Faculty of Engineering.",
        image: "/NEFREX.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "Node.js", "JavaScript", "TypeScript", "Python", "PostgreSQL", "LocalStorage", "Git"],
        liveUrl: "https://nefrex-dyeuc3ege3a3dwbt.italynorth-01.azurewebsites.net",
        githubUrl: "https://github.com/M7md-atef/NEFREX",
        featured: true,
        highlights: [
          "Digitized manual quality-assurance workflows for faculty departments",
          "Interactive dashboards for performance metrics & accreditation tracking",
          "Role-based access control and institutional data security"
        ]
      },
      {
        id: 2,
        title: "Interactive Developer Portfolio & Design System",
        subtitle: "High-Performance Single Page Web App",
        category: "Web Application",
        description: "Modern, responsive personal portfolio web application built with React, Tailwind CSS, and glassmorphic UI principles, featuring animated collapsible navigation, custom color schemes, and theme persistence.",
        image: "/Portfolio.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "LocalStorage"],
        liveUrl: "https://portfolio-theta-pearl-cergkjbdgy.vercel.app/",
        githubUrl: "https://github.com/M7md-atef/Portfolio",
        featured: true,
        highlights: [
          "Light / Dark mode toggle with dynamic gradient glow effects",
          "Collapsible animated sidebar with active scroll spy tracking",
          "Fully responsive architecture for mobile, tablet, and desktop"
        ]
      },
      {
        id: 3,
        title: "Al-Mahfza – Fintech Remittance & Digital Wallet Platform",
        subtitle: "Cross-Border Digital Wallet & Money Transfer Platform",
        category: "Web Application",
        description: "A modern, conversion-driven fintech landing page engineered for digital remittance and cross-border money transfers, prioritizing user trust, mobile-first design, and seamless interactive payment flows.",
        image: "/Al-Mahfza.PNG",
        techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Git", "Vercel"],
        liveUrl: "https://al-mahfza.vercel.app/",
        githubUrl: "https://github.com/M7md-atef/Al-Mahfza",
        featured: false,
        highlights: [
          "Engineered mobile-first interactive payment flows, security assurances, and CTA sections",
          "Built a high-conversion digital remittance experience with smooth UX and trust-focused design",
          "Architected reusable component pipelines backed by clean, data-driven content structures"
        ]
      },
      {
        id: 4,
        title: "Tic-Tac-Toe – Tactile Arcade Game",
        subtitle: "Customizable Browser-Based Tic-Tac-Toe with Minimax AI",
        category: "Interactive Web Game",
        description: "A tactile, arcade-inspired Tic-Tac-Toe experience featuring local multiplayer, three AI difficulty levels, customizable themes, persistent scorekeeping, animated feedback, and responsive CSS-based 3D effects.",
        image: "/Tic-Tac-Toe.PNG",
        techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Minimax AI", "Web Audio API", "LocalStorage", "Canvas Confetti", "Git", "Vercel"],
        liveUrl: "https://tic-tac-toe-3d-alpha.vercel.app/",
        githubUrl: "https://github.com/M7md-atef/tic-tac-toe-3d",
        featured: false,
        highlights: [
          "Engineered player-versus-player and player-versus-AI gameplay with Easy, Medium, and Impossible difficulty levels",
          "Built a customizable arcade-console interface with five themes, token colors, sound controls, and interactive board tilt",
          "Implemented reusable game architecture with Minimax AI, persistent scoreboards, match history, undo functionality, and responsive layouts"
        ]
      }
    ],
    courses: [
      {
        id: 1,
        title: "Full-Stack Web Development",
        institution: "Professional Training Course",
        description: "Covered foundational and intermediate web technologies including HTML5, CSS3, modern JavaScript, PHP server-side logic, and MySQL database management.",
        badge: "Web Development",
        icon: "Code2"
      },
      {
        id: 2,
        title: "Database Fundamentals",
        institution: "Core Systems Course",
        description: "Covered relational database core concepts, entity-relationship design principles, normalization, and query tools needed to store, organize, and retrieve data efficiently.",
        badge: "Databases & SQL",
        icon: "Database"
      },
      {
        id: 3,
        title: "Cyber Security Attack Techniques",
        institution: "Security & Systems Training",
        description: "Hands-on exploration of the Kali Linux operating system, network scanning, vulnerability identification, and essential security auditing tools.",
        badge: "Security & Linux",
        icon: "ShieldAlert"
      },
      {
        id: 4,
        title: "Data Analysis Using Excel",
        institution: "Analytics Training",
        description: "Deep dive into analyzing structured data, employing complex spreadsheet formulas, pivot tables, and transforming raw records into clear visual summaries.",
        badge: "Data Analysis",
        icon: "FileSpreadsheet"
      }
    ],
    languages: [
      { name: "Arabic", level: "Native Speaker", proficiency: 100 },
      { name: "English", level: "Professional Working Proficiency", proficiency: 85 }
    ],
    nav: [
      { id: "home", label: "Home", icon: "Home" },
      { id: "about", label: "About", icon: "User" },
      { id: "skills", label: "Skills", icon: "Code2" },
      { id: "projects", label: "Projects", icon: "FolderGit2" },
      { id: "education", label: "Education & Courses", icon: "GraduationCap" },
      { id: "contact", label: "Contact", icon: "Send" }
    ],
    sections: {
      aboutSubtitle: "Candidate Profile",
      aboutTitle: "About",
      aboutTitleHighlight: "Me",
      aboutDesc: "Software Engineer with a Computer & Systems background, dedicated to architecting scalable web applications and high-performance UI systems.",
      softSkillsTitle: "Core Strengths & Technical Value",
      softSkillsSubtitle: "What makes me a strong engineering team member",
      languagesTitle: "Languages",
      languagesSubtitle: "Effective communication in multinational team settings",
      skillsSubtitle: "Technical Capabilities",
      skillsTitle: "Skills &",
      skillsTitleHighlight: "Technologies",
      skillsDesc: "A solid software engineering stack built through rigorous university computer science and hands-on project implementations.",
      alsoExpWith: "Also Experienced With",
      projectsSubtitle: "Featured Work",
      projectsTitle: "Selected",
      projectsTitleHighlight: "Projects",
      projectsDesc: "Showcase of institutional web platforms, fintech interfaces, and software architectures.",
      githubBannerTitle: "Interested in exploring more code & repositories?",
      githubBannerDesc: "Check out my GitHub profile for full repository architectures and source code.",
      eduSubtitle: "Academic & Continuous Learning",
      eduTitle: "Education &",
      eduTitleHighlight: "Courses",
      eduDesc: "Strong computer & systems engineering foundation complemented by specialized web, database, and software architecture training.",
      courseworkHeading: "Core Engineering Coursework & Concepts Mastered",
      specializedHeading: "Specialized Technical Training & Courses",
      specializedSub: "Practical domain certifications",
      completedBadge: "Completed & Verified",
      contactSubtitle: "Let's Connect",
      contactTitle: "Get In",
      contactTitleHighlight: "Touch",
      contactDesc: "I am currently open to Software Engineering, Frontend Development, and Full-Stack opportunities. Let's discuss how I can contribute to your team!",
      contactDetails: "Contact Details",
      directEmail: "Direct Email",
      phoneWhatsapp: "Phone / WhatsApp",
      location: "Location",
      employmentStatus: "Employment Status",
      readyToStart: "Available for Immediate Onboarding",
      socialProfiles: "Professional Profiles",
      sendMessageTitle: "Send a Direct Message",
      sendMessageDesc: "Recruiters and hiring managers: send an email or note directly through this form.",
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      subjectLabel: "Subject / Role Title",
      messageLabel: "Your Message",
      successTitle: "Message sent successfully!",
      successDesc: "Thank you for reaching out, Mohamed will get back to you promptly.",
      footerCredits: "Crafted with React & Tailwind CSS"
    }
  },

  // ---------------- ARABIC TRANSLATION ----------------
  ar: {
    personalInfo: {
      name: "محمد عاطف",
      firstName: "محمد",
      lastName: "عاطف",
      title: "مهندس برمجيات",
      roleSubtitle: "مهندس حاسبات ونظم • تطوير البرمجيات وحلول الويب",
      tagline: "تطوير تطبيقات ويب عصرية وعالية الأداء باستخدام React.js و Next.js وأحدث أطر عمل الويب.",
      location: "القاهرة، مصر (متاح للعمل الحضوري وعن بُعد)",
      email: "mohamed110377@gmail.com",
      phone: "+201012741752",
      birthDate: "28/02/2004",
      availability: "متاح لفرص تطوير البرمجيات وتطبيقات الويب (Full-Time / Remote)",
      resumeUrl: "/Mohamed_Atef_CV.pdf",
      avatarUrl: "/Gemini_Generated_Image_s8rvt5s8rvt5s8rv.PNG",
      shortBio: "مهندس برمجيات من قسم هندسة الحاسبات والنظم بجامعة المنيا. متخصص في بناء تطبيقات ويب عصرية وعالية الأداء مع التركيز على تصميم واجهات مستخدم قابلة للتوسع، هندسة كود نظيف، وسرعة التكيف مع أحدث أطر العمل والتقنيات.",
      fullBio: [
        "مهندس برمجيات من قسم هندسة الحاسبات والنظم بجامعة المنيا. بنيت خلال دراستي الهندسيّة أساساً أكاديمياً وتقنياً متيناً يشمل هياكل البيانات (Data Structures)، الخوارزميات (Algorithms)، البرمجة كائنية التوجه (OOP)، أنظمة قواعد البيانات ومعمارية البرمجيات.",
        "أركز على بناء وتطوير تطبيقات ويب تفاعلية وسلسة باستخدام React.js و Next.js و TypeScript و Tailwind CSS. قمت بتطوير منصة 'NEFREX' وهي منصة حوكمة وقياس أداء إلكترونية تم تطويرها لكلية الهندسة بجامعة المنيا لتحويل العمليات الورقية لضمان الجودة إلى نظام رقمي متكامل.",
        "أهم ما يميزني كمهندس هو الحرص على تطبيق أفضل الممارسات البرمجية (Clean Code) وسرعة استيعاب أحدث التقنيات. أبحث عن بيئة عمل احترافية تتيح لي المساهمة الفعالة في بناء وتطوير أنظمة برمجية متكاملة عالية الكفاءة."
      ]
    },
    heroBadges: [
      "مهندس برمجيات",
      "مهندس حاسبات ونظم",
      "كود نظيف ومعمارية ويب",
      "سريع التعلم والتكيف"
    ],
    floatingBadges: {
      b1: "React.js و TypeScript",
      b2: "Tailwind وتصميم UI/UX",
      b3: "C++ و Python"
    },
    cta: {
      viewProjects: "استعراض المشاريع",
      contactMe: "تواصل معي",
      viewCv: "عرض وطباعة السيرة الذاتية",
      visitGithub: "زيارة حساب GitHub",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      backToTop: "للأعلى",
      liveDemo: "معاينة حية",
      code: "الكود البرمجي"
    },
    stats: [
      {
        id: 1,
        value: "2026",
        label: "مؤهل هندسة الحاسبات",
        description: "بكالوريوس حاسبات ونظم",
        icon: "GraduationCap"
      },
      {
        id: 2,
        value: "77.74%",
        label: "تقدير جيد جداً",
        description: "هندسة جامعة المنيا",
        icon: "Award"
      },
      {
        id: 3,
        value: "100%",
        label: "الإنتاجية والجودة",
        description: "التزام بتسليم حلول برمجية متكاملة",
        icon: "Zap"
      },
      {
        id: 4,
        value: "4+",
        label: "مجالات تخصصية",
        description: "تطوير الويب، قواعد البيانات، الأمان",
        icon: "BookOpen"
      }
    ],
    education: {
      degree: "بكالوريوس الهندسة (شعبة هندسة الحاسبات والنظم)",
      institution: "جامعة المنيا - كلية الهندسة",
      period: "2021 – 2026",
      location: "المنيا، مصر",
      grade: "جيد جداً (77.74%)",
      keyTopics: [
        "هياكل البيانات والخوارزميات (Data Structures & Algorithms)",
        "البرمجة كائنية التوجه (C++ / Python OOP)",
        "أنظمة قواعد البيانات واستعلامات SQL",
        "معمارية الحاسب وأنظمة التشغيل (OS)",
        "هندسة البرمجيات ومنهجيات Agile"
      ]
    },
    softSkills: [
      {
        title: "القدرة على التكيف والتعلم السريع",
        description: "سرعة استيعاب أطر العمل، المكتبات البرمجية، والتقنيات الحديثة في وقت قياسي.",
        icon: "Zap"
      },
      {
        title: "حل المشكلات والتفكير التحليلي",
        description: "تحليل الأسباب الجذرية للمشاكل البرمجية وتتبع الأخطاء وتحسين كفاءة النظام.",
        icon: "Cpu"
      },
      {
        title: "العمل الجماعي والتعاون",
        description: "العمل الفعال ضمن فرق العمل، البرمجة التشاركية (Pair Programming)، واستخدام Git.",
        icon: "Users"
      },
      {
        title: "إدارة الوقت وتنظيم المهام",
        description: "تقسيم الميزات الكبيرة إلى مهام مرحلية واضحة وترتيب الأولويات بدقة وإتقان.",
        icon: "Clock"
      }
    ],
    skills: [
      {
        category: "أطر عمل وتقنيات الويب (Frontend)",
        icon: "Layout",
        skills: [
          { name: "React.js & Next.js", level: 88, tag: "التقنية الأساسية" },
          { name: "JavaScript (ES6+) & TypeScript", level: 85, tag: "متقن" },
          { name: "Tailwind CSS & Modern Styling", level: 90, tag: "متقدم" },
          { name: "HTML5 & Semantic Markup", level: 92, tag: "متقدم" },
          { name: "CSS3 (Flexbox, Grid, Animations)", level: 90, tag: "متقدم" },
          { name: "Responsive & Cross-Browser Design", level: 88, tag: "متقن" }
        ]
      },
      {
        category: "لغات البرمجة والواجهات الخلفية",
        icon: "Server",
        skills: [
          { name: "C / C++ (OOP & Algorithms)", level: 82, tag: "الأساس الهندسي" },
          { name: "Python & Django Basics", level: 80, tag: "متقن" },
          { name: "PHP & Web Backend Logic", level: 75, tag: "معرفة عملية" },
          { name: "MySQL & PostgreSQL", level: 82, tag: "متقن" },
          { name: "RESTful API Integration", level: 85, tag: "متقن" },
          { name: "Database Design & SQL Queries", level: 84, tag: "متقن" }
        ]
      },
      {
        category: "أدوات التطوير وبيئات العمل",
        icon: "Wrench",
        skills: [
          { name: "Git & GitHub Version Control", level: 88, tag: "متقدم" },
          { name: "Docker (Containerization Basics)", level: 72, tag: "معرفة أساسية" },
          { name: "Linux Command Line Environment", level: 78, tag: "متقن" },
          { name: "VS Code & Debugging Tools", level: 90, tag: "متقدم" },
          { name: "Vite & Modern Build Tooling", level: 85, tag: "متقن" },
          { name: "Data Analysis & Tools", level: 85, tag: "متقن" }
        ]
      }
    ],
    projectCategories: ["الكل", "مشروع رئيسي", "تطبيقات الويب", "ألعاب تفاعلية"],
    projects: [
      {
        id: 1,
        title: "منصة NEFREX - حوكمة المؤسسات وقياس الأداء الأكاديمي",
        subtitle: "منصة ويب لحوكمة وضمان الجودة لكلية الهندسة بجامعة المنيا",
        category: "مشروع رئيسي",
        description: "منصة ويب متكاملة لقياس الأداء المؤسسي وميكنة عمليات ضمان الجودة والاعتماد الأكاديمي، تم بناؤها لاستبدال العمليات الورقية التقليدية بكلية الهندسة جامعة المنيا بنظام رقمي تفاعلي.",
        image: "/NEFREX_AR.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "Node.js", "JavaScript", "TypeScript", "Python", "PostgreSQL", "LocalStorage", "Git"],
        liveUrl: "https://nefrex-dyeuc3ege3a3dwbt.italynorth-01.azurewebsites.net",
        githubUrl: "https://github.com/M7md-atef/NEFREX",
        featured: true,
        highlights: [
          "تحويل مسارات ضمان الجودة الورقية إلى نظام رقمي مؤتمت",
          "لوحات تحكم تفاعلية لمتابعة مؤشرات الأداء والاعتماد الأكاديمي",
          "نظام صلاحيات أمان متعدد المستويات للمستخدمين وأعضاء هيئة التدريس"
        ]
      },
      {
        id: 2,
        title: "الموقع التعريفي التفاعلي للمطور (Portfolio)",
        subtitle: "تطبيق ويب أحادي الصفحة عالي الأداء",
        category: "تطبيقات الويب",
        description: "موقع شخصي متكامل ومتجاوب تم بناؤه باستخدام React و Tailwind CSS وتأثيرات Glassmorphism، يدعم التبديل السلس بين الوضع الليلي والنهاري ودعم كامل للغتين العربية والإنجليزية.",
        image: "/Portfolio_AR.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "LocalStorage"],
        liveUrl: "https://portfolio-theta-pearl-cergkjbdgy.vercel.app/",
        githubUrl: "https://github.com/M7md-atef/Portfolio",
        featured: true,
        highlights: [
          "تبديل فوري بين الوضع الليلي والنهاري مع حفظ الإعدادات",
          "قائمة جانبية متحركة قابلة للطي ومتابعة تلقائية لأقسام الصفحة",
          "دعم ثنائي اللغة مع اتجاه RTL سلس وتصميم متجاوب 100%"
        ]
      },
      {
        id: 3,
        title: "المحفظة – منصة التحويلات المالية والمحفظة الرقمية",
        subtitle: "منصة المحفظة الرقمية وتحويل الأموال عبر الحدود",
        category: "تطبيقات الويب",
        description: "صفحة هبوط حديثة وموجهة لزيادة التحويلات (Conversion-driven) في مجال التكنولوجيا المالية، تم تطويرها للتحويلات الرقمية وعبر الحدود مع التركيز على تعزيز ثقة المستخدم، التصميم الموجه للهواتف أولاً (Mobile-first)، وتدفقات دفع تفاعلية وسلسة.",
        image: "/Al-Mahfza_AR.PNG",
        techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Git", "Vercel"],
        liveUrl: "https://al-mahfza.vercel.app/",
        githubUrl: "https://github.com/M7md-atef/Al-Mahfza",
        featured: false,
        highlights: [
          "تطوير تدفقات دفع تفاعلية تتوافق مع الهواتف أولاً، مع أقسام لضمانات الأمان ودعوات اتخاذ الإجراء (CTA)",
          "بناء تجربة تحويل أموال رقمية تهدف لتحقيق أعلى معدلات تحويل مع تجربة مستحدثة وتصميم يعزز الثقة",
          "تصميم بنية مكونات قابلة لإعادة الاستخدام مدعومة بهيكل محتوى نظيف وموجه بالبيانات"
        ]
      },
      {
        id: 4,
        title: "لعبة XO – لعبة أركيد تفاعلية",
        subtitle: "لعبة XO قابلة للتخصيص مع ذكاء اصطناعي Minimax",
        category: "ألعاب تفاعلية",
        description: "لعبة XO ثلاثية الأبعاد تقدم تجربة أركيد تفاعلية مع ذكاء اصطناعي Minimax وخيارات تخصيص متعددة.",
        image: "/Tic-Tac-Toe.PNG",
        techStack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Minimax AI", "Web Audio API", "LocalStorage", "Canvas Confetti", "Git", "Vercel"],
        liveUrl: "https://tic-tac-toe-3d-alpha.vercel.app/",
        githubUrl: "https://github.com/M7md-atef/tic-tac-toe-3d",
        featured: false,
        highlights: [
          "تجربة أركيد تفاعلية مع تصميم ثلاثي الأبعاد",
          "ذكاء اصطناعي Minimax بمستويات صعوبة مختلفة",
          "خيارات تخصيص متعددة لللعبة"
        ]
      }
    ],
    courses: [
      {
        id: 1,
        title: "تطوير الويب الشامل (Full-Stack Web Development)",
        institution: "دورة تدريبية متخصصة",
        description: "تغطية شاملة لتقنيات الويب الأساسية والمتقدمة تشمل HTML5 و CSS3 و JavaScript الحديثة، مع برمجة الواجهات الخلفية بـ PHP وإدارة قواعد بيانات MySQL.",
        badge: "تطوير الويب",
        icon: "Code2"
      },
      {
        id: 2,
        title: "أساسيات قواعد البيانات (Database Fundamentals)",
        institution: "دورة أكاديمية وأنظمة متقدمة",
        description: "دراسة المفاهيم الجوهرية لقواعد البيانات العلائقية، تصميم مخططات ERD، التطبيع (Normalization)، وأدوات الاستعلام لاسترجاع البيانات بكفاءة.",
        badge: "قواعد البيانات و SQL",
        icon: "Database"
      },
      {
        id: 3,
        title: "تقنيات الهجمات والأمن السيبراني (Cyber Security)",
        institution: "تدريب أمان الأنظمة والمعلومات",
        description: "تدريب عملي على نظام تشغيل Kali Linux، فحص الشبكات، اكتشاف الثغرات الأمنية، واستخدام أهم أدوات الفحص والحماية.",
        badge: "الأمان السيبراني ولينكس",
        icon: "ShieldAlert"
      },
      {
        id: 4,
        title: "تحليل البيانات باستخدام Excel",
        institution: "تدريب تحليل البيانات",
        description: "التعمق في تحليل البيانات المنظمة وتطبيق المعادلات الإحصائية المعقدة واستخدام الجداول المحورية لتحويل البيانات إلى تقارير ورسوم بيانية واضحة.",
        badge: "تحليل البيانات",
        icon: "FileSpreadsheet"
      }
    ],
    languages: [
      { name: "العربية", level: "اللغة الأم (Native)", proficiency: 100 },
      { name: "الإنجليزية", level: "مستوى عملي احترافي (Professional)", proficiency: 85 }
    ],
    nav: [
      { id: "home", label: "الرئيسية", icon: "Home" },
      { id: "about", label: "نبذة عني", icon: "User" },
      { id: "skills", label: "المهارات", icon: "Code2" },
      { id: "projects", label: "المشاريع", icon: "FolderGit2" },
      { id: "education", label: "التعليم والدورات", icon: "GraduationCap" },
      { id: "contact", label: "تواصل معي", icon: "Send" }
    ],
    sections: {
      aboutSubtitle: "الملف التعريفي",
      aboutTitle: "نبذة",
      aboutTitleHighlight: "عني",
      aboutDesc: "مهندس حاسبات ونظم متخصص في تطوير تطبيقات الويب، بناء معمارية كود نظيفة، والقدرة على التكيف مع أحدث أطر العمل.",
      softSkillsTitle: "المهارات الشخصية والقيمة التقنية",
      softSkillsSubtitle: "السمات التي تجعل مني مهندساً مساهماً بفعالية في فرق العمل",
      languagesTitle: "اللغات",
      languagesSubtitle: "تواصل فعال واحترافي في بيئات العمل متعددة الجنسيات",
      skillsSubtitle: "القدرات التقنية",
      skillsTitle: "المهارات و",
      skillsTitleHighlight: "التقنيات",
      skillsDesc: "مجموعة مهارات برمجية وهندسية تم صقلها من خلال الدراسة الجامعية والمشاريع التطبيقية.",
      alsoExpWith: "خبرة إضافية في",
      projectsSubtitle: "أعمال مختارة",
      projectsTitle: "أبرز",
      projectsTitleHighlight: "المشاريع",
      projectsDesc: "استعراض للمنصات الأكاديمية وتطبيقات الويب والأنظمة البرمجية.",
      githubBannerTitle: "هل ترغب في استكشاف المزيد من المشاريع والأكواد؟",
      githubBannerDesc: "تفضل بزيارة حسابي على GitHub للاطلاع على الكود المصدري للمشاريع والمستودعات.",
      eduSubtitle: "المسار الأكاديمي والتعلم المستمر",
      eduTitle: "التعليم و",
      eduTitleHighlight: "الدورات",
      eduDesc: "أساس هندسي متين في الحاسبات والنظم معزز بدورات تدريبية متخصصة في تطوير الويب وقواعد البيانات والأمان.",
      courseworkHeading: "المفاهيم والمقررات الهندسية الأساسية",
      specializedHeading: "الدورات والتدريبات التقنية المتخصصة",
      specializedSub: "شهادات ودورات عملية",
      completedBadge: "مكتمل ومعتمد",
      contactSubtitle: "دعنا نتواصل",
      contactTitle: "تواصل",
      contactTitleHighlight: "معي",
      contactDesc: "أنا متاح حالياً لفرص تطوير البرمجيات والواجهات الأمامية وتطبيقات الويب. يسعدني مناقشة كيف يمكنني المساهمة في فريقكم!",
      contactDetails: "بيانات الاتصال",
      directEmail: "البريد الإلكتروني",
      phoneWhatsapp: "الهاتف / واتساب",
      location: "الموقع الحالي",
      employmentStatus: "حالة التوظيف",
      readyToStart: "متاح للبدء الفوري",
      socialProfiles: "الحسابات المهنية",
      sendMessageTitle: "أرسل رسالة مباشرة",
      sendMessageDesc: "مسؤولو التوظيف ومدراء الفرق: يمكنكم إرسال رسالة مباشرة عبر هذا النموذج.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      subjectLabel: "الموضوع / المسمى الوظيفي",
      messageLabel: "نص الرسالة",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successDesc: "شكراً لتواصلك، سيقوم محمد بالرد عليك في أقرب وقت ممكن.",
      footerCredits: "تم التطوير باستخدام React و Tailwind CSS"
    }
  }
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mohamed-atef-eng",
    icon: "Linkedin",
    username: "in/mohamed-atef-eng",
    color: "hover:text-blue-400"
  },
  {
    name: "GitHub",
    url: "https://github.com/M7md-atef",
    icon: "Github",
    username: "github.com/M7md-atef",
    color: "hover:text-cyan-400"
  },
  {
    name: "Email",
    url: "mailto:mohamed110377@gmail.com",
    icon: "Mail",
    username: "mohamed110377@gmail.com",
    color: "hover:text-sky-300"
  }
];