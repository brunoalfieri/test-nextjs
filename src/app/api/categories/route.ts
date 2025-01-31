import { NextResponse } from 'next/server';
import { categoriesList } from './list';

const GET = async () => {
  return NextResponse.json(await categoriesList());
};

export { GET };
