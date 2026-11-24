"use client";

import React, { useEffect, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Nav_links } from "@/constants";

// Phone-only navigation: a menu button that opens a dropdown panel under the navbar.
const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    // Close the menu if the viewport grows to desktop width while it is open.
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = () => mq.matches && setOpen(false);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return (
        <div className="md:hidden">
            <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
                className="flex items-center justify-center h-10 w-10 -mr-2 text-gray-200 hover:text-white"
            >
                {open ? <RxCross2 className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />}
            </button>

            {open && (
                <nav
                    id="mobile-menu"
                    className="absolute left-0 right-0 top-[65px] border-t border-b border-[#7042f861] bg-[#030014f2] backdrop-blur-md"
                >
                    <ul className="flex flex-col px-4 py-2">
                        {Nav_links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block py-3 text-base text-gray-200 hover:text-white"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MobileMenu;
