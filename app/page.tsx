import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaHome } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav
          navItems={[
            {
              name: 'Home',
              link: '/',
              icon: <FaHome className='w-5 h-5' />,
            },
          ]}
        />
        <Hero />
      </div>
    </main>
  );
}
