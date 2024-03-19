'use client';

import { Form } from '@/components/common';
import { type AuthReq, authenticate } from './actions';
import useToastStore from '@/stores/toast-state';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function LoginPage() {
  const { open } = useToastStore();
  const locale = useLocale();

  const onSubmit = async (data: AuthReq) => {
    try {
      await authenticate(data);
    } catch (error) {
      open('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <section className='w-full flex flex-col justify-end items-center'>
      <Form className='flex flex-col gap-2' onSubmit={onSubmit}>
        <Form.ID label='단국대학교 포털 아이디' placeholder='32123456' />
        <Form.Password
          label='단국대학교 포털 비밀번호'
          placeholder='비밀번호'
        />
        <Form.Group className='mt-4'>
          <Form.Button type='submit' variant='bottom'>
            로그인
          </Form.Button>
          <Form.Button variant='transparent' animateOnClick>
            <Link
              href={`/${locale}/signup`}
              className='w-full h-full grid place-items-center'
            >
              회원가입
            </Link>
          </Form.Button>
        </Form.Group>
      </Form>
    </section>
  );
}