"use client";

import { ReactNode } from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { Home, FileText, Bell, LogOut } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const handleLogout = () => {
    // Here you would typically clear any authentication tokens or user data
    // For now, we'll just redirect to the home page
    router.push("/login ");
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Hefny Digital</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-8">
        <aside className="w-full sm:w-64 space-y-2">
          <Link href="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/contracts">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" /> Contracts
            </Button>
          </Link>
          <Link href="/dashboard/invoices">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" /> Invoices
            </Button>
          </Link>
          <Link href="/dashboard/updates">
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" /> Updates
            </Button>
          </Link>
        </aside>
        <main className="flex-1 bg-white rounded-lg shadow p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
