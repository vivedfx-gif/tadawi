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
  hero_new_badge:'علاج طبيعي وتأهيل موثوق',
  hero_new_title1:'تحرك بحرية.',
  hero_new_title2:'عشان من غير ألم.',
  hero_new_desc:'نقدم أفضل خدمات العلاج الطبيعي والتأهيل في مصر بفريق من الاستشاريين المتخصصين وأحدث المعدات الطبية. هدفنا هو مساعدتك على استعادة حركتك وجودة حياتك.',
  hero_new_btn_book:'احجز موعدك',
  hero_new_btn_services:'خدماتنا',
  hero_new_btn_whatsapp:'تواصل واتساب',
  hero_trust_1:'أطباء مرخصون',
  hero_trust_2:'علاج مبني على الأدلة',
  hero_trust_3:'رعاية شخصية',
  hero_trust_4:'آلاف حالات ناجحة',
  hero_card_exp:'١٥+ سنة خبرة',
  hero_card_equip:'معدات حديثة',
  hero_card_patients:'+٥٠٠٠ مريض سعيد',
  hero_card_appoint:'موعد نفس اليوم',
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
  no_results:'لا توجد نتائج مطابقة',no_results_hint:'جرب البحث بكلمات مختلفة أو اختر فرعاً',
  modal_schedule_days:'الأحد - الخميس',modal_schedule_hours:'9:00 ص - 5:00 م',
  book_whatsapp_placeholder:'01XXXXXXXXX (اختياري)',
  choose_subject:'اختر الموضوع',
  contact_form_title:'اكتب لنا رسالة',contact_info_title:'معلومات التواصل',
  contact_address:'العنوان',contact_address_text:'شارع الأهرام، المعادي، حلوان، القاهرة',
  contact_phone_label:'الهاتف',contact_whatsapp:'واتساب',contact_email_label:'البريد الإلكتروني',
  contact_hours:'ساعات العمل',contact_hours_text:'الأحد - الخميس: 9 صباحاً - 6 مساءً',
  contact_map:'خريطة Google',contact_map_loading:'جاري تحميل الخريطة...',
  contact_name_ph:'أدخل اسمك الكامل',contact_email_ph:'أدخل بريدك الإلكتروني',
  contact_phone_ph:'أدخل رقم هاتفك',contact_message_ph:'اكتب رسالتك هنا...',
  about_founded:'سنة التأسيس',about_patients:'عدد المرضى',about_service:'خدمة العملاء',about_branches_count:'عدد الفروع',
  about_stat_founded_val:'٢٠١٠',about_stat_patients_val:'١٠,٠٠٠+',about_stat_service_val:'٩٨٪',about_stat_branches_val:'٣',
  faq_q5:'هل تحتاج إلى مساعدة شخصية',faq_a5:'نعم، يمكنك التواصل معنا عبر الواتساب أو الاتưỡng الهاتفي للحصول على المساعدة.',
  faq_q6:'هل أقدم برامج تدريب منزلي',faq_a6:'نعم، نقدم برامج تمارين منزلية مخصصة لكل مريض.',
  faq_q7:'كيف أستطيع حجز موعد',faq_a7:'يمكنك الحجز عبر موقعنا أو التواصل معنا عبر الواتساب.',
  faq_q8:'هل أقبل التأمين الطبي الشامل',faq_a8:'نعم، نتعامل مع معظم شركات التأمين الكبرى.',
  faq_q9:'هل يمكنني إلغاء موعد',faq_a9:'نعم، يمكنك إلغاء أو تعديل موعدك قبل 24 ساعة.',
  faq_q10:'كم تستمر جلسة العلاج الطبيعي',faq_a10:'تستغرق الجلسة عادة من 45 إلى 60 دقيقة.',
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
  insurance_desc:'نوقدم لك أفضل خدمات العلاج الطبيعي المدعومة من أكثر من 10 شركات تأمين رئيسية.',
  faq_subtitle:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
  dr_mohamed_name:'د. محمد إبراهيم',dr_mohamed_spec:'استشاري العلاج الطبيعي والتأهيل',dr_mohamed_branch:'مصر الجديدة',dr_mohamed_exp:'+15 عاماً',dr_mohamed_langs:'العربية، الإنجليزية',
  dr_sara_name:'د. سارة أحمد',dr_sara_spec:'أخصائية العلاج الطبيعي والتأهيل',dr_sara_branch:'مدينة نصر',dr_sara_exp:'+10 أعوام',dr_sara_langs:'العربية، الإنجليزية، الفرنسية',
  dr_ahmed_name:'د. أحمد عبدالرحمن',dr_ahmed_spec:'استشاري إصابات الملاعب',dr_ahmed_branch:'6 أكتوبر',dr_ahmed_exp:'+12 عاماً',dr_ahmed_langs:'العربية، الإنجليزية',
  dr_fatma_name:'د. فاطمة علي',dr_fatma_spec:'أخصائية العلاج اليدوي',dr_fatma_branch:'مصر الجديدة',dr_fatma_exp:'+11 عاماً',dr_fatma_langs:'العربية، الإنجليزية',
  dr_hassan_name:'د. حسن عمر',dr_hassan_spec:'متخصص العلاج اليدوي',dr_hassan_branch:'مدينة نصر',dr_hassan_exp:'+14 عاماً',dr_hassan_langs:'العربية، الإنجليزية، الألمانية',
  dr_nour_name:'د. نور الدين',dr_nour_spec:'أخصائية العلاج الطبيعي والرياضة',dr_nour_branch:'6 أكتوبر',dr_nour_exp:'+8 أعوام',dr_nour_langs:'العربية، الإنجليزية',
  dr_yasmin_name:'د. ياسمين خالد',dr_yasmin_spec:'أخصائية العلاج النسائي',dr_yasmin_branch:'مصر الجديدة',dr_yasmin_exp:'+9 أعوام',dr_yasmin_langs:'العربية، الإنجليزية، الفرنسية',
  dr_omar_name:'د. عمر شريف',dr_omar_spec:'متخصص العلاج المائي',dr_omar_branch:'مدينة نصر',dr_omar_exp:'+13 عاماً',dr_omar_langs:'العربية، الإنجليزية',
  dr_mariam_name:'د. مريم حسن',dr_mariam_spec:'أخصائية العلاج الطبيعي والتمارين',dr_mariam_branch:'6 أكتوبر',dr_mariam_exp:'+7 أعوام',dr_mariam_langs:'العربية، الإنجليزية',
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
  svc_women:'صحة المرأة',svc_women_desc:'رعاية متخصصة لصحة المرأة وال产后 التأهيل',
  doctors_title_accent:'المتخصصون',modal_experience:'الخبرة',
  book_breadcrumb:'احجز موعدك',book_desc:'احجز موعدك في عيادة تداوي للحصول على أفضل علاج طبيعي',
  book_form_title:'بيانات الحجز',book_form_desc:'أكمل البيانات أدناه لحجز موعدك',
  book_name_placeholder:'أدخل اسمك الكامل',book_age_placeholder:'أدخل عمرك',
  book_select:'اختر',book_branch_placeholder:'اختر الفرع',book_doctor_placeholder:'اختر الطبيب',
  book_service_placeholder:'اختر الخدمة',book_notes_placeholder:'أي ملاحظات إضافية',
  success_btn_wa:'تواصل عبر الواتساب',
  footer_service_1:'علاج آلام الظهر',footer_service_2:'علاج آلام الرقبة',
  footer_service_3:'علاج إصابات الملاعب',footer_service_4:'التأهيل بعد الجراحة',
  footer_service_5:'التأهيل العصبي',footer_service_6:'العلاج الطبيعي للأطفال',
  footer_contact_title:'تواصل معنا',footer_address:'شارع رمسيس، وسط البلد، القاهرة، مصر',
  footer_privacy:'سياسة الخصوصية',footer_terms:'شروط الاستخدام',cookie_privacy:'سياسة الخصوصية',
  faq_breadcrumb:'الأسئلة الشائعة',faq_hero_desc:'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا',
  about_title:'من نحن',about_title_accent:'تداوي',
  about_subtitle:'تعرف على قصتنا ورؤيتنا وقيمنا',
  about_story_1:'تأسست عيادة تداوي في عام ٢٠١٠، ونمت من عيادة صغيرة إلى واحدة من أكبر مراكز العلاج الطبيعي والتأهيل في مصر. بدأت رحلتنا بمهمة بسيطة: تقديم رعاية تأهيلية عالمية المستوى يمكن الوصول إليها لكل مريض يدخل أبوابنا.',
  about_story_2:'اليوم، ندير ثلاثة فروع متطورة في القاهرة، يقودها فريق من الاستشاريين المدربين دولياً المتحمسين لمساعدة المرضى على استعادة حركتهم وجودة حياتهم.',
  about_mission_title:'مهمتنا',about_mission_desc:'تقديم خدمات استثنائية في العلاج الطبيعي والتأهيل تمكّن المرضى من تحقيق أعلى مستوى من الاستقلالية الوظيفية وجودة الحياة.',
  about_vision_title:'رؤيتنا',about_vision_desc:'أن نكون مركز العلاج الطبيعي والتأهيل الرائد في الشرق الأوسط.',
  about_values_title:'قيمنا',about_values_desc:'المبادئ التي نعمل بها كل يوم',
  about_value_1_title:'التميز في الرعاية',about_value_1_desc:'نسعى لأعلى المعايير في كل جانب من جوانب رعاية المرضى.',
  about_value_2_title:'مركّز على المريض',about_value_2_desc:'كل خطة علاج مصممة خصيصاً لاحتياجات مرضانا.',
  about_value_3_title:'الابتكار',about_value_3_desc:'نتبنى باستمرار أحدث التقنيات والإجراءات.',
  about_value_4_title:'الرحمة',about_value_4_desc:'نتعامل مع كل مريض بالتعاطف والكرامة والاحترام.',
  about_stats_title:'تداوي بالأرقام',
  section_description:'الوصف',section_benefits:'المزايا الرئيسية',
  section_process:'خطوات العلاج',section_faq:'الأسئلة الشائعة',
  section_related:'خدمات ذات صلة'
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
  hero_new_badge:'Trusted Physical Therapy & Rehabilitation',
  hero_new_title1:'Move Better.',
  hero_new_title2:'Live Pain Free.',
  hero_new_desc:'We provide world-class physical therapy and rehabilitation services in Egypt with a team of specialist consultants and the latest medical equipment. Our goal is to help you restore your movement and quality of life.',
  hero_new_btn_book:'Book Appointment',
  hero_new_btn_services:'Our Services',
  hero_new_btn_whatsapp:'WhatsApp Us',
  hero_trust_1:'Licensed Specialists',
  hero_trust_2:'Evidence-Based Treatment',
  hero_trust_3:'Personalized Care',
  hero_trust_4:'Thousands of Successes',
  hero_card_exp:'15+ Years Experience',
  hero_card_equip:'Modern Equipment',
  hero_card_patients:'5,000+ Happy Patients',
  hero_card_appoint:'Same-Day Appointments',
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
  no_results:'No matching results',no_results_hint:'Try searching with different words or select a branch',
  modal_schedule_days:'Sun - Thu',modal_schedule_hours:'9:00 AM - 5:00 PM',
  book_whatsapp_placeholder:'01XXXXXXXXX (optional)',
  choose_subject:'Choose a subject',
  contact_form_title:'Write us a message',contact_info_title:'Contact Information',
  contact_address:'Address',contact_address_text:'El Ahram Street, Maadi, Helwan, Cairo',
  contact_phone_label:'Phone',contact_whatsapp:'WhatsApp',contact_email_label:'Email',
  contact_hours:'Working Hours',contact_hours_text:'Sun - Thu: 9 AM - 6 PM',
  contact_map:'Google Map',contact_map_loading:'Loading the map...',
  contact_name_ph:'Enter your full name',contact_email_ph:'Enter your email',
  contact_phone_ph:'Enter your phone number',contact_message_ph:'Write your message here...',
  about_founded:'Year Founded',about_patients:'Patients Served',about_service:'Customer Service',about_branches_count:'Branches',
  about_stat_founded_val:'2010',about_stat_patients_val:'10,000+',about_stat_service_val:'98%',about_stat_branches_val:'3',
  faq_q5:'Do you need personal assistance?',faq_a5:'Yes, you can reach us via WhatsApp or phone for assistance.',
  faq_q6:'Do you offer home training programs?',faq_a6:'Yes, we provide customized home exercise programs for each patient.',
  faq_q7:'How can I book an appointment?',faq_a7:'You can book through our website or contact us via WhatsApp.',
  faq_q8:'Do you accept comprehensive medical insurance?',faq_a8:'Yes, we work with most major insurance companies.',
  faq_q9:'Can I cancel an appointment?',faq_a9:'Yes, you can cancel or reschedule your appointment 24 hours in advance.',
  faq_q10:'How long does a physical therapy session last?',faq_a10:'Sessions typically last 45 to 60 minutes.',
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
  insurance_desc:'We offer world-class physical therapy services supported by over 10 major insurance companies.',
  faq_subtitle:'Here are some common questions you may find helpful',
  dr_mohamed_name:'Dr. Mohamed Ibrahim',dr_mohamed_spec:'Consultant in Physical Therapy & Rehabilitation',dr_mohamed_branch:'Heliopolis',dr_mohamed_exp:'+15 Years',dr_mohamed_langs:'Arabic, English',
  dr_sara_name:'Dr. Sara Ahmed',dr_sara_spec:'Physical Therapy Specialist',dr_sara_branch:'Nasr City',dr_sara_exp:'+10 Years',dr_sara_langs:'Arabic, English, French',
  dr_ahmed_name:'Dr. Ahmed Abdelrahman',dr_ahmed_spec:'Sports Injuries Consultant',dr_ahmed_branch:'6th October',dr_ahmed_exp:'+12 Years',dr_ahmed_langs:'Arabic, English',
  dr_fatma_name:'Dr. Fatma Ali',dr_fatma_spec:'Manual Therapy Specialist',dr_fatma_branch:'Heliopolis',dr_fatma_exp:'+11 Years',dr_fatma_langs:'Arabic, English',
  dr_hassan_name:'Dr. Hassan Omar',dr_hassan_spec:'Manual Therapy Specialist',dr_hassan_branch:'Nasr City',dr_hassan_exp:'+14 Years',dr_hassan_langs:'Arabic, English, German',
  dr_nour_name:'Dr. Nour El-Din',dr_nour_spec:'PT & Sports Specialist',dr_nour_branch:'6th October',dr_nour_exp:'+8 Years',dr_nour_langs:'Arabic, English',
  dr_yasmin_name:'Dr. Yasmin Khaled',dr_yasmin_spec:'Women\'s Health Specialist',dr_yasmin_branch:'Heliopolis',dr_yasmin_exp:'+9 Years',dr_yasmin_langs:'Arabic, English, French',
  dr_omar_name:'Dr. Omar Sherif',dr_omar_spec:'Aquatic Therapy Specialist',dr_omar_branch:'Nasr City',dr_omar_exp:'+13 Years',dr_omar_langs:'Arabic, English',
  dr_mariam_name:'Dr. Mariam Hassan',dr_mariam_spec:'PT & Exercise Specialist',dr_mariam_branch:'6th October',dr_mariam_exp:'+7 Years',dr_mariam_langs:'Arabic, English',
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
  svc_women:'Women\'s Health',svc_women_desc:'Specialized physiotherapy for women\'s health',
  doctors_title_accent:'Specialists',modal_experience:'Experience',
  book_breadcrumb:'Book Appointment',book_desc:'Book your appointment at Tadawi Clinic for the best physical therapy',
  book_form_title:'Booking Details',book_form_desc:'Complete the form below to book your appointment',
  book_name_placeholder:'Enter your full name',book_age_placeholder:'Enter your age',
  book_select:'Select',book_branch_placeholder:'Select Branch',book_doctor_placeholder:'Select Doctor',
  book_service_placeholder:'Select Service',book_notes_placeholder:'Any additional notes',
  success_btn_wa:'Contact via WhatsApp',
  footer_service_1:'Back Pain Treatment',footer_service_2:'Neck Pain Treatment',
  footer_service_3:'Sports Injuries',footer_service_4:'Post-Surgery Rehab',
  footer_service_5:'Neurological Rehab',footer_service_6:'Pediatric Therapy',
  footer_contact_title:'Contact Us',footer_address:'Ramses Street, Downtown, Cairo, Egypt',
  footer_privacy:'Privacy Policy',footer_terms:'Terms of Use',cookie_privacy:'Privacy Policy',
  faq_breadcrumb:'FAQ',faq_hero_desc:'Answers to the most common questions about our services',
  about_title:'About Us',about_title_accent:'Tadawi',
  about_subtitle:'Learn about our story, vision, and values',
  about_story_1:'Founded in 2010, Tadawi Clinic has grown from a single practice to one of Egypt\'s leading physical therapy and rehabilitation centers. Our journey began with a simple mission: to provide accessible, world-class rehabilitation care.',
  about_story_2:'Today, we operate three state-of-the-art branches across Cairo, staffed by internationally trained specialists passionate about helping patients regain their mobility and quality of life.',
  about_mission_title:'Our Mission',about_mission_desc:'To provide exceptional physical therapy and rehabilitation services that empower patients to achieve their highest level of functional independence.',
  about_vision_title:'Our Vision',about_vision_desc:'To be the leading physical therapy and rehabilitation center in the Middle East.',
  about_values_title:'Our Values',about_values_desc:'The principles we live by every day',
  about_value_1_title:'Excellence in Care',about_value_1_desc:'We strive for the highest standards in every aspect of patient care.',
  about_value_2_title:'Patient-Centered',about_value_2_desc:'Every treatment plan is tailored to the individual needs of our patients.',
  about_value_3_title:'Innovation',about_value_3_desc:'We continuously adopt the latest techniques and technologies.',
  about_value_4_title:'Compassion',about_value_4_desc:'We treat every patient with empathy, dignity, and respect.',
  about_stats_title:'Tadawi in Numbers',
  section_description:'Description',section_benefits:'Key Benefits',
  section_process:'Treatment Steps',section_faq:'FAQ',
  section_related:'Related Services'
};

