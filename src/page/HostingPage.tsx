import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

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

const bookings = [
  {
    id: 1000,
    bookingDate: 'May 9, 2024',
    customer: 'Leslie Alexander',
    buildingName: 'Sunset Apartments',
    buildingImg: '/buildings/sunset-apartments-thumb.jpg',
    amount: 'US$800.00',
  },
  {
    id: 1001,
    bookingDate: 'May 5, 2024',
    customer: 'Michael Foster',
    buildingName: 'Oceanview Condos',
    buildingImg: '/buildings/oceanview-condos-thumb.jpg',
    amount: 'US$1200.00',
  },
  {
    id: 1002,
    bookingDate: 'Apr 28, 2024',
    customer: 'Dries Vincent',
    buildingName: 'Mountain Ridge Villas',
    buildingImg: '/buildings/mountain-ridge-villas-thumb.jpg',
    amount: 'US$950.00',
  },
  {
    id: 1003,
    bookingDate: 'Apr 23, 2024',
    customer: 'Lindsay Walton',
    buildingName: 'City Center Lofts',
    buildingImg: '/buildings/city-center-lofts-thumb.jpg',
    amount: 'US$700.00',
  },
  {
    id: 1004,
    bookingDate: 'Apr 18, 2024',
    customer: 'Courtney Henry',
    buildingName: 'Greenwood Apartments',
    buildingImg: '/buildings/greenwood-apartments-thumb.jpg',
    amount: 'US$850.00',
  },
  {
    id: 1005,
    bookingDate: 'Apr 14, 2024',
    customer: 'Tom Cook',
    buildingName: 'Skyline Towers',
    buildingImg: '/buildings/skyline-towers-thumb.jpg',
    amount: 'US$950.00',
  },
];

export default function HostingPage() {
  return (
    <>
      <h1 className='text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white'>
        Good afternoon, Zanury
      </h1>
      <div className='mt-8 flex items-end justify-between'>
        <h2 className='text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white'>
          Overview
        </h2>
        <div>
          <Select>
            <SelectTrigger id='category' aria-label='Select category'>
              <SelectValue placeholder='Select category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='last_week'>Last week</SelectItem>
              <SelectItem value='last_two'>Last two weeks</SelectItem>
              <SelectItem value='last_month'>Last month</SelectItem>
              <SelectItem value='last_quarter'>Last quarter</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
        Recent Booking
      </h2>
      <div className='flow-root'>
        <div className='mt-4 -mx-6 lg:-mx-10 overflow-x-auto whitespace-nowrap'>
          <div className='inline-block min-w-full align-middle sm:px-6'>
            <table className='min-w-full text-left text-sm text-zinc-950 dark:text-white'>
              <thead className='text-zinc-500 dark:text-zinc-400'>
                <tr>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Booking number
                  </th>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Purchase date
                  </th>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Customer
                  </th>
                  <th className='border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Apartment Building
                  </th>
                  <th className='text-right border-b border-zinc-950/10 px-4 py-2 font-medium first:pl-2 last:pr-2 dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1'>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className='hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]'>
                    <td className='relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <Link
                        href={`/bookings/${booking.id}`}
                        className='absolute inset-0 focus:outline-none'
                        tabIndex='0'
                        aria-label={`Order #${booking.id}`}></Link>
                      {booking.id}
                    </td>
                    <td className='text-zinc-500 relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <Link
                        href={`/bookings/${booking.id}`}
                        className='absolute inset-0 focus:outline-none'
                        tabIndex='-1'
                        aria-label={`Order #${booking.id}`}></Link>
                      {booking.bookingDate}
                    </td>
                    <td className='relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <Link
                        href={`/bookings/${booking.id}`}
                        className='absolute inset-0 focus:outline-none'
                        tabIndex='-1'
                        aria-label={`Order #${booking.id}`}></Link>
                      {booking.customer}
                    </td>
                    <td className='relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <Link
                        href={`/bookings/${booking.id}`}
                        className='absolute inset-0 focus:outline-none'
                        tabIndex='-1'
                        aria-label={`Order #${booking.id}`}></Link>
                      <div className='flex items-center gap-2'>
                        <span className='size-6 inline-grid shrink-0 align-middle rounded-full outline outline-1 -outline-offset-1 outline-black/[--ring-opacity] dark:outline-white/[--ring-opacity]'>
                          <img
                            className='size-full rounded-full'
                            src={booking.buildingImg}
                            alt=''
                          />
                        </span>
                        <span>{booking.buildingName}</span>
                      </div>
                    </td>
                    <td className='text-right relative px-4 first:pl-2 last:pr-2 border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1'>
                      <Link
                        href={`/bookings/${booking.id}`}
                        className='absolute inset-0 focus:outline-none'
                        tabIndex='-1'
                        aria-label={`Order #${booking.id}`}></Link>
                      {booking.amount}
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
