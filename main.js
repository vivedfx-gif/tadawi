/* ===== TADAWI CLINIC - MAIN JS ===== */

// ===== INLINE TRANSLATIONS (no fetch needed) =====
const AR = {
  nav_home:'الرئيسية',nav_about:'من نحن',nav_services:'خدماتنا',nav_doctors:'أطباؤنا',
  nav_branches:'فروعنا',nav_articles:'المقالات',nav_faq:'الأسئلة الشائعة',nav_contact:'تواصل معنا',
  btn_book:'احجز موعدك',btn_learn_more:'اعرف المزيد',btn_view_all:'عرض الكل',
  btn_view_profile:'عرض الملف',btn_book_now:'احجز الآن',btn_call:'اتصل الآن',
  btn_whatsapp:'واتساب',btn_directions:'الاتجاهات',
  hero_badge:'موثوق من قبل أكثر من ١٠,٠٠٠ مريض',
  hero_title:'أفضل علاج طبيعي وتأهيل',
  hero_desc:'استمتع بخدمات العلاج الطبيعي والتأهيل على أعلى مستوى في عيادة تداوي. يجمع فريقنا المتميز بين أحدث التقنيات والرعاية الشخصية لمساعدتك على التعافي بشكل أسرع.',
  hero_stat1:'١٥+ عاماً من الخبرة',hero_stat2:'١٠ آلاف+ مريض تم علاجهم',
  hero_stat3:'٩٨٪ نسبة الرضا',hero_stat4:'٣ فروع',
  trust1:'أطباء متخصصون',trust1d:'استشاريون معتمدون',
  trust2:'أحدث التقنيات',trust2d:'معدات متطورة',
  trust3:'رعاية شخصية',trust3d:'خطط علاج مخصصة',
  trust4:'نتائج مثبتة',trust4d:'٩٨٪ رضا المرضى',
  services_title:'خدماتنا المتكاملة',services_desc:'خدمات علاج شاملة ومتكاملة تناسب احتياجاتك',
  doctors_title:'أطباؤنا المتخصصون',doctors_desc:'فريق متخصص من الاستشاريين المكرسين لتعافيك',
  see_all_doctors:'عرض جميع الأطباء',
  testimonials_title:'مرضانا يقولون',testimonials_desc:'قصص حقيقية من مرضى ثقوا بنا في رحلة تعافيهم',
  branches_title:'فروعنا المميزة',branches_desc:'موقع مميز في أنحاء القاهرة لسهولة الوصول',
  cta_title:'جاهز تبدأ رحلة التعافي؟',cta_desc:'احجز موعدك اليوم وخذ أول خطوة نحو حياة بدون ألم.',
  cta_btn:'احجز موعدك الآن',
  footer_desc:'عيادة العلاج الطبيعي والتأهيل الرائدة في مصر. نقدم رعاية عالمية المستوى منذ ٢٠١٠.',
  footer_links:'روابط سريعة',footer_services:'خدماتنا',footer_contact:'تواصل معنا',
  footer_hours:'ساعات العمل',footer_hours_text:'الأحد - الخميس: ٩ صباحاً - ٦ مساءً',
  footer_rights:'جميع الحقوق محفوظة.',
  about_story:'قصتنا',
  about_story_p1:'تأسست عيادة تداوي في عام ٢٠١٠، ونمت من عيادة صغيرة إلى واحدة من أكبر مراكز العلاج الطبيعي والتأهيل في مصر. بدأت رحلتنا بمهمة بسيطة: تقديم رعاية تأهيلية عالمية المستوى يمكن الوصول إليها لكل مريض يدخل أبوابنا.',
  about_story_p2:'اليوم، ندير ثلاثة فروع متطورة في القاهرة، يقودها فريق من الاستشاريين المدربين دولياً المتحمسين لمساعدة المرضى على استعادة حركتهم وجودة حياتهم.',
  about_mission:'مهمتنا',about_mission_text:'تقديم خدمات استثنائية في العلاج الطبيعي والتأهيل تمكّن المرضى من تحقيق أعلى مستوى من الاستقلالية الوظيفية وجودة الحياة.',
  about_vision:'رؤيتنا',about_vision_text:'أن نكون مركز العلاج الطبيعي والتأهيل الرائد في الشرق الأوسط.',
  about_values:'قيمنا',
  val1:'التميز في الرعاية',val1d:'نسعى لأعلى المعايير في كل جانب من جوانب رعاية المرضى.',
  val2:'مركّز على المريض',val2d:'كل خطة علاج مصممة خصيصاً لاحتياجات مرضانا.',
  val3:'الابتكار',val3d:'نتبنى باستمرار أحدث التقنيات والإجراءات.',
  val4:'الرحمة',val4d:'نتعامل مع كل مريض بالتعاطف والكرامة والاحترام.',
  contact_title:'تواصل معنا',contact_desc:'نحن هنا لمساعدتك. تواصل معنا للحجز أو الاستفسارات.',
  contact_name:'الاسم الكامل',contact_email:'البريد الإلكتروني',contact_phone:'رقم الهاتف',
  contact_subject:'الموضوع',contact_message:'رسالتك',contact_send:'إرسال الرسالة',
  faq_title:'الأسئلة الشائعة',
  articles_title:'أحدث المقالات',
  search_placeholder:'بحث...',cookie_text:'نستخدم ملفات تعريف الارتباط لتحسين تجربتك.',
  cookie_accept:'موافق',
  success_title:'تم إرسال طلب موعدك!',success_desc:'سيتم التواصل معك عبر الواتساب لتأكيد الموعد.',
  success_btn:'حجز موعد آخر',
  book_title:'احجز موعدك',book_name:'الاسم الكامل',book_phone:'رقم الهاتف',book_whatsapp:'رقم الواتساب',
  book_age:'العمر',book_gender:'الجنس',book_male:'ذكر',book_female:'أنثى',
  book_branch:'الفرع',book_doctor:'الطبيب',book_service:'الخدمة',
  book_date:'التاريخ المفضل',book_time:'الوقت المفضل',book_notes:'ملاحظات',
  book_btn:'احجز الآن',
  branch_heli:'فرع مصر الجديدة',branch_nasr:'فرع مدينة نصر',branch_oct:'فرع ٦ أكتوبر',
  branch_addr1:'شارع الأهرام، مصر الجديدة',branch_addr2:'شارع عباس العقاد، مدينة نصر',branch_addr3:'شارع المحور، ٦ أكتوبر',
  branch_hours:'ساعات العمل: الأحد - الخميس ٩ ص - ٦ م',
  branch_call:'اتصل',branch_whatsapp:'واتساب',branch_directions:'الاتجاهات',
  insurance_title:'شركات التأمين المتعاقد معها',
  why_title:'لماذا تختار تداوي؟',
  process_title:'خطوات العلاج',process_step1:'التشخيص',process_step2:'خطة العلاج',process_step3:'الجلسات',process_step4:'المتابعة',
  benefits:'المميزات',
  related_services:'خدمات ذات صلة',
  faq_q1:'ما هي ساعات عمل العيادة؟',faq_a1:'العيادة تعمل من الأحد إلى الخميس، من الساعة ٩ صباحاً حتى ٦ مساءً.',
  faq_q2:'هل أحتاج إلى مراجعة الطبيب أولاً؟',faq_a2:'يمكنك الحجز مباشرة مع أخصائي العلاج الطبيعي.',
  faq_q3:'هل تقبلون شركات التأمين؟',faq_a3:'نعم، نتعامل مع معظم شركات التأمين الكبرى في مصر.',
  faq_q4:'كم تستغرق جلسة العلاج الطبيعي؟',faq_a4:'تستغرق الجلسة عادةً من ٤٥ إلى ٦٠ دقيقة.',
  testimonial1:'"بعد سنوات من آلام الظهر المزمنة، وجدت الحل في عيادة تداوي. الفريق الطبي محترف جداً والنتائج كانت مذهلة."',
  testimonial1_name:'محمد إبراهيم',testimonial1_role:'مريض آلام الظهر',
  testimonial2:'"طفلي تحسن بشكل ملحوظ بعد جلسات العلاج الطبيعي مع د. سارة. شكراً لكم على الاحترافية."',
  testimonial2_name:'فاطمة أحمد',testimonial2_role:'والدة مريض',
  testimonial3:'"التأهيل بعد عمليتي في الركبة كان رائع. العيادة مجهزة بأحدث المعدات والأطباء على أعلى مستوى."',
  testimonial3_name:'عبدالله سعيد',testimonial3_role:'مريض تأهيل بعد جراحة',
  article1_tag:'آلام الظهر',article1_title:'فهم آلام الظهر: الأسباب والعلاج',article1_date:'١٥ يوليو ٢٠٢٦',article1_time:'٥ دقائق قراءة',
  article2_tag:'رياضة',article2_title:'إصابات الرياضيين: الوقاية والتعافي',article2_date:'١٠ يوليو ٢٠٢٦',article2_time:'٤ دقائق قراءة',
  article3_tag:'أطفال',article3_title:'العلاج الطبيعي للأطفال',article3_date:'٥ يوليو ٢٠٢٦',article3_time:'٦ دقائق قراءة',
  article4_tag:'عام',article4_title:'فوائد العلاج اليدوي',article4_date:'١ يوليو ٢٠٢٦',article4_time:'٣ دقائق قراءة',
  article5_tag:'عصبي',article5_title:'التأهيل بعد السكتة الدماغية',article5_date:'٢٥ يونيو ٢٠٢٦',article5_time:'٧ دقائق قراءة',
  article6_tag:'عام',article6_title:'تمارين لتخفيف الألم المزمن',article6_date:'٢٠ يونيو ٢٠٢٦',article6_time:'٤ دقائق قراءة',
  filter_all:'الكل',
  modal_bio:'السيرة الذاتية',modal_certs:'الشهادات والخبرات',modal_schedule:'أوقات العمل',modal_branch:'الفرع',modal_languages:'اللغات',modal_book_btn:'احجز موعد',
  svc_back_pain:'علاج آلام الظهر',svc_back_pain_desc:'علاج متخصص لآلام الظهر والعمود الفقري بأحدث التقنيات',
  svc_neck_pain:'علاج آلام الرقبة',svc_neck_pain_desc:'حلول فعالة لآلام الرقبة والصداع الناتج عنها',
  svc_sports:'إصابات الرياضيين',svc_sports_desc:'تأهيل شامل لإصابات الرياضيين وإعادة الأداء',
  svc_post_surgery:'التأهيل بعد الجراحة',svc_post_surgery_desc:'برامج تأهيل متكاملة بعد العمليات الجراحية',
  svc_neuro:'التأهيل العصبي',svc_neuro_desc:'علاج متخصص للحالات العصبية والسكتة الدماغية',
  svc_pedi:'العلاج الطبيعي للأطفال',svc_pedi_desc:'رعاية متخصصة للأطفال وتأهيل النمو',
  svc_shoulder:'علاج آلام الكتف',svc_shoulder_desc:'علاج متخصص لآلام الكتف والتيبس',
  svc_knee:'علاج آلام الركبة',svc_knee_desc:'حلول متقدمة لآلام الركبة والغضاريف',
  svc_sciatica:'علاج العرق النسليبي',svc_sciatica_desc:'علاج متخصص لآلام العرق النسليبي',
  svc_disc:'مشاكل الأقراص الفقري',svc_disc_desc:'علاج متخصص لمشاكل وتلف الأقراص الفقري',
  svc_acl:'تأهيل الرباط الصليبي',svc_acl_desc:'برامج تأهيل متخصصة بعد إصابات الرباط الصليبي',
  svc_dry:'العلاج بالإبر الجافة',svc_dry_desc:'تخفيف آلام العضلات بالإبر الجافة المتقدمة',
  svc_shock:'العلاج بالموجات الصادمة',svc_shock_desc:'علاج غير جراحي بالموجات الصادمة المركزة',
  svc_manual:'العلاج اليدوي',svc_manual_desc:'تقنيات يدوية متقدمة لتحرير المفاصل والعضلات',
  svc_women:'صحة المرأة',svc_women_desc:'رعاية متخصصة لصحة المرأة وال产后 التأهيل'
};
const EN = {
  nav_home:'Home',nav_about:'About',nav_services:'Services',nav_doctors:'Doctors',
  nav_branches:'Branches',nav_articles:'Articles',nav_faq:'FAQ',nav_contact:'Contact',
  btn_book:'Book Now',btn_learn_more:'Learn More',btn_view_all:'View All',
  btn_view_profile:'View Profile',btn_book_now:'Book Now',btn_call:'Call Now',
  btn_whatsapp:'WhatsApp',btn_directions:'Directions',
  hero_badge:'Trusted by 10,000+ Patients',
  hero_title:'Expert Physical Therapy & Rehabilitation',
  hero_desc:'Experience world-class physical therapy and rehabilitation services at Tadawi Clinic. Our expert team combines cutting-edge technology with personalized care to help you recover faster.',
  hero_stat1:'15+ Years Experience',hero_stat2:'10K+ Patients Treated',
  hero_stat3:'98% Satisfaction',hero_stat4:'3 Branches',
  trust1:'Expert Doctors',trust1d:'Board-certified specialists',
  trust2:'Latest Technology',trust2d:'State-of-the-art equipment',
  trust3:'Personalized Care',trust3d:'Tailored treatment plans',
  trust4:'Proven Results',trust4d:'98% patient satisfaction',
  services_title:'Our Services',services_desc:'Comprehensive physical therapy services tailored to your needs',
  doctors_title:'Our Doctors',doctors_desc:'Expert team of specialists dedicated to your recovery',
  see_all_doctors:'See All Doctors',
  testimonials_title:'Patient Testimonials',testimonials_desc:'Real stories from patients who trusted us',
  branches_title:'Our Branches',branches_desc:'Conveniently located across Cairo',
  cta_title:'Ready to Start Your Recovery?',cta_desc:'Book your appointment today and take the first step towards a pain-free life.',
  cta_btn:'Book Appointment Now',
  footer_desc:'Leading physical therapy and rehabilitation clinic in Egypt. World-class care since 2010.',
  footer_links:'Quick Links',footer_services:'Services',footer_contact:'Contact Us',
  footer_hours:'Working Hours',footer_hours_text:'Sun - Thu: 9 AM - 6 PM',
  footer_rights:'All Rights Reserved.',
  about_story:'Our Story',
  about_story_p1:'Founded in 2010, Tadawi Clinic has grown from a single practice to one of Egypt\'s leading physical therapy and rehabilitation centers. Our journey began with a simple mission: to provide accessible, world-class rehabilitation care.',
  about_story_p2:'Today, we operate three state-of-the-art branches across Cairo, staffed by internationally trained specialists passionate about helping patients regain their mobility and quality of life.',
  about_mission:'Our Mission',about_mission_text:'To provide exceptional physical therapy and rehabilitation services that empower patients to achieve their highest level of functional independence.',
  about_vision:'Our Vision',about_vision_text:'To be the leading physical therapy and rehabilitation center in the Middle East.',
  about_values:'Our Values',
  val1:'Excellence in Care',val1d:'We strive for the highest standards in every aspect of patient care.',
  val2:'Patient-Centered',val2d:'Every treatment plan is tailored to the individual needs of our patients.',
  val3:'Innovation',val3d:'We continuously adopt the latest techniques and technologies.',
  val4:'Compassion',val4d:'We treat every patient with empathy, dignity, and respect.',
  contact_title:'Contact Us',contact_desc:'We\'re here to help. Reach out for appointments or inquiries.',
  contact_name:'Full Name',contact_email:'Email Address',contact_phone:'Phone Number',
  contact_subject:'Subject',contact_message:'Your Message',contact_send:'Send Message',
  faq_title:'Frequently Asked Questions',
  articles_title:'Latest Articles',
  search_placeholder:'Search...',cookie_text:'We use cookies to enhance your experience.',
  cookie_accept:'Accept',
  success_title:'Appointment Request Sent!',success_desc:'We will contact you via WhatsApp to confirm your appointment.',
  success_btn:'Book Another',
  book_title:'Book Your Appointment',book_name:'Full Name',book_phone:'Phone Number',book_whatsapp:'WhatsApp Number',
  book_age:'Age',book_gender:'Gender',book_male:'Male',book_female:'Female',
  book_branch:'Branch',book_doctor:'Doctor',book_service:'Service',
  book_date:'Preferred Date',book_time:'Preferred Time',book_notes:'Notes',
  book_btn:'Book Now',
  branch_heli:'Heliopolis Branch',branch_nasr:'Nasr City Branch',branch_oct:'6th October Branch',
  branch_addr1:'El Ahram Street, Heliopolis',branch_addr2:'Abbas El-Akkad Street, Nasr City',branch_addr3:'El Mohandessin, 6th October',
  branch_hours:'Hours: Sun - Thu 9 AM - 6 PM',
  branch_call:'Call',branch_whatsapp:'WhatsApp',branch_directions:'Directions',
  insurance_title:'Insurance Partners',
  why_title:'Why Choose Tadawi?',
  process_title:'Treatment Process',process_step1:'Assessment',process_step2:'Treatment Plan',process_step3:'Sessions',process_step4:'Follow-up',
  benefits:'Benefits',
  related_services:'Related Services',
  faq_q1:'What are the clinic\'s working hours?',faq_a1:'The clinic operates Sunday through Thursday, 9 AM to 6 PM.',
  faq_q2:'Do I need a referral?',faq_a2:'No, you can book directly with a physiotherapist.',
  faq_q3:'Do you accept insurance?',faq_a3:'Yes, we work with most major insurance companies in Egypt.',
  faq_q4:'How long is a session?',faq_a4:'Sessions typically last 45 to 60 minutes.',
  testimonial1:'"After years of chronic back pain, I found the solution at Tadawi Clinic. The team is very professional and the results were amazing."',
  testimonial1_name:'Mohamed Ibrahim',testimonial1_role:'Back Pain Patient',
  testimonial2:'"My child improved significantly after physiotherapy sessions with Dr. Sara. Thank you for the professionalism."',
  testimonial2_name:'Fatma Ahmed',testimonial2_role:'Parent',
  testimonial3:'"Post-surgery knee rehabilitation was excellent. The clinic is equipped with the latest technology and top doctors."',
  testimonial3_name:'Abdullah Saeed',testimonial3_role:'Post-Surgery Patient',
  article1_tag:'Back Pain',article1_title:'Understanding Back Pain: Causes & Treatment',article1_date:'Jul 15, 2026',article1_time:'5 min read',
  article2_tag:'Sports',article2_title:'Sports Injuries: Prevention & Recovery',article2_date:'Jul 10, 2026',article2_time:'4 min read',
  article3_tag:'Pediatric',article3_title:'Pediatric Physical Therapy Guide',article3_date:'Jul 5, 2026',article3_time:'6 min read',
  article4_tag:'General',article4_title:'Benefits of Manual Therapy',article4_date:'Jul 1, 2026',article4_time:'3 min read',
  article5_tag:'Neuro',article5_title:'Stroke Rehabilitation Guide',article5_date:'Jun 25, 2026',article5_time:'7 min read',
  article6_tag:'General',article6_title:'Exercises for Chronic Pain Relief',article6_date:'Jun 20, 2026',article6_time:'4 min read',
  filter_all:'All',
  modal_bio:'Biography',modal_certs:'Certificates & Experience',modal_schedule:'Working Schedule',modal_branch:'Branch',modal_languages:'Languages',modal_book_btn:'Book Appointment',
  svc_back_pain:'Back Pain Treatment',svc_back_pain_desc:'Specialized treatment for chronic and acute back pain',
  svc_neck_pain:'Neck Pain Treatment',svc_neck_pain_desc:'Effective solutions for neck pain and headaches',
  svc_sports:'Sports Injuries',svc_sports_desc:'Comprehensive sports injury rehabilitation',
  svc_post_surgery:'Post-Surgery Rehab',svc_post_surgery_desc:'Complete rehabilitation programs after surgery',
  svc_neuro:'Neurological Rehab',svc_neuro_desc:'Specialized treatment for neurological conditions',
  svc_pedi:'Pediatric Therapy',svc_pedi_desc:'Specialized care for children\'s development',
  svc_shoulder:'Shoulder Pain Treatment',svc_shoulder_desc:'Advanced shoulder pain and stiffness treatment',
  svc_knee:'Knee Pain Treatment',svc_knee_desc:'Advanced solutions for knee and cartilage pain',
  svc_sciatica:'Sciatica Treatment',svc_sciatica_desc:'Specialized sciatica pain treatment',
  svc_disc:'Disc Problems',svc_disc_desc:'Treatment for spinal disc issues',
  svc_acl:'ACL Rehabilitation',svc_acl_desc:'Specialized post-ACL injury rehabilitation',
  svc_dry:'Dry Needling',svc_dry_desc:'Advanced dry needling for muscle pain relief',
  svc_shock:'Shockwave Therapy',svc_shock_desc:'Non-invasive focused shockwave treatment',
  svc_manual:'Manual Therapy',svc_manual_desc:'Advanced manual techniques for joints and muscles',
  svc_women:'Women\'s Health',svc_women_desc:'Specialized physiotherapy for women\'s health'
};

