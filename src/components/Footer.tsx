const navLinks = [
  { label: "Works", href: "#works" },
  { label: "Playground", href: "#playground" },
  { label: "Story", href: "#story" },
];

const contactLinks = [
  { label: "Email", href: "mailto:yuchen666333@gmail.com" },
  {
    label: "Instagram",
    href: "https://instagram.com/yuchen_0.0_/",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-12 py-[50px] lg:px-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex min-h-[44px] items-center font-sans text-[18px] leading-[1.2] tracking-[-0.54px] text-white/80 transition-opacity duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex min-h-[44px] items-center font-sans text-[18px] leading-[1.2] tracking-[-0.54px] text-white/80 transition-opacity duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="font-satoshi text-[16px] leading-[1.2] text-white/50">
          &copy; 2026 Made with Love by Yuchen Zhang.
        </p>
      </div>
    </footer>
  );
}
