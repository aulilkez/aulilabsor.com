import { AspectRatio } from "~/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

type Job = {
  year: string;
  images?: string[];
  company: string;
  role: string;
  description: string;
  tech: string[];
};

interface WorkSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  jobs: Job[];
}

export function WorkSection({ sectionRef, jobs }: WorkSectionProps) {
  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen py-20 sm:py-32 opacity-0"
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
            <span className="text-sm font-mono text-muted-foreground">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-balance">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            A showcase of my projects and experiences across web development,
            design, and digital innovation.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 rounded-xl border border-border/50 hover:border-border hover:bg-card/50 transition-all duration-500 hover:shadow-lg"
            >
              <div className="lg:col-span-2">
                <div className="inline-flex items-center justify-center h-12 sm:-16 sm:h-16 rounded-full text-xl sm:text-2xl font-light text-foreground group-hover:bg-accent transition-colors duration-500">
                  {job.year}
                </div>
                {job.images && job.images.length > 0 && (
                  <Carousel
                    key={job.images.length}
                    className="w-full max-w-sm pt-4 hidden"
                    opts={{ loop: true }}
                  >
                    <CarouselContent>
                      {job.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <AspectRatio ratio={16 / 9}>
                              <img
                                src={image}
                                alt={`Project image ${index + 1} for ${
                                  job.company
                                }`}
                                className="rounded-md object-cover"
                              />
                            </AspectRatio>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                )}
              </div>

              <div className="lg:col-span-6 space-y-2 sm:space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                    {job.role}
                  </h3>
                  <div className="text-base sm:text-lg text-muted-foreground">
                    {job.company}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end items-start">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm border border-border rounded-full group-hover:border-foreground/30 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
