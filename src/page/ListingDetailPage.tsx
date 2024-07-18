import { Button } from '../components/ui/button';

import { Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { cn } from '../lib/utils';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { FilterIcon, SearchIcon } from 'lucide-react';
import { useMemo, useState } from 'react';

const metrics = [
  {
    title: 'Total revenue',
    value: '$2.6M',
    change: '+4.5%',
    changeType: 'positive',
    changeText: 'from last week',
  },
  // {
  //   title: 'Average Bookings value',
  //   value: '$455',
  //   change: '-0.5%',
  //   changeType: 'negative',
  //   changeText: 'from last week',
  // },
  {
    title: 'Total Tenants',
    value: '888',
    change: '+4.5%',
    changeType: 'positive',
    changeText: 'from last week',
  },
  {
    title: 'Buildings',
    value: '20',
    change: '+21.2%',
    changeType: 'positive',
    changeText: 'from last week',
  },

  {
    title: 'Total Properties',
    value: '200',
    change: '+21.2%',
    changeType: 'positive',
    changeText: 'from last week',
  },
];

const listings = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    name: 'Sunset Apartments',
    location: '123 Main St, Springfield',
    rooms: 3,
    baths: 2,
    tenant: {
      name: 'John Doe',
      phone: '555-1234',
      years_stayed: 2,
    },
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Maple Grove Apartments',
    location: '456 Maple Ave, Springfield',
    rooms: 2,
    baths: 1,
    tenant: {
      name: 'Jane Smith',
      phone: '555-5678',
      years_stayed: 1,
    },
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    name: 'Pineview Residences',
    location: '789 Pine St, Springfield',
    rooms: 4,
    baths: 3,
    tenant: {
      name: 'Alice Johnson',
      phone: '555-8765',
      years_stayed: 3,
    },
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    name: 'Oakwood Villas',
    location: '101 Oak St, Springfield',
    rooms: 3,
    baths: 2,
    tenant: {
      name: 'Bob Brown',
      phone: '555-2345',
      years_stayed: 4,
    },
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    name: 'Lakeside Apartments',
    location: '202 Lake Dr, Springfield',
    rooms: 2,
    baths: 1,
    tenant: {
      name: 'Carol White',
      phone: '555-6789',
      years_stayed: 2,
    },
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    name: 'Hilltop Homes',
    location: '303 Hilltop Blvd, Springfield',
    rooms: 3,
    baths: 2,
    tenant: {
      name: 'David Clark',
      phone: '555-3456',
      years_stayed: 5,
    },
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    name: 'Riverside Apartments',
    location: '404 River Rd, Springfield',
    rooms: 2,
    baths: 1,
    tenant: {
      name: 'Eva Green',
      phone: '555-7890',
      years_stayed: 3,
    },
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    name: 'Parkview Apartments',
    location: '505 Park St, Springfield',
    rooms: 3,
    baths: 2,
    tenant: {
      name: 'Frank Hill',
      phone: '555-4567',
      years_stayed: 4,
    },
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/150',
    name: 'Cedar Ridge Apartments',
    location: '606 Cedar Rd, Springfield',
    rooms: 2,
    baths: 1,
    tenant: {
      name: 'Grace Lee',
      phone: '555-8901',
      years_stayed: 1,
    },
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/150',
    name: 'Willow Creek Apartments',
    location: '707 Willow Dr, Springfield',
    rooms: 3,
    baths: 2,
    tenant: {
      name: 'Henry Martin',
      phone: '555-5679',
      years_stayed: 2,
    },
  },
];

