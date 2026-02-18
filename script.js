document.addEventListener('DOMContentLoaded', () => {
  /* ================== 1. PRELOADER & TYPING (High Priority) ================== */

  // Dismiss Preloader
  const pre = document.getElementById('preloader');
  if (pre) {
    setTimeout(() => {
      pre.style.opacity = '0';
      setTimeout(() => (pre.style.display = 'none'), 500);
    }, 1500);
  }

  // Typing Animation (Expanded)
  let typeIdx = 0,
    isDeleting = false,
    txt = '';
  const words = [
    'Digital Empires',
    'Custom Software',
    'Modern Brands',
    'Next-Gen Tech',
    'Future Reality',
  ];

  function type() {
    const typeElem = document.querySelector('.typing-text');
    if (!typeElem) return;

    const current = words[typeIdx % words.length];
    txt = isDeleting
      ? current.substring(0, txt.length - 1)
      : current.substring(0, txt.length + 1);
    typeElem.innerHTML = txt;

    let delta = isDeleting ? 80 : 150;

    if (!isDeleting && txt === current) {
      delta = 2000;
      isDeleting = true;
    } else if (isDeleting && txt === '') {
      isDeleting = false;
      typeIdx++;
      delta = 500;
    }
    setTimeout(type, delta);
  }
  type(); // Start immediately

  /* ================== 2. TRANSLATIONS ================== */
  let currentLang = 'en';
  const translations = {
    en: {
      nav_home: 'Home',
      nav_services: 'Services',
      nav_work: 'Work',
      nav_team: 'Team',
      nav_review: 'Reviews',
      nav_pricing: 'Pricing',
      hero_badge: '#1 Digital Agency',
      hero_prefix: 'We Build',
      hero_desc:
        'Led by Founder & CEO MD. SALMAN FARSI. We transform ambitious ideas into high-performance digital reality using cutting-edge technology and data-driven strategies.',
      btn_contact: 'Contact Us',
      btn_work: 'View Projects',
      btn_quote: 'Get a Quote',
      stat_proj: 'Projects Completed',
      stat_sat: 'Client Satisfaction',
      stat_award: 'Industry Awards',
      title_service: 'Our Services',
      tag_expert: 'Expertise',
      serv_1_t: 'Graphic Design',
      serv_1_d:
        "Strategic branding, premium logo design, and visual identities crafted to tell your brand's unique story. We ensure your visual presence leaves a lasting impact.",
      serv_2_t: 'Web Development',
      serv_2_d:
        'Blazing fast websites using React.js, Next.js & Node.js. We build SEO-optimized, secure, and fully responsive platforms that drive growth.',
      serv_3_t: 'UI/UX Design',
      serv_3_d:
        'Intuitive user journeys and modern interfaces prototyped in Figma. We focus on aesthetics and usability to maximize your conversion rates.',
      serv_4_t: 'Software Dev',
      serv_4_d:
        'Scalable enterprise software architectures and custom ERP solutions. We automate your complex business processes with precision code.',
      title_work: 'Selected Works',
      tag_port: 'Portfolio',
      title_team: 'Meet The Experts',
      tag_team: 'The Squad',
      team_1_name: 'MD. SALMAN FARSI',
      team_1_role: 'Founder & CEO',
      team_2_name: 'SUMAIYA',
      team_2_role: 'Content Strategist',
      team_3_name: 'MD. MAHIDUL ISLAM',
      team_3_role: 'Lead Developer',
      team_4_name: 'HASAN REZA',
      team_4_role: 'QA Engineer',
      team_5_name: 'MD. SIFAT MOLLA',
      team_5_role: 'Design Director',
      tag_review: 'Testimonials',
      title_review: 'Happy Clients',
      tag_price: 'Pricing',
      title_price: 'Flexible Plans',
      plan_1: 'Starter',
      plan_2: 'Business',
      plan_3: 'Enterprise',
      btn_choose: 'Choose Plan',
      btn_add_review: 'Add Your Review',
      desc_1: 'Best for Personal Portfolios',
      desc_2: 'For Startups & Agencies',
      desc_3: 'Large Scale Solutions',
      price_cust: 'Custom',
      contact_t: "Let's Talk",
      contact_d:
        'Ready to start? Fill the form or contact us directly via social media.',
      form_name: 'Name',
      form_email: 'Email',
      form_msg: 'Message',
      form_send: 'Send Message',
      footer_desc:
        'We build digital futures with high-performance code and stunning design.',
      addr: 'Gulshan-1, Dhaka-1212',
    },
    bn: {
      nav_home: 'হোম',
      nav_services: 'সেবা',
      nav_work: 'কাজ',
      nav_team: 'টিম',
      nav_review: 'মতামত',
      nav_pricing: 'প্যাকেজ',
      hero_badge: 'সেরা এজেন্সি',
      hero_prefix: 'আমরা তৈরি করি',
      hero_desc:
        'প্রতিষ্ঠাতা ও সিইও মোঃ সালমান ফারসির নেতৃত্বে, আমরা আপনার ডিজিটাল স্বপ্নকে বাস্তবে রূপ দেই আধুনিক প্রযুক্তির মাধ্যমে।',
      btn_contact: 'যোগাযোগ',
      btn_work: 'কাজ দেখুন',
      btn_quote: 'কোটেশন',
      stat_proj: 'প্রজেক্ট সম্পন্ন',
      stat_sat: 'গ্রাহক সন্তুষ্টি',
      stat_award: 'পুরস্কার',
      title_service: 'আমাদের সেবা',
      tag_expert: 'দক্ষতা',
      serv_1_t: 'গ্রাফিক ডিজাইন',
      serv_1_d:
        'কৌশলগত ব্র্যান্ডিং এবং লোগো ডিজাইন যা আপনার ব্র্যান্ডের গল্প বলে। আমরা আপনার ভিজ্যুয়াল উপস্থিতি নিশ্চিত করি।',
      serv_2_t: 'ওয়েব ডেভেলপমেন্ট',
      serv_2_d:
        'MERN এবং Next.js ব্যবহার করে দ্রুত গতির ওয়েবসাইট। আমরা এসইও-অপ্টিমাইজড এবং নিরাপদ প্ল্যাটফর্ম তৈরি করি।',
      serv_3_t: 'UI/UX ডিজাইন',
      serv_3_d:
        'ব্যবহারকারী-বান্ধব এবং আধুনিক ইন্টারফেস ডিজাইন। আমরা আপনার রূপান্তর হার বাড়ানোর জন্য ফোকাস করি।',
      serv_4_t: 'সফটওয়্যার',
      serv_4_d:
        'ব্যবসায়িক অটোমেশনের জন্য কাস্টম সফটওয়্যার। আমরা আপনার জটিল ব্যবসায়িক প্রক্রিয়াগুলিকে সহজ করি।',
      title_work: 'কাজসমূহ',
      tag_port: 'পোর্টফোলিও',
      title_team: 'আমাদের টিম',
      tag_team: 'বিশেষজ্ঞ দল',
      team_1_name: 'মোঃ সালমান ফারসি',
      team_1_role: 'প্রতিষ্ঠাতা ও সিইও',
      team_2_name: 'সুমাইয়া',
      team_2_role: 'কন্টেন্ট স্ট্র্যাটেজিস্ট',
      team_3_name: 'মোঃ মাহিদুল ইসলাম',
      team_3_role: 'লিড ডেভেলপার',
      team_4_name: 'হাসান রেজা',
      team_4_role: 'QA ইঞ্জিনিয়ার',
      team_5_name: 'মোঃ সিফাত মোল্লা',
      team_5_role: 'ডিজাইন ডিরেক্টর',
      tag_review: 'মতামত',
      title_review: 'গ্রাহক সন্তুষ্টি',
      tag_price: 'প্যাকেজ',
      title_price: 'আমাদের প্ল্যান',
      plan_1: 'স্টার্টার',
      plan_2: 'বিজনেস',
      plan_3: 'এন্টারপ্রাইজ',
      btn_choose: 'বাছাই করুন',
      btn_add_review: 'মতামত দিন',
      desc_1: 'ব্যক্তিগত সাইটের জন্য',
      desc_2: 'স্টার্টআপের জন্য',
      desc_3: 'বড় ব্যবসার জন্য',
      price_cust: 'কাস্টম',
      contact_t: 'কথা বলুন',
      contact_d: 'শুরু করতে প্রস্তুত? ফর্ম পূরণ করুন অথবা সরাসরি যোগাযোগ করুন।',
      form_name: 'নাম',
      form_email: 'ইমেইল',
      form_msg: 'বার্তা',
      form_send: 'পাঠান',
      footer_desc: 'আমরা আধুনিক প্রযুক্তির মাধ্যমে ডিজিটাল ভবিষ্যৎ গড়ি।',
      addr: 'গুলশান-১, ঢাকা-১২১২',
    },
  };

  /* ================== 3. AGENCY BRAIN (CHATBOT KNOWLEDGE) ================== */
  const agencyAI = {
    knowledge: {
      hello:
        'Hello! I am the NextGen AI Assistant. How can I help you build your digital future today? ✨',
      default:
        "That is an interesting question! While I am an AI, our human experts can provide a detailed answer. <a href='#contact' style='color:var(--primary); font-weight:bold;'>Click to Contact Us!</a>",

      ceo: 'Our leader is <b>Md. Salman Farsi</b>, Founder & CEO. He is a visionary Project Lead ensuring premium standards.',
      team: 'Our Expert Squad:<br>👑 <b>Salman</b> (CEO)<br>💻 <b>Mahidul</b> (Lead Dev)<br>🎨 <b>Sifat</b> (Design Dir)<br>📝 <b>Sumaiya</b> (Content)<br>⚙️ <b>Hasan</b> (QA).',
      purpose:
        "NextGen's purpose is to empower businesses with Silicon Valley-grade technology at accessible prices.",
      location:
        'Our creative hub is in <b>Gulshan-1, Dhaka</b>. However, we operate globally! 📍',
      contact:
        'Email: <b>hello@nextgen.bd</b> or Call: <b>+880 1712-345678</b>. 📞',

      services:
        'We offer: <b>Web Development (MERN/Next.js)</b>, <b>Mobile Apps (Flutter)</b>, <b>UI/UX Design</b>, and <b>Custom Software</b>.',
      build:
        'We can build anything from simple portfolios to complex multi-vendor E-commerce platforms. 💻',
      pricing:
        'Flexible plans:<br>• <b>Starter:</b> ৳20,000<br>• <b>Business:</b> ৳50,000<br>• <b>Enterprise:</b> Custom Pricing.',

      tech: 'We use the latest stack: <b>React.js, Next.js, Node.js, MongoDB</b> for web, and <b>Flutter</b> for mobile apps.',
      mobile:
        'Yes! We build high-performance <b>Cross-Platform Mobile Apps</b> using Flutter and React Native.',
      seo: 'Absolutely! All our Business & Enterprise websites come with <b>Advanced SEO</b> to rank higher on Google. 📈',

      time: 'Typical delivery: <b>5-7 days</b> for Starter, <b>15-20 days</b> for Business. ⏳',
      maintenance:
        'We offer <b>1-3 months of free support</b>. Affordable maintenance packages are available afterwards.',
      start:
        "Great! Click the <b>'Get a Quote'</b> button or fill out the contact form to start. 🚀",
      projects:
        'We have completed <b>250+ projects</b>. Check our work in the Portfolio section!',
    },
    suggestions: [
      '👨‍💻 Who is the CEO?',
      '🚀 What are the services?',
      '💰 Show me pricing',
      "🎯 NextGen's purpose?",
      '💻 What can you build?',
      '📍 Where are you located?',
      '📞 How to contact?',
      '👥 Meet the Squad',
      '⚡ Tech Stack?',
      '📱 Mobile Apps?',
      '📈 Do you do SEO?',
      '📂 Recent projects?',
      '⏳ Delivery time?',
      '🔧 Maintenance included?',
      '🤝 I have a project',
    ],
  };

  /* ================== 4. CHATBOT LOGIC ================== */
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const chatBody = document.getElementById('chat-body');
  const chatInput = document.getElementById('chat-input');
  const chatBtn = document.getElementById('chat-send');
  const chipBox = document.getElementById('chat-suggestions');

  chatToggle.onclick = () => chatBox.classList.toggle('active');
  document.getElementById('chat-close').onclick = () =>
    chatBox.classList.remove('active');

  // Create Chips
  agencyAI.suggestions.forEach((q) => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.innerText = q;
    btn.onclick = () => {
      addUserMsg(q);
      botResponse(q.toLowerCase());
    };
    chipBox.appendChild(btn);
  });

  // Drag Scroll
  let isDown = false;
  let startX;
  let scrollLeft;
  chipBox.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - chipBox.offsetLeft;
    scrollLeft = chipBox.scrollLeft;
    chipBox.style.cursor = 'grabbing';
  });
  chipBox.addEventListener('mouseleave', () => {
    isDown = false;
    chipBox.style.cursor = 'grab';
  });
  chipBox.addEventListener('mouseup', () => {
    isDown = false;
    chipBox.style.cursor = 'grab';
  });
  chipBox.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - chipBox.offsetLeft;
    const walk = (x - startX) * 2;
    chipBox.scrollLeft = scrollLeft - walk;
  });

  function addUserMsg(msg) {
    const div = document.createElement('div');
    div.className = 'msg user';
    div.innerText = msg;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function botResponse(input) {
    let reply = agencyAI.knowledge.default;

    if (input.match(/hi|hello|hey|greetings/)) reply = agencyAI.knowledge.hello;
    else if (
      input.includes('ceo') ||
      input.includes('founder') ||
      input.includes('leader')
    )
      reply = agencyAI.knowledge.ceo;
    else if (
      input.includes('team') ||
      input.includes('squad') ||
      input.includes('staff')
    )
      reply = agencyAI.knowledge.team;
    else if (
      input.includes('price') ||
      input.includes('cost') ||
      input.includes('package')
    )
      reply = agencyAI.knowledge.pricing;
    else if (
      input.includes('service') ||
      input.includes('offer') ||
      input.includes('do for me')
    )
      reply = agencyAI.knowledge.services;
    else if (
      input.includes('tech') ||
      input.includes('stack') ||
      input.includes('react') ||
      input.includes('node')
    )
      reply = agencyAI.knowledge.tech;
    else if (
      input.includes('mobile') ||
      input.includes('app') ||
      input.includes('android') ||
      input.includes('ios')
    )
      reply = agencyAI.knowledge.mobile;
    else if (
      input.includes('seo') ||
      input.includes('rank') ||
      input.includes('google')
    )
      reply = agencyAI.knowledge.seo;
    else if (
      input.includes('time') ||
      input.includes('long') ||
      input.includes('delivery')
    )
      reply = agencyAI.knowledge.time;
    else if (
      input.includes('maintenance') ||
      input.includes('support') ||
      input.includes('help')
    )
      reply = agencyAI.knowledge.maintenance;
    else if (
      input.includes('project') ||
      input.includes('portfolio') ||
      input.includes('work')
    )
      reply = agencyAI.knowledge.projects;
    else if (
      input.includes('purpose') ||
      input.includes('vision') ||
      input.includes('mission')
    )
      reply = agencyAI.knowledge.purpose;
    else if (
      input.includes('build') ||
      input.includes('make') ||
      input.includes('create')
    )
      reply = agencyAI.knowledge.build;
    else if (
      input.includes('location') ||
      input.includes('address') ||
      input.includes('where')
    )
      reply = agencyAI.knowledge.location;
    else if (
      input.includes('contact') ||
      input.includes('call') ||
      input.includes('email')
    )
      reply = agencyAI.knowledge.contact;
    else if (input.includes('start') || input.includes('hire'))
      reply = agencyAI.knowledge.start;

    const tDiv = document.createElement('div');
    tDiv.className = 'msg bot';
    tDiv.innerHTML = '...';
    chatBody.appendChild(tDiv);
    setTimeout(() => {
      tDiv.remove();
      const bDiv = document.createElement('div');
      bDiv.className = 'msg bot';
      bDiv.innerHTML = reply;
      chatBody.appendChild(bDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }

  chatBtn.onclick = () => {
    const val = chatInput.value.trim();
    if (val) {
      addUserMsg(val);
      botResponse(val.toLowerCase());
      chatInput.value = '';
    }
  };
  chatInput.onkeypress = (e) => {
    if (e.key === 'Enter') chatBtn.onclick();
  };

  /* ================== 5. FORMS (GOOGLE SHEETS) ================== */

  // --- REVIEW FORM ---
  const reviewScriptURL =
    'https://script.google.com/macros/s/AKfycbz7Owo3w9D58CYVQ0Zwkh8MNkcMnsp5vdgXetyo2WlCBLmtrXeLlbqSt_QcCYsY51Q7pA/exec';
  const reviewForm = document.forms['submit-review-to-google-sheet'];
  const reviewBtn = document.getElementById('review-submit-btn');
  const reviewModal = document.getElementById('review-modal');

  // Modal Trigger
  document.getElementById('add-review-btn').onclick = () =>
    (reviewModal.style.display = 'block');
  document.querySelector('.close-modal').onclick = () =>
    (reviewModal.style.display = 'none');
  window.onclick = (e) => {
    if (e.target == reviewModal) reviewModal.style.display = 'none';
  };

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = reviewBtn.innerText;
      reviewBtn.innerText = 'Submitting...';
      reviewBtn.style.opacity = '0.7';

      fetch(reviewScriptURL, { method: 'POST', body: new FormData(reviewForm) })
        .then((response) => {
          reviewBtn.innerText = 'Submitted! ✅';
          reviewBtn.style.backgroundColor = '#10b981';
          setTimeout(() => {
            reviewForm.reset();
            reviewBtn.innerText = originalText;
            reviewBtn.style.backgroundColor = '';
            reviewBtn.style.opacity = '1';
            reviewModal.style.display = 'none';
          }, 2000);
        })
        .catch((error) => {
          console.error('Error!', error.message);
          reviewBtn.innerText = 'Error ❌';
          reviewBtn.style.backgroundColor = '#ef4444';
          setTimeout(() => {
            reviewBtn.innerText = originalText;
            reviewBtn.style.backgroundColor = '';
            reviewBtn.style.opacity = '1';
          }, 3000);
        });
    });
  }

  // --- CONTACT FORM ---
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbz7Owo3w9D58CYVQ0Zwkh8MNkcMnsp5vdgXetyo2WlCBLmtrXeLlbqSt_QcCYsY51Q7pA/exec';
  const contactForm = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');
  const submitBtn = document.getElementById('form-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      submitBtn.style.opacity = '0.7';

      fetch(scriptURL, { method: 'POST', body: new FormData(contactForm) })
        .then((response) => {
          submitBtn.innerText = 'Sent! ✅';
          submitBtn.style.backgroundColor = '#10b981';
          if (msg) {
            msg.innerHTML = 'Message Sent Successfully!';
            setTimeout(() => (msg.innerHTML = ''), 5000);
          }
          setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.opacity = '1';
            contactForm.reset();
          }, 4000);
        })
        .catch((error) => {
          console.error('Error!', error.message);
          submitBtn.innerText = 'Error!';
          submitBtn.style.backgroundColor = '#ef4444';
          setTimeout(() => {
            submitBtn.innerText = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.opacity = '1';
          }, 3000);
        });
    });
  }

  /* ================== 6. EXTRAS (Scroll, Filter, Lang) ================== */

  // Scroll Animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('counter')) {
            const target = +entry.target.getAttribute('data-target');
            let count = 0;
            const update = () => {
              count += target / 100;
              if (count < target) {
                entry.target.innerText = Math.ceil(count);
                requestAnimationFrame(update);
              } else {
                entry.target.innerText = target + '+';
              }
            };
            update();
          }
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll('.fade-up, .counter')
    .forEach((el) => observer.observe(el));

  // Portfolio Filter
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.onclick = () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.portfolio-item').forEach((item) => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'flex';
          setTimeout(() => (item.style.opacity = '1'), 100);
        } else {
          item.style.opacity = '0';
          setTimeout(() => (item.style.display = 'none'), 300);
        }
      });
    };
  });

  // Language Toggle
  document.getElementById('lang-btn').onclick = function () {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    this.innerText = currentLang === 'en' ? 'ENG' : 'বাংলা';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key])
        el.innerText = translations[currentLang][key];
    });
  };

  // Theme Toggle
  const themeBtn = document.getElementById('theme-btn');
  themeBtn.onclick = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  };

  // Mobile Menu
  const menu = document.querySelector('.menu-list');
  document.getElementById('menu-toggle').onclick = () =>
    menu.classList.toggle('active');
  document
    .querySelectorAll('.menu-link')
    .forEach((l) => (l.onclick = () => menu.classList.remove('active')));

  // Physics Cursor
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  let mX = 0,
    mY = 0,
    rX = 0,
    rY = 0;

  window.addEventListener('mousemove', (e) => {
    mX = e.clientX;
    mY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = mX + 'px';
      cursorDot.style.top = mY + 'px';
    }
  });
  function animateCursor() {
    rX += (mX - rX) * 0.15;
    rY += (mY - rY) * 0.15;
    if (cursorRing) {
      cursorRing.style.left = rX + 'px';
      cursorRing.style.top = rY + 'px';
    }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document
    .querySelectorAll('a, button, .hover-trigger, .card')
    .forEach((el) => {
      el.addEventListener('mouseenter', () =>
        document.body.classList.add('hovered'),
      );
      el.addEventListener('mouseleave', () =>
        document.body.classList.remove('hovered'),
      );
    });

  // 3D Tilt Effect
  document.querySelectorAll('.tilt-effect').forEach((card) => {
    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(1000px) rotateX(${((y - rect.height / 2) / 20) * -1}deg) rotateY(${(x - rect.width / 2) / 20}deg)`;
    };
    card.onmouseleave = () =>
      (card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)');
  });

  // Review Rotator
  const reviews = [
    {
      text: 'NextGen transformed our business with their incredible web solution.',
      name: 'Rahim Ahmed',
      role: 'CEO, TechBD',
    },
    {
      text: 'Best agency in BD! The team is super responsive and skilled.',
      name: 'Sarah Khan',
      role: 'Marketing Head',
    },
    {
      text: 'Highly professional service. Delivered on time.',
      name: 'Tanvir Hasan',
      role: 'Founder, StartupXY',
    },
  ];
  let rIdx = 0;
  setInterval(() => {
    rIdx = (rIdx + 1) % reviews.length;
    document.getElementById('review-text').innerText =
      `"${reviews[rIdx].text}"`;
    document.getElementById('client-name').innerText = reviews[rIdx].name;
    document.querySelector('.client-info span').innerText = reviews[rIdx].role;
  }, 4000);

  // Navbar & Back-to-Top Scroll
  window.onscroll = () => {
    const top = window.scrollY;
    const progress = document.getElementById('scroll-progress');
    if (progress)
      progress.style.width =
        (top / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (top > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
    const btt = document.getElementById('back-to-top');
    if (btt) {
      if (top > 300) btt.style.display = 'block';
      else btt.style.display = 'none';
    }

    document.querySelectorAll('.section-spy').forEach((sec) => {
      if (top >= sec.offsetTop - 150) {
        document.querySelectorAll('.menu-link').forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sec.id}`)
            link.classList.add('active');
        });
      }
    });
  };
  const btt = document.getElementById('back-to-top');
  if (btt) btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});
