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
      title: "Software Engineer & Frontend Developer",
      roleSubtitle: "Fresh Engineering Graduate • Computer & Systems Major",
      tagline: "Building clean, responsive, and user-centric web applications with React.js & modern frontend technologies.",
      location: "Cairo, Egypt (Open to On-site & Remote)",
      email: "mohamed110377@gmail.com",
      phone: "+201012741752",
      birthDate: "28/02/2004",
      availability: "Ready for Junior Roles, Entry-Level Positions & Internships",
      avatarUrl: "/Gemini_Generated_Image_9kv1bh9kv1bh9kv1.PNG",
      resumeUrl: "/Mohamed_Atef_CV.html",
      shortBio: "Computer & Systems Engineering graduate from Minia University (Grade: Very Good - 77.74%). Passionate about Frontend Engineering, React.js, and clean UI/UX. Driven by high curiosity, fast learning adaptability, and a strong engineering foundation in algorithms, databases, and modern web frameworks.",
      fullBio: [
        "I am a fresh Computer & Systems Engineering graduate with a strong passion for Frontend Engineering and modern software design. During my academic journey at Minia University, I built a solid foundation in computer science fundamentals—spanning Data Structures, Algorithms, Object-Oriented Programming (OOP), Databases, and Computer Architecture.",
        "My core focus is on building clean, interactive, and responsive web interfaces using React.js, JavaScript, and Tailwind CSS. I engineered 'NEFREX', a comprehensive governance and performance-measurement web platform developed for Minia University's Faculty of Engineering to modernize legacy paper-based workflows.",
        "As an entry-level engineer, my greatest strength is rapid adaptability. I actively seek out challenging environments where I can learn from experienced mentors, contribute clean and maintainable code, and grow into a high-impact software engineer."
      ]
    },
    heroBadges: [
      "Frontend / React.js Developer",
      "Computer & Systems Engineer",
      "Clean Code & UI/UX Focused",
      "Fast Learner & Adaptable"
    ],
    floatingBadges: {
      b1: "React.js & JS",
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
        label: "Engineering Graduate",
        description: "B.S. in Computer & Systems",
        icon: "GraduationCap"
      },
      {
        id: 2,
        value: "77.74%",
        label: "Very Good Grade",
        description: "Minia University Engineering",
        icon: "Award"
      },
      {
        id: 3,
        value: "100%",
        label: "Growth & Work Ethic",
        description: "Eager to learn & deliver",
        icon: "Zap"
      },
      {
        id: 4,
        value: "4+",
        label: "Specialized Courses",
        description: "Full-Stack, DB, Security, Excel",
        icon: "BookOpen"
      }
    ],
    education: {
      degree: "B.S. in Engineering (Computer & Systems Major)",
      institution: "Minia University - Faculty of Engineering",
      period: "2022 – 2026",
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
          { name: "React.js (Hooks & Components)", level: 88, tag: "Primary" },
          { name: "JavaScript (ES6+) & DOM", level: 85, tag: "Proficient" },
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
          { name: "C / C++ (OOP & Algorithms)", level: 82, tag: "Core" },
          { name: "Python", level: 80, tag: "Proficient" },
          { name: "PHP & Web Backend Logic", level: 75, tag: "Working Knowledge" },
          { name: "MySQL & Relational Databases", level: 82, tag: "Proficient" },
          { name: "RESTful API Integration", level: 80, tag: "Proficient" },
          { name: "Database Design & SQL Queries", level: 84, tag: "Proficient" }
        ]
      },
      {
        category: "Developer Tools & Platforms",
        icon: "Wrench",
        skills: [
          { name: "Git & GitHub Version Control", level: 88, tag: "Advanced" },
          { name: "Docker (Containerization Basics)", level: 72, tag: "Familiar" },
          { name: "Linux / Kali Linux Command Line", level: 78, tag: "Proficient" },
          { name: "VS Code & Debugging Tools", level: 90, tag: "Advanced" },
          { name: "Vite & Modern Build Tooling", level: 85, tag: "Proficient" },
          { name: "Microsoft Excel (Data Analysis)", level: 85, tag: "Proficient" }
        ]
      }
    ],
    projectCategories: ["All", "Featured Project", "Web Application", "Academic / Full Stack"],
    projects: [
      {
        id: 1,
        title: "NEFREX - Institutional Governance & Performance Platform",
        subtitle: "Web-based Governance Platform for Minia University",
        category: "Featured Project",
        description: "A specialized web-based governance and performance-measurement platform engineered to replace paper-based quality-assurance and institutional governance processes currently used at Minia University's Faculty of Engineering.",
        image: "/NEFREX.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "Node.js", "JavaScript", "TypeScript", "Python", "PostgreSQL", "LocalStorage", "Git"],
        liveUrl: "#",
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
        liveUrl: "#",
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
        title: "Full-Stack Web Management System",
        subtitle: "Database-Driven Web Application",
        category: "Academic / Full Stack",
        description: "A complete database-driven management application featuring secure user authentication, CRUD operations, relational schema modeling, and responsive administrative dashboards.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        liveUrl: "#",
        githubUrl: "https://github.com/M7md-atef",
        featured: false,
        highlights: [
          "Relational MySQL database with normalized tables and indexes",
          "User authentication and session management",
          "Responsive UI with intuitive form validations"
        ]
      },
      {
        id: 4,
        title: "Data Analysis & Metrics Reporting System",
        subtitle: "Automated Data Processing & Sheet Analysis",
        category: "Academic / Full Stack",
        description: "Data analysis project employing advanced equations, pivot tables, and statistical summaries to analyze organizational performance datasets and generate visual decision-making charts.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        techStack: ["Data Analysis", "Excel Functions", "Statistical Modeling", "Data Visualization"],
        liveUrl: "#",
        githubUrl: "https://github.com/M7md-atef",
        featured: false,
        highlights: [
          "Structured analysis of raw operational records",
          "Automated formula calculations and error checking",
          "Visual chart reporting for leadership insights"
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
      aboutDesc: "Fresh Computer & Systems Engineering Graduate with a passion for frontend development, strong foundation, and rapid adaptability.",
      softSkillsTitle: "Core Strengths & Soft Skills",
      softSkillsSubtitle: "What makes me a high-potential hire",
      languagesTitle: "Languages",
      languagesSubtitle: "Effective communication in multinational team settings",
      skillsSubtitle: "Technical Capabilities",
      skillsTitle: "Skills &",
      skillsTitleHighlight: "Technologies",
      skillsDesc: "A solid engineering stack built through intensive university coursework and practical project engineering.",
      alsoExpWith: "Also Experienced With",
      projectsSubtitle: "Featured Work",
      projectsTitle: "Selected",
      projectsTitleHighlight: "Projects",
      projectsDesc: "Showcase of academic platforms, web applications, and database-driven systems.",
      githubBannerTitle: "Interested in exploring more code & repositories?",
      githubBannerDesc: "Check out my GitHub profile for full repository architectures and source code.",
      eduSubtitle: "Academic & Continuous Learning",
      eduTitle: "Education &",
      eduTitleHighlight: "Courses",
      eduDesc: "Strong computer & systems engineering foundation complemented by specialized web, database, and security training.",
      courseworkHeading: "Core Engineering Coursework & Concepts Mastered",
      specializedHeading: "Specialized Technical Training & Courses",
      specializedSub: "Practical domain certifications",
      completedBadge: "Completed & Verified",
      contactSubtitle: "Let's Connect",
      contactTitle: "Get In",
      contactTitleHighlight: "Touch",
      contactDesc: "I am currently open to Junior Software Engineer, Frontend Developer, and Internship opportunities. Let's discuss how I can contribute to your team!",
      contactDetails: "Contact Details",
      directEmail: "Direct Email",
      phoneWhatsapp: "Phone / WhatsApp",
      location: "Location",
      employmentStatus: "Employment Status",
      readyToStart: "Ready to start immediately",
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
      title: "مهندس برمجيات ومطور واجهات أمامية",
      roleSubtitle: "خريج هندسة حديث • تخصص حاسبات ونظم",
      tagline: "تطوير تطبيقات ويب عصرية، سريعة وسهلة الاستخدام باستخدام React.js وأحدث تقنيات الويب.",
      location: "القاهرة، مصر (متاح للعمل الحضوري وعن بُعد)",
      email: "mohamed110377@gmail.com",
      phone: "+201012741752",
      birthDate: "28/02/2004",
      availability: "جاهز للفرص الوظيفية للمبتدئين وتدريب الشركات (Junior / Intern)",
      resumeUrl: "/Mohamed_Atef_CV.html",
      avatarUrl: "/Gemini_Generated_Image_9kv1bh9kv1bh9kv1.PNG",
      shortBio: "خريج هندسة الحاسبات والنظم من جامعة المنيا (تقدير: جيد جداً - 77.74%). شغوف بتطوير الواجهات الأمامية باستخدام React.js وتصميم تجارب مستخدم متميزة. أمتلك أساساً هندسياً قوياً في الخوارزميات، قواعد البيانات، والتعلم السريع.",
      fullBio: [
        "مهندس برمجيات حديث التخرج من قسم هندسة الحاسبات والنظم بجامعة المنيا. بنيت خلال دراستي الأكاديمية أساساً علمياً متيناً يشمل هياكل البيانات (Data Structures)، الخوارزميات (Algorithms)، البرمجة كائنية التوجه (OOP)، أنظمة قواعد البيانات وهندسة الحاسبات.",
        "أركز على بناء واجهات ويب تفاعلية وسلسة باستخدام React.js و JavaScript و Tailwind CSS. قمت بتطوير منصة 'NEFREX' وهي منصة حوكمة وقياس أداء إلكترونية تم تطويرها لكلية الهندسة بجامعة المنيا لتحويل العمليات الورقية لضمان الجودة إلى نظام رقمي متكامل.",
        "أهم ما يميزني كمهندس مبتدئ هو سرعة التعلم والتكيف والحرص على تطبيق أفضل الممارسات البرمجية (Clean Code). أبحث عن بيئة عمل طموحة تتيح لي اكتساب الخبرة العملية والمساهمة الفعالة في إنجاح المشاريع."
      ]
    },
    heroBadges: [
      "مطور واجهات React.js",
      "مهندس حاسبات ونظم",
      "كود نظيف وتصميم UI/UX",
      "سريع التعلم والتكيف"
    ],
    floatingBadges: {
      b1: "React.js و JS",
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
        label: "خريج كلية الهندسة",
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
        label: "الشغف والالتزام",
        description: "استعداد دائم للتعلم والعطاء",
        icon: "Zap"
      },
      {
        id: 4,
        value: "4+",
        label: "دورات تدريبية متخصصة",
        description: "تطوير الويب، قواعد البيانات، الأمان",
        icon: "BookOpen"
      }
    ],
    education: {
      degree: "بكالوريوس الهندسة (شعبة هندسة الحاسبات والنظم)",
      institution: "جامعة المنيا - كلية الهندسة",
      period: "2022 – 2026",
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
          { name: "React.js (Hooks & Components)", level: 88, tag: "المجال الأساسي" },
          { name: "JavaScript (ES6+) & DOM", level: 85, tag: "متقن" },
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
          { name: "C / C++ (OOP & Algorithms)", level: 82, tag: "الأساس الأكاديمي" },
          { name: "Python", level: 80, tag: "متقن" },
          { name: "PHP & Web Backend Logic", level: 75, tag: "معرفة عملية" },
          { name: "MySQL & Relational Databases", level: 82, tag: "متقن" },
          { name: "RESTful API Integration", level: 80, tag: "متقن" },
          { name: "Database Design & SQL Queries", level: 84, tag: "متقن" }
        ]
      },
      {
        category: "أدوات التطوير وبيئات العمل",
        icon: "Wrench",
        skills: [
          { name: "Git & GitHub Version Control", level: 88, tag: "متقدم" },
          { name: "Docker (Containerization Basics)", level: 72, tag: "معرفة أساسية" },
          { name: "Linux / Kali Linux Command Line", level: 78, tag: "متقن" },
          { name: "VS Code & Debugging Tools", level: 90, tag: "متقدم" },
          { name: "Vite & Modern Build Tooling", level: 85, tag: "متقن" },
          { name: "Microsoft Excel (Data Analysis)", level: 85, tag: "متقن" }
        ]
      }
    ],
    projectCategories: ["الكل", "مشروع رئيسي", "تطبيقات الويب", "مشاريع أكاديمية"],
    projects: [
      {
        id: 1,
        title: "منصة NEFREX - حوكمة المؤسسات وقياس الأداء الأكاديمي",
        subtitle: "منصة ويب لحوكمة وضمان الجودة لكلية الهندسة بجامعة المنيا",
        category: "مشروع رئيسي",
        description: "منصة ويب متكاملة لقياس الأداء المؤسسي وميكنة عمليات ضمان الجودة والاعتماد الأكاديمي، تم بناؤها لاستبدال العمليات الورقية التقليدية بكلية الهندسة جامعة المنيا بنظام رقمي تفاعلي.",
        image: "/NEFREX.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "Node.js", "JavaScript", "TypeScript", "Python", "PostgreSQL", "LocalStorage", "Git"],
        liveUrl: "#",
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
        image: "/Portfolio.PNG",
        techStack: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "LocalStorage"],
        liveUrl: "#",
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
        title: "نظام إدارة بيانات الويب المتكامل",
        subtitle: "تطبيق ويب تفاعلي مع قواعد بيانات علائقية",
        category: "مشاريع أكاديمية",
        description: "تطبيق ويب لإدارة البيانات مع مصادقة المستخدمين، عمليات الإضافة والتعديل والحذف (CRUD)، وتصميم قواعد بيانات MySQL مهيكلة.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        liveUrl: "#",
        githubUrl: "https://github.com/M7md-atef",
        featured: false,
        highlights: [
          "قاعدة بيانات MySQL علائقية مفهرسة ومحسنة",
          "تسجيل دخول آمن وإدارة الجلسات",
          "واجهة مستخدم متجاوبة مع التحقق من صحة المدخلات"
        ]
      },
      {
        id: 4,
        title: "نظام تحليل البيانات وإصدار التقارير",
        subtitle: "معالجة وتحليل مجموعات البيانات الإحصائية",
        category: "مشاريع أكاديمية",
        description: "مشروع تحليل بيانات يعتمد على المعادلات المتقدمة والجداول المحورية (Pivot Tables) لتحليل سجلات الأداء المؤسسي واستخراج رسوم بيانية توضيحية لمتخذي القرار.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        techStack: ["Data Analysis", "Excel Functions", "Statistical Modeling", "Data Visualization"],
        liveUrl: "#",
        githubUrl: "https://github.com/M7md-atef",
        featured: false,
        highlights: [
          "تنظيم وتحليل السجلات التشغيلية الخام",
          "معادلات حسابية مؤتمتة وتقارير دقيقة",
          "رسوم بيانية مرئية لدعم القرارات الإدارية"
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
      aboutDesc: "مهندس حاسبات ونظم حديث التخرج، شغوف بتطوير الواجهات الأمامية، سريع التعلم ومستعد للمساهمة الفعالة في فرق العمل.",
      softSkillsTitle: "المهارات الشخصية ونقاط القوة",
      softSkillsSubtitle: "السمات التي تجعل مني مرشحاً ذا إمكانات واعدة",
      languagesTitle: "اللغات",
      languagesSubtitle: "تواصل فعال واحترافي في بيئات العمل متعددة الجنسيات",
      skillsSubtitle: "القدرات التقنية",
      skillsTitle: "المهارات و",
      skillsTitleHighlight: "التقنيات",
      skillsDesc: "مجموعة مهارات برمجية وهندسية تم صقلها من خلال الدراسة الجامعية والمشاريع العملية.",
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
      contactDesc: "أنا متاح حالياً للفرص الوظيفية في تطوير البرمجيات والواجهات الأمامية وبرامج التدريب. يسعدني مناقشة كيف يمكنني المساهمة في فريقكم!",
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
