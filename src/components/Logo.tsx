import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center px-5 font-black h-16 gap-2.5 bg-purple-950">
            <span><IconBrandReact size={30} stroke={1} /></span>
            <span className="text-2xl">React</span>
        </Link>
    )
}