// ===== PAGE META TRANSLATIONS =====
const PAGE_META = {
  'home': { titleAr:'تداوي | أفضل علاج طبيعي', titleEn:'Tadawi | Best Physical Therapy', descAr:'عيادة العلاج الطبيعي والتأهيل الرائدة في مصر', descEn:'Leading physical therapy and rehabilitation clinic in Egypt' },
  'about': { titleAr:'تداوي | من نحن', titleEn:'Tadawi | About Us', descAr:'تعرف على عيادة تداوي', descEn:'Learn about Tadawi Clinic' },
  'services': { titleAr:'تداوي | خدماتنا', titleEn:'Tadawi | Our Services', descAr:'خدمات العلاج الطبيعي والتأهيل', descEn:'Physical therapy and rehabilitation services' },
  'doctors': { titleAr:'تداوي | أطباؤنا', titleEn:'Tadawi | Our Doctors', descAr:'أطباؤنا المتخصصون', descEn:'Our specialist doctors' },
  'branches': { titleAr:'تداوي | فروعنا', titleEn:'Tadawi | Our Branches', descAr:'فروعنا في القاهرة', descEn:'Our branches across Cairo' },
  'articles': { titleAr:'تداوي | المقالات', titleEn:'Tadawi | Articles', descAr:'مقالات العلاج الطبيعي', descEn:'Physical therapy articles' },
  'faq': { titleAr:'تداوي | الأسئلة الشائعة', titleEn:'Tadawi | FAQ', descAr:'الأسئلة الشائعة', descEn:'Frequently asked questions' },
  'contact': { titleAr:'تداوي | تواصل معنا', titleEn:'Tadawi | Contact Us', descAr:'تواصل معنا', descEn:'Get in touch with us' },
  'book': { titleAr:'تداوي | احجز موعدك', titleEn:'Tadawi | Book Appointment', descAr:'احجز موعدك الآن', descEn:'Book your appointment now' },
  'back-pain': { titleAr:'تداوي | علاج آلام الظهر', titleEn:'Tadawi | Back Pain Treatment', descAr:'علاج متخصص لآلام الظهر', descEn:'Specialized back pain treatment' },
  'neck-pain': { titleAr:'تداوي | علاج آلام الرقبة', titleEn:'Tadawi | Neck Pain Treatment', descAr:'علاج متخصص لآلام الرقبة', descEn:'Specialized neck pain treatment' },
  'sports-injuries': { titleAr:'تداوي | إصابات الرياضيين', titleEn:'Tadawi | Sports Injuries', descAr:'تأهيل شامل لإصابات الرياضيين', descEn:'Comprehensive sports injury rehabilitation' },
  'post-surgery-rehab': { titleAr:'تداوي | التأهيل بعد الجراحة', titleEn:'Tadawi | Post-Surgery Rehab', descAr:'برامج تأهيل بعد الجراحة', descEn:'Post-surgery rehabilitation programs' },
  'neuro-rehabilitation': { titleAr:'تداوي | التأهيل العصبي', titleEn:'Tadawi | Neurological Rehab', descAr:'علاج متخصص للحالات العصبية', descEn:'Specialized neurological treatment' },
  'pediatric-therapy': { titleAr:'تداوي | العلاج الطبيعي للأطفال', titleEn:'Tadawi | Pediatric Therapy', descAr:'رعاية متخصصة للأطفال', descEn:'Specialized pediatric care' },
  'shoulder-pain': { titleAr:'تداوي | آلام الكتف', titleEn:'Tadawi | Shoulder Pain', descAr:'علاج متخصص لآلام الكتف', descEn:'Specialized shoulder pain treatment' },
  'knee-pain': { titleAr:'تداوي | آلام الركبة', titleEn:'Tadawi | Knee Pain', descAr:'علاج متخصص لآلام الركبة', descEn:'Specialized knee pain treatment' },
  'sciatica': { titleAr:'تداوي | العرق النسليبي', titleEn:'Tadawi | Sciatica', descAr:'علاج متخصص لآلام العرق النسليبي', descEn:'Specialized sciatica treatment' },
  'disc-problems': { titleAr:'تداوي | مشاكل الأقراص الفقري', titleEn:'Tadawi | Disc Problems', descAr:'علاج مشاكل الأقراص الفقري', descEn:'Spinal disc treatment' },
  'acl-rehabilitation': { titleAr:'تداوي | تأهيل الرباط الصليبي', titleEn:'Tadawi | ACL Rehabilitation', descAr:'تأهيل شامل بعد إصابات ACL', descEn:'Complete ACL injury rehabilitation' },
  'dry-needling': { titleAr:'تداوي | العلاج بالإبر الجافة', titleEn:'Tadawi | Dry Needling', descAr:'تخفيف آلام العضلات بالإبر الجافة', descEn:'Dry needling for muscle pain relief' },
  'shockwave-therapy': { titleAr:'تداوي | العلاج بالموجات الصادمة', titleEn:'Tadawi | Shockwave Therapy', descAr:'علاج غير جراحي بالموجات الصادمة', descEn:'Non-invasive shockwave treatment' },
  'manual-therapy': { titleAr:'تداوي | العلاج اليدوي', titleEn:'Tadawi | Manual Therapy', descAr:'تقنيات يدوية متقدمة', descEn:'Advanced manual therapy techniques' },
  'womens-health': { titleAr:'تداوي | صحة المرأة', titleEn:'Tadawi | Women\'s Health', descAr:'رعاية متخصصة لصحة المرأة', descEn:'Specialized women\'s health care' }
};

