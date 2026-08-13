import Link from "next/link";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

// 1. Social Media Links Array
const SOCIAL_LINKS = [
  { id: 1, icon: FaFacebookF, href: "#", label: "Facebook" },
  { id: 2, icon: FaTwitter, href: "#", label: "Twitter" },
  { id: 3, icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { id: 4, icon: FaGithub, href: "#", label: "GitHub" },
];

// 2. Navigation Columns Data Structure
const FOOTER_NAV_GROUPS = [
  {
    id: "quick-links",
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "#" },
      { label: "Categories", href: "#" },
      { label: "Flash Deals", href: "#" },
      { label: "About Us", href: "#" },
    ],
  },
  {
    id: "customer-care",
    title: "Customer Care",
    links: [
      { label: "Order Tracking", href: "#" },
      { label: "Warranty Policy", href: "#" },
      { label: "Shipping & Return", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

// 3. Contact Information Array
const CONTACT_INFO = [
  {
    id: 1,
    icon: HiMapPin,
    text: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    icon: HiPhone,
    text: "+880 1700-000000",
  },
  {
    id: 3,
    icon: HiEnvelope,
    text: "support@techgearhub.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 text-lg">
                    T
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  TechGear
                  <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Hub
                  </span>
                </span>
                <span className="text-xs font-bold text-indigo-400 tracking-widest uppercase mt-0.5">
                  Store
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your ultimate destination for mechanical keyboards, workspace
              setup accessories, and developer tools. Built for creators and
              tech enthusiasts.
            </p>

            {/* Social Icons (Mapped from SOCIAL_LINKS) */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-600 hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links & Customer Care (Mapped from FOOTER_NAV_GROUPS) */}
          {FOOTER_NAV_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="text-white text-sm font-extrabold uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5 text-sm font-medium">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info (Mapped from CONTACT_INFO) */}
          <div>
            <h3 className="text-white text-sm font-extrabold uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <li key={info.id} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span>{info.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© {new Date().getFullYear()} TechGearHub. All rights reserved.</p>
          <p>
            Designed & Built for{" "}
            <span className="text-indigo-400">Tech Enthusiasts</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
