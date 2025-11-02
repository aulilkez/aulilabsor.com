import { Bell, MailIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";

export default function NewsLetter() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="text-muted-foreground size-8 rounded-full shadow-none"
          aria-label="Subscribe to newsletter"
        >
          <Bell size={16} aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-sm border-border/50">
        <DialogHeader className="space-y-4 pt-4 md:text-center">
          <DialogTitle className="text-2xl font-light text-foreground">
            Join the Newsletter
          </DialogTitle>
          <DialogDescription className="text-muted-foreground max-w-sm mx-auto">
            Subscribe to get notified about new articles, projects, and
            occasional updates.
          </DialogDescription>
        </DialogHeader>
        <div className="pt-4">
          <form className="space-y-4">
            <div className="relative">
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3">
                <MailIcon size={16} aria-hidden="true" />
              </div>
              <Input
                id="dialog-subscribe"
                className="ps-9 bg-transparent border-border focus:ring-ring/50"
                placeholder="hi@yourcompany.com"
                type="email"
                aria-label="Email"
              />
            </div>
            <Button
              type="button"
              className="w-full bg-foreground text-background hover:bg-foreground/90"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <p className="text-muted-foreground text-center text-xs pt-4 px-6">
          By subscribing, you agree to the{" "}
          <a
            href="/privacy-policy"
            className="underline hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
