import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach brief | Boostrom Construction demo",
  robots: { index: false, follow: false },
};

export default function OutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
