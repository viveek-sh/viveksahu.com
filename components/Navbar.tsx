"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Desktop Nav Items
const desktopNavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Mobile Tab Nav Items
const mobileTabNavItems = [
  { name: "Services", href: "/services", icon: Icons.Work },
  { name: "Portfolio", href: "/projects", icon: Icons.Projects },
  { name: "Home", href: "/", icon: Icons.Home },
  { name: "About", href: "/about", icon: Icons.User },
  { name: "Blog", href: "/blog", icon: Icons.Rss },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 20);
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* 1. Fixed Main Desktop Navbar (Visible on md+) */}
      <div
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 pointer-events-none hidden md:block",
          show ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0",
        )}>
        <nav
          className={cn(
            "flex items-center justify-between px-5 py-3 rounded-lg border transition-all duration-300 pointer-events-auto",
            scrolled
              ? "backdrop-blur-lg bg-background/30 border-white/10 shadow-lg shadow-black/5"
              : "backdrop-blur-md bg-background/40 border-transparent shadow-sm",
          )}>
          {/* Desktop Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary transition-all group-hover:bg-primary/20">
              <Image src="/initial.png" alt="Initial" width={24} height={24} />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Vivek<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {desktopNavItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent/50 rounded-lg",
                      pathname === item.href
                        ? "text-foreground font-semibold"
                        : "text-foreground/70 hover:text-foreground",
                    )}
                    render={<Link href={item.href}>{item.name}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button className="rounded-lg px-6 font-medium">Hire Me</Button>
          </div>
        </nav>
      </div>

      {/* 2. Mobile Top Status Bar (Visible on <md)  */}
      <div
        className={cn(
          "fixed top-3 left-1/2 -translate-x-1/2 w-[94%] z-40 md:hidden transition-all duration-500 pointer-events-none",
          show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
        )}>
        <div className="flex items-center justify-start h-12 px-3 rounded-lg bg-background/20 backdrop-blur-lg border border-white/10 shadow-sm pointer-events-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center transition-all group-hover:bg-primary/20">
              <Image src="/initial.png" alt="Initial" width={16} height={16} />
            </div>

            <span className="font-semibold text-sm tracking-tight text-foreground/90">
              Vivek<span className="text-primary">.</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Tab Bar (Visible on <md) */}
      <div
        className={cn(
          "fixed bottom-0 left-0 w-full z-40 md:hidden bg-background/40 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.4)] transition-transform duration-300",
          show ? "translate-y-0" : "translate-y-full",
        )}>
        <div className="flex items-center justify-center px-2 py-1.5 rounded-t-[1.25rem] border-t border-border/40 gap-1">
          {mobileTabNavItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative flex-1 flex flex-col items-center justify-center gap-0.5 p-2 rounded-[1rem] text-center transition-all",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40",
                )}>
                {/* Theme-aware background highlight for active tab */}
                {isActive && (
                  <div className="absolute inset-0 rounded-[1rem] bg-primary/10 dark:bg-primary/15 -z-10" />
                )}
                <Icon
                  className={cn(
                    "w-5 h-5",
                    isActive ? "text-primary" : "text-muted-foreground/80",
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium tracking-tight",
                    isActive ? "text-primary" : "text-muted-foreground/80",
                  )}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
