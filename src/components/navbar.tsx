"use client"

import { Button } from "./ui/button";
import items from '../lib/navbarItems';
import {  usePathname } from "next/navigation";
import Link from "next/link";


function Navbar() {
    // getting page url
const activeUrl = usePathname()

    return (
        <nav className="hidden md:block my-5">
            <ul className="flex space-x-4 justify-center">
                {items.map((item) => (
                    <li key={item.title}>
                        <Button asChild variant={"link"} >
                            <Link href={item.url} className={activeUrl === item.url ? "underline" : ""}>{item.title}</Link>
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;