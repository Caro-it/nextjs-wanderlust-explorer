"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
      <nav className="flex gap-4 p-4 border-b">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            

            className={
              isActive
                ? "font-bold text-blue-600" 
                : "text-gray-600 hover:text-blue-600" 
            }
            
          >
            {link.label}
            {/* El texto visible del enlace: Home, Experiences, etc. */}
          </Link>
        );
      })}
    </nav>
  );
}