import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-light tracking-tight">Augment</span>
            <span className="text-xl font-light text-muted-foreground">
              .org
            </span>
          </div>
          <button className="gap-2">
            Enroll Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase">
            THE AUGMENT MBA
          </p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-normal leading-tight tracking-tight">
            Learn From the Best
            <br />
            Entrepreneurs in the World
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join the best alternative to traditional MBAs taught by
            <br />
            the founders of Wikipedia, Youtube, Shazam, and more.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-muted border-2 border-background overflow-hidden"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                    alt="Entrepreneur"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                From 5,000+ Entrepreneurs
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="pt-12">
            <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden bg-muted aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M12 9L22 16L12 23V9Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-2xl font-medium text-white drop-shadow-lg">
                  of Wikipedia.
                </p>
              </div>
              {/* Video placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted/60" />
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button className="text-base gap-2">
              Enroll Now & Get 50% Off
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Media Logos */}
          <div className="pt-20">
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mb-8">
              SEEN IN
            </p>
            <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
              <span className="text-2xl font-light">Bloomberg</span>
              <span className="text-2xl font-medium">TechCrunch</span>
              <span className="text-2xl font-serif">Forbes</span>
              <span className="text-2xl font-light">Time</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
