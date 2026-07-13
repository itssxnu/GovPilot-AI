"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Bank,
  MagnifyingGlass,
  FileText,
  IdentificationCard,
  Notebook,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MarketingPage() {
  const [lang, setLang] = useState<"en" | "si" | "ta">("en");
  const [searchQuery, setSearchQuery] = useState("");

  const content = {
    en: {
      heroTitle: "Sri Lankan Citizen Services Workspace",
      heroSubtitle: "Access all Sri Lankan government departments through a single, conversational AI workspace. OCR verification, real-time checklist tracking, and door-to-door delivery.",
      searchPlaceholder: "Search civil registries, passports, identity cards...",
      servicesHeading: "Government Services Directory",
      generalCta: "Start General Inquiry Chat",
      generalCtaDesc: "Not sure what you need? Start a conversation with our central AI dispatcher.",
      officialNotice: "Official Centralized Government Portal. Sri Lanka Civil Services.",
      services: [
        {
          id: "passport-renewal",
          name: "Passport Renewal",
          agency: "Department of Immigration & Emigration",
          fee: "LKR 10,000",
          time: "3-5 Business Days",
          desc: "Apply for a standard citizen passport renewal. Upload your current passport, NIC, and birth certificate for instant OCR verification.",
          icon: Notebook
        },
        {
          id: "nic-application",
          name: "National Identity Card (NIC)",
          agency: "Department of Registration of Persons",
          fee: "LKR 2,000",
          time: "7-10 Business Days",
          desc: "Request a new or replacement National Identity Card (NIC). Cross-references biometric data and Grama Niladhari residency certs.",
          icon: IdentificationCard
        },
        {
          id: "birth-cert-copy",
          name: "Birth Certificate Copy Request",
          agency: "Department of Registrar General",
          fee: "LKR 1,500",
          time: "2-3 Business Days",
          desc: "Request a certified duplicate copy of birth records from registry archives. Speeds up official certificate requests.",
          icon: FileText
        }
      ]
    },
    si: {
      heroTitle: "ශ්‍රී ලංකා පුරවැසි සේවා සේවා ස්ථානය",
      heroSubtitle: "එක් සංවාදශීලී AI සහායකයෙකු හරහා සියලුම ශ්‍රී ලංකා රාජ්‍ය දෙපාර්තමේන්තු වෙත ප්‍රවේශ වන්න. OCR ලේඛන සත්‍යාපනය සහ නිවසටම බෙදා හැරීම.",
      searchPlaceholder: "විදේශ ගමන් බලපත්‍ර, ජාතික හැඳුනුම්පත්, සිවිල් ලේඛන සොයන්න...",
      servicesHeading: "රාජ්‍ය සේවා නාමාවලිය",
      generalCta: "පොදු විමසීම් සංවාදය අරඹන්න",
      generalCtaDesc: "ඔබට අවශ්‍ය කුමක්දැයි විශ්වාස නැද්ද? අපගේ පොදු AI සහායකයා සමඟ සාකච්ඡා කරන්න.",
      officialNotice: "නිල මධ්‍යගත රාජ්‍ය ද්වාරය. ශ්‍රී ලංකා සිවිල් සේවා.",
      services: [
        {
          id: "passport-renewal",
          name: "විදේශ ගමන් බලපත්‍ර අලුත් කිරීම",
          agency: "ආගමන හා විගමන දෙපාර්තමේන්තුව",
          fee: "රු. 10,000",
          time: "දින 3 - 5",
          desc: "විදේශ ගමන් බලපත්‍රය අලුත් කිරීම සඳහා අයදුම් කරන්න. ඔබගේ ජාතික හැඳුනුම්පත සහ උප්පැන්න සහතිකය OCR තාක්ෂණයෙන් තහවුරු කරන්න.",
          icon: Notebook
        },
        {
          id: "nic-application",
          name: "ජාතික හැඳුනුම්පත (NIC)",
          agency: "පුද්ගලයින් ලියාපදිංචි කිරීමේ දෙපාර්තමේන්තුව",
          fee: "රු. 2,000",
          time: "දින 7 - 10",
          desc: "නව හෝ නැතිවූ ජාතික හැඳුනුම්පතක් සඳහා අයදුම් කරන්න. ග්‍රාම නිලධාරී සහතික සහ ජෛවමිතික දත්ත සම්බන්ධීකරණය කෙරේ.",
          icon: IdentificationCard
        },
        {
          id: "birth-cert-copy",
          name: "උප්පැන්න සහතික පිටපතක් ලබා ගැනීම",
          agency: "රෙජිස්ට්‍රාර් ජනරාල් දෙපාර්තමේන්තුව",
          fee: "රු. 1,500",
          time: "දින 2 - 3",
          desc: "ලේඛනාගාරයෙන් සහතික කළ උප්පැන්න සහතික පිටපතක් ඇණවුම් කරන්න. රාජ්‍ය සහතික ඉල්ලීම් කඩිනම් කෙරේ.",
          icon: FileText
        }
      ]
    },
    ta: {
      heroTitle: "இலங்கை குடிமக்கள் சேவை தளம்",
      heroSubtitle: "ஒற்றை AI உரையாடல் தளம் மூலம் அனைத்து இலங்கை அரசாங்க திணைக்களங்களையும் அணுகவும். OCR ஆவண சரிபார்ப்பு மற்றும் வீட்டுக்கே விநியோகம்.",
      searchPlaceholder: "கடவுச்சீட்டு, தேசிய அடையாள அட்டை, சிவில் பதிவேடுகளைத் தேடுக...",
      servicesHeading: "அரசு சேவைகள் விபரக்கொத்து",
      generalCta: "பொதுவான விசாரணையைத் தொடங்குக",
      generalCtaDesc: "உங்களுக்கு என்ன தேவை என்று தெரியவில்லையா? எங்கள் பொது AI உதவியாளருடன் உரையாடுங்கள்.",
      officialNotice: "அதிகாரப்பூர்வ மத்திய அரசு போர்டல். இலங்கை சிவில் சேவைகள்.",
      services: [
        {
          id: "passport-renewal",
          name: "கடவுச்சீட்டு புதுப்பித்தல்",
          agency: "குடிவரவு மற்றும் குடியகல்வு திணைக்களம்",
          fee: "LKR 10,000",
          time: "3-5 வேலை நாட்கள்",
          desc: "குடிமக்களுக்கான சாதாரண கடவுச்சீட்டைப் புதுப்பிக்கவும். தேசிய அடையாள அட்டை மற்றும் பிறப்புச் சான்றிதழை OCR மூலம் சரிபார்க்கவும்.",
          icon: Notebook
        },
        {
          id: "nic-application",
          name: "தேசிய அடையாள அட்டை (NIC)",
          agency: "நபர்களைப் பதிவு செய்யும் திணைக்களம்",
          fee: "LKR 2,000",
          time: "7-10 வேலை நாட்கள்",
          desc: "புதிய அல்லது மாற்று தேசிய அடையாள அட்டைக்கு விண்ணப்பிக்கவும். கிராம நிலதாரி வதிவிட சான்றிதழ் சரிபார்ப்பை உள்ளடக்கியது.",
          icon: IdentificationCard
        },
        {
          id: "birth-cert-copy",
          name: "பிறப்புச் சான்றிதழ் நகல் கோரிக்கை",
          agency: "பதிவாளர் நாயகம் திணைக்களம்",
          fee: "LKR 1,500",
          time: "2-3 வேலை நாட்கள்",
          desc: "பதிவேட்டில் இருந்து பிறப்புச் சான்றிதழ் நகலைக் கோரவும். அதிகாரப்பூர்வ நகல்களை விரைவாகப் பெறுவதற்குப் பயன்படும்.",
          icon: FileText
        }
      ]
    }
  };

  const currentContent = content[lang];

  const faqContent = {
    en: {
      heading: "Frequently Asked Questions",
      items: [
        { q: "What documents do I need?", a: "Required documents are populated dynamically based on the service. For Passport Renewal, this includes your NIC and Birth Certificate." },
        { q: "How long does automated verification take?", a: "OCR check validation runs in real-time, taking approximately 6 seconds to extract and cross-reference your records." },
        { q: "Is the portal secure?", a: "Yes. All uploads are encrypted and direct verification is completed securely via official government registers." }
      ]
    },
    si: {
      heading: "නිතර අසන ප්‍රශ්න (FAQ)",
      items: [
        { q: "මට අවශ්‍ය ලේඛන මොනවාද?", a: "සේවාව අනුව අවශ්‍ය ලේඛන වෙනස් වේ. ගමන් බලපත්‍ර අලුත් කිරීම සඳහා හැඳුනුම්පත සහ උප්පැන්න සහතිකය අවශ්‍ය වේ." },
        { q: "ස්වයංක්‍රීය සත්‍යාපනය සඳහා කොපමණ කාලයක් ගතවේද?", a: "OCR පරිලෝකනය සජීවීව ක්‍රියාත්මක වන අතර තොරතුරු තහවුරු කිරීමට තත්පර 6ක් පමණ ගතවේ." },
        { q: "මෙම ද්වාරය ආරක්ෂිතද?", a: "ඔව්, ඔබ උඩුගත කරන සියලුම ලිපිගොනු සංකේතනය කර ඇති අතර රාජ්‍ය දත්ත පද්ධති මගින් පමණක් සත්‍යාපනය සිදු කරයි." }
      ]
    },
    ta: {
      heading: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
      items: [
        { q: "எனக்கு என்ன ஆவணங்கள் தேவை?", a: "தேவையான ஆவணங்கள் சேவைக்கு ஏற்ப மாறுபடும். கடவுச்சீட்டு புதுப்பித்தலுக்கு அடையாள அட்டை மற்றும் பிறப்புச் சான்றிதழ் தேவை." },
        { q: "தானியங்கி சரிபார்ப்புக்கு எவ்வளவு நேரம் ஆகும்?", a: "OCR ஸ்கேனிங் நிகழ்நேரத்தில் இயங்கும், ஆவணங்களைச் சரிபார்க்க சுமார் 6 வினாடிகள் ஆகும்." },
        { q: "இந்த போர்டல் பாதுகாப்பானதா?", a: "ஆம், பதிவேற்றப்படும் அனைத்து ஆவணங்களும் குறியாக்கம் செய்யப்பட்டு அரசாங்க நெறிமுறைகளின்படி சரிபார்க்கப்படும்." }
      ]
    }
  };

  // Filter services based on search bar query
  const filteredServices = currentContent.services.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.agency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-dvh bg-slate-50 font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Bank className="w-5 h-5" weight="fill" />
            </div>
            <div>
              <span className="font-bold text-lg text-primary tracking-tight">GovPilot AI</span>
              <span className="text-[10px] block text-slate-400 font-bold tracking-widest uppercase">Sri Lanka</span>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200">
            {["en", "si", "ta"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l as "en" | "si" | "ta")}
                className={`px-2.5 py-1 text-xs font-bold rounded ${
                  lang === l
                    ? "bg-white text-primary shadow-sm"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {l === "en" ? "English" : l === "si" ? "සිංහල" : "தமிழ்"}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Search Section */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" weight="fill" />
            <span>Official Government AI Portal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {currentContent.heroTitle}
          </h2>

          <p className="text-base sm:text-lg text-slate-350 max-w-2xl mx-auto leading-relaxed">
            {currentContent.heroSubtitle}
          </p>

          {/* Unified search bar */}
          <div className="max-w-xl mx-auto relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <MagnifyingGlass className="w-5 h-5" weight="bold" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentContent.searchPlaceholder}
              className="w-full h-12 pl-11 pr-4 bg-slate-800 text-white placeholder-slate-400 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base transition-all"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        
        {/* Central Dispatcher Option */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <h3 className="text-lg font-black text-slate-900 tracking-tight">
              {currentContent.generalCta}
            </h3>
            <p className="text-slate-600 text-sm max-w-[60ch] leading-relaxed">
              {currentContent.generalCtaDesc}
            </p>
          </div>
          <Link
            href="/chat/new"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 active:scale-[0.98] transition-all text-sm text-center"
          >
            <span>Ask Central Dispatcher</span>
            <ArrowRight className="w-4 h-4" weight="bold" />
          </Link>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-black text-slate-900 tracking-tight">
            {currentContent.servicesHeading}
          </h3>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl text-slate-400">
              No matching government services found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-primary flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" weight="duotone" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-slate-900 text-base leading-snug">
                          {service.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          {service.agency}
                        </p>
                      </div>
                      <p className="text-sm text-slate-500 leading-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Meta information */}
                      <div className="flex justify-between items-center text-xs font-semibold bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-1 text-slate-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.time}</span>
                        </div>
                        <span className="text-primary font-bold">{service.fee}</span>
                      </div>

                      {/* Start Application CTA */}
                      <Link
                        href={`/chat/new?serviceId=${service.id}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 h-11 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-light active:scale-[0.98] transition-all"
                      >
                        <span>Start Application</span>
                        <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>

      {/* FAQ Accordion Section using shadcn/ui */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 border-t border-slate-200 mt-16 space-y-6">
        <h3 className="text-xl font-black text-slate-900 text-center tracking-tight">
          {faqContent[lang].heading}
        </h3>
        <Accordion className="w-full">
          {faqContent[lang].items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary text-sm py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400 font-bold tracking-wider uppercase">
          {currentContent.officialNotice}
        </div>
      </footer>
    </div>
  );
}