export default function ListingDeatilPage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    propertyType: 'all',
    status: 'all',
  });

  // const filteredBookings = useMemo(() => {
  //   return listings.filter((booking) => {
  //     if (
  //       filters.propertyType !== 'all' &&
  //       booking.propertyType !== filters.propertyType
  //     ) {
  //       return false;
  //     }
  //     if (
  //       filters.status !== 'all' &&
  //       booking.status.toLowerCase() !== filters.status.toLowerCase()
  //     ) {
  //       return false;
  //     }
  //     return booking.name.toLowerCase().includes(search.toLowerCase());
  //   });
  // }, [filters, search]);
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  return (
    <>
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div className='max-sm:w-full sm:flex-1'>
          <h1 className='text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white'>
            Apartment Buildings
          </h1>
          <div className='flex mt-4 items-center gap-4'>
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
                  checked={filters.propertyType === 'all'}
                  onCheckedChange={() =>
                    handleFilterChange('propertyType', 'all')
                  }>
                  All Property Types
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.propertyType === 'Buy'}
                  onCheckedChange={() =>
                    handleFilterChange('propertyType', 'Buy')
                  }>
                  Buy
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.propertyType === 'Rent'}
                  onCheckedChange={() =>
                    handleFilterChange('propertyType', 'Rent')
                  }>
                  Rent
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={filters.status === 'all'}
                  onCheckedChange={() => handleFilterChange('status', 'all')}>
                  All Statuses
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status === 'Pending'}
                  onCheckedChange={() =>
                    handleFilterChange('status', 'Pending')
                  }>
                  Pending
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status === 'Approved'}
                  onCheckedChange={() =>
                    handleFilterChange('status', 'Approved')
                  }>
                  Approved
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filters.status === 'Declined'}
                  onCheckedChange={() =>
                    handleFilterChange('status', 'Declined')
                  }>
                  Declined
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className='relative'>
              <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search apartment...'
                className='pl-8 w-full max-w-[200px] md:max-w-[300px]'
                value={search}
                // onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <Button>Create</Button>
      </div>

      <div className='mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4'>
        {metrics.map((metric, index) => (
          <div key={index}>
            <hr
              role='presentation'
              className='w-full border-t border-zinc-950/10 dark:border-white/10'
            />
            <div className='mt-6 text-lg font-medium sm:text-sm'>
              {metric.title}
            </div>
            <div className='mt-3 text-3xl font-semibold sm:text-2xl'>
              {metric.value}
            </div>
            <div className='mt-3 text-sm/6 sm:text-xs/6'>
              <span
                className={cn(
                  'inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15',
                  metric.changeType === 'positive'
                    ? 'bg-lime-400/20 text-lime-700 dark:bg-lime-400/10 dark:text-lime-300'
                    : 'bg-pink-400/15 text-pink-700 dark:bg-pink-400/10 dark:text-pink-400'
                )}>
                {metric.change}
              </span>
              <span className='text-zinc-500'> {metric.changeText}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className='mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white'>
        Listings
      </h2>

      <div className='flow-root'>
        <div className='mt-4 -mx-6 lg:-mx-10 overflow-x-auto whitespace-nowrap'>
          <div className='inline-block min-w-full align-middle sm:px-6'>
            <table className='min-w-full text-left text-sm text-zinc-950 dark:text-white'>
              <thead className='text-zinc-500 dark:text-zinc-400'>
                <tr>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Apartment photo
                  </th>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    apartment details
                  </th>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Tenant detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr
                    key={listing.id}
                    className='hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]'>
                    <td className='relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <div className='w-32 shrink-0'>
                        <Link to=''>
                          <img
                            className='aspect-[3/2] rounded-lg shadow'
                            src='/hosting/listings/bear-hug.jpg'
                            alt=''
                          />
                        </Link>
                      </div>
                    </td>
                    <td className='relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <div className='flex gap-6 py-6'>
                        <div className='space-y-1.5'>
                          <h3 className='text-base/6 font-semibold'>
                            <Link data-headlessui-state='' to='/listings/1000'>
                              {listing.name}
                            </Link>
                          </h3>
                          <p className='text-xs/6 text-zinc-500'>
                            {listing.location}
                          </p>
                          <p className='text-xs/6 text-zinc-600'>
                            rooms: {listing.rooms} baths: {listing.baths}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <div className='space-y-1.5'>
                        <h3 className='text-base/6 font-semibold'>
                          <Link data-headlessui-state='' to='/listings/1000'>
                            {listing.tenant.name}
                          </Link>
                        </h3>
                        <p className='text-xs/6 text-zinc-500'>
                          phone: {listing.tenant.phone}
                        </p>
                        <p className='text-xs/6 text-zinc-600'>
                          {listing.tenant.years_stayed} years
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
