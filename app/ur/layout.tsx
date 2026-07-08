import type { ReactNode } from "react";

export default function UrLayout({ children }: { children: ReactNode }) {
  return (
    <div lang="ur" dir="rtl" className="font-sans">
      {children}
    </div>
  );
}
