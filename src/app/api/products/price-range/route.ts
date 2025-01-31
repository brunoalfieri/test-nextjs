import { NextResponse } from 'next/server';
import { productsPriceRange } from './priceRange';

const GET = async () => {
  return NextResponse.json(await productsPriceRange());
};

export { GET };