const Lang = {
  current: localStorage.getItem('tadawi-lang') || 'ar',
  texts: {},
  init() {
    this.texts = this.current === 'ar' ? AR : EN;
    document.documentElement.lang = this.current;
    document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
    document.body.className = this.current;
    this.apply();
  },
  async switch(lang) {
    this.current = lang;
    localStorage.setItem('tadawi-lang', lang);
    this.texts = lang === 'ar' ? AR : EN;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = lang;
    this.apply();
    document.querySelectorAll('.lang-current').forEach(el => el.textContent = lang === 'ar' ? 'EN' : 'AR');
  },
  apply() {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (this.texts[key]) el.textContent = this.texts[key];
    });
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
      const key = el.getAttribute('data-key-placeholder');
      if (this.texts[key]) el.placeholder = this.texts[key];
    });
    document.querySelectorAll('[data-key-html]').forEach(el => {
      const key = el.getAttribute('data-key-html');
      if (this.texts[key]) el.innerHTML = this.texts[key];
    });
  }
};

// ===== HEADER SCROLL =====
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    const btn = document.querySelector('.back-to-top');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => observer.observe(el));
}

// ===== COUNTERS =====
function initCounters() {
  const counters = document.querySelectorAll('.count');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count')) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + suffix;
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item.active').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// ===== DOCTOR MODAL =====
function initDoctorModal() {
  document.querySelectorAll('[data-doctor]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-doctor');
      const modal = document.getElementById('doctor-modal');
      if (!modal) return;
      const doctors = {
        'dr-mohamed': {
          nameEn:'Dr. Mohamed Ashraf',nameAr:'د. محمد أشرف',
          specEn:'Physical Therapy & Rehabilitation',specAr:'العلاج الطبيعي والتأهيل',
          bioEn:'Dr. Mohamed Ashraf is a leading expert in physical therapy with over 15 years of experience specializing in sports injuries, post-surgery rehabilitation, and chronic pain management.',
          bioAr:'د. محمد أشرف خبير رائد في العلاج الطبيعي مع أكثر من ١٥ عاماً من الخبرة. متخصص في إصابات الرياضيين وإعادة التأهيل بعد الجراحة وعلاج الألم المزمن.',
          expEn:'15+ Years',expAr:'+١٥ عاماً',branchEn:'Heliopolis',branchAr:'مصر الجديدة',
          langsEn:'Arabic, English',langsAr:'العربية، الإنجليزية',
          certsEn:['Orthopedic Specialist','Sports Medicine','Manual Therapy'],certsAr:['العظام','الطب الرياضي','العلاج اليدوي'],
          schedEn:'Sun-Thu | 9AM-5PM',schedAr:'الأحد-الخميس | ٩ص-٥م'
        },
        'dr-sara': {
          nameEn:'Dr. Sara Hassan',nameAr:'د. سارة حسن',
          specEn:'Pediatric Physical Therapy',specAr:'العلاج الطبيعي للأطفال',
          bioEn:'Dr. Sara Hassan specializes in pediatric physical therapy, helping children reach developmental milestones with extensive experience in developmental delays and childhood neurological conditions.',
          bioAr:'د. سارة حسن متخصصة في العلاج الطبيعي للأطفال، تساعد الأطفال على تحقيق معالمهم النموية بخبرة واسعة.',
          expEn:'10+ Years',expAr:'+١٠ أعوام',branchEn:'Nasr City',branchAr:'مدينة نصر',
          langsEn:'Arabic, English, French',langsAr:'العربية، الإنجليزية، الفرنسية',
          certsEn:['Pediatric NDT','Child Psychology','Developmental Therapy'],certsAr:['العلاج العصبي للأطفال','سيكولوجية الأطفال','العلاج التطوري'],
          schedEn:'Sun-Wed | 10AM-6PM',schedAr:'الأحد-الأربعاء | ١٠ص-٦م'
        },
        'dr-ahmed': {
          nameEn:'Dr. Ahmed Mansour',nameAr:'د. أحمد منصور',
          specEn:'Sports Injuries & Rehabilitation',specAr:'إصابات الرياضيين والتأهيل',
          bioEn:'Dr. Ahmed Mansour is a sports rehabilitation specialist who has worked with professional athletes and national teams, combining cutting-edge techniques with evidence-based practice.',
          bioAr:'د. أحمد منصور متخصص في التأهيل الرياضي عمل مع رياضيين محترفين وفرق وطنية.',
          expEn:'12+ Years',expAr:'+١٢ عاماً',branchEn:'6th October',branchAr:'٦ أكتوبر',
          langsEn:'Arabic, English',langsAr:'العربية، الإنجليزية',
          certsEn:['Sports Medicine','Strength & Conditioning','Kinesio Taping'],certsAr:['الطب الرياضي','القوة والتكييف','الترقيع الكينيسيولوجي'],
          schedEn:'Sat-Wed | 8AM-4PM',schedAr:'السبت-الأربعاء | ٨ص-٤م'
        },
        'dr-fatma': {
          nameEn:'Dr. Fatma Ali',nameAr:'د. فاطمة علي',
          specEn:'Neurological Rehabilitation',specAr:'التأهيل العصبي',
          bioEn:'Dr. Fatma Ali is a neurological rehabilitation specialist with 11+ years of experience treating stroke, spinal cord injuries, and multiple sclerosis.',
          bioAr:'د. فاطمة علي متخصصة في التأهيل العصبي بخبرة أكثر من ١١ عاماً.',
          expEn:'11+ Years',expAr:'+١١ عاماً',branchEn:'Heliopolis',branchAr:'مصر الجديدة',
          langsEn:'Arabic, English',langsAr:'العربية، الإنجليزية',
          certsEn:['Neuro rehab','Stroke recovery','Spinal injuries'],certsAr:['التأهيل العصبي','السكتة الدماغية','إصابات الحبل الشوكي'],
          schedEn:'Sun-Thu | 9AM-5PM',schedAr:'الأحد-الخميس | ٩ص-٥م'
        },
        'dr-hassan': {
          nameEn:'Dr. Hassan Omar',nameAr:'د. حسن عمر',
          specEn:'Post-Surgery Rehabilitation',specAr:'التأهيل بعد الجراحة',
          bioEn:'Dr. Hassan Omar has 14+ years of experience in orthopedic post-surgery rehabilitation with expertise in joint replacements and ACL reconstruction recovery.',
          bioAr:'د. حسن عمر له خبرة أكثر من ١٤ عاماً في التأهيل بعد جراحة العظام.',
          expEn:'14+ Years',expAr:'+١٤ عاماً',branchEn:'Nasr City',branchAr:'مدينة نصر',
          langsEn:'Arabic, English, German',langsAr:'العربية، الإنجليزية، الألمانية',
          certsEn:['Orthopedic Rehab','Joint Replacement','ACL Recovery'],certsAr:['تأهيل العظام','استبدال المفاصل','تعافي ACL'],
          schedEn:'Sun-Thu | 8AM-4PM',schedAr:'الأحد-الخميس | ٨ص-٤م'
        },
        'dr-nour': {
          nameEn:'Dr. Nour El-Din',nameAr:'د. نور الدين',
          specEn:'Manual Therapy & Dry Needling',specAr:'العلاج اليدوي والإبر الجافة',
          bioEn:'Dr. Nour El-Din specializes in manual therapy and dry needling with 8+ years of experience in musculoskeletal pain management.',
          bioAr:'د. نور الدين متخصص في العلاج اليدوي والإبر الجافة بخبرة أكثر من ٨ أعوام.',
          expEn:'8+ Years',expAr:'+٨ أعوام',branchEn:'6th October',branchAr:'٦ أكتوبر',
          langsEn:'Arabic, English',langsAr:'العربية، الإنجليزية',
          certsEn:['Manual Therapy','Dry Needling','Sports Massage'],certsAr:['العلاج اليدوي','الإبر الجافة','المساج الرياضي'],
          schedEn:'Sun-Thu | 10AM-6PM',schedAr:'الأحد-الخميس | ١٠ص-٦م'
        },
        'dr-yasmin': {
          nameEn:'Dr. Yasmin Khaled',nameAr:'د. ياسمين خالد',
          specEn:'Women\'s Health Physiotherapy',specAr:'العلاج الطبيعي لصحة المرأة',
          bioEn:'Dr. Yasmin Khaled specializes in women\'s health physiotherapy including pelvic floor rehabilitation and postnatal recovery with 9+ years of experience.',
          bioAr:'د. ياسمين خالد متخصصة في العلاج الطبيعي لصحة المرأة بخبرة أكثر من ٩ أعوام.',
          expEn:'9+ Years',expAr:'+٩ أعوام',branchEn:'Heliopolis',branchAr:'مصر الجديدة',
          langsEn:'Arabic, English, French',langsAr:'العربية، الإنجليزية، الفرنسية',
          certsEn:['Pelvic Floor','Postnatal Care','Prenatal Support'],certsAr:['الحوض','الرعاية الولادة','الدعم قبل الولادة'],
          schedEn:'Sun-Tue, Thu | 9AM-5PM',schedAr:'الأحد-الثلاثاء، الخميس | ٩ص-٥م'
        },
        'dr-omar': {
          nameEn:'Dr. Omar Sherif',nameAr:'د. عمر شريف',
          specEn:'Knee & Shoulder Rehabilitation',specAr:'تأهيل الركبة والكتف',
          bioEn:'Dr. Omar Sherif has 13+ years of experience in knee and shoulder rehabilitation, specializing in sports injuries and post-operative recovery.',
          bioAr:'د. عمر شريف له خبرة أكثر من ١٣ عاماً في تأهيل الركبة والكتف.',
          expEn:'13+ Years',expAr:'+١٣ عاماً',branchEn:'Nasr City',branchAr:'مدينة نصر',
          langsEn:'Arabic, English',langsAr:'العربية، الإنجليزية',
          certsEn:['Knee Rehab','Shoulder Specialist','Arthroscopy Recovery'],certsAr:['تأهيل الركبة','تخصص الكتف','تعافي المنظار'],
          schedEn:'Sun-Thu | 9AM-5PM',schedAr:'الأحد-الخميس | ٩ص-٥م'
        },
        'dr-mariam': {
          nameEn:'Dr. Mariam Hassan',nameAr:'د. مريم حسن',
          specEn:'Pediatric Neurodevelopmental',specAr:'التطوير العصبي للأطفال',
          bioEn:'Dr. Mariam Hassan specializes in pediatric neurodevelopmental therapy with 7+ years of experience helping children with cerebral palsy and developmental delays.',
          bioAr:'د. مريم حسن متخصصة في العلاج التطوري العصبي للأطفال بخبرة أكثر من ٧ أعوام.',
          expEn:'7+ Years',expAr:'+٧ أعوام',branchEn:'6th October',branchAr:'٦ أكتوبر',
          langsEn:'Arabic, English',langsAr:'العربية، الإنجليزية',
          certsEn:['NDT Certified','Cerebral Palsy','Developmental Therapy'],certsAr:['شهادة NDT','الشلل الدماغي','العلاج التطوري'],
          schedEn:'Sun-Wed | 9AM-5PM',schedAr:'الأحد-الأربعاء | ٩ص-٥م'
        }
      };
      const d = doctors[id];
      if (!d) return;
      const isEn = Lang.current === 'en';
      modal.querySelector('.modal-name').textContent = isEn ? d.nameEn : d.nameAr;
      modal.querySelector('.modal-spec').textContent = isEn ? d.specEn : d.specAr;
      modal.querySelector('.modal-bio').textContent = isEn ? d.bioEn : d.bioAr;
      modal.querySelector('.modal-exp').textContent = isEn ? d.expEn : d.expAr;
      modal.querySelector('.modal-branch').textContent = isEn ? d.branchEn : d.branchAr;
      modal.querySelector('.modal-langs').textContent = isEn ? d.langsEn : d.langsAr;
      const certs = isEn ? d.certsEn : d.certsAr;
      modal.querySelector('.modal-certs').innerHTML = certs.map(c => `<span class="modal-tag">${c}</span>`).join('');
      modal.querySelector('.modal-schedule-text').textContent = isEn ? d.schedEn : d.schedAr;
      modal.classList.add('active');
      document.body.classList.add('no-scroll');
    });
  });
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay.active').forEach(m => {
        m.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });
}

