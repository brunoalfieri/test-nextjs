import { http, HttpResponse } from 'msw';

export const mockProducts = [
  http.get('*/api/products', () => {
    return HttpResponse.json(
      {
        message: 'Only example mock structure',
      },
      { status: 200 }
    );
  }),
];
