import { Button } from '../components/ui/button';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { EllipsisVertical } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { cn } from '../lib/utils';
import { Separator } from '../components/ui/separator';

const metrics = [
  {
    title: 'Total revenue',
    value: '$2.6M',
    change: '+4.5%',
    changeType: 'positive',
    changeText: 'from last week',
  },
  {
    title: 'Average Bookings value',
    value: '$455',
    change: '-0.5%',
    changeType: 'negative',
    changeText: 'from last week',
  },
  {
    title: 'Total Tenants',
    value: '888',
    change: '+4.5%',
    changeType: 'positive',
    changeText: 'from last week',
  },
  {
    title: 'Buildings',
    value: '82',
    change: '+21.2%',
    changeType: 'positive',
    changeText: 'from last week',
  },
  {
    title: 'Total Properties',
    value: '823',
    change: '+21.2%',
    changeType: 'positive',
    changeText: 'from last week',
  },
];

const listings = [
  {
    id: 1,
    building_name: 'Sunset Villas',
    price: 2500000,
    location: '123 Sunset Blvd, Los Angeles, CA',
    number_of_floors: 10,
    details: {
      year_built: 2005,
      total_units: 100,
      amenities: ['Pool', 'Gym', 'Parking Garage', 'Rooftop Terrace'],
      owner_contact: 'owner.sunsetvillas@example.com',
    },
  },
  {
    id: 2,
    building_name: 'Oceanview Apartments',
    price: 3500000,
    location: '456 Ocean Ave, Miami, FL',
    number_of_floors: 15,
    details: {
      year_built: 2010,
      total_units: 150,
      amenities: ['Beach Access', 'Fitness Center', 'Valet Parking', 'Spa'],
      owner_contact: 'owner.oceanview@example.com',
    },
  },
  {
    id: 3,
    building_name: 'Green Meadows',
    price: 1800000,
    location: '789 Green St, Portland, OR',
    number_of_floors: 8,
    details: {
      year_built: 2000,
      total_units: 80,
      amenities: ['Garden', 'Playground', 'Community Hall', 'BBQ Area'],
      owner_contact: 'owner.greenmeadows@example.com',
    },
  },
  {
    id: 4,
    building_name: 'Maple Heights',
    price: 2200000,
    location: '101 Maple Dr, Denver, CO',
    number_of_floors: 12,
    details: {
      year_built: 2008,
      total_units: 120,
      amenities: ['Gym', 'Library', 'Parking Garage', 'Concierge Service'],
      owner_contact: 'owner.mapleheights@example.com',
    },
  },
  {
    id: 5,
    building_name: 'Pine Ridge',
    price: 2750000,
    location: '202 Pine St, Seattle, WA',
    number_of_floors: 14,
    details: {
      year_built: 2012,
      total_units: 140,
      amenities: [
        'Rooftop Garden',
        'Fitness Center',
        'Pet Spa',
        'Business Center',
      ],
      owner_contact: 'owner.pineridge@example.com',
    },
  },
  {
    id: 6,
    building_name: 'Cedar Point',
    price: 2100000,
    location: '303 Cedar Ln, Austin, TX',
    number_of_floors: 9,
    details: {
      year_built: 2007,
      total_units: 90,
      amenities: ['Swimming Pool', 'Game Room', 'Parking Lot', 'Security'],
      owner_contact: 'owner.cedarpoint@example.com',
    },
  },
  {
    id: 7,
    building_name: 'Riverbend Apartments',
    price: 3200000,
    location: '404 River Rd, Chicago, IL',
    number_of_floors: 16,
    details: {
      year_built: 2015,
      total_units: 160,
      amenities: [
        'River View',
        'Fitness Center',
        'Laundry Service',
        'Conference Room',
      ],
      owner_contact: 'owner.riverbend@example.com',
    },
  },
  {
    id: 8,
    building_name: 'Lakeview Estates',
    price: 3000000,
    location: '505 Lakeview Dr, Orlando, FL',
    number_of_floors: 13,
    details: {
      year_built: 2011,
      total_units: 130,
      amenities: ['Lake Access', 'Gym', 'Covered Parking', 'Play Area'],
      owner_contact: 'owner.lakeviewestates@example.com',
    },
  },
  {
    id: 9,
    building_name: 'Oakwood Residences',
    price: 2400000,
    location: '606 Oakwood Ave, San Francisco, CA',
    number_of_floors: 11,
    details: {
      year_built: 2009,
      total_units: 110,
      amenities: ['Library', 'Fitness Center', 'Garage', 'Rooftop Lounge'],
      owner_contact: 'owner.oakwood@example.com',
    },
  },
  {
    id: 10,
    building_name: 'Hillcrest Apartments',
    price: 2600000,
    location: '707 Hillcrest Blvd, Atlanta, GA',
    number_of_floors: 10,
    details: {
      year_built: 2013,
      total_units: 100,
      amenities: ['Pool', 'Fitness Center', 'Tennis Court', 'Community Hall'],
      owner_contact: 'owner.hillcrest@example.com',
    },
  },
];

export default function ListingPage() {
  return (
    <>
      <div className='flex flex-wrap items-end justify-between gap-4'>
        <div className='max-sm:w-full sm:flex-1'>
          <h1 className='text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white'>
            Apartment Buildings
          </h1>
          <div className='mt-4 flex max-w-xl gap-4'>
            <div className='flex-1'>
              <Input type='search' placeholder='search apartment...' />
            </div>
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

      <ul>
        {/* Todo: handler sales and rents listing and  */}
        {listings.map((listing, i) => (
          <li key={listing.id}>
            <Separator
              role='presentation'
              className='w-full border-zinc-950/10 dark:border-white/10'
            />
            <div className='flex items-center justify-between'>
              <div className='flex gap-6 py-6'>
                <div className='w-32 shrink-0'>
                  <Link to=''>
                    <img
                      className='aspect-[3/2] rounded-lg shadow'
                      src='/hosting/listings/bear-hug.jpg'
                      alt=''
                    />
                  </Link>
                </div>
                <div className='space-y-1.5'>
                  <h3 className='text-base/6 font-semibold'>
                    <Link data-headlessui-state='' to='/listings/1000'>
                      {listing.building_name}
                    </Link>
                  </h3>
                  <p className='text-xs/6 text-zinc-500'>{listing.location}</p>
                  <p className='text-xs/6 text-zinc-600'>
                    {listing.details.total_units} total unit
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size='icon' variant='ghost'>
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuItem>View</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
