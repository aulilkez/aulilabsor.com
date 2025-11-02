import type React from "react";
import { Link } from "react-router";
import { Marquee } from "~/components/ui/marquee";
import { cn } from "~/lib/utils";

type Skill = {
  name: string;
  icon: string;
};

interface IntroSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  intro: {
    status: string;
    name: string;
    title: string;
    description: string;
    cta1: {
      label: string;
      href: string;
    };
    cta2: {
      label: string;
      href: string;
    };
  };
  skills: Skill[];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function IntroSection({
  sectionRef,
  intro: { status, name, title, description, cta1, cta2 },
  skills,
  className,
}: IntroSectionProps & React.ComponentPropsWithoutRef<"div" | "section">) {
  const shuffledSkills = shuffleArray(skills);

  return (
    <header
      id="intro"
      ref={sectionRef}
      className={cn(
        "min-h-screen flex items-center opacity-0 relative",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10 hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full space-y-8 sm:space-y-12">
        <div className="space-y-6 sm:space-y-8 md:text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-700/30 dark:bg-emerald-900/30 dark:text-emerald-300">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="font-medium">{status}</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tight text-balance">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {name}
                </span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-accent/20 -z-10"></span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-4xl font-light text-muted-foreground text-balance">
              {title}
            </p>
          </div>

          <div className="max-w-2xl space-y-4 md:mx-auto sm:space-y-6 md:text-center">
            <p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          <div className="flex flex-col md:justify-center sm:flex-row gap-3 sm:gap-4 pt-4">
            <Link
              to={cta1.href}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              <span className="font-medium">{cta1.label}</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              to={cta2.href}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-lg hover:border-foreground/50 hover:bg-accent/50 transition-all duration-300 text-sm sm:text-base"
            >
              <span className="font-medium">{cta2.label}</span>
            </Link>
          </div>
        </div>

        <div className="space-y-6 pt-8 sm:pt-12">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">
              SKILLS & EXPERTISE
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          <div className="relative overflow-hidden py-8">
            <div className="from-background z-10 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background z-10 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>

            <Marquee pauseOnHover className="[--duration:20s]">
              {shuffledSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 sm:mx-8 flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl border border-border/50 bg-card/30 group-hover:border-border group-hover:bg-card/50 transition-all duration-300">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={`${skill.name} icon`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        {/* <StatsGrid /> */}
      </div>
    </header>
  );
}
