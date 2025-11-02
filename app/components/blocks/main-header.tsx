import { Link } from "react-router";
import {
  BriefcaseIcon,
  MessageCircleDashedIcon,
  NewspaperIcon,
  SendIcon,
  UserIcon,
} from "lucide-react";

import Logo from "~/components/blocks/logo";
import { Button, buttonVariants } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import ThemeToggle from "./theme-toggle";
import { Separator } from "~/components/ui/separator";
import NewsLetter from "./newsletter";

// Navigation links array
const navigationLinks = [
  { href: "/#intro", label: "Intro", icon: UserIcon },
  { href: "/#work", label: "Work", icon: BriefcaseIcon },
  { href: "/#blogs", label: "Blogs", icon: NewspaperIcon },
  { href: "/#connect", label: "Connect", icon: SendIcon },
];

export default function MainHeader({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          active={
                            (activeSection === "" && link.href === "/#intro") ||
                            `/#${activeSection}` === link.href
                          }
                          className="flex w-full flex-row items-center gap-2 rounded-md px-2 py-1.5 hover:bg-accent data-[active]:bg-background"
                        >
                          <Icon
                            size={16}
                            className="text-muted-foreground/80"
                            aria-hidden="true"
                          />
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => {
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      active={
                        (activeSection === "" && link.href === "/#intro") ||
                        `/#${activeSection}` === link.href
                      }
                      href={link.href}
                      className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <a href="#" className="text-primary hover:text-primary/90 md:hidden">
            <Logo />
          </a>
        </div>

        {/* Middle side: Logo */}
        <div className="hidden md:flex items-center">
          <a href="#" className="text-primary hover:text-primary/90">
            <Logo />
          </a>
        </div>

        {/* Right side: Actions */}
        <div className="flex flex-1 items-center justify-end gap-1 relative h-8">
          {/* User menu */}

          <Link
            to="/chat"
            className={buttonVariants({
              size: "icon",
              variant: "ghost",
              className: "text-muted-foreground size-8 rounded-full",
            })}
            aria-label="Temporary chat"
          >
            <MessageCircleDashedIcon size={16} aria-hidden="true" />
          </Link>
          <Separator orientation="vertical" className="w-2" />
          <NewsLetter />
          <Separator orientation="vertical" className="w-2" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
