import { Building, LayoutDashboard, Settings, Users } from 'lucide-react';
import DashboardLink from './DashboardLink';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import { User2 } from 'lucide-react';

function DashBoardHeaderDesk() {
  return (
    <div className='fixed inset-y-0 left-0 w-64 max-lg:hidden'>
      <nav className='flex h-full min-h-0 flex-col'>
        <h3 className=' px-4 py-2.5 truncate text-left text-lg/8 font-semibold text-primary'>
          HildHome
        </h3>

        <div className='flex flex-1 flex-col overflow-y-auto py-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'>
          <div data-slot='section' className='flex flex-col gap-0.5'>
            <DashboardLink href='/' title='Dashboard'>
              <LayoutDashboard />
            </DashboardLink>
            <DashboardLink href='/tenants' title='Tenants'>
              <Users className='size-6' />
            </DashboardLink>

            <DashboardLink href='/listings' title='Listings'>
              <Building className='h-6 w-6' />
            </DashboardLink>

            <DashboardLink href='/settings' title='Settings'>
              <Settings />
            </DashboardLink>
          </div>
          {/* <div className='flex flex-col gap-0.5'>
            <DashboardLink href='/settings' title='Settings'>
              <QuestionMarkCircleIcon className='h-6 w-6' />
            </DashboardLink>
            <DashboardLink href='/settings' title='Settings'>
              <QuestionMarkCircleIcon className='h-6 w-6' />
            </DashboardLink>
          </div> */}
        </div>
        <div className='max-lg:hidden flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='flex gap-3 items-center cursor-pointer  '>
                {/* <Image
          src='/placeholder-user.jpg'
          width={36}
          height={36}
          alt='Avatar'
          className='overflow-hidden rounded-full'
        /> */}
                <User2 className='h-5 w-5' />
                <div className='flex text-sm/6 flex-col'>
                  <h3>Zanury Doe</h3>
                  <p>zanurydoe@gmail.com</p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='min-w-64' align='end'>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}

export default DashBoardHeaderDesk;
