"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  Plus,
  ArrowRight,
  Cardholder,
  Clock,
  FileText,
  Notebook,
  IdentificationCard,
  ChatCircleText,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

interface SessionSummary {
  sessionId: string;
  serviceId: string;
  serviceName: string;
  status: string;
  progress: number;
  updatedAt: string;
}

const CATALOG_SERVICES = [
  {
    id: "passport-renewal",
    name: "Passport Renewal",
    agency: "Department of Immigration & Emigration",
    fee: "LKR 10,000",
    time: "3-5 Days",
    desc: "Renew your passport online using Grama Niladhari and OCR civil registrations checks.",
    icon: Notebook,
  },
  {
    id: "nic-application",
    name: "National Identity Card (NIC)",
    agency: "Department of Registration of Persons",
    fee: "LKR 2,000",
    time: "7-10 Days",
    desc: "Request a new or replacement National Identity Card (NIC). Checks biometrics data.",
    icon: IdentificationCard,
  },
  {
    id: "birth-cert-copy",
    name: "Birth Certificate Copy",
    agency: "Department of Registrar General",
    fee: "LKR 1,500",
    time: "2-3 Days",
    desc: "Order certified duplicates of birth certificates from historical civil registries.",
    icon: FileText,
  },
];

export default function DashboardPage() {
  const {
    data: sessions,
    isLoading,
    error,
  } = useQuery<SessionSummary[]>({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await fetch("/api/proxy/sessions");
      if (!res.ok) throw new Error("Failed to fetch applications");
      return res.json();
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow space-y-10 font-sans">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-5">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Citizen Workspace Console
          </h2>
          <p className="text-sm text-slate-500 dark:text-zinc-400 font-semibold">
            Track, resume, and request digital public services in Sri Lanka.
          </p>
        </div>
        <Link
          href="/chat/new"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white text-sm font-bold rounded-xl active-press-trigger transition-all shadow-sm focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
        >
          <ChatCircleText className="w-4 h-4" weight="bold" />
          <span>General Inquiry Chat</span>
        </Link>
      </div>

      {/* 1. Active Applications Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-900 tracking-tight">
          Active Applications
        </h3>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl h-44 animate-pulse"></div>
          </div>
        ) : error ? (
          <div className="p-4 border border-rose-200 bg-rose-50 rounded-xl text-rose-800 font-medium text-sm">
            Error loading your applications. Please refresh the browser.
          </div>
        ) : !sessions || sessions.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-center max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 mx-auto">
              <Cardholder className="w-6 h-6" weight="duotone" />
            </div>
            <p className="text-sm text-slate-500 max-w-[30ch] mx-auto font-medium">
              You do not have any active service requests. Select a service below to begin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions.map((session) => (
              <div
                key={session.sessionId}
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover-card-elevation flex flex-col justify-between space-y-5"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="inline-block text-[9px] font-bold text-primary dark:text-amber-500 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-2 py-0.5 rounded uppercase tracking-wider">
                      Reference: {session.sessionId.split("-")[1] || session.sessionId}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Active
                    </span>
                  </div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                    {session.serviceName}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      <span className={`w-1.5 h-1.5 rounded-full inline-block ${session.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                      <span>{session.status}</span>
                    </div>
                    <Badge variant={session.status === 'Completed' ? 'default' : 'secondary'} className="text-[9px] font-bold tracking-wider uppercase py-0.5 px-2">
                      {session.status === 'Completed' ? 'Closed' : 'Active'}
                    </Badge>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase">
                    <span>Progress</span>
                    <span>{session.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-150 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-300"
                      style={{ width: `${session.progress}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <Link
                    href={`/chat/${session.sessionId}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 h-11 bg-primary hover:bg-primary-light active-press-trigger text-white text-xs font-bold rounded-lg"
                  >
                    <span>Resume Workspace</span>
                    <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                  </Link>
                  <Link
                    href={`/documents/${session.sessionId}`}
                    className="inline-flex items-center justify-center h-11 px-3 border border-slate-200 dark:border-zinc-800 hover:bg-slate-55 dark:hover:bg-zinc-800/40 active-press-trigger rounded-lg text-slate-650 dark:text-zinc-350 text-xs font-bold"
                    title="Upload Supporting Files"
                  >
                    <FileText className="w-4 h-4" />
                    <span className="ml-1">Files</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Service Catalog Directory Section */}
      <div className="space-y-6 pt-4">
        <div>
          <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
            Start New Government Service
          </h3>
          <p className="text-sm text-slate-500 dark:text-zinc-400 font-semibold">
            Choose a department portal to open a dedicated agent conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATALOG_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover-card-elevation flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 text-primary dark:text-amber-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight">
                      {service.name}
                    </h4>
                    <p className="text-[9px] text-slate-450 dark:text-zinc-550 font-bold uppercase tracking-wider mt-0.5">
                      {service.agency}
                    </p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-zinc-405 leading-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold bg-slate-55 dark:bg-zinc-950 p-2.5 rounded-lg border border-slate-100 dark:border-zinc-850 text-slate-500 dark:text-zinc-450">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.time}
                    </span>
                    <span className="text-primary dark:text-amber-500">{service.fee}</span>
                  </div>
                  <Link
                    href={`/chat/new?serviceId=${service.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 h-11 bg-slate-900 hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 active-press-trigger text-white text-xs font-bold rounded-lg"
                  >
                    <span>Start Application</span>
                    <ArrowRight className="w-3.5 h-3.5" weight="bold" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