// ===== TESTIMONIAL SLIDER =====
function initSlider() {
  const track = document.querySelector('.slider-track');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  if (!track) return;
  let current = 0;
  const total = dots.length || 3;
  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  setInterval(() => goTo(current + 1), 5000);
}

// ===== WHATSAPP BOOKING =====
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name') || '', phone = fd.get('phone') || '', whatsapp = fd.get('whatsapp') || phone;
    const age = fd.get('age') || '', gender = fd.get('gender') || '', branch = fd.get('branch') || '';
    const doctor = fd.get('doctor') || '', service = fd.get('service') || '';
    const date = fd.get('date') || '', time = fd.get('time') || '', notes = fd.get('notes') || '';
    const msg = `🏥 *New Appointment Request*\n\n👤 *Patient Name:* ${name}\n📱 *Phone:* ${phone}\n💬 *WhatsApp:* ${whatsapp}\n🎂 *Age:* ${age}\n⚧ *Gender:* ${gender}\n📍 *Branch:* ${branch}\n🩺 *Doctor:* ${doctor}\n💊 *Service:* ${service}\n📅 *Date:* ${date}\n🕐 *Time:* ${time}\n📝 *Notes:* ${notes}`;
    window.open(`https://wa.me/201208337883?text=${encodeURIComponent(msg)}`, '_blank');
    const successEl = document.getElementById('booking-success');
    if (successEl) { form.style.display = 'none'; successEl.style.display = 'block'; }
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const msg = `📬 *New Contact*\n\n👤 *Name:* ${fd.get('name')||''}\n📧 *Email:* ${fd.get('email')||''}\n📱 *Phone:* ${fd.get('phone')||''}\n📋 *Subject:* ${fd.get('subject')||''}\n💬 *Message:* ${fd.get('message')||''}`;
    window.open(`https://wa.me/201208337883?text=${encodeURIComponent(msg)}`, '_blank');
    form.reset();
  });
}

// ===== SEARCH =====
function initSearch() {
  document.querySelectorAll('.search-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const items = input.getAttribute('data-search-items');
      if (!items) return;
      document.querySelectorAll(items).forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== LOADING SCREEN =====
function initLoader() {
  const loader = document.querySelector('.loader');
  if (loader) window.addEventListener('load', () => setTimeout(() => loader.classList.add('hidden'), 500));
}

// ===== COOKIE BANNER =====
function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner || localStorage.getItem('tadawi-cookie')) return;
  setTimeout(() => banner.classList.add('visible'), 2000);
  banner.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('tadawi-cookie', '1');
    banner.classList.remove('visible');
  });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  Lang.init();
  initHeader();
  initMobileMenu();
  initReveal();
  initCounters();
  initFAQ();
  initDoctorModal();
  initSlider();
  initBookingForm();
  initContactForm();
  initSearch();
  initBackToTop();
  initCookieBanner();
  initSmoothScroll();
});
