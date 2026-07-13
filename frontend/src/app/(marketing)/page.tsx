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
  Question,
  Checks,
  Globe
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
      heroSubtitle: "A single conversational AI workspace accessing all Sri Lankan government departments with OCR verification and tracked delivery.",
      searchPlaceholder: "Search civil registries, passports, identity cards...",
      servicesHeading: "Government Services Directory",
      generalCta: "Open General Inquiry Console",
      generalCtaDesc: "Not sure what you need? Open a conversation with our central agent dispatcher to find requirements, check eligibility, and generate checklists.",
      officialNotice: "Official Centralised Government Portal. Sri Lanka Civil Services.",
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
      heroSubtitle: "ලේඛන OCR සත්‍යාපනය සහ ලුහුබැඳ ගිය බෙදාහැරීම් සහිත තනි සංවාදශීලී AI සේවා ස්ථානයක්.",
      searchPlaceholder: "විදේශ ගමන් බලපත්‍ර, ජාතික හැඳුනුම්පත්, සිවිල් ලේඛන සොයන්න...",
      servicesHeading: "රාජ්‍ය සේවා නාමාවලිය",
      generalCta: "පොදු විමසීම් කොන්සෝලය විවෘත කරන්න",
      generalCtaDesc: "ඔබට අවශ්‍ය කුමක්දැයි විශ්වාස නැද්ද? අවශ්‍යතා සෙවීමට, සුදුසුකම් පරීක්ෂා කිරීමට සහ පරීක්ෂණ ලැයිස්තු සකස් කිරීමට අපගේ මධ්‍යම AI සහායකයා සමඟ සාකච්ඡා කරන්න.",
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
      heroSubtitle: "OCR ஆவண சரிபார்ப்பு மற்றும் கண்காணிப்பு விநியோகத்துடன் ஒரே உரையாடல் AI தளம்.",
      searchPlaceholder: "கடவுச்சீட்டு, தேசிய அடையாள அட்டை, சிவில் பதிவேடுகளைத் தேடுக...",
      servicesHeading: "அரசு சேவைகள் விபரக்கொத்து",
      generalCta: "பொதுவான விசாரணையைத் தொடங்குக",
      generalCtaDesc: "உங்களுக்கு என்ன தேவை என்று தெரியவில்லையா? தேவைகளைக் கண்டறிய, தகுதியைச் சரிபார்க்க மற்றும் சரிபார்ப்பு பட்டியல்களை உருவாக்க எங்கள் மத்திய AI உதவியாளருடன் உரையாடுங்கள்.",
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
        { q: "මට අවශ්‍ය ලේඛන මොනවාද?", a: "අවශ්‍ය ලේඛන සේවාව අනුව වෙනස් වේ. ගමන් බලපත්‍ර අලුත් කිරීම සඳහා හැඳුනුම්පත සහ උප්පැන්න සහතිකය අවශ්‍ය වේ." },
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

  const filteredServices = currentContent.services.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.agency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`flex flex-col min-h-dvh bg-slate-50 dark:bg-zinc-950 font-sans transition-colors duration-200 ${
      lang === "si" ? "font-sinhala" : lang === "ta" ? "font-tamil" : "font-sans"
    }`}>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(220px); }
          100% { transform: translateY(0); }
        }
        .ocr-scan-line {
          animation: scan 4s ease-in-out infinite;
        }
      `}</style>

      {/* Modern Coordinates Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header Panel */}
      <header className="bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800/80 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-zinc-800 flex items-center justify-center text-white border border-slate-800 dark:border-zinc-700">
              <Bank className="w-5 h-5 text-amber-500" weight="fill" />
            </div>
            <div>
              <span className="font-black text-lg text-slate-900 dark:text-white tracking-tight">GovPilot AI</span>
              <span className="text-[9px] block text-amber-600 dark:text-amber-500 font-bold tracking-widest uppercase">Sri Lanka</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-850 p-1 rounded-xl border border-slate-200/50 dark:border-zinc-800">
              <Globe className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 ml-1.5" />
              {["en", "si", "ta"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as "en" | "si" | "ta")}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                    lang === l
                      ? "bg-white dark:bg-zinc-700 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {l === "en" ? "EN" : l === "si" ? "සිං" : "தமிழ்"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Split Section */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Official Government Portal</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
              {currentContent.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-[55ch]">
              {currentContent.heroSubtitle}
            </p>

            {/* Unified Search Input */}
            <div className="relative max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-zinc-500">
                <MagnifyingGlass className="w-5 h-5" weight="bold" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentContent.searchPlaceholder}
                className="w-full h-12 pl-11 pr-4 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 border border-slate-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-zinc-700 text-sm transition-all shadow-sm"
              />
            </div>

            {/* Micro logo trust strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-widest">
              <span>Department of Immigration & Emigration</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-zinc-800"></span>
              <span>Department of Registration of Persons</span>
            </div>
          </div>

          {/* Right Interactive Mock OCR Console (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden backdrop-blur-md bg-white/75 dark:bg-zinc-900/75 border border-slate-200/60 dark:border-zinc-850 shadow-2xl p-6 rounded-2xl w-full max-w-md mx-auto">
              
              {/* Laser Scan Line */}
              <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70 pointer-events-none ocr-scan-line" />

              {/* Mock Document Header */}
              <div className="flex justify-between items-center border-b border-slate-100 dark:border-zinc-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-zinc-500">Live OCR Scan Console</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">99.8% Confidence</span>
              </div>

              {/* Mock NIC Layout */}
              <div className="bg-slate-50 dark:bg-zinc-950/80 rounded-xl p-4 border border-slate-200/50 dark:border-zinc-800 relative space-y-4">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <span className="text-[8px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-500">DEMOCRATIC SOCIALIST REPUBLIC OF SRI LANKA</span>
                    <h4 className="text-xs font-black text-slate-900 dark:text-white">NATIONAL IDENTITY CARD</h4>
                  </div>
                  <div className="w-7 h-5 bg-amber-500/20 rounded flex items-center justify-center text-[8px] font-bold text-amber-700">LION</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 aspect-[3/4] bg-slate-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-slate-400 dark:text-zinc-600 text-xs">
                    PHOTO
                  </div>
                  <div className="col-span-2 space-y-2 text-[10px] font-semibold text-slate-600 dark:text-zinc-400">
                    <div className="p-1 border border-emerald-500/20 bg-emerald-500/5 rounded">
                      <span className="text-[8px] block text-slate-400 dark:text-zinc-500 uppercase font-bold">NIC Number</span>
                      <span className="font-mono text-slate-900 dark:text-white">199208401928</span>
                    </div>
                    <div className="p-1 border border-slate-100 dark:border-zinc-900 rounded">
                      <span className="text-[8px] block text-slate-400 dark:text-zinc-500 uppercase font-bold">Full Name</span>
                      <span className="text-slate-900 dark:text-white">K. L. Perera</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extraction Metrics */}
              <div className="mt-4 space-y-2 text-xs font-bold">
                <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Checks className="w-4 h-4 text-emerald-500" />
                    <span>NIC Structure Validated</span>
                  </div>
                  <span className="font-mono text-slate-400 dark:text-zinc-500">Form 20-A</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Checks className="w-4 h-4 text-emerald-500" />
                    <span>Residency Verified</span>
                  </div>
                  <span className="font-mono text-slate-400 dark:text-zinc-500">Grama Niladhari</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Directory */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {currentContent.servicesHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Bento Cell 1: Main Dispatcher Prompt (Spans 2 columns) */}
            <div className="md:col-span-2 bg-slate-900 dark:bg-zinc-900 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[260px] border border-slate-800 dark:border-zinc-800 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 via-transparent to-transparent pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider">
                  Central Agent Router
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
                  {currentContent.generalCta}
                </h3>
                <p className="text-slate-400 dark:text-zinc-400 text-sm max-w-[55ch] leading-relaxed">
                  {currentContent.generalCtaDesc}
                </p>
              </div>
              <Link
                href="/chat/new"
                className="mt-6 inline-flex items-center justify-center gap-2 h-12 px-6 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl active-press-trigger transition-all text-xs text-center relative z-10 w-fit"
              >
                <span>Ask Central Dispatcher</span>
                <ArrowRight className="w-4 h-4" weight="bold" />
              </Link>
            </div>

            {/* Bento Cell 2: Quick Information Card (Spans 1 column) */}
            <div className="bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between min-h-[260px]">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                  <Question className="w-5 h-5" weight="bold" />
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Need Assistance?</h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-semibold">
                  Our system evaluates citizen documents, calculates processing fees, and schedules local physical biometric registrations automatically.
                </p>
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-zinc-500">GovPilot AI Platform v1.0</span>
            </div>

          </div>

          {/* Catalog Services Row */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl text-slate-400">
              No matching government services found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover-card-elevation flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-amber-500 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" weight="duotone" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                          {service.name}
                        </h4>
                        <p className="text-[9px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                          {service.agency}
                        </p>
                      </div>
                      <p className="text-sm text-slate-550 dark:text-zinc-400 leading-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Meta Parameters block */}
                      <div className="flex justify-between items-center text-xs font-semibold bg-slate-50 dark:bg-zinc-950 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-850">
                        <div className="flex items-center gap-1 text-slate-500 dark:text-zinc-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.time}</span>
                        </div>
                        <span className="text-slate-900 dark:text-amber-500 font-bold">{service.fee}</span>
                      </div>

                      {/* Start Application Button */}
                      <Link
                        href={`/chat/new?serviceId=${service.id}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 h-11 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-850 dark:hover:bg-zinc-800 text-white text-xs font-bold rounded-lg active-press-trigger transition-all"
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

      {/* FAQ Panel */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 border-t border-slate-200 dark:border-zinc-800 mt-16 space-y-6 relative z-10 w-full">
        <h3 className="text-xl font-black text-slate-900 dark:text-white text-center tracking-tight">
          {faqContent[lang].heading}
        </h3>
        <Accordion className="w-full">
          {faqContent[lang].items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 dark:border-zinc-800">
              <AccordionTrigger className="text-left font-bold text-slate-800 dark:text-zinc-300 hover:text-amber-600 dark:hover:text-amber-500 text-sm py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-550 dark:text-zinc-450 text-sm leading-relaxed pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 py-6 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400 dark:text-zinc-500 font-bold tracking-wider uppercase">
          {currentContent.officialNotice}
        </div>
      </footer>
    </div>
  );
}
