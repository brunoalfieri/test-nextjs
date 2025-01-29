import { server } from './setupServer';

if (process.env.API_MOCKING === 'true') {
  if (typeof window === 'undefined') {
    server.listen();
  } else {
    const { worker } = await import('@/mock/setupWorker');
    worker.start();
  }
}
