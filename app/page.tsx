"use client";

import { useState } from "react";
import {
  Palette,
  ChevronDown,
  Globe,
  Calendar,
  Camera,
  Brain,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
}

interface CtaContent {
  title: string;
  subtitle: string;
  button: string;
}

interface LanguageContent {
  hero: HeroContent;
  services: ServiceItem[];
  cta: CtaContent;
}

const content: Record<string, LanguageContent> = {
  ar: {
    hero: {
      title: "خدماتنا المتكاملة",
      subtitle: "قدرات متكاملة لصناعة الحلول والأثر",
      description:
        "نقدم منظومة خدمات متكاملة، صُممت لتعمل كوحدة واحدة متناغمة، تربط بين الاستراتيجية، التنفيذ، والتواصل",
    },
    services: [
      {
        id: 1,
        icon: Calendar,
        title: "الفعاليات وإدارة التجارب الكبرى",
        subtitle: "Core Capability",
        description:
          "نمتلك خبرة عملية في تنفيذ الفعاليات الكبرى ضمن منصات محلية ودولية وتحويلها إلى تجارب متكاملة تعكس الهوية وتحقق حضوراً مؤثراً.",
        items: [
          "التخطيط الاستراتيجي للمؤتمرات والمعارض والفعاليات",
          "إدارة الحشود والتشغيل الميداني وفق أعلى المعايير",
          "تصميم وتنفيذ الديكورات والمساحات والمعارض المؤقتة",
          "إنتاج التجارب التفاعلية والفعاليات الثقافية والاقتصادية",
          "تصميم وإدارة الأجنحة الثقافية والتجارية في المعارض الدولية",
          "إدارة المشاريع والفرق التشغيلية للفعاليات الكبرى",
        ],
      },
      {
        id: 2,
        icon: Camera,
        title: "الإعلام والإنتاج الإعلامي",
        subtitle: "Amplification & Supporting Layer",
        description:
          "نقدم حلول إنتاج إعلامي احترافية تغطي جميع مراحل العمل، من الفكرة إلى التنفيذ النهائي، وفق أعلى المعايير الفنية والإبداعية.",
        items: [
          "التغطيات الإعلامية للفعاليات والمعارض",
          "التصوير الاحترافي والمونتاج المتقدم",
          "كتابة السيناريو وتطوير المحتوى القصصي",
          "صناعة المحتوى المرئي للمشاريع الثقافية والتجارية",
          "الإنتاج الإعلاني والسينمائي",
          "الإنتاج التلفزيوني والرقمي",
        ],
      },
      {
        id: 3,
        icon: Brain,
        title: "الحلول التقنية والذكاء الاصطناعي",
        subtitle: "Technology Enabling",
        description:
          "نستخدم التكنولوجيا والذكاء الاصطناعي كعناصر داعمة للاستراتيجية، بهدف تحسين الكفاءة وتعزيز تجربة المستخدم ودعم اتخاذ القرار.",
        items: [
          "تطوير المواقع والمنصات الرقمية",
          "تصميم وتطوير التطبيقات الذكية",
          "تصميم تجارب مستخدم ذكية وسلسة",
          "أتمتة العمليات وتحسين الأداء التشغيلي",
          "حلول الذكاء الاصطناعي وتحليل البيانات",
        ],
      },
      {
        id: 4,
        icon: Palette,
        title: "بناء الهوية والعلامة التجارية",
        subtitle: "Branding",
        description:
          "نساعد المؤسسات على بناء علامات تجارية قوية، واضحة، وقابلة للنمو، من خلال حلول إبداعية مدروسة ترتكز على الفهم العميق للسوق والجمهور.",
        items: [
          "بناء وتطوير الهوية البصرية والعلامة التجارية",
          "تصميم استراتيجيات التسويق المتكاملة",
          "تعزيز حضور العلامة التجارية وبنائها على المدى الطويل",
          "تطوير الرسائل الاتصالية وصناعة المحتوى الإبداعي",
          "إدارة الحملات الإعلانية متعددة القنوات",
        ],
      },
    ],
    cta: {
      title: "جاهز لبدء مشروعك؟",
      subtitle: "دعنا نحول رؤيتك إلى واقع ملموس",
      button: "تواصل معنا",
    },
  },
  en: {
    hero: {
      title: "Our Integrated Services",
      subtitle: "Integrated Capabilities for Creating Solutions and Impact",
      description:
        "We offer an integrated service ecosystem, designed to work as one harmonious unit, connecting strategy, execution, and communication",
    },
    services: [
      {
        id: 1,
        icon: Calendar,
        title: "Events & Major Experience Management",
        subtitle: "Core Capability",
        description:
          "We possess practical expertise in executing major events within local and international platforms, transforming them into integrated experiences that reflect identity and achieve impactful presence.",
        items: [
          "Strategic planning for conferences, exhibitions, and events",
          "Crowd management and field operations to highest standards",
          "Design and execution of decorations, spaces, and temporary exhibitions",
          "Production of interactive experiences and cultural/economic events",
          "Design and management of cultural and commercial pavilions in international exhibitions",
          "Project and operational team management for major events",
        ],
      },
      {
        id: 2,
        icon: Camera,
        title: "Media & Media Production",
        subtitle: "Amplification & Supporting Layer",
        description:
          "We provide professional media production solutions covering all work stages, from concept to final execution, according to the highest technical and creative standards.",
        items: [
          "Media coverage for events and exhibitions",
          "Professional photography and advanced montage",
          "Scriptwriting and narrative content development",
          "Visual content creation for cultural and commercial projects",
          "Advertising and cinematic production",
          "Television and digital production",
        ],
      },
      {
        id: 3,
        icon: Brain,
        title: "Technical Solutions & Artificial Intelligence",
        subtitle: "Technology Enabling",
        description:
          "We use technology and AI as strategic support elements, aiming to improve efficiency, enhance user experience, and support decision-making.",
        items: [
          "Website and digital platform development",
          "Smart application design and development",
          "Smart and seamless user experience design",
          "Process automation and operational performance improvement",
          "AI solutions and data analytics",
        ],
      },
      {
        id: 4,
        icon: Palette,
        title: "Brand Identity & Building",
        subtitle: "Branding",
        description:
          "We help organizations build strong, clear, and scalable brands through thoughtful creative solutions based on deep understanding of market and audience.",
        items: [
          "Visual identity and brand development and building",
          "Integrated marketing strategy design",
          "Long-term brand presence enhancement and building",
          "Communication messaging development and creative content creation",
          "Multi-channel advertising campaign management",
        ],
      },
    ],
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Let us transform your vision into tangible reality",
      button: "Contact Us",
    },
  },
};

