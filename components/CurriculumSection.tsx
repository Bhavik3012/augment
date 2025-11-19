// components/CurriculumSection.tsx

export default function CurriculumSection() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between">
        {/* Left heading */}
        <div className="md:max-w-[55%]">
          <h1 className="font-light text-[34px] leading-[1.05] text-white md:text-[62px] md:leading-[60px] tracking-[-0.04em]">
            <span>A Curriculum</span>
            <br />
            <span>Made for </span>
            <span className="italic font-medium">Entrepreneurs</span>
          </h1>
        </div>

        {/* Right stats */}
        <div className="flex flex-wrap gap-8 md:gap-10 md:justify-end md:max-w-[45%]">
          {/* Stat 1 */}
          <div className="flex flex-col items-start md:items-center">
            <p className="text-[30px] md:text-[40px] leading-none tracking-[-0.02em] text-white whitespace-nowrap">
              800+
            </p>
            <div className="mt-1 h-[2px] w-full md:w-16 bg-lime-300" />
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400">
              Classes
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-start md:items-center">
            <p className="text-[30px] md:text-[40px] leading-none tracking-[-0.02em] text-white whitespace-nowrap">
              5,000+
            </p>
            <div className="mt-1 h-[2px] w-full md:w-16 bg-lime-300" />
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400">
              Alumni
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-start md:items-center">
            <p className="text-[30px] md:text-[40px] leading-none tracking-[-0.02em] text-white whitespace-nowrap">
              150+
            </p>
            <div className="mt-1 h-[2px] w-full md:w-16 bg-lime-300" />
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400">
              PDFs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
