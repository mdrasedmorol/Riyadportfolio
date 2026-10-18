export type Language = 'en' | 'bn' | 'hi' | 'zh';

export interface Translations {
  nav: {
    home: string;
    experience: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    yearsExp: string;
    projects: string;
    clients: string;
    yearsLabel: string;
    projectsLabel: string;
    clientsLabel: string;
  };
  experience: {
    sectionTitle: string;
    sectionSubtitle: string;
    present: string;
    roles: Array<{
      company: string;
      role: string;
      period: string;
      description: string;
      tags: string[];
    }>;
  };
  portfolio: {
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
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Sheikh Riad Hasan',
      title: 'Senior Graphic Designer',
      subtitle: 'Crafting visual identities and digital experiences that captivate audiences and elevate brands to new heights.',
      cta: 'View My Work',
      ctaSecondary: 'Let\'s Talk',
      yearsExp: '10+',
      projects: '200+',
      clients: '50+',
      yearsLabel: 'Years Experience',
      projectsLabel: 'Projects Done',
      clientsLabel: 'Happy Clients',
    },
    experience: {
      sectionTitle: 'Experience',
      sectionSubtitle: 'A track record of excellence at world-class organizations',
      present: 'Present',
      roles: [
        {
          company: 'Google',
          role: 'Lead Visual Designer',
          period: '2022 – Present',
          description: 'Led the visual identity refresh for Google\'s consumer product suite. Directed a team of 8 designers to create cohesive brand guidelines adopted across 15+ products.',
          tags: ['Brand Strategy', 'Motion Design', 'Design Systems'],
        },
        {
          company: 'Meta',
          role: 'Senior UX/Brand Designer',
          period: '2019 – 2022',
          description: 'Designed key visual elements for Facebook and Instagram campaigns reaching 2B+ users. Contributed to the Meta rebrand visual identity project.',
          tags: ['UI/UX', 'Campaign Design', 'Social Media'],
        },
        {
          company: 'Adobe',
          role: 'Product Designer',
          period: '2017 – 2019',
          description: 'Worked on the Adobe Creative Cloud visual design language. Designed onboarding experiences for Photoshop and Illustrator, improving user activation by 34%.',
          tags: ['Product Design', 'UX Research', 'Prototyping'],
        },
        {
          company: 'Ogilvy',
          role: 'Junior Creative Designer',
          period: '2015 – 2017',
          description: 'Designed print and digital campaigns for Fortune 500 clients including Coca-Cola, IBM, and Nestlé. Contributed to award-winning campaigns at Cannes Lions.',
          tags: ['Print Design', 'Art Direction', 'Advertising'],
        },
      ],
    },
    portfolio: {
      sectionTitle: 'Portfolio',
      sectionSubtitle: 'Selected works that define my creative vision',
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
          title: 'Aurélia Paris – Brand Identity',
          category: 'branding',
          description: 'Complete luxury brand identity system for a Paris-based premium cosmetics brand, including logo, packaging, and brand guidelines.',
          tags: ['Branding', 'Packaging', 'Luxury'],
        },
        {
          title: 'NeoBank – Fintech App UI',
          category: 'uiux',
          description: 'End-to-end UI/UX design for a modern fintech banking application with dark mode and seamless user flows.',
          tags: ['UI/UX', 'Fintech', 'Mobile'],
        },
        {
          title: 'SoundWave Festival – Visual Campaign',
          category: 'print',
          description: 'Bold and energetic poster series and campaign assets for an international music festival brand.',
          tags: ['Poster', 'Campaign', 'Typography'],
        },
        {
          title: 'Nexus Corp – Annual Report',
          category: 'print',
          description: 'Premium corporate annual report design with data visualization, infographics, and editorial layout for a global technology company.',
          tags: ['Editorial', 'Data Viz', 'Corporate'],
        },
        {
          title: 'Verdant – Eco Brand System',
          category: 'branding',
          description: 'Sustainable brand identity for an eco-friendly lifestyle company, capturing nature-inspired aesthetics with a modern twist.',
          tags: ['Branding', 'Eco', 'Identity'],
        },
        {
          title: 'Lumina – Motion Brand Film',
          category: 'motion',
          description: '60-second motion design brand film for a luxury jewellery brand, blending kinetic typography with product cinematography.',
          tags: ['Motion', 'Film', 'Luxury'],
        },
      ],
    },
    contact: {
      sectionTitle: 'Get In Touch',
      sectionSubtitle: 'Have a project in mind? Let\'s create something extraordinary together.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Tell me about your project...',
      sendButton: 'Send Message',
      successMessage: 'Message sent! I\'ll get back to you soon.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Designed & Developed with passion',
    },
  },

  bn: {
    nav: {
      home: 'হোম',
      experience: 'অভিজ্ঞতা',
      portfolio: 'পোর্টফোলিও',
      contact: 'যোগাযোগ',
    },
    hero: {
      greeting: 'হ্যালো, আমি',
      name: 'শেখ রিয়াদ হাসান',
      title: 'সিনিয়র গ্রাফিক ডিজাইনার',
      subtitle: 'ভিজ্যুয়াল আইডেন্টিটি এবং ডিজিটাল অভিজ্ঞতা তৈরি করি যা দর্শকদের মুগ্ধ করে এবং ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যায়।',
      cta: 'আমার কাজ দেখুন',
      ctaSecondary: 'কথা বলুন',
      yearsExp: '১০+',
      projects: '২০০+',
      clients: '৫০+',
      yearsLabel: 'বছরের অভিজ্ঞতা',
      projectsLabel: 'সম্পন্ন প্রকল্প',
      clientsLabel: 'সন্তুষ্ট ক্লায়েন্ট',
    },
    experience: {
      sectionTitle: 'অভিজ্ঞতা',
      sectionSubtitle: 'বিশ্বমানের সংস্থাগুলিতে উৎকর্ষতার একটি রেকর্ড',
      present: 'বর্তমান',
      roles: [
        {
          company: 'গুগল',
          role: 'লিড ভিজ্যুয়াল ডিজাইনার',
          period: '২০২২ – বর্তমান',
          description: 'গুগলের কনজিউমার প্রোডাক্ট সুইটের ভিজ্যুয়াল আইডেন্টিটি রিফ্রেশের নেতৃত্ব দিয়েছি। ৮ জন ডিজাইনারের একটি দলকে পরিচালনা করে ১৫টিরও বেশি পণ্যে গৃহীত সুসংগত ব্র্যান্ড গাইডলাইন তৈরি করেছি।',
          tags: ['ব্র্যান্ড স্ট্র্যাটেজি', 'মোশন ডিজাইন', 'ডিজাইন সিস্টেম'],
        },
        {
          company: 'মেটা',
          role: 'সিনিয়র UX/ব্র্যান্ড ডিজাইনার',
          period: '২০১৯ – ২০২২',
          description: 'ফেসবুক এবং ইনস্টাগ্রাম ক্যাম্পেইনের জন্য মূল ভিজ্যুয়াল উপাদান ডিজাইন করেছি যা ২ বিলিয়নেরও বেশি ব্যবহারকারীর কাছে পৌঁছেছে।',
          tags: ['UI/UX', 'ক্যাম্পেইন ডিজাইন', 'সোশ্যাল মিডিয়া'],
        },
        {
          company: 'অ্যাডোবি',
          role: 'প্রোডাক্ট ডিজাইনার',
          period: '২০১৭ – ২০১৯',
          description: 'অ্যাডোবি ক্রিয়েটিভ ক্লাউডের ভিজ্যুয়াল ডিজাইন ল্যাঙ্গুয়েজে কাজ করেছি। ফটোশপ এবং ইলাস্ট্রেটরের অনবোর্ডিং অভিজ্ঞতা ডিজাইন করেছি।',
          tags: ['প্রোডাক্ট ডিজাইন', 'UX রিসার্চ', 'প্রোটোটাইপিং'],
        },
        {
          company: 'ওগিলভি',
          role: 'জুনিয়র ক্রিয়েটিভ ডিজাইনার',
          period: '২০১৫ – ২০১৭',
          description: 'কোকা-কোলা, আইবিএম এবং নেসলেসহ ফরচুন ৫০০ ক্লায়েন্টদের জন্য প্রিন্ট এবং ডিজিটাল ক্যাম্পেইন ডিজাইন করেছি।',
          tags: ['প্রিন্ট ডিজাইন', 'আর্ট ডিরেকশন', 'অ্যাডভার্টাইজিং'],
        },
      ],
    },
    portfolio: {
      sectionTitle: 'পোর্টফোলিও',
      sectionSubtitle: 'নির্বাচিত কাজ যা আমার সৃজনশীল দৃষ্টিভঙ্গি সংজ্ঞায়িত করে',
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
          title: 'অরেলিয়া প্যারিস – ব্র্যান্ড আইডেন্টিটি',
          category: 'branding',
          description: 'প্যারিস-ভিত্তিক প্রিমিয়াম কসমেটিক্স ব্র্যান্ডের জন্য সম্পূর্ণ লাক্সারি ব্র্যান্ড আইডেন্টিটি সিস্টেম।',
          tags: ['ব্র্যান্ডিং', 'প্যাকেজিং', 'লাক্সারি'],
        },
        {
          title: 'নিওব্যাংক – ফিনটেক অ্যাপ UI',
          category: 'uiux',
          description: 'ডার্ক মোড এবং নিরবচ্ছিন্ন ব্যবহারকারী প্রবাহ সহ একটি আধুনিক ফিনটেক ব্যাংকিং অ্যাপ্লিকেশনের জন্য এন্ড-টু-এন্ড UI/UX ডিজাইন।',
          tags: ['UI/UX', 'ফিনটেক', 'মোবাইল'],
        },
        {
          title: 'সাউন্ডওয়েভ ফেস্টিভ্যাল – ভিজ্যুয়াল ক্যাম্পেইন',
          category: 'print',
          description: 'একটি আন্তর্জাতিক মিউজিক ফেস্টিভ্যাল ব্র্যান্ডের জন্য সাহসী এবং প্রাণবন্ত পোস্টার সিরিজ।',
          tags: ['পোস্টার', 'ক্যাম্পেইন', 'টাইপোগ্রাফি'],
        },
        {
          title: 'নেক্সাস কর্পোরেশন – বার্ষিক প্রতিবেদন',
          category: 'print',
          description: 'একটি গ্লোবাল টেকনোলজি কোম্পানির জন্য প্রিমিয়াম কর্পোরেট বার্ষিক রিপোর্ট ডিজাইন।',
          tags: ['এডিটোরিয়াল', 'ডেটা ভিজ', 'কর্পোরেট'],
        },
        {
          title: 'ভার্ড্যান্ট – ইকো ব্র্যান্ড সিস্টেম',
          category: 'branding',
          description: 'একটি পরিবেশবান্ধব লাইফস্টাইল কোম্পানির জন্য টেকসই ব্র্যান্ড আইডেন্টিটি।',
          tags: ['ব্র্যান্ডিং', 'ইকো', 'আইডেন্টিটি'],
        },
        {
          title: 'লুমিনা – মোশন ব্র্যান্ড ফিল্ম',
          category: 'motion',
          description: 'একটি লাক্সারি জুয়েলারি ব্র্যান্ডের জন্য ৬০ সেকেন্ডের মোশন ডিজাইন ব্র্যান্ড ফিল্ম।',
          tags: ['মোশন', 'ফিল্ম', 'লাক্সারি'],
        },
      ],
    },
    contact: {
      sectionTitle: 'যোগাযোগ করুন',
      sectionSubtitle: 'একটি প্রকল্পের কথা মাথায় আছে? আসুন একসাথে কিছু অসাধারণ তৈরি করি।',
      namePlaceholder: 'আপনার নাম',
      emailPlaceholder: 'আপনার ইমেইল',
      messagePlaceholder: 'আপনার প্রকল্প সম্পর্কে বলুন...',
      sendButton: 'বার্তা পাঠান',
      successMessage: 'বার্তা পাঠানো হয়েছে! শীঘ্রই সাড়া দেব।',
      emailLabel: 'ইমেইল',
      phoneLabel: 'ফোন',
      locationLabel: 'অবস্থান',
    },
    footer: {
      rights: 'সকল অধিকার সংরক্ষিত।',
      madeWith: 'আবেগ দিয়ে ডিজাইন ও তৈরি করা হয়েছে',
    },
  },

  hi: {
    nav: {
      home: 'होम',
      experience: 'अनुभव',
      portfolio: 'पोर्टफोलियो',
      contact: 'संपर्क',
    },
    hero: {
      greeting: 'नमस्ते, मैं हूं',
      name: 'शेख रियाद हसन',
      title: 'वरिष्ठ ग्राफिक डिजाइनर',
      subtitle: 'दृश्य पहचान और डिजिटल अनुभव बनाना जो दर्शकों को मंत्रमुग्ध करे और ब्रांड को नई ऊंचाइयों तक ले जाए।',
      cta: 'मेरा काम देखें',
      ctaSecondary: 'बात करें',
      yearsExp: '10+',
      projects: '200+',
      clients: '50+',
      yearsLabel: 'वर्षों का अनुभव',
      projectsLabel: 'पूर्ण परियोजनाएं',
      clientsLabel: 'संतुष्ट ग्राहक',
    },
    experience: {
      sectionTitle: 'अनुभव',
      sectionSubtitle: 'विश्वस्तरीय संगठनों में उत्कृष्टता का ट्रैक रिकॉर्ड',
      present: 'वर्तमान',
      roles: [
        {
          company: 'Google',
          role: 'लीड विज़ुअल डिज़ाइनर',
          period: '2022 – वर्तमान',
          description: 'Google के उपभोक्ता उत्पाद सूट के विज़ुअल पहचान को नेतृत्व दिया। 8 डिज़ाइनरों की टीम को 15+ उत्पादों में अपनाए गए ब्रांड दिशानिर्देश बनाने के लिए निर्देशित किया।',
          tags: ['ब्रांड रणनीति', 'मोशन डिज़ाइन', 'डिज़ाइन सिस्टम'],
        },
        {
          company: 'Meta',
          role: 'वरिष्ठ UX/ब्रांड डिज़ाइनर',
          period: '2019 – 2022',
          description: 'Facebook और Instagram अभियानों के लिए प्रमुख विज़ुअल तत्व डिज़ाइन किए जो 2B+ उपयोगकर्ताओं तक पहुंचे।',
          tags: ['UI/UX', 'अभियान डिज़ाइन', 'सोशल मीडिया'],
        },
        {
          company: 'Adobe',
          role: 'प्रोडक्ट डिज़ाइनर',
          period: '2017 – 2019',
          description: 'Adobe Creative Cloud की विज़ुअल डिज़ाइन भाषा पर काम किया। Photoshop और Illustrator के लिए ऑनबोर्डिंग अनुभव डिज़ाइन किए।',
          tags: ['प्रोडक्ट डिज़ाइन', 'UX रिसर्च', 'प्रोटोटाइपिंग'],
        },
        {
          company: 'Ogilvy',
          role: 'जूनियर क्रिएटिव डिज़ाइनर',
          period: '2015 – 2017',
          description: 'Coca-Cola, IBM और Nestlé सहित Fortune 500 ग्राहकों के लिए प्रिंट और डिजिटल अभियान डिज़ाइन किए।',
          tags: ['प्रिंट डिज़ाइन', 'आर्ट डायरेक्शन', 'विज्ञापन'],
        },
      ],
    },
    portfolio: {
      sectionTitle: 'पोर्टफोलियो',
      sectionSubtitle: 'चुनिंदा कार्य जो मेरी रचनात्मक दृष्टि को परिभाषित करते हैं',
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
          title: 'Aurélia Paris – ब्रांड पहचान',
          category: 'branding',
          description: 'पेरिस-आधारित प्रीमियम कॉस्मेटिक्स ब्रांड के लिए संपूर्ण लक्जरी ब्रांड पहचान प्रणाली।',
          tags: ['ब्रांडिंग', 'पैकेजिंग', 'लक्जरी'],
        },
        {
          title: 'NeoBank – फिनटेक ऐप UI',
          category: 'uiux',
          description: 'डार्क मोड और सहज उपयोगकर्ता प्रवाह के साथ आधुनिक फिनटेक बैंकिंग एप्लिकेशन के लिए एंड-टू-एंड UI/UX डिज़ाइन।',
          tags: ['UI/UX', 'फिनटेक', 'मोबाइल'],
        },
        {
          title: 'SoundWave Festival – विज़ुअल अभियान',
          category: 'print',
          description: 'एक अंतर्राष्ट्रीय संगीत महोत्सव ब्रांड के लिए साहसिक पोस्टर श्रृंखला।',
          tags: ['पोस्टर', 'अभियान', 'टाइपोग्राफी'],
        },
        {
          title: 'Nexus Corp – वार्षिक रिपोर्ट',
          category: 'print',
          description: 'एक वैश्विक प्रौद्योगिकी कंपनी के लिए प्रीमियम कॉर्पोरेट वार्षिक रिपोर्ट डिज़ाइन।',
          tags: ['एडिटोरियल', 'डेटा विज़', 'कॉर्पोरेट'],
        },
        {
          title: 'Verdant – इको ब्रांड सिस्टम',
          category: 'branding',
          description: 'एक पर्यावरण-अनुकूल जीवनशैली कंपनी के लिए टिकाऊ ब्रांड पहचान।',
          tags: ['ब्रांडिंग', 'इको', 'पहचान'],
        },
        {
          title: 'Lumina – मोशन ब्रांड फिल्म',
          category: 'motion',
          description: 'एक लक्जरी आभूषण ब्रांड के लिए 60-सेकंड मोशन डिज़ाइन ब्रांड फिल्म।',
          tags: ['मोशन', 'फिल्म', 'लक्जरी'],
        },
      ],
    },
    contact: {
      sectionTitle: 'संपर्क करें',
      sectionSubtitle: 'कोई प्रोजेक्ट मन में है? आइए मिलकर कुछ असाधारण बनाएं।',
      namePlaceholder: 'आपका नाम',
      emailPlaceholder: 'आपका ईमेल',
      messagePlaceholder: 'अपने प्रोजेक्ट के बारे में बताएं...',
      sendButton: 'संदेश भेजें',
      successMessage: 'संदेश भेजा गया! जल्द ही जवाब दूंगा।',
      emailLabel: 'ईमेल',
      phoneLabel: 'फोन',
      locationLabel: 'स्थान',
    },
    footer: {
      rights: 'सर्वाधिकार सुरक्षित।',
      madeWith: 'जुनून के साथ डिज़ाइन और विकसित किया गया',
    },
  },

  zh: {
    nav: {
      home: '首页',
      experience: '经验',
      portfolio: '作品集',
      contact: '联系',
    },
    hero: {
      greeting: '你好，我是',
      name: 'Sheikh Riad Hasan',
      title: '资深平面设计师',
      subtitle: '打造引人入胜的视觉身份和数字体验，让品牌绽放光彩，达到新的高度。',
      cta: '查看我的作品',
      ctaSecondary: '联系我',
      yearsExp: '10+',
      projects: '200+',
      clients: '50+',
      yearsLabel: '年工作经验',
      projectsLabel: '完成项目',
      clientsLabel: '满意客户',
    },
    experience: {
      sectionTitle: '工作经验',
      sectionSubtitle: '在世界级组织中追求卓越的记录',
      present: '至今',
      roles: [
        {
          company: 'Google',
          role: '首席视觉设计师',
          period: '2022 – 至今',
          description: '主导 Google 消费产品套件的视觉标识更新。带领 8 名设计师团队创建了被 15 个以上产品采用的品牌指南。',
          tags: ['品牌战略', '动态设计', '设计系统'],
        },
        {
          company: 'Meta',
          role: '高级 UX/品牌设计师',
          period: '2019 – 2022',
          description: '为 Facebook 和 Instagram 活动设计关键视觉元素，覆盖 20 亿以上用户。参与了 Meta 品牌重塑视觉标识项目。',
          tags: ['UI/UX', '活动设计', '社交媒体'],
        },
        {
          company: 'Adobe',
          role: '产品设计师',
          period: '2017 – 2019',
          description: '参与 Adobe Creative Cloud 视觉设计语言的开发。为 Photoshop 和 Illustrator 设计入门体验，将用户激活率提高了 34%。',
          tags: ['产品设计', 'UX 研究', '原型设计'],
        },
        {
          company: 'Ogilvy',
          role: '初级创意设计师',
          period: '2015 – 2017',
          description: '为可口可乐、IBM 和雀巢等财富 500 强客户设计印刷和数字活动。在戛纳国际创意节上贡献了获奖活动。',
          tags: ['印刷设计', '艺术指导', '广告'],
        },
      ],
    },
    portfolio: {
      sectionTitle: '作品集',
      sectionSubtitle: '精选作品，定义我的创意视野',
      viewProject: '查看项目',
      categories: {
        all: '全部',
        branding: '品牌',
        uiux: 'UI/UX',
        print: '印刷',
        motion: '动态',
      },
      projects: [
        {
          title: 'Aurélia Paris – 品牌标识',
          category: 'branding',
          description: '为巴黎高端化妆品品牌打造完整的奢华品牌标识系统，包括标志、包装和品牌指南。',
          tags: ['品牌', '包装', '奢侈品'],
        },
        {
          title: 'NeoBank – 金融科技应用 UI',
          category: 'uiux',
          description: '为现代金融科技银行应用程序进行端到端 UI/UX 设计，具有暗模式和流畅的用户流程。',
          tags: ['UI/UX', '金融科技', '移动端'],
        },
        {
          title: 'SoundWave Festival – 视觉活动',
          category: 'print',
          description: '为国际音乐节品牌打造大胆而充满活力的海报系列。',
          tags: ['海报', '活动', '排版'],
        },
        {
          title: 'Nexus Corp – 年度报告',
          category: 'print',
          description: '为全球科技公司设计高端企业年度报告，包含数据可视化和编辑排版。',
          tags: ['编辑', '数据可视化', '企业'],
        },
        {
          title: 'Verdant – 生态品牌系统',
          category: 'branding',
          description: '为环保生活方式公司打造可持续品牌标识，融合自然美学与现代设计。',
          tags: ['品牌', '生态', '标识'],
        },
        {
          title: 'Lumina – 动态品牌影片',
          category: 'motion',
          description: '为奢华珠宝品牌制作 60 秒动态设计品牌影片，融合动态排版与产品摄影。',
          tags: ['动态', '影片', '奢侈品'],
        },
      ],
    },
    contact: {
      sectionTitle: '联系我',
      sectionSubtitle: '有项目想法？让我们一起创造非凡之作。',
      namePlaceholder: '您的姓名',
      emailPlaceholder: '您的邮箱',
      messagePlaceholder: '请告诉我您的项目...',
      sendButton: '发送消息',
      successMessage: '消息已发送！我会尽快回复您。',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      locationLabel: '地点',
    },
    footer: {
      rights: '版权所有。',
      madeWith: '用热情设计与开发',
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
  BD: 'bn', // Bangladesh
  IN: 'hi', // India
  CN: 'zh', // China
  TW: 'zh', // Taiwan
  HK: 'zh', // Hong Kong
  SG: 'zh', // Singapore (partial)
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
