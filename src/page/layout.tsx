import DashBoardHeaderDesk from './_components/DashBoardHeaderDesk';
import DashBoardHeader from './_components/DashBoardHeaderMobile';

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950'>
      <DashBoardHeaderDesk />
      <DashBoardHeader />
      <main className='flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2'>
        <div className='grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10'>
          <div className='mx-auto max-w-6xl'>{children}</div>
        </div>
      </main>
    </section>
  );
}

export default DashBoardLayout;
