import { FiCalendar } from 'react-icons/fi';
import TicketIcon from '@/public/images/ticket.svg';
import { getLocale } from 'next-intl/server';
import Link from '@/components/common/link';

export default async function TicketTile({ id }: { id: number }) {
  const locale = await getLocale();
  return (
    <div className='relative w-[327px] h-[161px] flex flex-col justify-between items-start'>
      <div className='w-full flex flex-col gap-2 mx-5 mt-5'>
        <h4 className='font-bold text-base'>
          단국대학교 2024 단페스타 1일차 티켓
        </h4>
        <div className='flex items-center gap-2'>
          <FiCalendar color='#929497' />
          <span className='text-[#929497] text-sm'>
            {new Date('2024-04-01').toLocaleDateString()}
          </span>
          <span className='text-[#929497] text-sm'>~</span>
          <span className='text-[#929497] text-sm'>
            {new Date('2024-04-03').toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className='w-full'>
        <Link
          href={`/${locale}/my-tickets/${id}`}
          className='text-primary py-4 px-5 w-full text-center rounded-b-xl'
          auth
        >
          티켓 보기
        </Link>
      </div>

      <div className='absolute top-0 right-1/2 translate-x-1/2 -z-10'>
        <TicketIcon />
      </div>
    </div>
  );
}