// ===== FOOTER TRANSLATIONS =====
const FOOTER_TEXTS = {
  'address': { ar:'شارع رمسيس، وسط البلد، القاهرة، مصر', en:'Ramses Street, Downtown, Cairo, Egypt' },
  'privacy': { ar:'سياسة الخصوصية', en:'Privacy Policy' },
  'terms': { ar:'شروط الاستخدام', en:'Terms of Use' },
  'accept': { ar:'موافق', en:'Accept' }
};

// ===== SELECT OPTIONS TRANSLATIONS =====
const SELECT_OPTIONS = {
  'branches': {
    'heli': { ar:'مصر الجديدة', en:'Heliopolis' },
    'nasr': { ar:'مدينة نصر', en:'Nasr City' },
    'oct': { ar:'6 أكتوبر', en:'6th October' }
  },
  'doctors': {
    'mohamed': { ar:'د. محمد أشرف', en:'Dr. Mohamed Ashraf' },
    'sara': { ar:'د. سارة حسن', en:'Dr. Sara Hassan' },
    'ahmed': { ar:'د. أحمد منصور', en:'Dr. Ahmed Mansour' },
    'fatma': { ar:'د. فاطمة علي', en:'Dr. Fatma Ali' },
    'hassan': { ar:'د. حسن عمر', en:'Dr. Hassan Omar' },
    'nour': { ar:'د. نور الدين', en:'Dr. Nour El-Din' },
    'yasmin': { ar:'د. ياسمين خالد', en:'Dr. Yasmin Khaled' },
    'omar': { ar:'د. عمر شريف', en:'Dr. Omar Sherif' },
    'mariam': { ar:'د. مريم حسن', en:'Dr. Mariam Hassan' }
  },
  'services': {
    'back': { ar:'آلام الظهر', en:'Back Pain' },
    'neck': { ar:'آلام الرقبة', en:'Neck Pain' },
    'sports': { ar:'إصابات الملاعب', en:'Sports Injuries' },
    'post': { ar:'التأهيل بعد الجراحة', en:'Post-Surgery Rehab' },
    'neuro': { ar:'التأهيل العصبي', en:'Neuro Rehab' },
    'pedi': { ar:'العلاج الطبيعي للأطفال', en:'Pediatric Therapy' },
    'shoulder': { ar:'آلام الكتف', en:'Shoulder Pain' },
    'knee': { ar:'آلام الركبة', en:'Knee Pain' },
    'sciatica': { ar:'التهاب العصب الوركي', en:'Sciatica' },
    'disc': { ar:'مشاكل الفقرات الغضروفية', en:'Disc Problems' },
    'acl': { ar:'تأهيل الرباط الصليبي', en:'ACL Rehabilitation' },
    'dry': { ar:'الحقن الجاف', en:'Dry Needling' },
    'shock': { ar:'علاج الأمواج الصادمة', en:'Shockwave Therapy' },
    'manual': { ar:'العلاج اليدوي', en:'Manual Therapy' },
    'women': { ar:'صحة المرأة', en:'Women\'s Health' }
  },
  'contact_subjects': {
    'general': { ar:'استفسار عام', en:'General Inquiry' },
    'appointment': { ar:'حجز موعد', en:'Book Appointment' },
    'insurance': { ar:'تأمين طبي', en:'Medical Insurance' },
    'feedback': { ar:'تقييم الخدمة', en:'Service Feedback' }
  }
};

