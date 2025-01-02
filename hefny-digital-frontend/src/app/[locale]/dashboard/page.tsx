import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Client Dashboard</h1>
          <Link href="/">
            <Button variant="outline">Logout</Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Project Updates" link="/dashboard/updates">
              View the latest updates on your website project.
            </DashboardCard>
            <DashboardCard title="Invoices" link="/dashboard/invoices">
              Access and pay your invoices.
            </DashboardCard>
            <DashboardCard
              title="Communication Log"
              link="/dashboard/communication"
            >
              Review our communication history.
            </DashboardCard>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>&copy; 2023 Hefny Digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function DashboardCard({
  title,
  children,
  link,
}: {
  title: string;
  children: React.ReactNode;
  link: string;
}) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{children}</p>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <Link
          href={link}
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
