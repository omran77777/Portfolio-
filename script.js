const lang = {
  en: {
    greeting: "Hello, I'm Omran",
    role: "Graphic Designer",
    subheading: "I build life changing Designs",
    viewWork: "View my work",
    servicesTitle: "Services",
    service1: "Research and write scripts for different topics that can then be directly recorded for video production",
    service2: "Record and shoot videos taking into consideration proper settings, followed by production & post-production work",
    service3: "Develop complete curriculums for various technical topics to produce digital transformative courses",
    projectsTitle: "Projects",
    category1: "Script Writing & Video Production",
    category2: "Script Writing & Video Production",
    category3: "Script Writing & Video Production",
    category4: "Script Writing & Video Production",
    category5: "Script Writing & Video Production",
    category6: "Script Writing & Video Production",
    moreDetails: "More details",
    contactTitle: "Let's work together",
    phone: "Phone",
    email: "Email"
  },

  ar: {
    greeting: "مرحباً، أنا عمران",
    role: "مصمم جرافيك",
    subheading: "أصمم تصاميم تغيّر الحياة",
    viewWork: "شاهد أعمالي",
    servicesTitle: "الخدمات",
    service1: "أبحث وأكتب نصوصًا لمواضيع مختلفة يمكن تسجيلها مباشرة للإنتاج المرئي",
    service2: "أقوم بتصوير الفيديوهات مع مراعاة الإعدادات المناسبة، تليها مرحلة الإنتاج وما بعد الإنتاج",
    service3: "أطوّر مناهج كاملة لمواضيع تقنية متنوعة لإنتاج دورات رقمية متطورة",
    projectsTitle: "المشاريع",
    category1: "كتابة نصوص وإنتاج فيديو",
    category2: "كتابة نصوص وإنتاج فيديو",
    category3: "كتابة نصوص وإنتاج فيديو",
    category4: "كتابة نصوص وإنتاج فيديو",
    category5: "كتابة نصوص وإنتاج فيديو",
    category6: "كتابة نصوص وإنتاج فيديو",
    moreDetails: "تفاصيل أكثر",
    contactTitle: "دعنا نعمل معاً",
    phone: "الهاتف",
    email: "البريد الإلكتروني"
  }
};

const selector = document.getElementById("language-selector");

selector.addEventListener("change", updateLanguage);

function updateLanguage() {
  const selectedLang = selector.value;
  document.body.setAttribute("lang", selectedLang);

  const nodes = document.querySelectorAll("[data-lang]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-lang");
    if (lang[selectedLang] && lang[selectedLang][key]) {
      node.innerHTML = lang[selectedLang][key];
    }
  });
}
