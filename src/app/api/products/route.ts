import { NextRequest, NextResponse } from 'next/server';
import { productCreate } from './create';
import { productsTable } from './table';

const GET = async (request: NextRequest) => {
  const search = request.nextUrl.searchParams.get('search') || '';
  const page = parseInt(request.nextUrl.searchParams.get('page') || '0', 10);
  const minPrice = request.nextUrl.searchParams.get('minPrice');
  const maxPrice = request.nextUrl.searchParams.get('maxPrice');
  const orderBy = request.nextUrl.searchParams.get('orderBy');
  const sortBy = request.nextUrl.searchParams.get('sortBy');
  const pageSize = parseInt(
    request.nextUrl.searchParams.get('pageSize') || '10',
    10
  );
  return NextResponse.json(
    await productsTable({
      search,
      page,
      minPrice,
      maxPrice,
      orderBy,
      sortBy,
      pageSize,
    })
  );
};

const POST = async (request: NextRequest) => {
  const body = await request.json();
  return NextResponse.json(await productCreate({ body }));
};

export { GET, POST };
