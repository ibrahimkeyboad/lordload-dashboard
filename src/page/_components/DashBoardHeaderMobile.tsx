import { Button } from '../../components/ui/button';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet';

import { Building, Menu, Ticket, User2, Users } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

import { LayoutDashboard, Settings } from 'lucide-react';
import DashboardLink from './DashboardLink';

function DashBoardHeader() {
  return (
    <header className='flex items-center py-2 justify-between px-4 lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline'>
            <Menu className='h-5 w-5' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>HildHome</SheetTitle>
          </SheetHeader>

          <div className='flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'>
            <div className='flex flex-col gap-0.5'>
              <DashboardLink href='/' title='Dashboard'>
                <LayoutDashboard />
              </DashboardLink>
              <DashboardLink href='/tenants' title='Tenants'>
                <Users className='size-6' />
              </DashboardLink>

              <DashboardLink href='/listings' title='Listings'>
                <Building className='h-6 w-6' />
              </DashboardLink>
            </div>
          </div>

          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='overflow-hidden rounded-full'>
            {/* <Image
          src='/placeholder-user.jpg'
          width={36}
          height={36}
          alt='Avatar'
          className='overflow-hidden rounded-full'
        /> */}
            <User2 className='h-5 w-5' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default DashBoardHeader;
