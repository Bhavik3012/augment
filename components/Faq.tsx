"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Will this actually help me grow my business?",
    answer:
      "Yes. Over 2,000 entrepreneurs and executives have used Augment to scale businesses, land investments, and lead with confidence.",
  },
  {
    question: "An MBA for $1,225. What's the catch?",
    answer:
      "No catch. You get a practical, outcome-focused program without the overhead and costs of traditional institutions.",
  },
  {
    question: "I don't have time for this.",
    answer:
      "The program is designed for busy founders and executives, with short, focused lessons you can complete on your own schedule.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If you feel the program isn’t right for you within the refund window, you can request your money back based on our terms.",
  },
  {
    question: "Is this just video lessons?",
    answer:
      "No. You also get live sessions, playbooks, templates, and access to a private community of entrepreneurs.",
  },
  {
    question: "Can I expense this through my company?",
    answer:
      "Many students do. In most cases, professional education like this can be expensed—check with your company or accountant.",
  },
  {
    question: "What if I already have experience in business?",
    answer:
      "Then you’ll move faster. The program helps you refine what you already know and apply proven frameworks to scale further.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <h2 className="text-center text-[36px] md:text-[50px] font-medium tracking-[-0.04em] text-white">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="w-full rounded-[4px] bg-white text-left shadow-sm"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-4 md:px-8 md:py-5"
                >
                  <span className="text-[18px] md:text-[24px] leading-snug text-neutral-900">
                    {item.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-6 w-6 text-neutral-900" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-neutral-900" />
                    )}
                  </span>
                </button>

                {/* Animated body */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-neutral-200 px-6 pb-4 pt-3 md:px-8 md:pb-5">
                      <p className="text-sm md:text-[16px] leading-relaxed text-neutral-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
