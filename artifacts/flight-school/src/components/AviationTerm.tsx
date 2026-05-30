import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AviationTermProps {
  term: string;
  definition?: string;
}

const defaultDefinitions: Record<string, string> = {
  "ACS": "Airman Certification Standards, the official FAA grading checklist used for pilot tests.",
  "Checkride": "The FAA pilot test. It includes an oral exam and a practical flight exam.",
  "DPE": "Designated Pilot Examiner, an FAA-authorized pilot examiner who conducts checkrides.",
  "IFR": "Instrument Flight Rules, flying using aircraft instruments and air traffic control guidance during lower visibility weather.",
  "Wet rental": "Aircraft rental cost that already includes fuel.",
  "Dual instruction": "Flying with a certified flight instructor onboard.",
  "Solo time": "Flying completely by yourself without an instructor onboard.",
  "Cross-country": "Navigation flights between different airports.",
  "Steep turns": "A performance maneuver used to demonstrate precise aircraft control and coordination.",
  "CFI": "Certified Flight Instructor, a pilot authorized to teach flight students.",
  "CFII": "Certified Flight Instructor Instrument, a flight instructor authorized to teach instrument flying.",
  "Commercial Pilot": "A pilot certificate that allows a pilot to be paid for certain legal flying operations.",
  "Private Pilot": "The first major pilot certificate for people who want to fly for personal travel, recreation, and carrying passengers.",
  "Instrument Rating": "An added rating that allows a pilot to fly using instruments and ATC guidance in more challenging weather conditions.",
  "ATP": "Airline Transport Pilot certificate, the certificate required to serve as an airline captain.",
};

export function AviationTerm({ term, definition }: AviationTermProps) {
  const content = definition || defaultDefinitions[term] || "Aviation term";

  return (
    <Tooltip delayDuration={300}>
      <TooltipTrigger asChild>
        <span className="border-b-2 border-dotted border-primary/50 cursor-help font-medium hover:bg-primary/5 px-0.5 rounded transition-colors text-[#ffffff]" data-testid={`term-${term.toLowerCase().replace(/\s+/g, "-")}`}>
          {term}
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs p-3 text-sm" sideOffset={5}>
        <p><strong>{term}:</strong> {content}</p>
      </TooltipContent>
    </Tooltip>
  );
}