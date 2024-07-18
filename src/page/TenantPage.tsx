import { Button } from '../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { FilePenIcon, FilterIcon, SearchIcon, TrashIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Input } from '../components/ui/input';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

// Todo add tenant rent or

const tenants = [
  {
    id: 1,
    name: 'John Doe',
    phone_number: '123-456-7890',
    apartment_name: 'Sunset Villas',
    is_paid: true,
    apartment_contact: 'apartment.contact1@example.com',
    lease_start_date: '2023-01-01',
    lease_end_date: '2024-01-01',
    monthly_rent_amount: 1200,
    security_deposit_amount: 600,
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone_number: '234-567-8901',
    apartment_name: 'Oceanview Apartments',
    is_paid: false,
    apartment_contact: 'apartment.contact2@example.com',
    lease_start_date: '2023-03-01',
    lease_end_date: '2024-03-01',
    monthly_rent_amount: 1500,
    security_deposit_amount: 750,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    phone_number: '345-678-9012',
    apartment_name: 'Green Meadows',
    is_paid: true,
    apartment_contact: 'apartment.contact3@example.com',
    lease_start_date: '2023-05-01',
    lease_end_date: '2024-05-01',
    monthly_rent_amount: 1000,
    security_deposit_amount: 500,
  },
  {
    id: 4,
    name: 'Emily Davis',
    phone_number: '456-789-0123',
    apartment_name: 'Maple Heights',
    is_paid: false,
    apartment_contact: 'apartment.contact4@example.com',
    lease_start_date: '2023-07-01',
    lease_end_date: '2024-07-01',
    monthly_rent_amount: 1400,
    security_deposit_amount: 700,
  },
  {
    id: 5,
    name: 'David Wilson',
    phone_number: '567-890-1234',
    apartment_name: 'Pine Ridge',
    is_paid: true,
    apartment_contact: 'apartment.contact5@example.com',
    lease_start_date: '2023-09-01',
    lease_end_date: '2024-09-01',
    monthly_rent_amount: 1100,
    security_deposit_amount: 550,
  },
  {
    id: 6,
    name: 'Linda Martinez',
    phone_number: '678-901-2345',
    apartment_name: 'Cedar Point',
    is_paid: false,
    apartment_contact: 'apartment.contact6@example.com',
    lease_start_date: '2023-11-01',
    lease_end_date: '2024-11-01',
    monthly_rent_amount: 1300,
    security_deposit_amount: 650,
  },
  {
    id: 7,
    name: 'James Brown',
    phone_number: '789-012-3456',
    apartment_name: 'Riverbend Apartments',
    is_paid: true,
    apartment_contact: 'apartment.contact7@example.com',
    lease_start_date: '2023-02-01',
    lease_end_date: '2024-02-01',
    monthly_rent_amount: 1600,
    security_deposit_amount: 800,
  },
  {
    id: 8,
    name: 'Patricia Taylor',
    phone_number: '890-123-4567',
    apartment_name: 'Lakeview Estates',
    is_paid: false,
    apartment_contact: 'apartment.contact8@example.com',
    lease_start_date: '2023-04-01',
    lease_end_date: '2024-04-01',
    monthly_rent_amount: 1700,
    security_deposit_amount: 850,
  },
  {
    id: 9,
    name: 'Robert Miller',
    phone_number: '901-234-5678',
    apartment_name: 'Oakwood Residences',
    is_paid: true,
    apartment_contact: 'apartment.contact9@example.com',
    lease_start_date: '2023-06-01',
    lease_end_date: '2024-06-01',
    monthly_rent_amount: 1150,
    security_deposit_amount: 575,
  },
  {
    id: 10,
    name: 'Jennifer Harris',
    phone_number: '012-345-6789',
    apartment_name: 'Hillcrest Apartments',
    is_paid: false,
    apartment_contact: 'apartment.contact10@example.com',
    lease_start_date: '2023-08-01',
    lease_end_date: '2024-08-01',
    monthly_rent_amount: 1250,
    security_deposit_amount: 625,
  },
];

function TenantPage() {
  return (
    <>
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div className='max-sm:w-full sm:flex-1'>
          <h1 className='text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white'>
            Tenant Management
          </h1>
          <div className='mt-4 flex max-w-xl gap-4'>
            <div className='relative'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search tenant...'
                className='pl-8 w-full max-w-[200px] md:max-w-[300px]'
                // value={search}
                // onChange={handleSearch}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' className='flex items-center gap-2'>
                  <FilterIcon className='w-4 h-4' />
                  <span>Filters</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>Filters</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                // checked={filters.propertyType === 'all'}
                // onCheckedChange={() =>
                //   handleFilterChange('propertyType', 'all')
                // }
                >
                  All Property Types
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={filters.propertyType === 'Buy'}
                // onCheckedChange={() =>
                //   handleFilterChange('propertyType', 'Buy')
                // }
                >
                  Buy
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={filters.propertyType === 'Rent'}
                // onCheckedChange={() =>
                //   handleFilterChange('propertyType', 'Rent')
                // }
                >
                  Rent
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                // checked={filters.status === 'all'}
                // onCheckedChange={() => handleFilterChange('status', 'all')}
                >
                  All Statuses
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={filters.status === 'Pending'}
                // onCheckedChange={() =>
                //   handleFilterChange('status', 'Pending')
                // }
                >
                  Pending
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={filters.status === 'Approved'}
                // onCheckedChange={() =>
                //   handleFilterChange('status', 'Approved')
                // }
                >
                  Approved
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={filters.status === 'Declined'}
                // onCheckedChange={() =>
                //   handleFilterChange('status', 'Declined')
                // }
                >
                  Declined
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div>
              {/* todo: upate listing in each purpose */}

              <Select>
                <SelectTrigger id='purpose' aria-label='Purpose'>
                  <SelectValue placeholder='Purpose' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='sale'>Sale</SelectItem>
                  <SelectItem value='rent'>Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <Button variant='outline'>Edit</Button>
          <Button>Create Potion</Button>
        </div>
      </div>
      <Table className='mt-12 min-w-full'>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Apartment</TableHead>
            <TableHead>Rent Amount</TableHead>
            <TableHead>Lease Start</TableHead>
            <TableHead>Lease End</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.phone_number}</TableCell>
              <TableCell>{tenant.apartment_name}</TableCell>
              <TableCell>{tenant.monthly_rent_amount}</TableCell>
              <TableCell>{tenant.lease_start_date}</TableCell>
              <TableCell>{tenant.lease_end_date}</TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <Button variant='ghost' size='icon'>
                    <FilePenIcon className='w-5 h-5' />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className='hover:bg-destructive/15 hover:text-destructive'
                        variant='ghost'
                        size='icon'>
                        <TrashIcon className='w-5 h-5' />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Delete Tenant</DialogTitle>
                      </DialogHeader>
                      <Card className='border-none shadow-none'>
                        <CardContent>
                          <div className='grid gap-3'>
                            <Label htmlFor='reason'>Reason for Deletion</Label>
                            <Textarea
                              id='reason'
                              placeholder='Enter the reason for deleting the tenant'
                            />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant='destructive'>Delete Tenant</Button>
                        </CardFooter>
                      </Card>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default TenantPage;