export default function ServicesPage() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const t = content[language];

  return (
    <div
      className="min-h-screen bg-black text-white font-sans"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20 transition-all border border-white/20"
        >
          <Globe size={18} />
          <span className="text-sm font-medium">
            {language === "ar" ? "EN" : "ع"}
          </span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 0, 0, 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-red-600/20 border border-red-600/50 rounded-full">
            <span className="text-red-500 text-sm font-medium tracking-wide uppercase">
              Core Media
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 font-light">
            {t.hero.subtitle}
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-red-500" />
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="relative">
        {t.services.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <div
              key={service.id}
              className={`relative min-h-screen flex items-center ${
                index % 2 === 0 ? "bg-black" : "bg-zinc-950"
              }`}
            >
              {/* Background Accent */}
              <div
                className={`absolute inset-0 opacity-5 ${
                  index % 2 === 0
                    ? "bg-gradient-to-r"
                    : "bg-gradient-to-l"
                } from-red-600 to-transparent`}
              ></div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon Side */}
                  <div
                    className={`flex justify-center ${
                      index % 2 === 0
                        ? "md:justify-end"
                        : "md:justify-start md:order-2"
                    }`}
                  >
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 animate-pulse"></div>

                      {/* Icon Container */}
                      <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black border border-red-600/30 rounded-3xl">
                        <ServiceIcon
                          size={100}
                          className="text-red-500"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={index % 2 === 0 ? "" : "md:order-1"}>
                    {/* Service Number */}
                    <div className="text-8xl font-bold text-red-600/10 mb-4">
                      0{service.id}
                    </div>

                    {/* Subtitle */}
                    <div className="text-red-500 text-sm font-medium mb-2 tracking-wide uppercase">
                      {service.subtitle}
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Services List */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-red-600"></div>
                        {language === "ar" ? "ما نقدمه" : "What We Offer"}
                      </h3>

                      <ul className="space-y-3">
                        {service.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.3) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600 blur-[150px] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            {t.cta.title}
          </h2>

          <p className="text-xl text-gray-400 mb-12">{t.cta.subtitle}</p>

          <button className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50">
            {t.cta.button}
            <ChevronDown
              size={20}
              className="rotate-[-90deg] group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Footer Logo */}
      <section className="bg-black py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-4xl font-bold tracking-wider mb-2">
            CORE<span className="text-red-600">.</span>
          </div>
          <div className="text-gray-600 text-sm">Media</div>
        </div>
      </section>
    </div>
  );
}
