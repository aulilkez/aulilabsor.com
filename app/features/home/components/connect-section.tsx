import { Link } from "react-router";

interface SosialLink {
  name: string;
  url: string;
  handle: string;
}

interface ConnectSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  connect: {
    title: string;
    description: string;
    email: string;
  };
  socials: SosialLink[];
}

export function ConnectSection({
  sectionRef,
  connect: { title, description, email },
  socials,
}: ConnectSectionProps) {
  return (
    <section id="connect" ref={sectionRef} className="py-20 sm:py-32 opacity-0">
      <div className="relative p-6 sm:p-8 rounded-2xl border border-border from-card/50 to-accent/10 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm">
                <span className="text-sm font-mono text-muted-foreground">
                  LET'S COLLABORATE
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-balance">
                {title}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>

              <div className="space-y-4">
                <Link
                  to={`mailto:${email}`}
                  className="group flex items-center gap-3 text-lg sm:text-xl text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  <span>{email}</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="text-sm text-muted-foreground font-mono">
              CONNECT WITH ME
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socials.map((social: SosialLink) => (
                <Link
                  key={social.name}
                  to={social.url}
                  className="group p-6 border border-border rounded-xl hover:border-foreground/50 hover:bg-background/50 transition-all duration-300 hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      {social.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {social.handle}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

