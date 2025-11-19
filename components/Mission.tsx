import React from 'react';

export default function MBAComparison() {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-12 md:py-20 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] mb-4 uppercase font-normal">
                        Our Mission
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-tight">
                        High-Quality Business
                        <br />
                        Education at an Unbeatable Price
                    </h1>
                </div>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {/* Traditional MBA Card */}
                    <div className="bg-zinc-900 rounded-2xl p-8 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-normal mb-8 md:mb-10">
                            A Traditional MBA
                        </h2>
                        <div className="border-t border-zinc-700 pt-6">
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">
                                        <span className="font-bold">AED 100,000</span> Tuition, On Average
                                    </p>
                                </div>


                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">Inflexible Education</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">No Job Support</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">
                                        <span className="font-bold">4 year</span> Time Commitment
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">Academic Instructors</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">Outdated Education Based & Rigid Curriculum</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <svg className="w-5 h-5 mt-1 flex-shrink-0 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <p className="text-gray-300 text-base md:text-lg font-normal">Tedious Admission Process</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Augment MBA Card */}
                    <div className="bg-gray-100 text-black rounded-2xl p-8 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-normal mb-8 md:mb-10">
                            The Augment MBA
                        </h2>
                        <div className="border-t border-gray-300 pt-6">
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">
                                        <span className="font-bold">AED 997</span> One Time Payment
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">Anywhere, Anytime, On Any Device</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">
                                        Post Job Support
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">
                                        <span className="font-bold"> 21 Days</span> Commitment
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">Trainer With 25+ Years Of Industry Experience</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">Technique Based Learning</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-5 h-5 mt-1 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-800 text-base md:text-lg font-normal">Open For All Graduates</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10">
                                <button className="w-full bg-black text-white py-4 rounded-full text-sm md:text-base font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}