import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WhoIsAugmentFor from "@/components/WhoIsAugmentFor";
import CommunitySection from "@/components/CommunitySection";
import CurriculumSection from "@/components/CurriculumSection";
import FAQSection from "@/components/Faq";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <WhoIsAugmentFor />
      <CommunitySection />
      <CurriculumSection />
      <FAQSection />
    </>
  );
}
