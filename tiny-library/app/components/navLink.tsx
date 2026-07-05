import Link from "next/link"
import type { NavLinkProps } from "@/app/types/index"

export default function NavLink({ children, href, isActive }:NavLinkProps)  {
    return <li className="text-sm">
        <Link className={`px-3 hover:text-orange-400 ${isActive ? "text-orange-400" : "text-gray-700"}`} href={href}>
        {children}
        </Link>

    </li>
}