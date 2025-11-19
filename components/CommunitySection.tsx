// components/CommunitySection.tsx

export default function CommunitySection() {
  return (
    <section id="community" className="bg-black py-16 md:py-20">
      <div className="mx-auto max-w-[1100px] px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-[500] text-[26px] leading-[1.16] text-gray-100 md:text-[45px] md:tracking-[-0.05em]">
            Join a Community of
          </h2>
          <p className="mt-2 font-[500] text-[36px] leading-[1.16] tracking-[-1px] text-[#adadad] md:text-[72px] md:tracking-[-4px]">
            +5,000 Entrepreneurs
          </p>
        </div>

        {/* Middle two cards + bottom card */}
        <div className="mt-10 md:mt-14 flex flex-col gap-6">
          {/* Top row: two cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Live Sessions card */}
            <div className="rounded-[32px] border border-[#262626] bg-[#111111] px-5 pb-6 pt-5 shadow-[0_0_0_1px_rgba(0,0,0,0.8)]">
              <div className="relative mb-6 w-full overflow-hidden rounded-[24px] aspect-[972/360]">
                <img
                  src="/image1.avif"
                  alt="Live Sessions With Founders"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-center text-[20px] leading-[1.16] tracking-[-0.06em] text-gray-100 md:text-[32px]">
                <span className="text-[#d6fd3a] tracking-[-0.04em]">
                  Live Sessions
                </span>{" "}
                With Founders
              </p>
            </div>

            {/* In-Person Events card */}
            <div className="rounded-[32px] border border-[#262626] bg-[#111111] px-5 pb-6 pt-5 shadow-[0_0_0_1px_rgba(0,0,0,0.8)]">
              <div className="relative mb-6 w-full overflow-hidden rounded-[24px] aspect-[972/360]">
                <img
                  src="/image2.avif"
                  alt="In-Person Events"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-center text-[20px] leading-[1.16] tracking-[-0.06em] text-gray-100 md:text-[32px]">
                In-Person{" "}
                <span className="text-[#d6fd3a] tracking-[-0.04em]">
                  Events
                </span>
              </p>
            </div>
          </div>

          {/* Bottom card: Private Platform */}
          <div className="rounded-[32px] border border-[#262626] bg-[#111111] px-5 pb-8 pt-6 shadow-[0_0_0_1px_rgba(0,0,0,0.8)]">
            <div className="relative mx-auto mb-6 w-full max-w-[900px] overflow-hidden rounded-[999px] aspect-[1479/297]">
              <img
                src="/people.avif"
                alt="Private Platform Members"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-center text-[22px] leading-[1.16] tracking-[-0.04em] text-[#f3f4f6] md:text-[39px]">
              <span className="tracking-[-0.08em] text-[#f3f4f6]">
                Connect on our{" "}
              </span>
              <span className="text-[#d6fd3a]">Private Platform</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
