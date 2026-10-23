export type Language = 'en' | 'bn' | 'hi' | 'zh';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    portfolio: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
    cta: string;
    ctaSecondary: string;
    downloadCv: string;
    yearsExp: string;
    projects: string;
    clients: string;
    yearsLabel: string;
    projectsLabel: string;
    clientsLabel: string;
    badgeAvailable: string;
    badge1Title: string;
    badge1Sub: string;
    badge2Title: string;
    badge2Sub: string;
  };
  about: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    aboutMeTitle: string;
    aboutMeText: string;
    profileTitle: string;
    profileText: string;
    tagline: string;
    languagesTitle: string;
    languages: Array<{
      name: string;
      level: string;
      code: string;
    }>;
    strengthsTitle: string;
    strengthsSubtitle: string;
    strengths: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
    quickInfo: {
      locationLabel: string;
      locationValue: string;
      emailLabel: string;
      phoneLabel: string;
      statusLabel: string;
      statusValue: string;
      educationLabel: string;
      educationValue: string;
    };
    downloadCvBtn: string;
    previewCvBtn: string;
  };
  skills: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    softwareTitle: string;
    specialtiesTitle: string;
    toolsTitle: string;
    items: Array<{
      name: string;
      level: number;
      category: 'software' | 'creative';
    }>;
    tools: Array<{
      name: string;
      category: string;
      icon: string;
    }>;
  };
  experience: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    workHeading: string;
    educationHeading: string;
    roles: Array<{
      company: string;
      role: string;
      period: string;
      duration: string;
      location: string;
      points: string[];
      tags: string[];
    }>;
    education: {
      degree: string;
      institution: string;
      period: string;
      duration: string;
      location: string;
      description: string;
      highlights: string[];
    };
  };
  portfolio: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    viewProject: string;
    categories: {
      all: string;
      branding: string;
      uiux: string;
      print: string;
      motion: string;
    };
    projects: Array<{
      title: string;
      category: string;
      description: string;
      tags: string[];
    }>;
  };
  contact: {
    sectionLabel: string;
    sectionTitle: string;
    sectionSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    phoneValue: string;
    emailValue: string;
    locationValue: string;
    availabilityText: string;
    downloadCvText: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    tagline: string;
  };
  cvModal: {
    title: string;
    subtitle: string;
    downloadPdf: string;
    downloadJpg: string;
    close: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      portfolio: 'Portfolio',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Sheikh Riyad Hassan',
      title: 'Graphic Designer & Video Editor',
      subtitle: 'Turning ideas into visual impact. Crafting memorable brand identities, engaging social media graphics, high-impact marketing materials, and cinematic video edits.',
      quote: 'Design · Create · Inspire',
      quoteAuthor: 'Creative Philosophy',
      cta: 'View My Work',
      ctaSecondary: "Let's Talk",
      downloadCv: 'Download CV',
      yearsExp: '5+',
      projects: '200+',
      clients: '50+',
      yearsLabel: 'Years Experience',
      projectsLabel: 'Projects Done',
      clientsLabel: 'Happy Clients',
      badgeAvailable: 'Available for freelance & full-time',
      badge1Title: 'Brand Identity',
      badge1Sub: 'Visual Design Specialist',
      badge2Title: 'Video Editing',
      badge2Sub: 'Motion & Premiere Pro',
    },
    about: {
      sectionLabel: 'Biography',
      sectionTitle: 'About Sheikh Riyad Hassan',
      sectionSubtitle: 'Turning Ideas into Visual Impact with Passion, Precision, and Purpose',
      aboutMeTitle: 'About Me',
      aboutMeText: 'I am a passionate and creative Graphic Designer with 5+ years of professional experience in designing visual content that builds brands and drives engagement. I specialize in poster design, brand identity, social media graphics, marketing materials and video editing. I am always eager to learn new tools, work with great teams and deliver high-quality results that make an impact.',
      profileTitle: 'Professional Profile',
      profileText: 'Creative and detail-oriented Graphic Designer with 5+ years of experience in visual branding, poster design, brand identity, social media graphics, marketing materials and video editing. Skilled in Adobe Creative Suite and passionate about turning ideas into visually compelling designs. Experienced in working with various companies and clients, with a strong focus on delivering high-quality work, meeting deadlines and exceeding expectations.',
      tagline: 'Better Design, Brighter Future',
      languagesTitle: 'Languages',
      languages: [
        { name: 'English', level: 'Advanced (C1)', code: 'EN' },
        { name: 'Bengali', level: 'Native (B2)', code: 'BN' },
      ],
      strengthsTitle: 'Personal Strengths',
      strengthsSubtitle: 'Core attributes that drive consistent creative excellence',
      strengths: [
        {
          title: 'Creativity & Innovation',
          desc: 'Generating inventive visual ideas, striking aesthetics, and memorable branding concepts tailored to client vision.',
          icon: '💡',
        },
        {
          title: 'Teamwork & Collaboration',
          desc: 'Seamless collaboration with cross-functional teams, facilitating brainstorming sessions, and aligning design execution.',
          icon: '👥',
        },
        {
          title: 'Attention to Detail',
          desc: 'Meticulous eye for typography, color grading, visual balance, pixel perfection, and seamless video pacing.',
          icon: '🎯',
        },
        {
          title: 'Problem Solving & Adaptability',
          desc: 'Translating complex briefs into intuitive visual solutions while quickly adapting to shifting requirements and new tools.',
          icon: '🧩',
        },
        {
          title: 'Time Management',
          desc: 'Proven reliability in prioritizing deliverables, working under tight turnarounds, and consistently beating project deadlines.',
          icon: '⏱️',
        },
      ],
      quickInfo: {
        locationLabel: 'Location',
        locationValue: 'Khulna, Bangladesh',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
        statusLabel: 'Status',
        statusValue: 'Open to Work / Freelance',
        educationLabel: 'Education',
        educationValue: 'Diploma in Engineering (Khulna Polytechnic)',
      },
      downloadCvBtn: 'Download Full CV (PDF)',
      previewCvBtn: 'Preview Original CV',
    },
    skills: {
      sectionLabel: 'Expertise',
      sectionTitle: 'Skills & Platforms',
      sectionSubtitle: 'Proficiency across industry-standard creative tools and visual design disciplines',
      softwareTitle: 'Design Software & Video Editing',
      specialtiesTitle: 'Creative Specializations',
      toolsTitle: 'Tools & Platforms',
      items: [
        { name: 'Adobe Illustrator', level: 95, category: 'software' },
        { name: 'Adobe Photoshop', level: 92, category: 'software' },
        { name: 'Adobe InDesign', level: 88, category: 'software' },
        { name: 'Adobe Premiere Pro', level: 90, category: 'software' },
        { name: 'Brand Identity & Logo Design', level: 92, category: 'creative' },
        { name: 'Social Media Design', level: 95, category: 'creative' },
        { name: 'Print Design', level: 90, category: 'creative' },
        { name: 'Motion Graphics & Video Editing', level: 88, category: 'creative' },
        { name: 'Typography & Layout', level: 88, category: 'creative' },
        { name: 'Color Grading & Visual Effects', level: 85, category: 'creative' },
      ],
      tools: [
        { name: 'Adobe Creative Cloud', category: 'Design Suite', icon: 'Ai' },
        { name: 'Figma', category: 'UI & Layout', icon: 'Fg' },
        { name: 'Canva', category: 'Content Creation', icon: 'Cv' },
        { name: 'Blender', category: '3D Graphics', icon: 'Bl' },
      ],
    },
    experience: {
      sectionLabel: 'Career & Education',
      sectionTitle: 'Work Experience & Training',
      sectionSubtitle: 'Track record of delivering high-impact visual design and marketing assets',
      workHeading: 'Work Experience',
      educationHeading: 'Education & Training',
      roles: [
        {
          company: 'Shanghai Group',
          role: 'Visual Graphics Designer',
          period: 'Feb 2022 – Oct 2024',
          duration: '2+ years 9 months',
          location: 'Remote, Beijing, China',
          points: [
            'Designed eye-catching marketing materials that drove customer interest and increased sales.',
            'Developed visual concepts that strengthened brand identity and improved audience engagement.',
            'Worked closely with cross-functional teams to align design with business objectives and campaign goals.',
            'Facilitated brainstorming sessions to generate creative ideas and enhance team collaboration.',
          ],
          tags: ['Visual Design', 'Marketing Materials', 'Brand Identity', 'Audience Engagement', 'Cross-Functional Collaboration'],
        },
        {
          company: 'Zig Zag Bazaar',
          role: 'Senior Graphic Designer',
          period: 'Jul 2017 – Jan 2022',
          duration: '4+ years 7 months',
          location: 'Remote, Wuhan, China',
          points: [
            'Developed innovative visual concepts for marketing campaigns, including posters, social media graphics and promotional materials.',
            'Created brand assets for Zig Zag Bazaar, enhancing brand presence across print and digital channels.',
            'Collaborated with cross-functional teams to ensure design alignment with project goals.',
            'Facilitated brainstorming sessions to generate creative ideas and improve team collaboration.',
          ],
          tags: ['Marketing Campaigns', 'Poster Design', 'Social Media Graphics', 'Brand Assets', 'Team Leadership'],
        },
      ],
      education: {
        degree: 'Diploma in Engineering',
        institution: 'Khulna Polytechnic',
        period: '2013 – 2017',
        duration: '4-Year Diploma Program',
        location: 'Khulna, Bangladesh',
        description: 'Completed a 4-year diploma program in Engineering, gaining a strong foundation in technical knowledge, problem-solving and practical skills that support my creative and analytical approach to design and media.',
        highlights: [
          'Strong Technical Knowledge',
          'Analytical Problem Solving',
          'Precision & Media Execution',
          'Khulna, Bangladesh',
        ],
      },
    },
    portfolio: {
      sectionLabel: 'Work',
      sectionTitle: 'Featured Projects',
      sectionSubtitle: 'Selected visual design, branding, and multimedia creations',
      viewProject: 'View Project',
      categories: {
        all: 'All',
        branding: 'Branding',
        uiux: 'UI/UX',
        print: 'Print',
        motion: 'Motion',
      },
      projects: [
        {
          title: 'Aurélia Paris – Brand Identity System',
          category: 'branding',
          description: 'Comprehensive luxury brand identity including custom typography, premium packaging, brand guidelines, and social marketing collateral.',
          tags: ['Branding', 'Packaging', 'Visual Identity'],
        },
        {
          title: 'NeoBank – Fintech Mobile Application UI',
          category: 'uiux',
          description: 'Sleek, user-centric banking app interface featuring intuitive dashboard layouts, dark theme aesthetics, and seamless user interaction flows.',
          tags: ['UI/UX', 'Mobile App', 'Design System'],
        },
        {
          title: 'SoundWave International – Poster Series',
          category: 'print',
          description: 'High-energy promotional poster series and print campaign assets designed with bold typography, expressive layouts, and vibrant color palettes.',
          tags: ['Poster Design', 'Print Media', 'Typography'],
        },
        {
          title: 'Nexus Corp – Corporate Annual Report',
          category: 'print',
          description: 'High-end editorial publication with clear data visualizations, infographics, structured grids, and print-ready production files.',
          tags: ['Editorial', 'Data Visualization', 'Print Design'],
        },
        {
          title: 'Verdant Lifestyle – Eco Branding Suite',
          category: 'branding',
          description: 'Harmonious brand identity for a sustainable eco-lifestyle brand, featuring nature-inspired color palettes, iconography, and digital templates.',
          tags: ['Branding', 'Eco Design', 'Social Media'],
        },
        {
          title: 'Lumina – Cinematic Motion Promo',
          category: 'motion',
          description: 'Dynamic motion graphics and video editing project combining kinetic typography, smooth transitions, and color grading in Adobe Premiere Pro.',
          tags: ['Motion Graphics', 'Video Editing', 'Premiere Pro'],
        },
      ],
    },
    contact: {
      sectionLabel: 'Contact',
      sectionTitle: 'Get In Touch',
      sectionSubtitle: "Have an exciting project or opportunity? Let's turn your vision into impactful visual reality.",
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Tell me about your project, goals, or timeline...',
      sendButton: 'Send Message',
      successMessage: "Thank you! Your message has been sent. I'll get back to you shortly.",
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      locationLabel: 'Location',
      phoneValue: '+880 1618-782222',
      emailValue: 'sk.riyad.bd.73@gmail.com',
      locationValue: 'Khulna, Bangladesh',
      availabilityText: 'Available for freelance projects & full-time roles worldwide',
      downloadCvText: 'Need my full resume? Download my CV directly or preview it anytime.',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Designed & Crafted with visual excellence',
      tagline: 'Better Design, Brighter Future',
    },
    cvModal: {
      title: 'Sheikh Riyad Hassan – Curriculum Vitae',
      subtitle: 'Graphic Designer & Video Editor · 5+ Years Experience',
      downloadPdf: 'Download PDF CV',
      downloadJpg: 'Download Image (JPG)',
      close: 'Close',
    },
  },

  bn: {
    nav: {
      home: 'হোম',
      about: 'পরিচিতি',
      skills: 'দক্ষতা',
      experience: 'অভিজ্ঞতা',
      portfolio: 'পোর্টফোলিও',
      contact: 'যোগাযোগ',
      downloadCv: 'সিভি ডাউনলোড',
    },
    hero: {
      greeting: 'হ্যালো, আমি',
      name: 'শেখ রিয়াদ হাসান',
      title: 'গ্রাফিক ডিজাইনার এবং ভিডিও এডিটর',
      subtitle: 'ধারণাকে ভিজ্যুয়াল প্রভাবে রূপান্তর। স্মরণীয় ব্র্যান্ড আইডেন্টিটি, আকর্ষক সোশ্যাল মিডিয়া গ্রাফিক্স, উচ্চ-প্রভাবশালী মার্কেটিং সামগ্রী এবং সিনেমাটিক ভিডিও এডিটিং তৈরি করি।',
      quote: 'ডিজাইন · তৈরি · অনুপ্রেরণা',
      quoteAuthor: 'সৃজনশীল দর্শন',
      cta: 'আমার কাজ দেখুন',
      ctaSecondary: 'কথা বলুন',
      downloadCv: 'সিভি ডাউনলোড',
      yearsExp: '৫+',
      projects: '২০০+',
      clients: '৫০+',
      yearsLabel: 'বছরের অভিজ্ঞতা',
      projectsLabel: 'সম্পন্ন প্রকল্প',
      clientsLabel: 'সন্তুষ্ট ক্লায়েন্ট',
      badgeAvailable: 'ফ্রিল্যান্স এবং ফুল-টাইম কাজের জন্য উপলব্ধ',
      badge1Title: 'ব্র্যান্ড আইডেন্টিটি',
      badge1Sub: 'ভিজ্যুয়াল ডিজাইন বিশেষজ্ঞ',
      badge2Title: 'ভিডিও এডিটিং',
      badge2Sub: 'মোশন ও প্রিমিয়ার প্রো',
    },
    about: {
      sectionLabel: 'জীবনী',
      sectionTitle: 'শেখ রিয়াদ হাসান সম্পর্কে',
      sectionSubtitle: 'আবেগ, নির্ভুলতা এবং লক্ষ্যের সাথে ধারণাকে ভিজ্যুয়াল প্রভাবে রূপান্তর',
      aboutMeTitle: 'আমার সম্পর্কে',
      aboutMeText: 'আমি ৫+ বছরের পেশাদার অভিজ্ঞতাসম্পন্ন একজন উদ্যমী এবং সৃজনশীল গ্রাফিক ডিজাইনার, যিনি ব্র্যান্ড তৈরি এবং দর্শক সম্পৃক্ততা বৃদ্ধি করে এমন ভিজ্যুয়াল কন্টেন্ট ডিজাইনে অভিজ্ঞ। আমি পোস্টার ডিজাইন, ব্র্যান্ড আইডেন্টিটি, সোশ্যাল মিডিয়া গ্রাফিক্স, মার্কেটিং সামগ্রী এবং ভিডিও এডিটিংয়ে বিশেষজ্ঞ। আমি সবসময় নতুন টুল শিখতে, চমৎকার দলের সাথে কাজ করতে এবং দীর্ঘস্থায়ী প্রভাব ফেলে এমন উচ্চমানের ফলাফল প্রদান করতে আগ্রহী।',
      profileTitle: 'পেশাদার প্রোফাইল',
      profileText: 'ভিজ্যুয়াল ব্র্যান্ডিং, পোস্টার ডিজাইন, ব্র্যান্ড আইডেন্টিটি, সোশ্যাল মিডিয়া গ্রাফিক্স, মার্কেটিং সামগ্রী এবং ভিডিও এডিটিংয়ে ৫+ বছরের অভিজ্ঞতাসম্পন্ন সৃজনশীল ও বিস্তারিত-সচেতন গ্রাফিক ডিজাইনার। অ্যাডোবি ক্রিয়েটিভ স্যুটে দক্ষ এবং ধারণাকে দৃষ্টিনন্দন ডিজাইনে রূপান্তরে আগ্রহী। বিভিন্ন কোম্পানি এবং ক্লায়েন্টদের সাথে কাজের অভিজ্ঞতাসম্পন্ন, উচ্চমানের কাজ প্রদান, সময়সীমা রক্ষা এবং প্রত্যাশা পূরণে দৃঢ় প্রতিজ্ঞাবদ্ধ।',
      tagline: 'উন্নত ডিজাইন, উজ্জ্বল ভবিষ্যৎ (Better Design, Brighter Future)',
      languagesTitle: 'ভাষাসমূহ',
      languages: [
        { name: 'ইংরেজি (English)', level: 'Advanced (C1)', code: 'EN' },
        { name: 'বাংলা (Bengali)', level: 'Native (B2)', code: 'BN' },
      ],
      strengthsTitle: 'ব্যক্তিগত শক্তিসমূহ',
      strengthsSubtitle: 'ধারাবাহিক সৃজনশীল উৎকর্ষতা চালনাকারী মূল গুণাবলী',
      strengths: [
        {
          title: 'সৃজনশীলতা ও উদ্ভাবন',
          desc: 'ক্লায়েন্টের দৃষ্টিভঙ্গির সাথে মানানসই নতুন ভিজ্যুয়াল ধারণা, আকর্ষণীয় নান্দনিকতা এবং স্মরণীয় ব্র্যান্ডিং তৈরি।',
          icon: '💡',
        },
        {
          title: 'দলগত কাজ ও সহযোগিতা',
          desc: 'ক্রস-ফাংশনাল দলের সাথে নিরবচ্ছিন্ন সমন্বয়, ব্রেনস্টর্মিং পরিচালনা এবং লক্ষ্যের সাথে ডিজাইন সমন্বয়।',
          icon: '👥',
        },
        {
          title: 'বিস্তারিতের প্রতি সতর্কতা',
          desc: 'টাইপোগ্রাফি, কালার গ্রেডিং, ভিজ্যুয়াল ব্যালেন্স, নিখুঁত লেআউট এবং সুসংগত ভিডিও টাইমিংয়ে সূক্ষ্ম দৃষ্টি।',
          icon: '🎯',
        },
        {
          title: 'সমস্যা সমাধান ও অভিযোজনক্ষমতা',
          desc: 'জটিল ব্রিফকে সহজবোধ্য ভিজ্যুয়াল সমাধানে রূপান্তর এবং পরিবর্তনের সাথে দ্রুত মানিয়ে নেওয়া।',
          icon: '🧩',
        },
        {
          title: 'সময় ব্যবস্থাপনা',
          desc: 'কঠোর সময়সীমার মধ্যে কাজ করে ধারাবাহিকভাবে নির্ধারিত সময়ের আগেই মানসম্পন্ন আউটপুট সরবরাহ।',
          icon: '⏱️',
        },
      ],
      quickInfo: {
        locationLabel: 'অবস্থান',
        locationValue: 'খুলনা, বাংলাদেশ',
        emailLabel: 'ইমেইল',
        phoneLabel: 'ফোন',
        statusLabel: 'কাজের অবস্থা',
        statusValue: 'কাজের জন্য উপলব্ধ / ফ্রিল্যান্স',
        educationLabel: 'শিক্ষা',
        educationValue: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং (খুলনা পলিটেকনিক)',
      },
      downloadCvBtn: 'সম্পূর্ণ সিভি ডাউনলোড করুন (PDF)',
      previewCvBtn: 'আসল সিভি প্রিভিউ দেখুন',
    },
    skills: {
      sectionLabel: 'দক্ষতা',
      sectionTitle: 'দক্ষতা ও প্ল্যাটফর্ম',
      sectionSubtitle: 'শিল্প-মানের সৃজনশীল সরঞ্জাম এবং ভিজ্যুয়াল ডিজাইন ডিসিপ্লিনে দক্ষতা',
      softwareTitle: 'ডিজাইন সফটওয়্যার ও ভিডিও এডিটিং',
      specialtiesTitle: 'সৃজনশীল বিশেষত্ব',
      toolsTitle: 'টুলস ও প্ল্যাটফর্ম',
      items: [
        { name: 'Adobe Illustrator', level: 95, category: 'software' },
        { name: 'Adobe Photoshop', level: 92, category: 'software' },
        { name: 'Adobe InDesign', level: 88, category: 'software' },
        { name: 'Adobe Premiere Pro', level: 90, category: 'software' },
        { name: 'Brand Identity & Logo Design', level: 92, category: 'creative' },
        { name: 'Social Media Design', level: 95, category: 'creative' },
        { name: 'Print Design', level: 90, category: 'creative' },
        { name: 'Motion Graphics & Video Editing', level: 88, category: 'creative' },
        { name: 'Typography & Layout', level: 88, category: 'creative' },
        { name: 'Color Grading & Visual Effects', level: 85, category: 'creative' },
      ],
      tools: [
        { name: 'Adobe Creative Cloud', category: 'ডিজাইন স্যুট', icon: 'Ai' },
        { name: 'Figma', category: 'UI ও লেআউট', icon: 'Fg' },
        { name: 'Canva', category: 'কন্টেন্ট তৈরি', icon: 'Cv' },
        { name: 'Blender', category: 'থ্রিডি গ্রাফিক্স', icon: 'Bl' },
      ],
    },
    experience: {
      sectionLabel: 'ক্যারিয়ার ও শিক্ষা',
      sectionTitle: 'কাজের অভিজ্ঞতা ও প্রশিক্ষণ',
      sectionSubtitle: 'উচ্চ-প্রভাবশালী ভিজ্যুয়াল ডিজাইন এবং মার্কেটিং সম্পদ সরবরাহের অভিজ্ঞতা',
      workHeading: 'কাজের অভিজ্ঞতা',
      educationHeading: 'শিক্ষা ও প্রশিক্ষণ',
      roles: [
        {
          company: 'Shanghai Group',
          role: 'ভিজ্যুয়াল গ্রাফিক্স ডিজাইনার',
          period: 'ফেব্রুয়ারি ২০২২ – অক্টোবর ২০২৪',
          duration: '২+ বছর ৯ মাস',
          location: 'রিমোট, বেইজিং, চীন',
          points: [
            'আকর্ষণীয় বিপণন সামগ্রী ডিজাইন করেছি যা গ্রাহকের আগ্রহ বৃদ্ধি করেছে এবং বিক্রয় বাড়িয়েছে।',
            'ব্র্যান্ড পরিচয় শক্তিশালীকারী এবং দর্শকের সম্পৃক্ততা উন্নতকারী ভিজ্যুয়াল ধারণা তৈরি করেছি।',
            'ব্যবসায়িক উদ্দেশ্য এবং প্রচারণার লক্ষ্যের সাথে ডিজাইন সমন্বয় করতে ক্রস-ফাংশনাল দলের সাথে ঘনিষ্ঠভাবে কাজ করেছি।',
            'সৃজনশীল ধারণা তৈরি করতে এবং দলের সহযোগিতা বাড়াতে ব্রেনস্টর্মিং সেশনের সুবিধা প্রদান করেছি।',
          ],
          tags: ['ভিজ্যুয়াল ডিজাইন', 'মার্কেটিং সামগ্রী', 'ব্র্যান্ড আইডেন্টিটি', 'অডিয়েন্স এনগেজমেন্ট', 'টিমওয়ার্ক'],
        },
        {
          company: 'Zig Zag Bazaar',
          role: 'সিনিয়র গ্রাফিক ডিজাইনার',
          period: 'জুলাই ২০১৭ – জানুয়ারি ২০২২',
          duration: '৪+ বছর ৭ মাস',
          location: 'রিমোট, উহান, চীন',
          points: [
            'পোস্টার, সোশ্যাল মিডিয়া গ্রাফিক্স এবং প্রচারমূলক সামগ্রী সহ বিপণন প্রচারণার জন্য উদ্ভাবনী ভিজ্যুয়াল ধারণা তৈরি করেছি।',
            'জিগ জ্যাগ বাজারের জন্য ব্র্যান্ড সম্পদ তৈরি করেছি, যা প্রিন্ট এবং ডিজিটাল চ্যানেলে ব্র্যান্ডের উপস্থিতি বাড়িয়েছে।',
            'প্রকল্পের লক্ষ্যের সাথে ডিজাইনের সামঞ্জস্য নিশ্চিত করতে ক্রস-ফাংশনাল দলের সাথে সহযোগিতা করেছি।',
            'সৃজনশীল ধারণা তৈরি করতে এবং দলগত সমন্বয় উন্নত করতে ব্রেনস্টর্মিং অধিবেশন পরিচালনা করেছি।',
          ],
          tags: ['মার্কেটিং ক্যাম্পেইন', 'পোস্টার ডিজাইন', 'সোশ্যাল মিডিয়া', 'ব্র্যান্ড অ্যাসেটস', 'টিম লিডারশিপ'],
        },
      ],
      education: {
        degree: 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং',
        institution: 'খুলনা পলিটেকনিক ইনস্টিটিউট',
        period: '২০১৩ – ২০১৭',
        duration: '৪ বছরের ডিপ্লোমা প্রোগ্রাম',
        location: 'খুলনা, বাংলাদেশ',
        description: 'প্রকৌশলে ৪ বছরের ডিপ্লোমা প্রোগ্রাম সম্পন্ন করেছি, যা প্রযুক্তিগত জ্ঞান, সমস্যা সমাধান এবং ব্যবহারিক দক্ষতার একটি শক্তিশালী ভিত্তি তৈরি করেছে যা ডিজাইন এবং মিডিয়ায় আমার সৃজনশীল ও বিশ্লেষণাত্মক দৃষ্টিভঙ্গিকে সহায়তা করে।',
        highlights: [
          'প্রকৌশল প্রযুক্তিগত জ্ঞান',
          'বিশ্লেষণাত্মক সমস্যা সমাধান',
          'ডিজাইন ও মিডিয়া প্রয়োগ',
          'খুলনা, বাংলাদেশ',
        ],
      },
    },
    portfolio: {
      sectionLabel: 'কাজ',
      sectionTitle: 'নির্বাচিত প্রকল্পসমূহ',
      sectionSubtitle: 'নির্বাচিত ভিজ্যুয়াল ডিজাইন, ব্র্যান্ডিং এবং মাল্টিমিডিয়া সৃষ্টি',
      viewProject: 'প্রকল্প দেখুন',
      categories: {
        all: 'সব',
        branding: 'ব্র্যান্ডিং',
        uiux: 'UI/UX',
        print: 'প্রিন্ট',
        motion: 'মোশন',
      },
      projects: [
        {
          title: 'অরেলিয়া প্যারিস – ব্র্যান্ড আইডেন্টিটি সিস্টেম',
          category: 'branding',
          description: 'কাস্টম টাইপোগ্রাফি, প্রিমিয়াম প্যাকেজিং এবং সোশ্যাল মার্কেটিং উপাদানসহ বিলাসবহুল ব্র্যান্ড আইডেন্টিটি।',
          tags: ['ব্র্যান্ডিং', 'প্যাকেজিং', 'লাক্সারি'],
        },
        {
          title: 'নিওব্যাংক – ফিনটেক মোবাইল অ্যাপ UI',
          category: 'uiux',
          description: 'ডার্ক মোড এবং নিরবচ্ছিন্ন ব্যবহারকারী প্রবাহ সহ একটি আধুনিক ফিনটেক ব্যাংকিং অ্যাপ্লিকেশনের ডিজাইন।',
          tags: ['UI/UX', 'ফিনটেক', 'মোবাইল'],
        },
        {
          title: 'সাউন্ডওয়েভ ফেস্টিভ্যাল – পোস্টার সিরিজ',
          category: 'print',
          description: 'সাহসী টাইপোগ্রাফি এবং প্রাণবন্ত রঙের সমন্বয়ে আন্তর্জাতিক মিউজিক ফেস্টিভ্যাল ক্যাম্পেইন পোস্টার।',
          tags: ['পোস্টার', 'ক্যাম্পেইন', 'টাইপোগ্রাফি'],
        },
        {
          title: 'নেক্সাস কর্পোরেশন – বার্ষিক প্রতিবেদন',
          category: 'print',
          description: 'ডেটা ভিজ্যুয়ালাইজেশন এবং এডিটোরিয়াল লেআউট সমৃদ্ধ গ্লোবাল টেকনোলজি কোম্পানির বার্ষিক রিপোর্ট।',
          tags: ['এডিটোরিয়াল', 'ডেটা ভিজ', 'কর্পোরেট'],
        },
        {
          title: 'ভার্ড্যান্ট – পরিবেশবান্ধব ব্র্যান্ড সিস্টেম',
          category: 'branding',
          description: 'টেকসই লাইফস্টাইল ব্র্যান্ডের জন্য প্রকৃতি-অনুপ্রাণিত ভিজ্যুয়াল আইডেন্টিটি ও ডিজিটাল টেমপ্লেট।',
          tags: ['ব্র্যান্ডিং', 'ইকো', 'আইডেন্টিটি'],
        },
        {
          title: 'লুমিনা – সিনেমাটিক মোশন প্রোমো',
          category: 'motion',
          description: 'কাইনেটিক টাইপোগ্রাফি ও কালার গ্রেডিং সমন্বয়ে তৈরি ৬০ সেকেন্ডের প্রিমিয়াম মোশন ভিডিও।',
          tags: ['মোশন', 'ভিডিও এডিটিং', 'প্রিমিয়ার প্রো'],
        },
      ],
    },
    contact: {
      sectionLabel: 'যোগাযোগ',
      sectionTitle: 'যোগাযোগ করুন',
      sectionSubtitle: 'একটি নতুন প্রকল্প বা কাজের সুযোগ আছে? আসুন একসাথে আপনার ধারণাকে বাস্তবে রূপ দিই।',
      namePlaceholder: 'আপনার নাম',
      emailPlaceholder: 'আপনার ইমেইল',
      messagePlaceholder: 'আপনার প্রকল্প বা কাজের বিবরণ লিখুন...',
      sendButton: 'বার্তা পাঠান',
      successMessage: 'বার্তা পাঠানো হয়েছে! শীঘ্রই আপনার সাথে যোগাযোগ করব।',
      emailLabel: 'ইমেইল ঠিকানা',
      phoneLabel: 'ফোন / হোয়াটসঅ্যাপ',
      locationLabel: 'অবস্থান',
      phoneValue: '+880 1618-782222',
      emailValue: 'sk.riyad.bd.73@gmail.com',
      locationValue: 'খুলনা, বাংলাদেশ',
      availabilityText: 'বিশ্বব্যাপী ফ্রিল্যান্স এবং ফুল-টাইম কাজের জন্য প্রস্তুত',
      downloadCvText: 'আমার সম্পূর্ণ সিভি প্রয়োজন? সরাসরি ডাউনলোড করুন অথবা প্রিভিউ দেখুন।',
    },
    footer: {
      rights: 'সকল অধিকার সংরক্ষিত।',
      madeWith: 'ভিজ্যুয়াল উৎকর্ষতার সাথে ডিজাইন ও তৈরি',
      tagline: 'Better Design, Brighter Future',
    },
    cvModal: {
      title: 'শেখ রিয়াদ হাসান – কারিকুলাম ভিটা (সিভি)',
      subtitle: 'গ্রাফিক ডিজাইনার ও ভিডিও এডিটর · ৫+ বছরের অভিজ্ঞতা',
      downloadPdf: 'পিডিএফ ডাউনলোড করুন',
      downloadJpg: 'ছবি ডাউনলোড করুন (JPG)',
      close: 'বন্ধ করুন',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      about: 'परिचय',
      skills: 'कौशल',
      experience: 'अनुभव',
      portfolio: 'पोर्टफोलियो',
      contact: 'संपर्क',
      downloadCv: 'सीवी डाउनलोड',
    },
    hero: {
      greeting: 'नमस्ते, मैं हूं',
      name: 'शेख रियाद हसन',
      title: 'ग्राफिक डिजाइनर और वीडियो एडिटर',
      subtitle: 'विचारों को विज़ुअल प्रभाव में बदलना। यादगार ब्रांड पहचान, सोशल मीडिया ग्राफिक्स, विपणन सामग्री और सिनेमाई वीडियो संपादन का निर्माण।',
      quote: 'डिजाइन · निर्माण · प्रेरणा',
      quoteAuthor: 'रचनात्मक दर्शन',
      cta: 'मेरा काम देखें',
      ctaSecondary: 'बात करें',
      downloadCv: 'सीवी डाउनलोड',
      yearsExp: '5+',
      projects: '200+',
      clients: '50+',
      yearsLabel: 'वर्षों का अनुभव',
      projectsLabel: 'पूर्ण परियोजनाएं',
      clientsLabel: 'संतुष्ट ग्राहक',
      badgeAvailable: 'फ्रीलांस और पूर्णकालिक कार्य के लिए उपलब्ध',
      badge1Title: 'ब्रांड पहचान',
      badge1Sub: 'विज़ुअल डिज़ाइन विशेषज्ञ',
      badge2Title: 'वीडियो संपादन',
      badge2Sub: 'मोशन और प्रीमियर प्रो',
    },
    about: {
      sectionLabel: 'जीवनी',
      sectionTitle: 'शेख रियाद हसन के बारे में',
      sectionSubtitle: 'जुनून, सटीकता और उद्देश्य के साथ विचारों को विज़ुअल प्रभाव में बदलना',
      aboutMeTitle: 'मेरे बारे में',
      aboutMeText: 'मैं 5+ वर्षों के पेशेवर अनुभव वाला एक उत्साही और रचनात्मक ग्राफिक डिजाइनर हूं, जो ब्रांड बनाने और दर्शकों की सहभागिता बढ़ाने वाली विज़ुअल सामग्री डिजाइन करने में माहिर है। मैं पोस्टर डिजाइन, ब्रांड पहचान, सोशल मीडिया ग्राफिक्स, मार्केटिंग सामग्री और वीडियो संपादन में विशेषज्ञता रखता हूं। मैं हमेशा नए टूल सीखने और प्रभावशाली परिणाम देने के लिए उत्सुक रहता हूं।',
      profileTitle: 'व्यावसायिक प्रोफ़ाइल',
      profileText: 'विज़ुअल ब्रांडिंग, पोस्टर डिज़ाइन, ब्रांड पहचान, सोशल मीडिया ग्राफिक्स, मार्केटिंग सामग्री और वीडियो संपादन में 5+ वर्षों के अनुभव वाला रचनात्मक और विवरण-उन्मुख ग्राफिक डिज़ाइनर। एडोब क्रिएटिव सूट में कुशल और विचारों को दृश्य रूप से आकर्षक डिजाइनों में बदलने का जुनूनी। विभिन्न कंपनियों और ग्राहकों के साथ काम करने का सिद्ध अनुभव।',
      tagline: 'बेहतर डिज़ाइन, उज्जवल भविष्य (Better Design, Brighter Future)',
      languagesTitle: 'भाषाएं',
      languages: [
        { name: 'अंग्रेज़ी (English)', level: 'Advanced (C1)', code: 'EN' },
        { name: 'बंगाली (Bengali)', level: 'Native (B2)', code: 'BN' },
      ],
      strengthsTitle: 'व्यक्तिगत ताकत',
      strengthsSubtitle: 'निरंतर रचनात्मक उत्कृष्टता को संचालित करने वाले मुख्य गुण',
      strengths: [
        {
          title: 'रचनात्मकता और नवाचार',
          desc: 'ताजा विज़ुअल विचार, आकर्षक सौंदर्यशास्त्र और ग्राहक की दृष्टि के अनुरूप ब्रांडिंग अवधारणाएं बनाना।',
          icon: '💡',
        },
        {
          title: 'टीमवर्क और सहयोग',
          desc: 'क्रॉस-फ़ंक्शनल टीमों के साथ सहज सहयोग, विचार-मंथन सत्र आयोजित करना और लक्ष्यों के साथ संरेखण।',
          icon: '👥',
        },
        {
          title: 'विस्तार पर ध्यान',
          desc: 'टाइपोग्राफी, कलर ग्रेडिंग, विज़ुअल संतुलन, पिक्सेल पूर्णता और वीडियो गति में सूक्ष्म दृष्टि।',
          icon: '🎯',
        },
        {
          title: 'समस्या समाधान और अनुकूलनशीलता',
          desc: 'जटिल संक्षेपों को सहज विज़ुअल समाधानों में बदलना और बदलती आवश्यकताओं के अनुकूल होना।',
          icon: '🧩',
        },
        {
          title: 'समय प्रबंधन',
          desc: 'तंग समय सीमा के तहत काम करते हुए लगातार उच्च गुणवत्ता वाले परिणाम समय पर देना।',
          icon: '⏱️',
        },
      ],
      quickInfo: {
        locationLabel: 'स्थान',
        locationValue: 'खुलना, बांग्लादेश',
        emailLabel: 'ईमेल',
        phoneLabel: 'फ़ोन',
        statusLabel: 'स्थिति',
        statusValue: 'कार्य/फ्रीलांस के लिए उपलब्ध',
        educationLabel: 'शिक्षा',
        educationValue: 'डिप्लोमा इन इंजीनियरिंग (खुलना पॉलिटेक्निक)',
      },
      downloadCvBtn: 'पूरा सीवी डाउनलोड करें (PDF)',
      previewCvBtn: 'मूल सीवी देखें',
    },
    skills: {
      sectionLabel: 'विशेषज्ञता',
      sectionTitle: 'कौशल और प्लेटफॉर्म',
      sectionSubtitle: 'उद्योग-मानक रचनात्मक टूल और विज़ुअल डिज़ाइन विषयों में प्रवीणता',
      softwareTitle: 'डिज़ाइन सॉफ्टवेयर और वीडियो संपादन',
      specialtiesTitle: 'रचनात्मक विशेषज्ञता',
      toolsTitle: 'टूल और प्लेटफॉर्म',
      items: [
        { name: 'Adobe Illustrator', level: 95, category: 'software' },
        { name: 'Adobe Photoshop', level: 92, category: 'software' },
        { name: 'Adobe InDesign', level: 88, category: 'software' },
        { name: 'Adobe Premiere Pro', level: 90, category: 'software' },
        { name: 'Brand Identity & Logo Design', level: 92, category: 'creative' },
        { name: 'Social Media Design', level: 95, category: 'creative' },
        { name: 'Print Design', level: 90, category: 'creative' },
        { name: 'Motion Graphics & Video Editing', level: 88, category: 'creative' },
        { name: 'Typography & Layout', level: 88, category: 'creative' },
        { name: 'Color Grading & Visual Effects', level: 85, category: 'creative' },
      ],
      tools: [
        { name: 'Adobe Creative Cloud', category: 'डिज़ाइन सूट', icon: 'Ai' },
        { name: 'Figma', category: 'UI और लेआउट', icon: 'Fg' },
        { name: 'Canva', category: 'सामग्री निर्माण', icon: 'Cv' },
        { name: 'Blender', category: '3D ग्राफिक्स', icon: 'Bl' },
      ],
    },
    experience: {
      sectionLabel: 'करियर और शिक्षा',
      sectionTitle: 'कार्य अनुभव और प्रशिक्षण',
      sectionSubtitle: 'उच्च प्रभाव वाले विज़ुअल डिज़ाइन और मार्केटिंग सामग्री देने का सिद्ध रिकॉर्ड',
      workHeading: 'कार्य अनुभव',
      educationHeading: 'शिक्षा और प्रशिक्षण',
      roles: [
        {
          company: 'Shanghai Group',
          role: 'विज़ुअल ग्राफिक्स डिज़ाइनर',
          period: 'फरवरी 2022 – अक्टूबर 2024',
          duration: '2+ वर्ष 9 माह',
          location: 'रिमोट, बीजिंग, चीन',
          points: [
            'आकर्षक मार्केटिंग सामग्री डिज़ाइन की जिसने ग्राहकों की रुचि बढ़ाई और बिक्री में वृद्धि की।',
            'ऐसे विज़ुअल कॉन्सेप्ट विकसित किए जिन्होंने ब्रांड पहचान को मजबूत किया और दर्शकों की सहभागिता बढ़ाई।',
            'व्यावसायिक उद्देश्यों और अभियान लक्ष्यों के साथ डिज़ाइन संरेखित करने के लिए क्रॉस-फ़ंक्शनल टीमों के साथ काम किया।',
            'रचनात्मक विचार उत्पन्न करने और टीम सहयोग बढ़ाने के लिए विचार-मंथन सत्र आयोजित किए।',
          ],
          tags: ['विज़ुअल डिज़ाइन', 'मार्केटिंग सामग्री', 'ब्रांड पहचान', 'अभियान रणनीति', 'टीम सहयोग'],
        },
        {
          company: 'Zig Zag Bazaar',
          role: 'वरिष्ठ ग्राफिक डिजाइनर',
          period: 'जुलाई 2017 – जनवरी 2022',
          duration: '4+ वर्ष 7 माह',
          location: 'रिमोट, वुहान, चीन',
          points: [
            'पोस्टर, सोशल मीडिया ग्राफिक्स और प्रचार सामग्री सहित मार्केटिंग अभियानों के लिए नए विज़ुअल कॉन्सेप्ट तैयार किए।',
            'ज़िग ज़ैग बाज़ार के लिए ब्रांड एसेट्स बनाए, जिससे प्रिंट और डिजिटल चैनलों पर ब्रांड की उपस्थिति बढ़ी।',
            'प्रोजेक्ट लक्ष्यों के साथ डिज़ाइन संरेखण सुनिश्चित करने के लिए क्रॉस-फ़ंक्शनल टीमों के साथ सहयोग किया।',
            'रचनात्मक विचार उत्पन्न करने और टीम समन्वय में सुधार के लिए विचार-मंथन सत्रों की सुविधा प्रदान की।',
          ],
          tags: ['मार्केटिंग अभियान', 'पोस्टर डिज़ाइन', 'सोशल मीडिया ग्राफिक्स', 'ब्रांड एसेट्स', 'टीम नेतृत्व'],
        },
      ],
      education: {
        degree: 'डिप्लोमा इन इंजीनियरिंग',
        institution: 'खुलना पॉलिटेक्निक संस्थान',
        period: '2013 – 2017',
        duration: '4-वर्षीय डिप्लोमा कार्यक्रम',
        location: 'खुलना, बांग्लादेश',
        description: 'इंजीनियरिंग में 4 साल का डिप्लोमा कार्यक्रम पूरा किया, तकनीकी ज्ञान, समस्या-समाधान और व्यावहारिक कौशल की एक मजबूत नींव हासिल की जो डिज़ाइन और मीडिया में मेरे रचनात्मक और विश्लेषणात्मक दृष्टिकोण का समर्थन करती है।',
        highlights: [
          'इंजीनियरिंग तकनीकी ज्ञान',
          'विश्लेषणात्मक समस्या समाधान',
          'सटीकता और मीडिया निष्पादन',
          'खुलना, बांग्लादेश',
        ],
      },
    },
    portfolio: {
      sectionLabel: 'काम',
      sectionTitle: 'विशेष परियोजनाएं',
      sectionSubtitle: 'चुनिंदा विज़ुअल डिज़ाइन, ब्रांडिंग और मल्टीमीडिया कार्य',
      viewProject: 'प्रोजेक्ट देखें',
      categories: {
        all: 'सभी',
        branding: 'ब्रांडिंग',
        uiux: 'UI/UX',
        print: 'प्रिंट',
        motion: 'मोशन',
      },
      projects: [
        {
          title: 'Aurélia Paris – ब्रांड पहचान प्रणाली',
          category: 'branding',
          description: 'कस्टम टाइपोग्राफी, प्रीमियम पैकेजिंग और सोशल मार्केटिंग संपार्श्विक सहित लक्जरी ब्रांड पहचान प्रणाली।',
          tags: ['ब्रांडिंग', 'पैकेजिंग', 'पहचान'],
        },
        {
          title: 'NeoBank – फिनटेक मोबाइल ऐप UI',
          category: 'uiux',
          description: 'आधुनिक फिनटेक बैंकिंग एप्लिकेशन के लिए डार्क मोड और सहज उपयोगकर्ता प्रवाह के साथ एंड-टू-एंड UI/UX।',
          tags: ['UI/UX', 'मोबाइल ऐप', 'डिज़ाइन सिस्टम'],
        },
        {
          title: 'SoundWave International – पोस्टर श्रृंखला',
          category: 'print',
          description: 'बोल्ड टाइपोग्राफी और जीवंत रंगों के साथ एक अंतर्राष्ट्रीय संगीत समारोह के लिए अभियान पोस्टर।',
          tags: ['पोस्टर', 'प्रिंट मीडिया', 'टाइपोग्राफी'],
        },
        {
          title: 'Nexus Corp – कॉर्पोरेट वार्षिक रिपोर्ट',
          category: 'print',
          description: 'डेटा विज़ुअलाइज़ेशन और संपादकीय लेआउट के साथ वैश्विक प्रौद्योगिकी कंपनी के लिए वार्षिक रिपोर्ट।',
          tags: ['संपादकीय', 'डेटा विज़', 'कॉर्पोरेट'],
        },
        {
          title: 'Verdant Lifestyle – पर्यावरण ब्रांड सिस्टम',
          category: 'branding',
          description: 'टिकाऊ जीवनशैली ब्रांड के लिए प्रकृति-प्रेरित विज़ुअल पहचान और डिजिटल टेम्प्लेट।',
          tags: ['ब्रांडिंग', 'इको', 'पहचान'],
        },
        {
          title: 'Lumina – सिनेमाई मोशन प्रोमो',
          category: 'motion',
          description: 'काइनेटिक टाइपोग्राफी और कलर ग्रेडिंग के साथ एडोब प्रीमियर प्रो में 60-सेकंड का मोशन वीडियो।',
          tags: ['मोशन', 'वीडियो संपादन', 'प्रीमियर प्रो'],
        },
      ],
    },
    contact: {
      sectionLabel: 'संपर्क',
      sectionTitle: 'संपर्क करें',
      sectionSubtitle: 'कोई रोमांचक प्रोजेक्ट या अवसर है? आइए आपके विज़न को प्रभावशाली विज़ुअल वास्तविकता में बदलें।',
      namePlaceholder: 'आपका नाम',
      emailPlaceholder: 'आपका ईमेल',
      messagePlaceholder: 'अपने प्रोजेक्ट, लक्ष्यों या समय-सीमा के बारे में बताएं...',
      sendButton: 'संदेश भेजें',
      successMessage: 'धन्यवाद! आपका संदेश भेजा गया है। मैं जल्द ही आपसे संपर्क करूंगा।',
      emailLabel: 'ईमेल पता',
      phoneLabel: 'फ़ोन / व्हाट्सएप',
      locationLabel: 'स्थान',
      phoneValue: '+880 1618-782222',
      emailValue: 'sk.riyad.bd.73@gmail.com',
      locationValue: 'खुलना, बांग्लादेश',
      availabilityText: 'दुनिया भर में फ्रीलांस और पूर्णकालिक अवसरों के लिए उपलब्ध',
      downloadCvText: 'मेरा पूरा सीवी चाहिए? सीधे डाउनलोड करें या किसी भी समय पूर्वावलोकन करें।',
    },
    footer: {
      rights: 'सर्वाधिकार सुरक्षित।',
      madeWith: 'विज़ुअल उत्कृष्टता के साथ डिज़ाइन और विकसित',
      tagline: 'Better Design, Brighter Future',
    },
    cvModal: {
      title: 'शेख रियाद हसन – बायोडाटा (सीवी)',
      subtitle: 'ग्राफिक डिजाइनर और वीडियो एडिटर · 5+ वर्षों का अनुभव',
      downloadPdf: 'पीडीएफ डाउनलोड करें',
      downloadJpg: 'छवि डाउनलोड करें (JPG)',
      close: 'बंद करें',
    },
  },

  zh: {
    nav: {
      home: '首页',
      about: '关于',
      skills: '技能',
      experience: '履历',
      portfolio: '作品集',
      contact: '联系',
      downloadCv: '下载简历',
    },
    hero: {
      greeting: '你好，我是',
      name: 'Sheikh Riyad Hassan',
      title: '平面设计师与视频剪辑师',
      subtitle: '将创意转化为视觉震撼。专注于品牌视觉识别、社交媒体视觉、高转化营销物料以及影视级视频剪辑。',
      quote: '设计 · 创造 · 启发',
      quoteAuthor: '创作哲学',
      cta: '查看作品',
      ctaSecondary: '与我交流',
      downloadCv: '下载简历',
      yearsExp: '5+',
      projects: '200+',
      clients: '50+',
      yearsLabel: '年专业经验',
      projectsLabel: '完成项目',
      clientsLabel: '满意客户',
      badgeAvailable: '接受自由职业项目及全职机会',
      badge1Title: '品牌视觉',
      badge1Sub: '视觉设计专家',
      badge2Title: '视频剪辑',
      badge2Sub: '动态设计与 Premiere Pro',
    },
    about: {
      sectionLabel: '个人传记',
      sectionTitle: '关于 Sheikh Riyad Hassan',
      sectionSubtitle: '以热情、专注与精确将创意转化为视觉影响力',
      aboutMeTitle: '关于我',
      aboutMeText: '我是一名充满激情与创造力的平面设计师，拥有 5 年以上的专业经验，专注于打造塑造品牌形象并推动用户互动的视觉内容。我专精于海报设计、品牌标识、社交媒体图形、营销物料和视频剪辑。我始终渴望学习新工具、与优秀团队合作，并交付具有深远影响力的高水准成果。',
      profileTitle: '职业履历',
      profileText: '富有创意且注重细节的平面设计师，在视觉品牌、海报设计、品牌标识、社交媒体图形、营销物料和视频编辑方面拥有 5 年以上经验。精通 Adobe Creative Suite，热衷于将想法转化为引人入胜的视觉设计。具备与多家公司和客户合作的丰富经验，始终致力于交付高质量成果、严守交付节点并超越客户期望。',
      tagline: '卓越设计，光明未来 (Better Design, Brighter Future)',
      languagesTitle: '语言能力',
      languages: [
        { name: '英语 (English)', level: 'Advanced (C1)', code: 'EN' },
        { name: '孟加拉语 (Bengali)', level: 'Native (B2)', code: 'BN' },
      ],
      strengthsTitle: '核心优势',
      strengthsSubtitle: '推动卓越创意与严谨执行的关键特质',
      strengths: [
        {
          title: '创意与创新 (Creativity & Innovation)',
          desc: '源源不断的视觉构想与新颖审美，为客户精准定制具有高度辨识度的品牌视觉方案。',
          icon: '💡',
        },
        {
          title: '团队协作 (Teamwork & Collaboration)',
          desc: '善于跨职能团队协作，组织高效头脑风暴，确保视觉设计与业务目标高度契合。',
          icon: '👥',
        },
        {
          title: '极致细节 (Attention to Detail)',
          desc: '对排版字距、色彩调校、像素级对齐以及视频节奏感具有敏锐把控力。',
          icon: '🎯',
        },
        {
          title: '问题解决与适应力 (Problem Solving & Adaptability)',
          desc: '将复杂的创意需求化繁为简，快速掌握新兴工具并在动态需求中保持高质量交付。',
          icon: '🧩',
        },
        {
          title: '时间管理 (Time Management)',
          desc: '出色的项目把控与交付纪律，在紧迫周期内稳定高质量输出，从不延误截稿期。',
          icon: '⏱️',
        },
      ],
      quickInfo: {
        locationLabel: '所在地',
        locationValue: '库尔纳，孟加拉国 (Khulna, Bangladesh)',
        emailLabel: '邮箱',
        phoneLabel: '电话 / WhatsApp',
        statusLabel: '状态',
        statusValue: '接受远程/自由职业/全职邀约',
        educationLabel: '学历',
        educationValue: '工程学文凭 (库尔纳理工学院 Khulna Polytechnic)',
      },
      downloadCvBtn: '下载完整简历 (PDF)',
      previewCvBtn: '预览原始简历',
    },
    skills: {
      sectionLabel: '技能专长',
      sectionTitle: '专业技能与工具',
      sectionSubtitle: '全面掌握行业前沿创意软件与视觉设计技术体系',
      softwareTitle: '设计软件与视频剪辑',
      specialtiesTitle: '核心设计专长',
      toolsTitle: '工具与平台',
      items: [
        { name: 'Adobe Illustrator', level: 95, category: 'software' },
        { name: 'Adobe Photoshop', level: 92, category: 'software' },
        { name: 'Adobe InDesign', level: 88, category: 'software' },
        { name: 'Adobe Premiere Pro', level: 90, category: 'software' },
        { name: 'Brand Identity & Logo Design', level: 92, category: 'creative' },
        { name: 'Social Media Design', level: 95, category: 'creative' },
        { name: 'Print Design', level: 90, category: 'creative' },
        { name: 'Motion Graphics & Video Editing', level: 88, category: 'creative' },
        { name: 'Typography & Layout', level: 88, category: 'creative' },
        { name: 'Color Grading & Visual Effects', level: 85, category: 'creative' },
      ],
      tools: [
        { name: 'Adobe Creative Cloud', category: '设计套件', icon: 'Ai' },
        { name: 'Figma', category: '界面与原型', icon: 'Fg' },
        { name: 'Canva', category: '多媒体创作', icon: 'Cv' },
        { name: 'Blender', category: '3D 建模渲染', icon: 'Bl' },
      ],
    },
    experience: {
      sectionLabel: '履历背景',
      sectionTitle: '工作经历与教育背景',
      sectionSubtitle: '服务于中国与国际企业的跨文化视觉设计与营销战役实战经历',
      workHeading: '工作经历',
      educationHeading: '教育与培训',
      roles: [
        {
          company: 'Shanghai Group (上海集团)',
          role: '视觉平面设计师 (Visual Graphics Designer)',
          period: '2022年2月 – 2024年10月',
          duration: '2年9个月',
          location: '远程，中国北京 (Remote, Beijing, China)',
          points: [
            '设计引人注目的营销物料，有效提升客户兴趣并促进产品销售额增长。',
            '开发强化品牌识别的视觉概念，显著提升受众参与度与品牌忠诚度。',
            '与跨职能团队密切合作，确保视觉输出与商业目标及战役目标保持一致。',
            '主持头脑风暴会议，激发创意灵感并强化团队跨部门协作效能。',
          ],
          tags: ['视觉设计', '营销物料', '品牌标识', '受众互动', '跨职能协作'],
        },
        {
          company: 'Zig Zag Bazaar',
          role: '资深平面设计师 (Senior Graphic Designer)',
          period: '2017年7月 – 2022年1月',
          duration: '4年7个月',
          location: '远程，中国武汉 (Remote, Wuhan, China)',
          points: [
            '为主流营销战役开发创新视觉概念，涵盖宣传海报、社交媒体图文及促销物料。',
            '为 Zig Zag Bazaar 构建全面的品牌资产体系，增强印刷与数字渠道的品牌影响力。',
            '与多学科团队协同作业，确保各项设计落地成果完美契合项目预期。',
            '组织创意研讨与头脑风暴，推动团队内部创意共享与设计标准提升。',
          ],
          tags: ['营销战役', '海报设计', '社交媒体图文', '品牌资产', '团队协作'],
        },
      ],
      education: {
        degree: '工程学文凭 (Diploma in Engineering)',
        institution: '库尔纳理工学院 (Khulna Polytechnic)',
        period: '2013年 – 2017年',
        duration: '4年制工程技术文凭课程',
        location: '库尔纳，孟加拉国 (Khulna, Bangladesh)',
        description: '完成了为期4年的工程专业文凭课程，奠定了扎实的技术理论基础、缜密的逻辑思维和实践动手能力，为其在设计与数字媒体领域的严谨与创意融合提供了强大支撑。',
        highlights: [
          '4年制工程专业教育',
          '技术基础与逻辑严谨性',
          '数字媒体与设计工程结合',
          '孟加拉国库尔纳',
        ],
      },
    },
    portfolio: {
      sectionLabel: '作品集',
      sectionTitle: '精选设计案例',
      sectionSubtitle: '涵盖品牌视觉、UI/UX、印刷出版及影视动态的代表作品',
      viewProject: '查看详情',
      categories: {
        all: '全部',
        branding: '品牌',
        uiux: 'UI/UX',
        print: '印刷',
        motion: '动态',
      },
      projects: [
        {
          title: 'Aurélia Paris – 奢华品牌视觉系统',
          category: 'branding',
          description: '包含定制字型、高端包装设计、品牌规范手册及社交媒体视觉体系的完整奢华品牌识别。',
          tags: ['品牌设计', '包装设计', '奢侈品'],
        },
        {
          title: 'NeoBank – 金融科技移动应用 UI',
          category: 'uiux',
          description: '采用暗色科技美学的银行金融移动应用，包含清晰的数据看板与流畅直观的交互路径。',
          tags: ['UI/UX', '移动端', '设计系统'],
        },
        {
          title: 'SoundWave International – 音乐节海报系列',
          category: 'print',
          description: '充满能量与韵律感的大胆排版印刷海报，结合高饱和度色彩与动感构图。',
          tags: ['海报设计', '印刷媒体', '排版艺术'],
        },
        {
          title: 'Nexus Corp – 全球科技企业年度报告',
          category: 'print',
          description: '融合信息图表、数据可视化与严谨栅格排版的高规格企业年度刊物设计。',
          tags: ['编辑排版', '数据可视化', '印刷工程'],
        },
        {
          title: 'Verdant Lifestyle – 绿色生态品牌体系',
          category: 'branding',
          description: '为环保生活方式品牌打造的现代可持续视觉标识，融合自然意象与极简几何风格。',
          tags: ['品牌设计', '环保理念', '视觉识别'],
        },
        {
          title: 'Lumina – 动态视觉宣传短片',
          category: 'motion',
          description: '在 Adobe Premiere Pro 中制作的 60 秒影视级动态宣传短片，结合动态排版与专业调色。',
          tags: ['动态设计', '视频剪辑', 'Premiere Pro'],
        },
      ],
    },
    contact: {
      sectionLabel: '联系',
      sectionTitle: '取得联系',
      sectionSubtitle: '有项目合作想法或招聘意向？让我们携手将您的构想转变为具有强大视觉冲击力的作品。',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '您的电子邮箱',
      messagePlaceholder: '请描述您的项目需求、目标或期望排期...',
      sendButton: '发送留言',
      successMessage: '留言已成功送达！我会尽快回复您。',
      emailLabel: '电子邮箱',
      phoneLabel: '电话 / WhatsApp',
      locationLabel: '所在地',
      phoneValue: '+880 1618-782222',
      emailValue: 'sk.riyad.bd.73@gmail.com',
      locationValue: '库尔纳，孟加拉国 (Khulna, Bangladesh)',
      availabilityText: '随时接受全球远程全职工作、独立咨询或自由职业委约',
      downloadCvText: '需要我的完整个人简历？您可以随时直接下载或在线预览。',
    },
    footer: {
      rights: '版权所有。',
      madeWith: '以对视觉艺术的极致追求倾心设计',
      tagline: 'Better Design, Brighter Future',
    },
    cvModal: {
      title: 'Sheikh Riyad Hassan – 个人简历 (CV)',
      subtitle: '平面设计师与视频剪辑师 · 5年+专业实战经验',
      downloadPdf: '下载 PDF 简历',
      downloadJpg: '下载 JPG 图像',
      close: '关闭',
    },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  bn: 'বাংলা',
  hi: 'हिन्दी',
  zh: '中文',
};

export const countryToLanguage: Record<string, Language> = {
  BD: 'bn',
  IN: 'hi',
  CN: 'zh',
  TW: 'zh',
  HK: 'zh',
  SG: 'zh',
  US: 'en',
  GB: 'en',
  AU: 'en',
  CA: 'en',
  NZ: 'en',
};

export function detectLanguageFromBrowser(): Language {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language || 'en';
  const langCode = browserLang.split('-')[0].toLowerCase();
  const map: Record<string, Language> = {
    bn: 'bn',
    hi: 'hi',
    zh: 'zh',
    en: 'en',
  };
  return map[langCode] || 'en';
}
