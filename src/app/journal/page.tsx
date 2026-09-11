import React from "react";
import type { Metadata } from "next";
import { journalArticles } from "@/data/journal";
import JournalClient from "./JournalClient";

export const metadata: Metadata = {
  title: "Artisan Journal & Field Dispatches | Janani Craft",
  description:
    "Explore in-depth documentary essays, living craft techniques, and field dispatches celebrating Bengal's Jamdani weavers, Nakshi Kantha artisans, and rural heritage guilds.",
  openGraph: {
    title: "Artisan Journal & Field Dispatches | Janani Craft",
    description:
      "Field dispatches, craft techniques, and living traditions from Bengal's artisan clusters.",
    images: ["/images/journal_nakshi_kantha_story.jpg"],
  },
};

export default function JournalPage() {
  return <JournalClient articles={journalArticles} />;
}