// ===== SERVICE PAGE CONTENT TRANSLATIONS =====
const SVC = {
  'back-pain': {
    breadcrumb:'{breadcrumb_home}»{breadcrumb_services}»{breadcrumb_current}',
    hero_title:'علاج آلام الظهر',hero_sub:'علاج متخصص لآلام الظهر والعمود الفقري بأحدث التقنيات والأساليب العلمية الحديثة. نقدم خطة علاج مخصصة لكل مريض لتحقيق أفضل النتائج.',
    desc_title:'علاج آلام الظهر فعال',desc_p1:'نقدم علاج متخصص وشامل لآلام الظهر العلوية والسفلى، سواء كانت بسبب إصابات الملاعب، أو التهاب القرص، أو آلام الأسفلب. نستخدم أحدث التقنيات العلمية المثبتة فعاليتها.',
    desc_p2:'فريقنا من الاستشاريين المتخصصين يقوم بتقييم شامل ودقيق لحالتك ويضع خطة علاجية مخصصة تشمل العلاج بالتمارين، العلاج اليدوي، والتقنيات الحديثة الأخرى.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد لآلام الظهر من خلال تقنيات العلاج المتقدمة والمثبتة علمياً.',
    b2_title:'تحسين الحركة',b2_desc:'استعادة مرونة العمود الفقري وتحسين نطاق الحركة اليومية بشكل ملحوظ.',
    b3_title:'تعزيز عضلات CORE',b3_desc:'تقوية عضلات البطن والظهر الداعمة لتقليل الضغط على العمود الفقري ومنع تكرار الإصابات.',
    b4_title:'تحسين الوضعية',b4_desc:'تعليم تقنيات جعل الوضعية الصحيحة والروتين اليومي للحفاظ على صحة الظهر.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق لحالة الظهر وتحديد سبب الألم بدقة.',
    step2:'التشخيص الدقيق',step2d:'تشخيص شامل يعتمد على الفحص السريري وأحدث أساليب التصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة علاجية مخصصة تشمل تقنيات العلاج والتمارين المناسبة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق خطة العلاج بشكل تدريجي مع مراقبة التقدم باستمرار.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر للنتائج وتعديل خطة العلاج حسب الحاجة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هي أسباب آلام الظهر الشائعة؟',faq1_d:'تشمل الأسباب الشائعة سوء الوضعية، إصابات الملاعب، التهاب القرص، والتوتر العضلي.',
    faq2_q:'كم تستغرق مدة العلاج؟',faq2_d:'تختلف مدة العلاج حسب الحالة، عادة من 4 إلى 8 أسابيع للحالات المزمنة.',
    faq3_q:'هل العلاج مؤلم؟',faq3_d:'العلاج غير مؤلم في الغالب، قد تشعر بانزعاج خفيف أثناء الجلسة يختفي بعدها.',
    faq4_q:'هل سأحتاج إلى جلسات متابعة؟',faq4_d:'نعم، نوصي بجلسات متابعة دورية للحفاظ على النتائج ومنع تكرار الإصابات.',
    related_sub:'قد تهمك أيضاً',
    rel1:'آلام الرقبة',rel1d:'علاج متخصص لآلام الرقبة والصداع الناتج عنها.',
    rel2:'إصابات الملاعب',rel2d:'تأهيل شامل لإصابات الرياضيين وإعادة الأداء.',
    rel3:'التأهيل بعد الجراحة',rel3d:'برامج تأهيل متكاملة بعد العمليات الجراحية.'
  },
  'neck-pain': {
    hero_title:'علاج آلام الرقبة',hero_sub:'حلول فعالة لآلام الرقبة والصداع الناتج عنها بفريق متخصص وأحدث التقنيات.',
    desc_title:'علاج آلام الرقبة فعال',desc_p1:'نقدم علاج متخصص لآلام الرقبة سواء كانت بسبب التهاب الفقرات العنقية، أو مشاكل الأعصاب، أو التوتر العضلي.',
    desc_p2:'يستخدم فريقنا تقنيات العلاج الحديثة مثل العلاج اليدوي والتمارين العلاجية لتخفيف الألم وتحسين الحركة.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد لآلام الرقبة والصدر الناتج عنها.',
    b2_title:'تحسين المرونة',b2_desc:'استعادة مرونة الرقبة وتحسين نطاق الحركة بشكل ملحوظ.',
    b3_title:'تقوية العضلات',b3_desc:'تقوية عضلات الرقبة والكتف لتقليل الضغط ومنع تكرار الإصابات.',
    b4_title:'تحسين الوضعية',b4_desc:'تعليم تقنيات جعل الوضعية الصحيحة للحفاظ على صحة الرقبة.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق لحالة الرقبة.',
    step2:'التشخيص الدقيق',step2d:'تشخيص شامل يعتمد على الفحص السريري والتصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة علاجية مخصصة تشمل تقنيات العلاج المناسبة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق خطة العلاج بشكل تدريجي مع مراقبة التقدم.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر للنتائج وتعديل خطة العلاج حسب الحاجة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هي أسباب آلام الرقبة الشائعة؟',faq1_d:'تشمل الأسباب سوء الوضعية، التوتر العضلي، التهاب الفقرات العنقية.',
    faq2_q:'كم تستغرق مدة العلاج؟',faq2_d:'تختلف حسب الحالة، عادة من 4 إلى 6 أسابيع.',
    faq3_q:'هل العلاج مؤلم؟',faq3_d:'العلاج غير مؤلم في الغالب، قد تشعر بانزعاج خفيف يختفي بعدها.',
    faq4_q:'هل يمكنني العودة للعمل أثناء العلاج؟',faq4_d:'نعم، في الغالب يمكنكم ممارسة أنشطتكم اليومية مع بعض التعديلات.',
    related_sub:'قد تهمك أيضاً',
    rel1:'آلام الظهر',rel1d:'علاج متخصص لآلام الظهر والعمود الفقري.',
    rel2:'إصابات الملاعب',rel2d:'تأهيل شامل لإصابات الرياضيين.',
    rel3:'التأهيل بعد الجراحة',rel3d:'برامج تأهيل متكاملة بعد العمليات الجراحية.'
  },
  'sports-injuries': {
    hero_title:'إصابات الرياضيين',hero_sub:'تأهيل شامل لإصابات الرياضيين وإعادة الأداء الرياضي بأحدث التقنيات.',
    desc_title:'العلاج الفعال لإصابات الرياضيين',desc_p1:'نقدم خدمات تأهيل شاملة لإصابات الرياضيين، سواء كانت إصابات حادة أو مزمنة، مع خبرة واسعة في التعامل مع مختلف أنواع الإصابات الرياضية.',
    desc_p2:'فريقنا من المتخصصين في الطب الرياضي يوفر خطة تأهيل مخصصة تشمل العلاج بالتمارين، العلاج اليدوي، وتقنيات التعافي السريع.',
    b1_title:'تعافي سريع',b1_desc:'برامج تأهيل مكثفة تهدف لعودة المريض للنشاط الرياضي في أسرع وقت ممكن.',
    b2_title:'منع الإصابات',b2d:'تحليل الحركة والوقاية من الإصابات المستقبلية من خلال تمارين مخصصة.',
    b3_title:'تحسين الأداء',b3_desc:'برامج متقدمة لتحسين الأداء الرياضي والقوة واللياقة البدنية.',
    b4_title:'رعاية شاملة',b4_desc:'متابعة مستمرة من فريق متخصص طوال فترة التعافي والعودة للنشاط.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل لحالة الإصابة وتحديد الخطة العلاجية المناسبة.',
    step2:'التشخيص الدقيق',step2d:'تشخيص دقيق يعتمد على الفحص السريري والتصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة تأهيل مخصصة تشمل التمارين والتقنيات المناسبة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق الخطة بشكل تدريجي مع مراقبة التقدم.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر للنتائج والعودة الآمنة للنشاط الرياضي.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'كم تستغرق فترة التعافي من إصابة الملاعب؟',faq1_d:'تختلف حسب نوع الإصابة، عادة من 2 إلى 12 أسبوعاً.',
    faq2_q:'هل يمكنني العودة للرياضة بعد العلاج؟',faq2_d:'نعم، نهدف لعودة آمنة للنشاط الرياضي مع خطة وقائية.',
    faq3_q:'هل العلاج مناسب لجميع الرياضيين؟',faq3_d:'نعم، نقدم برامج مخصصة لجميع مستويات النشاط الرياضي.',
    faq4_q:'هل أحتاج إلى إحالة من طبيب رياضي؟',faq4_d:'يمكنكم الحجز مباشرة مع أخصائي التأهيل الرياضي.',
    related_sub:'قد تهمك أيضاً',
    rel1:'آلام الكتف',rel1d:'علاج متخصص لآلام الكتف والتيبس.',
    rel2:'تأهيل الرباط الصليبي',rel2d:'برامج تأهيل متخصصة بعد إصابات ACL.',
    rel3:'العلاج بالموجات الصادمة',rel3d:'علاج غير جراحي بالموجات الصادمة المركزة.'
  },
  'post-surgery-rehab': {
    hero_title:'التأهيل بعد الجراحة',hero_sub:'برامج تأهيل متكاملة بعد العمليات الجراحية مع فريق متخصص.',
    desc_title:'التأهيل بعد الجراحة فعال',desc_p1:'نقدم برامج تأهيل شاملة بعد مختلف العمليات الجراحية، بما في ذلك عمليات استبدال المفاصل، وإصلاح الأربطة، وجراحة العمود الفقري.',
    desc_p2:'فريقنا من الاستشاريين المتخصصين يرافقك في رحلة التعافي من خلال خطة علاج مخصصة ومتابعة مستمرة.',
    b1_title:'تعافي أسرع',b1_desc:'برامج تأهيل مكثفة تهدف لتسريع عملية التعافي بعد الجراحة.',
    b2_title:'استعادة الحركة',b2_desc:'استعادة نطاق الحركة والوظيفة الطبيعية للمفصل أو المنطقة المصابة.',
    b3_title:'تقوية العضلات',b3_desc:'تقوية تدريجية للعضلات المحيطة بالمنطقة المصابة.',
    b4_title:'منع المضاعفات',b4_desc:'مراقبة مستمرة ومنع أي مضاعفات محتملة أثناء فترة التعافي.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل لحالة ما بعد الجراحة وتحديد الخطة العلاجية.',
    step2:'خطة التعافي',step2d:'وضع خطة تعافي مخصصة تتناسب مع نوع الجراحة وحالة المريض.',
    step3:'الجلسات العلاجية',step3d:'جلسات علاجية منتظمة تشمل التمارين والتقنيات المناسبة.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للتقدم وتعديل الخطة حسب الحاجة.',
    step5:'العودة للنشاط',step5d:'إرشاد المريض للعودة التدريجية للنشاط اليومي والرياضي.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'متى أبدأ العلاج بعد الجراحة؟',faq1_d:'عادة خلال 24-48 ساعة بعد الجراحة، حسب توصيات الجراح.',
    faq2_q:'كم تستغرق فترة التعافي؟',faq2_d:'تختلف حسب نوع الجراحة، عادة من 6 إلى 12 أسبوعاً.',
    faq3_q:'هل العلاج بعد الجراحة مؤلم؟',faq3_d:'نستخدم تقنيات تخفيف الألم المناسبة لضمان راحة المريض.',
    faq4_q:'هل أحتاج إلى تمارين منزلي؟',faq4_d:'نعم، سنقدم برنامج تمارين منزلي يكمّل جلسات العلاج.',
    related_sub:'قد تهمك أيضاً',
    rel1:'علاج آلام الركبة',rel1d:'حلول متقدمة لآلام الركبة والغضاريف.',
    rel2:'تأهيل الرباط الصليبي',rel2d:'برامج تأهيل متخصصة بعد إصابات ACL.',
    rel3:'علاج آلام الظهر',rel3d:'علاج متخصص لآلام الظهر والعمود الفقري.'
  },
  'neuro-rehabilitation': {
    hero_title:'التأهيل العصبي',hero_sub:'علاج متخصص للحالات العصبية والسكتة الدماغية مع فريق متخصص.',
    desc_title:'التأهيل العصبي الفعال',desc_p1:'نقدم برامج تأهيل عصبي شاملة للحالات المختلفة مثل السكتة الدماغية، إصابات الحبل الشوكي، التصلب المتعدد،及其他 الأمراض العصبية.',
    desc_p2:'فريقنا المتخصص في التأهيل العصبي يستخدم أحدث التقنيات لمساعدة المرضى على استعادة قدراتهم الحركية والوظيفية.',
    b1_title:'استعادة الحركة',b1_desc:'استعادة القدرات الحركية من خلال تمارين علاجية متخصصة ومثبتة.',
    b2_title:'تحسين التوازن',b2_desc:'تمارين متخصصة لتحسين التوازن والتنسيق الحركي.',
    b3_title:'التمارين الوظيفية',b3_desc:'تدريب على الأنشطة اليومية لاستعادة الاستقلالية.',
    b4_title:'دعم عائلي',b4_desc:'تدريب الأسرة على دعم المريض في المنزل.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل للقدرات الحركية والوظيفية.',
    step2:'خطة العلاج',step2d:'وضع خطة تأهيل مخصصة تتناسب مع احتياجات المريض.',
    step3:'الجلسات العلاجية',step3d:'جلسات منتظمة تشمل تمارين علاجية وتقنيات متنوعة.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للتقدم وتعديل الخطة.',
    step5:'الرعاية المستمرة',step5d:'إرشاد المريض والأسرة على الاستمرار في المنزل.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'متى أبدأ التأهيل العصبي؟',faq1_d:'بمجرد استقرار الحالة الطبية، يُنصح بالبدء في التأهيل في أسرع وقت.',
    faq2_q:'كم تستغرق مدة التأهيل؟',faq2_d:'تختلف حسب الحالة، قد تمتد لعدة أشهر.',
    faq3_q:'هل التأهيل العصبي فعال؟',faq3_d:'نعم، الدراسات العلمية تثبت فعالية التأهيل العصبي المبكر.',
    faq4_q:'هل يمكن تحسين الحالة بعد التأهيل؟',faq4_d:'نعم، يمكن تحقيق تحسن ملحوظ في القدرات الحركية والوظيفية.',
    related_sub:'قد تهمك أيضاً',
    rel1:'العلاج الطبيعي للأطفال',rel1d:'رعاية متخصصة للأطفال وتأهيل النمو.',
    rel2:'التأهيل بعد الجراحة',rel2d:'برامج تأهيل متكاملة بعد العمليات الجراحية.',
    rel3:'العلاج اليدوي',rel3d:'تقنيات يدوية متقدمة لتحرير المفاصل والعضلات.'
  },
  'pediatric-therapy': {
    hero_title:'العلاج الطبيعي للأطفال',hero_sub:'رعاية متخصصة للأطفال وتأهيل النمو مع فريق متخصص ومحترم.',
    desc_title:'العلاج الطبيعي للأطفال فعال',desc_p1:'نقدم خدمات علاج طبيعي متخصصة للأطفال من جميع الأعمار، بما في ذلك الأطفال ذوي التأخر النمائي، الشلل الدماغي، والمشاكل الحركية المختلفة.',
    desc_p2:'فريقنا المتخصص في العلاج الطبيعي للأطفال يستخدم أحدث الأساليب العلمية المثبتة فعاليتها في تطوير قدرات الأطفال الحركية.',
    b1_title:'تحسين النمو',b1_desc:'مساعدة الأطفال على تحقيق مراحل النمو الطبيعية بسرعة وأمان.',
    b2_title:'تقوية الحركة',b2_desc:'تحسين المهارات الحركية الكبرى والصغرى للأطفال.',
    b3_title:'الدعم السلوكي',b3_desc:'التعامل مع المشاكل السلوكية المرتبطة بالتأخر الحركي.',
    b4_title:'تدريب الأسرة',b4_desc:'تدريب الأسرة على تمارين منزلية لدعم تقدم الطفل.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل لمستوى النمو والقدرات الحركية للطفل.',
    step2:'خطة العلاج',step2d:'وضع خطة علاجية مخصصة تتناسب مع عمر الطفل واحتياجاته.',
    step3:'الجلسات العلاجية',step3d:'جلسات ممتعة وتفاعلية تجمع بين اللعب والعلاج.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للتقدم وتعديل الخطة.',
    step5:'الدعم المستمر',step5d:'إرشاد الأسرة على دعم الطفل في المنزل.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'في أي عمر أبدأ العلاج؟',faq1_d:'كلما بدأ العلاج مبكراً كانت النتائج أفضل. يُنصح بالبدء في مرحلة مبكرة.',
    faq2_q:'كم تستغرق كل جلسة؟',faq2_d:'تستغرق الجلسة عادة من 30 إلى 45 دقيقة.',
    faq3_q:'هل العلاج ممتع للأطفال؟',faq3_d:'نعم، نستخدم ألعاب وأنشطة تفاعلية تجعل العلاج ممتعاً.',
    faq4_q:'هل أحتاج إلى جلسات متابعة؟',faq4_d:'نعم، نوصي بجلسات متابعة دورية لمراقبة التقدم.',
    related_sub:'قد تهمك أيضاً',
    rel1:'التأهيل العصبي',rel1d:'علاج متخصص للحالات العصبية.',
    rel2:'إصابات الملاعب',rel2d:'تأهيل شامل لإصابات الرياضيين.',
    rel3:'العلاج اليدوي',rel3d:'تقنيات يدوية متقدمة.'
  },
  'shoulder-pain': {
    hero_title:'علاج آلام الكتف',hero_sub:'علاج متخصص لآلام الكتف والتيبس بأحدث التقنيات.',
    desc_title:'علاج آلام الكتف فعال',desc_p1:'نقدم علاج متخصص لآلام الكتف سواء كانت بسبب التهاب الأوتار، تيبس المفصل، أو إصابات الملاعب.',
    desc_p2:'يستخدم فريقنا تقنيات العلاج الحديثة مثل العلاج اليدوي والتمارين العلاجية لتخفيف الألم وتحسين الحركة.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد لآلام الكتف.',
    b2_title:'تحسين المرونة',b2_desc:'استعادة مرونة مفصل الكتف ونطاق الحركة.',
    b3_title:'تقوية العضلات',b3_desc:'تقوية عضلات الكتف لتقليل الضغط ومنع تكرار الإصابات.',
    b4_title:'تحسين الوضعية',b4_desc:'تعليم تقنيات جعل الوضعية الصحيحة للحفاظ على صحة الكتف.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق لحالة الكتف.',
    step2:'التشخيص الدقيق',step2d:'تشخيص شامل يعتمد على الفحص السريري والتصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة علاجية مخصصة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق الخطة بشكل تدريجي مع مراقبة التقدم.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر للنتائج وتعديل الخطة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هي أسباب آلام الكتف الشائعة؟',faq1_d:'تشمل التهاب الأوتار، تيبس المفصل، إصابات الملاعب.',
    faq2_q:'كم تستغرق مدة العلاج؟',faq2_d:'تختلف حسب الحالة، عادة من 4 إلى 8 أسابيع.',
    faq3_q:'هل العلاج مؤلم؟',faq3_d:'العلاج غير مؤلم في الغالب.',
    faq4_q:'هل يمكنني ممارسة الرياضة أثناء العلاج؟',faq4_d:'نعم، مع بعض التعديلات حسب الحالة.',
    related_sub:'قد تهمك أيضاً',
    rel1:'آلام الركبة',rel1d:'حلول متقدمة لآلام الركبة.',
    rel2:'إصابات الملاعب',rel2d:'تأهيل شامل لإصابات الرياضيين.',
    rel3:'العلاج اليدوي',rel3d:'تقنيات يدوية متقدمة.'
  },
  'knee-pain': {
    hero_title:'علاج آلام الركبة',hero_sub:'حلول متقدمة لآلام الركبة والغضاريف بأحدث التقنيات.',
    desc_title:'آلام الركبة فعال',desc_p1:'نقدم علاج متخصص لآلام الركبة سواء كانت بسبب التهاب المفصل، تلف الغضاريف، أو إصابات الملاعب.',
    desc_p2:'يستخدم فريقنا تقنيات العلاج الحديثة لتخفيف الألم وتحسين وظيفة الركبة.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد لآلام الركبة.',
    b2_title:'تحسين الحركة',b2_desc:'استعادة مرونة الركبة ونطاق الحركة.',
    b3_title:'تقوية العضلات',b3_desc:'تقوية عضلات الفخذ والسمانة لتقليل الضغط على الركبة.',
    b4_title:'الوقاية',b4_desc:'تمارين وقائية لمنع تفاقم الحالة.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق لحالة الركبة.',
    step2:'التشخيص الدقيق',step2d:'تشخيص شامل يعتمد على الفحص السريري والتصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة علاجية مخصصة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق الخطة بشكل تدريجي.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر للنتائج وتعديل الخطة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هي أسباب آلام الركبة الشائعة؟',faq1_d:'تشمل التهاب المفصل، تلف الغضاريف، إصابات الملاعب.',
    faq2_q:'كم تستغرق مدة العلاج؟',faq2_d:'تختلف حسب الحالة، عادة من 4 إلى 10 أسابيع.',
    faq3_q:'هل العلاج مؤلم؟',faq3_d:'العلاج غير مؤلم في الغالب.',
    faq4_q:'هل يمكنني المشي أثناء العلاج؟',faq4_d:'نعم، مع بعض التعديلات حسب الحالة.',
    related_sub:'قد تهمك أيضاً',
    rel1:'آلام الكتف',rel1d:'علاج متخصص لآلام الكتف.',
    rel2:'تأهيل الرباط الصليبي',rel2d:'برامج تأهيل متخصصة بعد إصابات ACL.',
    rel3:'إصابات الملاعب',rel3d:'تأهيل شامل لإصابات الرياضيين.'
  },
  'sciatica': {
    hero_title:'علاج العرق النسليبي',hero_sub:'علاج متخصص لآلام العرق النسليبي بأحدث التقنيات.',
    desc_title:'آلام العرق النسليبي فعال',desc_p1:'نقدم علاج متخصص لآلام العرق النسليبي الناتجة عن ضغط الأعصاب في أسفل الظهر.',
    desc_p2:'يستخدم فريقنا تقنيات العلاج الحديثة لتخفيف الضغط على الأعصاب وتقليل الألم.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد لآلام العرق النسليبي.',
    b2_title:'تحسين الحركة',b2_desc:'استعادة مرونة العمود الفقري السفلي.',
    b3_title:'تقوية العضلات',b3_desc:'تقوية عضلات الأسفل لدعم العمود الفقري.',
    b4_title:'تحسين الوضعية',b4_desc:'تعليم تقنيات جعل الوضعية الصحيحة.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق.',
    step2:'التشخيص الدقيق',step2d:'تشخيص شامل يعتمد على الفحص والتصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة علاجية مخصصة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق الخطة بشكل تدريجي.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر وتعديل الخطة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هو العرق النسليبي؟',faq1_d:'ألم ينتشر من أسفل الظهر إلى الساق بسبب ضغط على العصب الوركي.',
    faq2_q:'كم تستغرق مدة العلاج؟',faq2_d:'تختلف حسب الحالة، عادة من 4 إلى 8 أسابيع.',
    faq3_q:'هل العلاج مؤلم؟',faq3_d:'العلاج غير مؤلم وقد يساعد في تخفيف الألم.',
    faq4_q:'هل يمكنني الجلوس أثناء العلاج؟',faq4_d:'نعم، مع بعض التعديلات والتمارين المناسبة.',
    related_sub:'قد تهمك أيضاً',
    rel1:'علاج آلام الظهر',rel1d:'علاج متخصص لآلام الظهر.',
    rel2:'مشاكل الأقراص الفقري',rel2d:'علاج مشاكل الأقراص الفقري.',
    rel3:'العلاج اليدوي',rel3d:'تقنيات يدوية متقدمة.'
  },
  'disc-problems': {
    hero_title:'مشاكل الأقراص الفقري',hero_sub:'علاج متخصص لمشاكل وتلف الأقراص الفقري بأحدث التقنيات.',
    desc_title:'الأقراص الفقري فعال',desc_p1:'نقدم علاج متخصص لمشاكل الأقراص الفقري بما في ذلك التهاب القرص والانزلاق الغضروفي.',
    desc_p2:'يستخدم فريقنا تقنيات العلاج الحديثة لتخفيف الضغط على الأعصاب وتحسين الحالة.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد لألم الأقراص الفقري.',
    b2_title:'تحسين الحركة',b2_desc:'استعادة مرونة العمود الفقري.',
    b3_title:'تقوية العضلات',b3_desc:'تقوية العضلات الداعمة للعمود الفقري.',
    b4_title:'الوقاية',b4_desc:'تمارين وقائية لمنع تفاقم الحالة.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق.',
    step2:'التشخيص الدقيق',step2d:'تشخيص شامل يعتمد على الفحص والتصوير الطبي.',
    step3:'خطة العلاج',step3d:'وضع خطة علاجية مخصصة.',
    step4:'التطبيق العلاجي',step4d:'تطبيق الخطة بشكل تدريجي.',
    step5:'المتابعة والتقييم',step5d:'تقييم مستمر وتعديل الخطة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هي مشاكل الأقراص الفقري؟',faq1_d:'تشمل التهاب القرص والانزلاق الغضروفي والتنكس.',
    faq2_q:'كم تستغرق مدة العلاج؟',faq2_d:'تختلف حسب الحالة، عادة من 6 إلى 12 أسبوعاً.',
    faq3_q:'هل العلاج مؤلم؟',faq3_d:'العلاج غير مؤلم وقد يساعد في تخفيف الألم.',
    faq4_q:'هل يمكنني العودة للعمل؟',faq4_d:'نعم، في الغالب مع بعض التعديلات.',
    related_sub:'قد تهمك أيضاً',
    rel1:'علاج آلام الظهر',rel1d:'علاج متخصص لآلام الظهر.',
    rel2:'العلاج العقلي النسليبي',rel2d:'علاج متخصص لآلام العرق النسليبي.',
    rel3:'العلاج اليدوي',rel3d:'تقنيات يدوية متقدمة.'
  },
  'acl-rehabilitation': {
    hero_title:'تأهيل الرباط الصليبي',hero_sub:'برامج تأهيل متخصصة بعد إصابات الرباط الصليبي الأمامي.',
    desc_title:'التأهيل بعد إصابة ACL فعال',desc_p1:'نقدم برامج تأهيل شاملة بعد إصابات الرباط الصليبي الأمامي، سواء كان العلاج الجراحي أو غير الجراحي.',
    desc_p2:'فريقنا من الاستشاريين المتخصصين يرافقك في رحلة التعافي من خلال خطة تأهيل مخصصة ومتابعة مستمرة.',
    b1_title:'تعافي أسرع',b1_desc:'برامج تأهيل مكثفة تهدف لعودة آمنة للنشاط.',
    b2_title:'تقوية العضلات',b2_desc:'تقوية تدريجية لعضلات الفخذ والساق.',
    b3_title:'استعادة التوازن',b3_desc:'تمارين متخصصة لاستعادة التوازن والتنسيق.',
    b4_title:'الوقاية من повтор الإصابة',b4_desc:'تدريب على تقنيات الوقاية من إصابات المستقبلية.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل لحالة الركبة والرباط.',
    step2:'خطة التعافي',step2d:'وضع خطة تعافي مخصصة.',
    step3:'الجلسات العلاجية',step3d:'جلسات منتظمة تشمل تمارين متنوعة.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للتقدم وتعديل الخطة.',
    step5:'العودة للنشاط',step5d:'إرشاد المريض للعودة الآمنة للنشاط.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'كم تستغرق فترة التعافي من إصابة ACL؟',faq1_d:'عادة من 6 إلى 9 أشهر للعودة الكاملة للنشاط.',
    faq2_q:'هل أحتاج إلى جراحة؟',faq2_d:'ليس بالضرورة، بعض الحالات يمكن علاجها بدون جراحة.',
    faq3_q:'هل يمكنني العودة للرياضة؟',faq3_d:'نعم، مع خطة تأهيل مناسبة وعودة تدريجية.',
    faq4_q:'كيف أمنع تكرار الإصابة؟',faq4_d:'من خلال تمارين الوقاية والتدريب على تقنيات الحركة الصحيحة.',
    related_sub:'قد تهمك أيضاً',
    rel1:'إصابات الملاعب',rel1d:'تأهيل شامل لإصابات الرياضيين.',
    rel2:'علاج آلام الركبة',rel2d:'حلول متقدمة لآلام الركبة.',
    rel3:'التأهيل بعد الجراحة',rel3d:'برامج تأهيل متكاملة بعد العمليات الجراحية.'
  },
  'dry-needling': {
    hero_title:'العلاج بالإبر الجافة',hero_sub:'تخفيف آلام العضلات بالإبر الجافة المتقدمة مع فريق متخصص.',
    desc_title:'الحقن الجاف فعال',desc_p1:'نقدم العلاج بالإبر الجافة كتقنية متقدمة لتخفيف آلام العضلات والنقاط الحساسة في الجسم.',
    desc_p2:'يستخدم فريقنا المتخصص هذه التقنية المثبتة علمياً لتخفيف الألم وتحسين الحركة.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف سريع وفعال لآلام العضلات المزمنة.',
    b2_title:'تحسين الحركة',b2_desc:'تحسين مرونة العضلات ونطاق الحركة.',
    b3_title:'تقليل التوتر',b3_desc:'تقليل التوتر والشد في العضلات.',
    b4_title:'تعافي أسرع',b4_desc:'تسريع عملية التعافي من الإصابات.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتحديد النقاط الحساسة.',
    step2:'خطة العلاج',step2d:'وضع خطة علاجية مخصصة.',
    step3:'الجلسات العلاجية',step3d:'جلسات العلاج بالإبر الجافة.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للنتائج.',
    step5:'التعليم والمتابعة',step5d:'تعليم المريض تمارين منزلية.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هو العلاج بالإبر الجافة؟',faq1_d:'تقنية تستخدم إبر رفيعة لتحرير النقاط الحساسة في العضلات.',
    faq2_q:'هل العلاج مؤلم؟',faq2_d:'قد تشعر بانزعاج خفيف أثناء الجلسة يختفي بعدها.',
    faq3_q:'كم تستغرق الجلسة؟',faq3_d:'تستغرق الجلسة عادة من 30 إلى 45 دقيقة.',
    faq4_q:'متى أرى النتائج؟',faq4_d:'غالباً بعد 2-3 جلسات.',
    related_sub:'قد تهمك أيضاً',
    rel1:'العلاج اليدوي',rel1d:'تقنيات يدوية متقدمة.',
    rel2:'العلاج بالموجات الصادمة',rel2d:'علاج غير جراحي بالموجات الصادمة.',
    rel3:'إصابات الملاعب',rel3d:'تأهيل شامل لإصابات الرياضيين.'
  },
  'shockwave-therapy': {
    hero_title:'العلاج بالموجات الصادمة',hero_sub:'علاج غير جراحي بالموجات الصادمة المركزة مع فريق متخصص.',
    desc_title:'العلاج بالموجات الصوتية فعال',desc_p1:'نقدم العلاج بالموجات الصادمة كتقنية حديثة وغير جراحية لعلاج مختلف حالات الألم المزمن.',
    desc_p2:'يستخدم فريقنا هذه التقنية المثبتة علمياً لتحفيز عملية الشفاء الطبيعية في الجسم.',
    b1_title:'علاج غير جراحي',b1_desc:'بدون حاجة للجراحة أو التخدير.',
    b2_title:'تحفيز الشفاء',b2_desc:'تحفيز عملية الشفاء الطبيعية في الجسم.',
    b3_title:'تخفيف الألم',b3_desc:'تخفيف فعال وطويل الأمد للألم.',
    b4_title:'تعافي سريع',b4_desc:'عودة سريعة للنشاط اليومي.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل لحالة المريض.',
    step2:'خطة العلاج',step2d:'وضع خطة علاجية مناسبة.',
    step3:'الجلسات العلاجية',step3d:'جلسات العلاج بالموجات الصادمة.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للنتائج.',
    step5:'التعليم والمتابعة',step5d:'تعليم المريض تمارين منزلية.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هو العلاج بالموجات الصادمة؟',faq1_d:'تقنية غير جراحية تستخدم موجات صوتية لعلاج الألم.',
    faq2_q:'هل العلاج مؤلم؟',faq2_d:'قد تشعر بانزعاج خفيف أثناء الجلسة.',
    faq3_q:'كم تستغرق الجلسة؟',faq3_d:'تستغرق الجلسة عادة من 15 إلى 30 دقيقة.',
    faq4_q:'متى أرى النتائج؟',faq4_d:'غالباً بعد 3-5 جلسات.',
    related_sub:'قد تهمك أيضاً',
    rel1:'العلاج بالإبر الجافة',rel1d:'تخفيف آلام العضلات بالإبر الجافة.',
    rel2:'العلاج اليدوي',rel2d:'تقنيات يدوية متقدمة.',
    rel3:'إصابات الملاعب',rel3d:'تأهيل شامل لإصابات الرياضيين.'
  },
  'manual-therapy': {
    hero_title:'العلاج اليدوي',hero_sub:'تقنيات يدوية متقدمة لتحرير المفاصل والعضلات مع فريق متخصص.',
    desc_title:'العلاج اليدوي فعال',desc_p1:'نقدم العلاج اليدوي كتقنية متقدمة لتحرير المفاصل والعضلات وتخفيف الألم.',
    desc_p2:'يستخدم فريقنا المتخصص تقنيات يدوية متنوعة لتحسين الحركة وتقليل الألم.',
    b1_title:'تخفيف الألم',b1_desc:'تخفيف فوري وطويل الأمد للألم.',
    b2_title:'تحسين الحركة',b2_desc:'استعادة مرونة المفاصل والعضلات.',
    b3_title:'تحرير المفاصل',b3_desc:'تحرير القيود في المفاصل.',
    b4_title:'تحسين التوازن',b4_desc:'تحسين التوازن والتنسيق الحركي.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'فحص شامل وتقييم دقيق.',
    step2:'خطة العلاج',step2d:'وضع خطة علاجية مخصصة.',
    step3:'الجلسات العلاجية',step3d:'جلسات العلاج اليدوي.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للنتائج.',
    step5:'التعليم والمتابعة',step5d:'تعليم المريض تمارين منزلية.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هو العلاج اليدوي؟',faq1_d:'تقنية تستخدم اليدين لتحرير المفاصل والعضلات.',
    faq2_q:'هل العلاج مؤلم؟',faq2_d:'العلاج غير مؤلم في الغالب.',
    faq3_q:'كم تستغرق الجلسة؟',faq3_d:'تستغرق الجلسة عادة من 30 إلى 60 دقيقة.',
    faq4_q:'متى أرى النتائج؟',faq4_d:'غالباً بعد 2-4 جلسات.',
    related_sub:'قد تهمك أيضاً',
    rel1:'العلاج بالإبر الجافة',rel1d:'تخفيف آلام العضلات بالإبر الجافة.',
    rel2:'العلاج بالموجات الصادمة',rel2d:'علاج غير جراحي بالموجات الصادمة.',
    rel3:'إصابات الملاعب',rel3d:'تأهيل شامل لإصابات الرياضيين.'
  },
  'womens-health': {
    hero_title:'صحة المرأة',hero_sub:'رعاية متخصصة لصحة المرأة وال产后 التأهيل مع فريق متخصص.',
    desc_title:'الصحة النسائية فعال',desc_p1:'نقدم خدمات علاج طبيعي متخصصة لصحة المرأة، بما في ذلك التأهيل الحوضي والرعاية ما بعد الولادة.',
    desc_p2:'فريقنا المتخصص في صحة المرأة يستخدم أحدث التقنيات لمساعدة المريضات على تحقيق أفضل صحة ممكنة.',
    b1_title:'رعاية شخصية',b1_desc:'خطط علاج مخصصة تتناسب مع احتياجات كل مريض.',
    b2_title:'التأهيل الحوضي',b2_desc:'علاج متخصص لمشاكل الحوض وعضلات قاع الحوض.',
    b3_title:'الرعاية ما بعد الولادة',b3_desc:'برامج تأهيل شاملة بعد الولادة.',
    b4_title:'الدعم والمشورة',b4_desc:'دعم ومشورة متخصصة لصحة المرأة.',
    process_title:'مراحل العلاج',process_sub:'خطوات العلاج المتبعة لضمان أفضل النتائج',
    step1:'التقييم الأولي',step1d:'تقييم شامل لحالة المريض.',
    step2:'خطة العلاج',step2d:'وضع خطة علاجية مخصصة.',
    step3:'الجلسات العلاجية',step3d:'جلسات علاجية منتظمة.',
    step4:'المتابعة والتقييم',step4d:'تقييم مستمر للنتائج.',
    step5:'الدعم المستمر',step5d:'دعم ومشورة مستمرة.',
    faq_title:'الأسئلة الشائعة',faq_sub:'إليك بعض الأسئلة الشائعة التي قد تجدها مفيدة',
    faq1_q:'ما هي خدمات صحة المرأة؟',faq1_d:'تشمل التأهيل الحوضي والرعاية ما بعد الولادة والدعم النسائي.',
    faq2_q:'هل يمكنني الحجز مباشرة؟',faq2_d:'نعم، يمكنك الحجز مباشرة مع أخصائية صحة المرأة.',
    faq3_q:'كم تستغرق الجلسة؟',faq3_d:'تستغرق الجلسة عادة من 45 إلى 60 دقيقة.',
    faq4_q:'هل الخدمة سرية؟',faq4_d:'نعم، جميع خدماتنا سرية ومحرجة.',
    related_sub:'قد تهمك أيضاً',
    rel1:'العلاج الطبيعي للأطفال',rel1d:'رعاية متخصصة للأطفال.',
    rel2:'التأهيل العصبي',rel2d:'علاج متخصص للحالات العصبية.',
    rel3:'العلاج اليدوي',rel3d:'تقنيات يدوية متقدمة.'
  }
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
    this.translateMeta();
    this.translateSelects();
    this.translateFooter();
    this.translateServicePage();
  },
  async switch(lang) {
    this.current = lang;
    localStorage.setItem('tadawi-lang', lang);
    this.texts = lang === 'ar' ? AR : EN;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.className = lang;
    this.apply();
    this.translateMeta();
    this.translateSelects();
    this.translateFooter();
    this.translateServicePage();
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
    document.querySelectorAll('[data-key-title]').forEach(el => {
      const key = el.getAttribute('data-key-title');
      if (this.texts[key]) el.title = this.texts[key];
    });
    document.querySelectorAll('[data-key-alt]').forEach(el => {
      const key = el.getAttribute('data-key-alt');
      if (this.texts[key]) el.alt = this.texts[key];
    });
  },
  translateMeta() {
    const metaKey = document.documentElement.getAttribute('data-meta-key');
    if (metaKey && PAGE_META[metaKey]) {
      const pm = PAGE_META[metaKey];
      document.title = this.current === 'ar' ? pm.titleAr : pm.titleEn;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = this.current === 'ar' ? pm.descAr : pm.descEn;
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.content = this.current === 'ar' ? pm.titleAr : pm.titleEn;
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.content = this.current === 'ar' ? pm.descAr : pm.descEn;
    }
  },
  translateSelects() {
    document.querySelectorAll('select[data-key-options]').forEach(sel => {
      const key = sel.getAttribute('data-key-options');
      if (SELECT_OPTIONS[key]) {
        const opts = SELECT_OPTIONS[key];
        sel.querySelectorAll('option').forEach(opt => {
          const optKey = opt.getAttribute('data-key');
          if (optKey && opts[optKey]) {
            opt.textContent = this.current === 'ar' ? opts[optKey].ar : opts[optKey].en;
          }
        });
        const placeholderOpt = sel.querySelector('option[value=""]');
        if (placeholderOpt) {
          const phKey = sel.getAttribute('data-key-placeholder');
          if (phKey && this.texts[phKey]) placeholderOpt.textContent = this.texts[phKey];
        }
      }
    });
  },
  translateFooter() {
    document.querySelectorAll('[data-footer-key]').forEach(el => {
      const key = el.getAttribute('data-footer-key');
      if (FOOTER_TEXTS[key]) el.textContent = this.current === 'ar' ? FOOTER_TEXTS[key].ar : FOOTER_TEXTS[key].en;
    });
  },
  translateServicePage() {
    const svcKey = document.documentElement.getAttribute('data-svc-key');
    if (!svcKey || !SVC[svcKey]) return;
    const svc = SVC[svcKey];
    const isEn = this.current === 'en';
    document.querySelectorAll('[data-svc]').forEach(el => {
      const key = el.getAttribute('data-svc');
      if (svc[key]) el.textContent = svc[key];
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
