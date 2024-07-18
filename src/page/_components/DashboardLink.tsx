'use client';
import { Link } from 'react-router-dom';
// import { usePathname } from 'next/navigation';

function DashboardLink({
  title,
  children,
  href,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={`flex w-full items-center transition-all hover:bg-zinc-950/5 gap-3 px-4 py-2.5 text-left text-base/6 font-medium text-zinc-500 sm:py-2 sm:text-sm/5  ${
        // isActive ? 'text-zinc-950 border-r-2 border-zinc-950' :
        ''
      }`}>
      {children}
      <span className='truncate'>{title}</span>
    </Link>
  );
}

export default DashboardLink;
