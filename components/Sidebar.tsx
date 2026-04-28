import Link from "next/link";

const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Catalog", href: "/catalog" },
    { name: "Orders", href: "/orders" },
    { name: "Suppliers", href: "/suppliers" },
    { name: "Listings", href: "/listings" },
    { name: "Creative Studio", href: "/creative-studio" },
    { name: "Ads", href: "/ads" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-50 text-black flex flex-col p-4 border-r border-gray-200">
            <h2 className="text-xl font-bold mb-6">Platform</h2>
            <nav className="flex flex-col gap-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="px-4 py-2 rounded hover:bg-gray-50 transition text-black"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}