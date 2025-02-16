// export { auth as middleware } from '@/auth';

import { GetServerSidePropsContext } from 'next';

export async function middleware(req: GetServerSidePropsContext) {
    const { auth } = await import('@/auth');
    return auth(req);
  }
  