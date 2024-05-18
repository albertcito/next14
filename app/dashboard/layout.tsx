import SideNav from '@/app/ui/dashboard/sidenav';
import { User } from '@/app/lib/definitions';
import { auth } from  '../../auth';
export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await auth() as unknown as User;
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav user={user} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}