"use client";

import { AlertCircle } from "lucide-react";

export default function DemoBadge() {
  return (
    <div className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-500/50 backdrop-blur-sm flex items-center gap-2">
      <AlertCircle className="w-4 h-4 text-amber-400" />
      <span className="text-sm text-amber-100 font-medium">
        Projeto Demonstrativo
      </span>
    </div>
  );
}
