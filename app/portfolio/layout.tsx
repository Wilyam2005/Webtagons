// Standalone layout for /portfolio — completely isolated from main site layout.
// No Navbar, no Footer, no StarsCanvas from parent (root layout only provides bg & fonts).
export default function PortfolioPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
