import { http, HttpResponse } from 'msw';

export const mockProductsCategory = [
  http.get('*/api/categories', () => {
    return HttpResponse.json(
      {
        message: 'Only example mock structure',
      },
      { status: 200 }
    );
  }),
];
