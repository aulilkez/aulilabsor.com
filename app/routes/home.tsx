import type { Route } from "./+types/home";
import { IntroSection } from "../features/home/components/intro-section";
import { WorkSection } from "../features/home/components/work-section";
import { ConnectSection } from "../features/home/components/connect-section";
import { BlogsSection } from "../features/home/components/blog-section"; // Added BlogsSection
import { useState, useRef, useEffect } from "react";
import { allBlogs } from "content-collections"; // Added allPosts
import MainHeader from "~/components/blocks/main-header";
import MainFooter from "~/components/blocks/main-footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ulil Absor | Full-Stack Developer" },
    {
      name: "description",
      content: "Full-Stack Developer & Digital Craftsman",
    },
  ];
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  const latestPosts = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4); // Get latest posts

  return (
    <>
      <MainHeader activeSection={activeSection} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 pt-12">
        <IntroSection
          sectionRef={setSectionRef(0)}
          intro={{
            status: "Available for opportunities",
            name: "Ulil Absor",
            title: "Full-Stack Developer & Digital Craftsman",
            description: `Seorang <span class="text-foreground font-medium">Lulusan Teknik Komputer dan Jaringan (TKJ)</span> dengan minat besar di bidang pengembangan. Saya mengkhususkan diri dalam merancang <span class="text-foreground font-medium">alat web yang efisien</span> dan memanfaatkan perangkat lunak perkantoran untuk <span class="text-foreground font-medium">menyederhanakan alur kerja teknis</span>.`,
            cta1: {
              label: "Get in touch",
              href: "#connect",
            },
            cta2: {
              label: "View my work",
              href: "#work",
            },
          }}
          skills={[
            {
              name: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "Python",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            },
            {
              name: "Next.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            },
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            },
            {
              name: "TypeScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              name: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Tailwind CSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "PostgreSQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
            },
            {
              name: "MySQL",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
            },
            {
              name: "NestJS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
            },
            {
              name: "Git",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
              name: "Microsoft Excel",
              icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
            },
            {
              name: "Microsoft Word",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Microsoft_Word_2013-2019_logo.svg/2170px-Microsoft_Word_2013-2019_logo.svg.png",
            },
          ]}
        />
        <WorkSection
          sectionRef={setSectionRef(1)}
          jobs={[
            {
              year: "January – February 2023",
              role: "Staff Produksi (Intern)",
              company: "Toko Percetakan Pelangi (Konveksi)",
              description:
                "Membantu proses kerja harian di bagian produksi dan memastikan standar kualitas produk. Mendukung proses percetakan dan konveksi dengan ketelitian dan konsistensi. Mengoperasikan alat-alat produksi dasar dan memantau penggunaan bahan. Menjaga kebersihan serta kerapian area kerja.",
              tech: [
                "Quality Control",
                "Production",
                "Teamwork",
                "Time Management",
                "Work Discipline",
              ],
              images: [
                "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
                "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
                "https://images.unsplash.com/photo-1571171637578-41bc2dd42cd2?w=800&q=80",
              ],
            },
            // {
            //   year: "2023",
            //   role: "Senior Frontend Engineer",
            //   company: "Digital Agency",
            //   description:
            //     "Led frontend development for multiple high-profile e-commerce platforms with focus on performance optimization.",
            //   tech: ["React", "Tailwind CSS", "GraphQL"],
            //   images: [
            //     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
            //     "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&q=80",
            //   ],
            // },
            // {
            //   year: "2022",
            //   role: "Full Stack Developer",
            //   company: "Startup Ventures",
            //   description:
            //     "Built MVP for fintech startup from ground up, handling both frontend and backend architecture.",
            //   tech: ["Node.js", "React", "MongoDB"],
            //   images: [
            //     "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80",
            //     "https://images.unsplash.com/photo-1607706189992-eae5756eea3f?w=800&q=80",
            //   ],
            // },
          ]}
        />
        <BlogsSection sectionRef={setSectionRef(2)} posts={latestPosts} />{" "}
        <ConnectSection
          sectionRef={setSectionRef(3)}
          connect={{
            title: "Siap untuk bekerja sama?",
            description:
              "Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.",
            email: "aulil2427@gmail.com",
          }}
          socials={[
            {
              name: "GitHub",
              handle: "@aulilkez",
              url: "https://github.com/aulilkez",
            },
            { name: "LinkedIn", handle: "ulilabsor", url: "#" },
            {
              name: "Twitter",
              handle: " @aulil2427",
              url: "https://x.com/aulil2427?s=09",
            },
            { name: "Instagram", handle: " @ulilabsor", url: "#" },
          ]}
        />
      </main>
      <MainFooter
        footer={{
          copyright: "© 2024 Ulil Absor. All rights reserved.",
          crafted: "Crafted with passion and a lot of coffee.",
        }}
      />
    </>
  );
}
