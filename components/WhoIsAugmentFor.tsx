// components/WhoIsAugmentFor.tsx
import { ArrowRight } from "lucide-react";

export default function WhoIsAugmentFor() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center">
        {/* Label */}
        <p className="text-xs md:text-sm font-medium tracking-[0.25em] text-zinc-400 uppercase">
          Our Students
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-medium text-white">
          Who is <span className="text-lime-300">Augment</span> for?
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8 text-left">
            {/* Avatars strip */}
            <div className="relative mb-6 h-12 w-full max-w-[240px]">
              <img
                src="https://framerusercontent.com/images/Jwz88m2GRozp8V6slhRauGD3oE.png?width=380&height=100"
                alt="Founders & CEOs"
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Founders &amp; CEOs
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-zinc-300">
              Join a thriving community of bold innovators and visionary
              leaders. Connect with like-minded founders to exchange strategies,
              solve challenges, and gain insights to scale your business faster.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8 text-left">
            {/* Avatars strip */}
            <div className="relative mb-6 h-12 w-full max-w-[240px]">
              <img
                src="https://framerusercontent.com/images/BuiI1NdCjzSGlUViKYrMzES9pc.png?width=760&height=200"
                alt="Executives"
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Executives
            </h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-zinc-400">
              Collaborate with a network of leaders and top executives. Share
              experiences, learn cutting-edge strategies, and discover new ways
              to drive growth and innovation in your organization.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime-300 px-8 py-3 text-sm md:text-base font-medium text-black transition hover:bg-lime-200">
          Enroll Now
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
