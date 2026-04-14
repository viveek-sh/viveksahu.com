"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";

// shape of each category object
export interface TechStackItem {
  category: string;
  skills: string[];
  className?: string;
}

// props for the component
interface TechStackSectionProps {
  stack: TechStackItem[];
}

export default function SkillsSection({ stack }: TechStackSectionProps) {
  return (
    <section className="py-20 selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Technical"
          accent="Arsenal"
          description="A precise inventory of my tech stack and professional capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Map through the passed 'stack' prop */}
          {stack.map((item) => (
            <Card
              key={item.category}
              className={`
                ${item.className || "md:col-span-1"}
                bg-white/5 border-white/10 backdrop-blur-md
                hover:border-emerald-400/50 hover:bg-emerald-400/[0.02]
                transition-all duration-300 group relative overflow-hidden
              `}>
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all" />

              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[18px] uppercase tracking-[0.1em] text-emerald-400/80 font-bold">
                    {item.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="p-3 bg-emerald-500/10 text-emerald-50 text-[15px] hover:bg-emerald-400 hover:text-emerald-950 border-none transition-all cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
