"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { Name: "Home", href: "/" },
  { Name: "Men", href: "/Men" },
  { Name: "Women", href: "/Women" },
  { Name: "Teens", href: "/Teens" },
];

function Navbar() {
  let pathName = usePathname();
  return (
    <header className="border-b h-[90px]">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl h-full">
        <Link href={"/"}>
          <h1 className="font-bold">
            <span className="italic text-2xl md:text-4xl text-slate-900">IB</span>
            <span className="text-primary text-xs lg:text-2xl">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  href={link.href}
                  className="
                    text-lg
                    font-semibold text-primary
                    "
                >
                  {link.Name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.Name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
            <Button variant={"outline"} className="flex flex-col gap-y-1.5 w-12 md:h-20 md:w-24 rounded-none">
                <ShoppingBag/>
                <span className="hidden text-xs font-semibold text-gray-600 sm:block">Cart</span>
            </Button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
