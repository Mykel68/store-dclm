"use client";
import Link from "next/link";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import UserProfile from "@/components/userProfile";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };
  return (
    <div className="hidden border-r bg-[#1F2B4E] md:block ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center  px-4 lg:h-[60px] lg:px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <span className="text-white">DCLM Store</span>
          </Link>
        </div>
        <div className="flex-1 ">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/dashboard")
                  ? "bg-[#D4E8FA] text-slate-900"
                  : "hover:bg-[#D4E8FA]/20   text-white "
              }`}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/product"
              className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all ${
                isActive("/product")
                  ? "bg-[#D4E8FA] text-slate-900"
                  : "hover:bg-[#D4E8FA]/20 text-white"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="/project"
              className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all ${
                isActive("/project")
                  ? "bg-[#D4E8FA] text-slate-900"
                  : "hover:bg-[#D4E8FA]/20 text-white"
              }`}
            >
              <Package className="h-4 w-4" />
              Projects{" "}
            </Link>
            <Link
              href="/store"
              className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all ${
                isActive("/store")
                  ? "bg-[#D4E8FA] text-slate-900"
                  : "hover:bg-[#D4E8FA]/20 text-white"
              }`}
            >
              <Users className="h-4 w-4" />
              Store Requistions
            </Link>
            <Link
              href="/purchase"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                isActive("/purchase")
                  ? "bg-[#D4E8FA] text-slate-900"
                  : "hover:bg-[#D4E8FA]/20 text-white"
              }`}
            >
              <LineChart className="h-4 w-4" />
              Purchase Orders
            </Link>
            <Link
              href="/analytics"
              className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all ${
                isActive("/analytics")
                  ? "bg-[#D4E8FA] text-slate-900"
                  : "hover:bg-[#D4E8FA]/20 text-white"
              }`}
            >
              <LineChart className="h-4 w-4 " />
              Analytics
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 bg-transparent">
          <UserProfile username="John Doe" email="Xj9g2@example.com" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
